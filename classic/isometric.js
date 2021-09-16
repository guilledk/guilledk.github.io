import game from "/classic/state.js";
import { fetchObject, getNoiseRange } from "/classic/utils.js";
import { Component } from "/classic/ecs.js";
import { Drawable } from "/classic/transforms.js";
import { 
    isoToCartesian4, isoToCartesian3,
    cartesianToIso3
} from "/classic/utils.js";

import { Animator } from "/classic/animator.js";

import { mat4, vec2, vec3 } from "/lib/gl-matrix/index.js";


function isoDistanceToCam(pos) {
    const camPos = vec3.clone(game.camera.position);
    vec3.add(
        camPos,
        camPos,
        [game.camera.size[0] / 2, 0, 0]);
    vec3.transformMat3(camPos, camPos, cartesianToIso3);
    return vec3.distance(camPos, pos);
}


class Tilemap extends Drawable {
    constructor(
        entity,
        position, scale,
        sizeX, sizeY,
        tileSet, tilePixelSize, maxTile, data
    ) {
        super(entity, position, scale);
        this.sizeX = sizeX;
        this.sizeY = sizeY;

        this.mapSize = [sizeX, sizeY];

        this.tileSet = this.game.getTexture(tileSet);
        this.tilePixelSize = tilePixelSize;
        this.tileSetSize = [
            this.tileSet.image.width / tilePixelSize[0],
            this.tileSet.image.height / tilePixelSize[1]
        ];

        this.tileSetPixelSize = [
            this.tileSetSize[0] * this.tilePixelSize[0],
            this.tileSetSize[1] * this.tilePixelSize[1]
        ];

        this.maxTile = maxTile;

        if (data == null) {
            this.data = Array(sizeX * sizeY);
            for (let y = 0; y < this.sizeY; y++)
                for (let x = 0; x < this.sizeX; x++)
                    this.data[x + (sizeX * y)] = 0;
        } else
            this.data = data;
        
        this.mapDataTexture = null;
    }

    async loadMap(url) {
        const data = await fetchObject(url);
        this.data = data;
        this.uploadToGPU();
    }

    dump() {
        const minObj = super.dump();
        minObj.sizeX = this.sizeX;
        minObj.sizeY = this.sizeY;
        minObj.tileSet = this.tileSet.name;
        minObj.tilePixelSize = this.tilePixelSize;
        minObj.maxTile = this.maxTile;
        minObj.data = this.data;
        return minObj;
    }

    generateNoiseMap() {
        for (let y = 0; y < this.sizeY; y++)
            for (let x = 0; x < this.sizeX; x++)
                this.data[x + (this.sizeX * y)] = Math.floor(
                    getNoiseRange(x, y, 0, this.maxTile));
    }

    getSelection() {
        var begin = vec2.fromValues(
            this.game.selectionBegin[0] / this.game.camera.scale[0],
            this.game.selectionBegin[1] / this.game.camera.scale[1]);
        var end = vec2.fromValues(
            this.game.selectionEnd[0] / this.game.camera.scale[0],
            this.game.selectionEnd[1] / this.game.camera.scale[1]);

        var from = vec2.create();
        var to = vec2.create();
        vec2.min(from, begin, end);
        vec2.max(to, begin, end);
        vec2.floor(from, from);
        vec2.ceil(to, to);
        return [from, to];
    }

    fillRegion(from, to, value) {
        const [fromX, fromY] = from;
        const [toX, toY] = to;

        for (let y = fromY; y < toY; y++)
            for (let x = fromX; x < toX; x++)
                this.data[x + (this.sizeX * y)] = value;
    }

