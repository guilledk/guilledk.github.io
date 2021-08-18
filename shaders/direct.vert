attribute vec4 vertexPos;

uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;

void main(void) {
    gl_Position = projectionMatrix * modelMatrix * vertexPos;
}