    uploadToGPU() {
        if (this.mapDataTexture != null)
            this.gl.deleteTexture(this.mapDataTexture);

        var pixelData = new Uint8Array(this.sizeX * this.sizeY * 4);
        for (let i = 0; i < (this.sizeX * this.sizeY * 4); i += 4) {
            const val = this.data[Math.floor(i / 4)];
            pixelData[i]     = val; 
            pixelData[i + 1] = val;
            pixelData[i + 2] = val;
            pixelData[i + 3] = 255;
        }

        this.mapDataTexture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.mapDataTexture);
        this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.gl.RGBA,
            this.sizeX, this.sizeY, 0,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            pixelData);
        
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    }

    rawDraw() {
        // Verts
        this.game.buffers.quad.verts.bind();
        this.gl.vertexAttribPointer(
            this.game.shaders.isoTilemap.attr.vertexPos,
            3,         // num of values to pull from array per iteration
            this.gl.FLOAT,  // type
            false,     // normalize,
            0,         // stride
            0);        // start offset
        this.gl.enableVertexAttribArray(
            this.game.shaders.isoTilemap.attr.vertexPos);

        // UVs
        this.game.buffers.quad.uvs.bind();
        this.gl.vertexAttribPointer(
            this.game.shaders.isoTilemap.attr.mapCoord,
            2,         // num of values to pull from array per iteration
            this.gl.FLOAT,  // type
            false,     // normalize,
            0,         // stride
            0);        // start offset
        this.gl.enableVertexAttribArray(this.game.shaders.isoTilemap.attr.mapCoord);
        
        // Indices
        this.game.buffers.quad.indices.bind();

        this.game.shaders.isoTilemap.bind();

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.mapDataTexture);

        this.tileSet.bind(this.gl.TEXTURE1);

        this.gl.uniform1i(this.game.shaders.isoTilemap.unif.mapData, 0);
        this.gl.uniform1i(this.game.shaders.isoTilemap.unif.tileSet, 1);

        this.gl.uniformMatrix4fv(
            this.game.shaders.isoTilemap.unif.projectionMatrix,
            false,
            this.game.projectionMatrix);
        this.gl.uniformMatrix4fv(
            this.game.shaders.isoTilemap.unif.cameraMatrix,
            false,
            this.game.camera.matrix());
        this.gl.uniformMatrix4fv(
            this.game.shaders.isoTilemap.unif.modelMatrix,
            false,
            this.modelMatrix());
        this.gl.uniformMatrix4fv(
            this.game.shaders.isoTilemap.unif.isoMatrix,
            false,
            isoToCartesian4);

        this.gl.uniform2fv(
            this.game.shaders.isoTilemap.unif.tileSetSize, this.tileSetSize);
        this.gl.uniform2fv(
            this.game.shaders.isoTilemap.unif.tilePixelSize, this.tilePixelSize);

        this.gl.uniform2fv(
            this.game.shaders.isoTilemap.unif.mapSize, this.mapSize);

        this.gl.uniform2fv(
            this.game.shaders.isoTilemap.unif.selectedTile,
            [this.game.mouseIsoPos[0] / this.game.camera.scale[0],
            this.game.mouseIsoPos[1] / this.game.camera.scale[1]]);

        this.gl.uniform2fv(
            this.game.shaders.isoTilemap.unif.selectionBegin,
            [this.game.selectionBegin[0] / this.game.camera.scale[0],
            this.game.selectionBegin[1] / this.game.camera.scale[1]]);
    
        this.gl.uniform1i(this.game.shaders.isoTilemap.unif.selectionMode, this.game.selectionMode);
        this.gl.uniform4fv(this.game.shaders.isoTilemap.unif.selectionColor, this.game.selectionColor);

        this.gl.drawElements(
            this.gl.TRIANGLES,
            6,                  // vertex count
            this.gl.UNSIGNED_SHORT,  // type
            0);
    }
};


class IsometricNavMesh extends Tilemap {
    constructor(
        entity, map, sizeX, sizeY, data) {
        map = entity.game.getEntity(map).getComponent(Tilemap);
        super(
            entity,
            map.position, map.scale,
            sizeX, sizeY,
            "navTileset",
            [8, 8], 2, data 
        );

        if (data == null) {
            this.data = Array(sizeX * sizeY);
            for (let y = 0; y < this.sizeY; y++)
                for (let x = 0; x < this.sizeX; x++)
                    this.data[x + (sizeX * y)] = 1;
        }

        this.map = map;

        this._msgId = 0;
        this._resolves = {};
        this._rejects = {};
        this._worker = new Worker("/classic/pathfinder.js");
        this._worker.onmessage = this.pathfinderMessageHandler.bind(this);
    }

    async init() {
        console.assert(
            await this.sendMsg(
                "initmap",
                { 
                    name: this.entity.name,
                    size: [this.sizeX, this.sizeY],
                    data: this.data
                }) == "ok",
            "Isometric Nav Mesh initialization error");
    }

    updateMap(corner, size, data) {
        return this.sendMsg(
            "updatemap",
            {
                name: this.entity.name,
                corner: corner,
                size: size,
                data: data
            });
    }

    findPath(from, to) {
        return this.sendMsg(
            "findpath",
            {
                name: this.entity.name,
                from: from,
                to: to
            });
    }

    dump() {
        const minObj = {};
        minObj.type = this.constructor.name;
        minObj.map = this.map.name;
        minObj.sizeX = this.sizeX;
        minObj.sizeY = this.sizeY;
        minObj.data = this.data;
        return minObj;
    }

    sendMsg(op, args) {
        const msgId = this._msgId++;
        const msg = {
            op: op,
            args: args,
            id: msgId
        };

        const promiseMachinery = function (resolve, reject) {
            this._resolves[msgId] = resolve
            this._rejects[msgId] = reject
            this._worker.postMessage(msg)
        };

        return new Promise(promiseMachinery.bind(this));
    }

    pathfinderMessageHandler(msg) {

        const {id, data} = msg.data;
       
        if (data) {
            const resolve = this._resolves[id]
            if (resolve)
                resolve(data)
    
        } else {
            const reject = this._rejects[id]
            if (reject)
                reject()
        }
        
        // purge used callbacks
        delete this._resolves[id]
        delete this._rejects[id]
    }
    
};


class IsometricDrawable extends Drawable {
    constructor(
        entity, position, scale, tilemap
    ) {
        super(entity, position, scale);
        this.tilemap = this.game.getEntity(tilemap).getComponent(Tilemap);
        this.direction = 0;
    }

    modelMatrix() {
        let modelMatrix = mat4.create();
        let cartPos = vec3.clone(this.position);
        vec3.add(cartPos, cartPos, this.tilemap.position);
        vec3.transformMat3(cartPos, cartPos, isoToCartesian3);
        mat4.translate(
            modelMatrix, modelMatrix, cartPos);
        mat4.scale(
            modelMatrix, modelMatrix, this.scale);
        return modelMatrix;
    }

    order() {
        return this.tilemap.order() - isoDistanceToCam(this.position); 
    }
};

class IsoSprite extends IsometricDrawable {
    constructor(
        entity,
        position, scale,
        texture,
        tilemap,
        frame,
        tileSetSize,
        anchor
    ) {
        super(entity, position, scale, tilemap);
        this.texture = this.game.getTexture(texture);
        this.frame = frame;
        this.tileSetSize = tileSetSize;
        this.anchor = anchor;

        this.tilePixelSize = [
            this.texture.image.width / tileSetSize[0],
            this.texture.image.height / tileSetSize[1]
        ];
    }

    dump() {
        const minObj = super.dump();
        minObj.texture = this.texture.name;
        minObj.tilemap = this.tilemap.entity.name;
        minObj.ignoreCam = this.ignoreCam;
        minObj.frame = this.frame;
        minObj.tileSetSize = this.tileSetSize;
        minObj.anchor = this.anchor;
        return minObj;
    }

    modelMatrix() {
        var modelMatrix = super.modelMatrix();
        const texDimension = [
            this.texture.image.width, this.texture.image.height];
        const texAnchorDelta = [
            texDimension[0] * this.anchor[0] * this.scale[0],
            texDimension[1] * this.anchor[1] * this.scale[1]];
        
        var anchoredPos = vec3.fromValues(0, 0, 0);
        anchoredPos[0] -= texAnchorDelta[0];
        anchoredPos[1] -= texAnchorDelta[1];
        mat4.translate(
            modelMatrix, modelMatrix, anchoredPos);

        var sizeInPixels = vec3.clone(this.scale);
        sizeInPixels[0] *= texDimension[0];
        sizeInPixels[1] *= texDimension[1];
        mat4.scale(
            modelMatrix, modelMatrix, sizeInPixels);
        return modelMatrix;
    }

    rawDraw() {
        // Verts
        this.game.buffers.quad.verts.bind();
        this.gl.vertexAttribPointer(
            this.game.shaders.imageSheet.attr.vertexPos,
            3,         // num of values to pull from array per iteration
            this.gl.FLOAT,  // type
            false,     // normalize,
            0,         // stride
            0);        // start offset
        this.gl.enableVertexAttribArray(
            this.game.shaders.imageSheet.attr.vertexPos);

        // UVs
        this.game.buffers.quad.uvs.bind();
        this.gl.vertexAttribPointer(
            this.game.shaders.imageSheet.attr.texCoord,
            2,         // num of values to pull from array per iteration
            this.gl.FLOAT,  // type
            false,     // normalize,
            0,         // stride
            0);        // start offset
        this.gl.enableVertexAttribArray(this.game.shaders.imageSheet.attr.texCoord);
        
        // Indices
        this.game.buffers.quad.indices.bind();

        this.game.shaders.imageSheet.bind();

        this.texture.bind(this.gl.TEXTURE0);

        this.gl.uniform1i(this.game.shaders.imageSheet.unif.texSampler, 0);
        this.gl.uniformMatrix4fv(
            this.game.shaders.imageSheet.unif.projectionMatrix,
            false,
            this.game.projectionMatrix);
        this.gl.uniformMatrix4fv(
            this.game.shaders.imageSheet.unif.cameraMatrix,
            false,
            this.game.camera.matrix());
        this.gl.uniformMatrix4fv(
            this.game.shaders.imageSheet.unif.modelMatrix,
            false,
            this.modelMatrix());

        this.gl.uniform1f(
            this.game.shaders.imageSheet.unif.tileIdFlat,
            this.frame);
        this.gl.uniform2fv(
            this.game.shaders.imageSheet.unif.tileSetSize,
            this.tileSetSize);

        this.gl.drawElements(
            this.gl.TRIANGLES,
            6,                  // vertex count
            this.gl.UNSIGNED_SHORT,  // type
            0);                 // start offset
    }

};


const animDirs = [
    "walkSouth",
    "walkSouthEast",
    "walkEast",
    "walkNorthEast",
    "walkNorth",
    "walkNorthWest",
    "walkWest",
    "walkSouthWest"
];

let AgentStates = {
    idle: 0,
    followPath: 1
};

class IsoAgent extends IsoSprite {
    constructor(
        entity,
        position, scale,
        texture,
        tilemap,
        frame,
        tileSetSize,
        anchor
    ) {
        super(
            entity,
            position, scale,
            texture, tilemap,
            frame,
            tileSetSize,
            anchor);

        this.anim = entity.addComponent(Animator, this);
        this.idle();

        this.speed = 1.6; // tiles / second

        entity.registerCall("update", this.update.bind(this));
    }

    idle() {
        this._state = AgentStates.idle;
        this._path = [];
        this._start_index = 0;
        this._target_index = 1;
        this._delta = 0;
    }

    followPath(path) {
        this._path = path;
        this._state = AgentStates.followPath;
    }

    nextTarget() {
        this._start_index = this._target_index++;
    }

    update() {
        switch(this._state) {
            case AgentStates.idle :
                this.anim.stop();
                break;

            case AgentStates.followPath :

                this._delta += this.speed * this.game.deltaTime;
                if (this._delta >= 1) {
                    this._delta = 0;
                    this.nextTarget();

                    if (this._target_index == this._path.length) {
                        this.idle();
                        return;
                    }
                }

                
                let delta = vec2.create();
                vec2.sub(delta, this._path[this._target_index], this._path[this._start_index]);
                let radians = Math.atan2(...delta);
                
                this.direction = radians * (180 / Math.PI);
                let index = Math.floor(this.direction / 45);

                this.anim.play(this.game.animations[animDirs[index]], true); 

                vec3.lerp(
                    this.position,
                    [...this._path[this._start_index], this.position[2]],
                    [...this._path[this._target_index], this.position[2]],
                    this._delta
                );
                break;
        }
    }


};

export { Tilemap, IsometricNavMesh, IsoSprite, IsoAgent };

window.Tilemap = Tilemap;
window.IsometricNavMesh = IsometricNavMesh;
window.IsoSprite = IsoSprite;
window.IsoAgent = IsoAgent;
