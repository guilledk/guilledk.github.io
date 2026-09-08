export function main() {
    wasm.main();
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_null_7d13f41e1a2d5140: function(arg0) {
            const ret = arg0 === null;
            return ret;
        },
        __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_undefined_6cff064c44e0d823: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_0a18949a61670320: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_be22cc64ae6946a0: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_activeTexture_8e65ac2e8d488478: function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        },
        __wbg_activeTexture_fd6262686afdbe2f: function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        },
        __wbg_addEventListener_3b8edc02c33d9f77: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
        }, arguments); },
        __wbg_arrayBuffer_16433f17fbd74397: function() { return handleError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments); },
        __wbg_attachShader_26751604f00d1f1b: function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        },
        __wbg_attachShader_61baa58641ea664a: function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        },
        __wbg_bindAttribLocation_1e182a50e1556784: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        },
        __wbg_bindAttribLocation_9cc5ab15df1d042d: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        },
        __wbg_bindBufferBase_6302905d2ff7534b: function(arg0, arg1, arg2, arg3) {
            arg0.bindBufferBase(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_bindBuffer_1fb12d083d2a22af: function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindBuffer_31cb159ab5dc5ba7: function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindFramebuffer_32ce672324ce8a16: function(arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindFramebuffer_e620067056f9316f: function(arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindRenderbuffer_765cffe23b9c36f7: function(arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindRenderbuffer_9b313332bd7aa049: function(arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindTexture_4c54ffb64c33564f: function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        },
        __wbg_bindTexture_6fe86367f6be8f59: function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        },
        __wbg_bindVertexArrayOES_96a4898652eac0d8: function(arg0, arg1) {
            arg0.bindVertexArrayOES(arg1);
        },
        __wbg_bindVertexArray_0185d931d681d806: function(arg0, arg1) {
            arg0.bindVertexArray(arg1);
        },
        __wbg_blendFunc_b7f382e97db2fd5b: function(arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        },
        __wbg_blendFunc_d908118bbb181928: function(arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        },
        __wbg_body_eb2e7e7701fa47ae: function(arg0) {
            const ret = arg0.body;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_bufferData_69a44ade0864ba2b: function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_bufferData_d359d1c797b8e8b7: function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_bufferSubData_4f6063d50303b61d: function(arg0, arg1, arg2, arg3) {
            arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
        },
        __wbg_bufferSubData_64b69f468a0d3048: function(arg0, arg1, arg2, arg3) {
            arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
        },
        __wbg_buffer_8117fe4dab119813: function(arg0) {
            const ret = arg0.buffer;
            return ret;
        },
        __wbg_button_3963e81aec2b2f60: function(arg0) {
            const ret = arg0.button;
            return ret;
        },
        __wbg_caches_7886677409b8c5de: function() { return handleError(function (arg0) {
            const ret = arg0.caches;
            return ret;
        }, arguments); },
        __wbg_call_0f2a9af232c18fd2: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.call(arg1, arg2, arg3);
            return ret;
        }, arguments); },
        __wbg_call_1c5886ab9c57d1c7: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_35dba3c747ad7521: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_clearColor_9d880eee3619dbf5: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clearColor_c4271a8227ced504: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clearDepth_887000180cc9eb2e: function(arg0, arg1) {
            arg0.clearDepth(arg1);
        },
        __wbg_clearDepth_c4897278afd894a9: function(arg0, arg1) {
            arg0.clearDepth(arg1);
        },
        __wbg_clear_20f7614cd20df101: function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        },
        __wbg_clear_332f205d7e52df87: function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        },
        __wbg_click_cdf5981a6746a4b8: function(arg0) {
            arg0.click();
        },
        __wbg_clientX_73f0b294f91b259a: function(arg0) {
            const ret = arg0.clientX;
            return ret;
        },
        __wbg_clientY_a4c1ea57bd41430f: function(arg0) {
            const ret = arg0.clientY;
            return ret;
        },
        __wbg_clone_b3f5833c9a653386: function() { return handleError(function (arg0) {
            const ret = arg0.clone();
            return ret;
        }, arguments); },
        __wbg_code_1bac1fd03147d97e: function(arg0, arg1) {
            const ret = arg1.code;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_compileShader_4ede19e4fc1bebce: function(arg0, arg1) {
            arg0.compileShader(arg1);
        },
        __wbg_compileShader_ac457ada9042f08e: function(arg0, arg1) {
            arg0.compileShader(arg1);
        },
        __wbg_compressedTexImage2D_6a32e28dbad367ed: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.compressedTexImage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6, arg7);
        },
        __wbg_compressedTexImage2D_e385a24e73960d93: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.compressedTexImage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6, arg7);
        },
        __wbg_createBuffer_44b37c222efbd326: function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createBuffer_af6c411fe2b091f8: function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createElement_7f42344eee7bb810: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_createFramebuffer_4dc2fb6bd93463a5: function(arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createFramebuffer_e6d8917bf9291c65: function(arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createObjectURL_da379bd6bf9a91c6: function() { return handleError(function (arg0, arg1) {
            const ret = URL.createObjectURL(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_createProgram_2ebbd17565e0ede7: function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createProgram_81b37242eadef893: function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createRenderbuffer_be624f81e06a0cfd: function(arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createRenderbuffer_cd2638d5dda9c277: function(arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createShader_9a8e5f335caac850: function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createShader_f8638cf4c19a1d2d: function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createTexture_42c791197006c64a: function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createTexture_c74740f68b5c2a93: function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createVertexArrayOES_f7e8c94194c4e075: function(arg0) {
            const ret = arg0.createVertexArrayOES();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createVertexArray_abd18ded26b75653: function(arg0) {
            const ret = arg0.createVertexArray();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_deleteProgram_0191056307686073: function(arg0, arg1) {
            arg0.deleteProgram(arg1);
        },
        __wbg_deleteProgram_ee7f1925cb856dc2: function(arg0, arg1) {
            arg0.deleteProgram(arg1);
        },
        __wbg_deleteShader_2558228a4ef7373e: function(arg0, arg1) {
            arg0.deleteShader(arg1);
        },
        __wbg_deleteShader_413961eb94f5c67c: function(arg0, arg1) {
            arg0.deleteShader(arg1);
        },
        __wbg_deltaY_13780a1f1e6d6f8c: function(arg0) {
            const ret = arg0.deltaY;
            return ret;
        },
        __wbg_depthFunc_6c6f948417f5bde4: function(arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        },
        __wbg_depthFunc_bb3152f635a60ff2: function(arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        },
        __wbg_depthMask_4e0075e07739355b: function(arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        },
        __wbg_depthMask_bdc57b9e64c6b4d8: function(arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        },
        __wbg_disable_2ad210ba5315372a: function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        },
        __wbg_disable_bb1df5a6c75eaecd: function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        },
        __wbg_document_ac38448dbfd31a57: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_drawArrays_02c354e377984441: function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        },
        __wbg_drawArrays_b2004a40c212065c: function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        },
        __wbg_drawBuffersWEBGL_0b4935290cba977e: function(arg0, arg1) {
            arg0.drawBuffersWEBGL(arg1);
        },
        __wbg_drawBuffers_f07f796e50bb0077: function(arg0, arg1) {
            arg0.drawBuffers(arg1);
        },
        __wbg_drawElements_39fd9be525b4845b: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
        },
        __wbg_drawElements_3f24a677bf20c491: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
        },
        __wbg_enableVertexAttribArray_90f1a9f570379c36: function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enableVertexAttribArray_b072ffcbe4f26e2b: function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enable_17346ff3b2257cae: function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        },
        __wbg_enable_db1e433ea267f29b: function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_dd408a7b3cb542dd: function(arg0) {
            console.error(arg0);
        },
        __wbg_eval_62d1ea2ebeca53ad: function() { return handleError(function (arg0, arg1) {
            const ret = eval(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_exports_7d05caa1a0c36b86: function(arg0) {
            const ret = arg0.exports;
            return ret;
        },
        __wbg_fetch_6500a72da8700672: function(arg0, arg1, arg2) {
            const ret = arg0.fetch(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_finish_81c066eb195fc8a9: function(arg0) {
            arg0.finish();
        },
        __wbg_finish_94865fee5c90da6b: function(arg0) {
            arg0.finish();
        },
        __wbg_framebufferRenderbuffer_5736a8553be94035: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        },
        __wbg_framebufferRenderbuffer_e0c873b9f296443d: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        },
        __wbg_framebufferTexture2D_8584b49a205ffe5b: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        },
        __wbg_framebufferTexture2D_9abab99d6209666a: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        },
        __wbg_getAttribLocation_68fcdc61edcdd23c: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getAttribLocation(arg1, getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_getAttribLocation_bddb3abf7c5c5fc0: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getAttribLocation(arg1, getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_getContext_123ddade3a0fb2f5: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getElementById_1637d6969b003cda: function(arg0, arg1, arg2) {
            const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getError_417e3c195ccd57de: function(arg0) {
            const ret = arg0.getError();
            return ret;
        },
        __wbg_getError_dc357d41d65baf40: function(arg0) {
            const ret = arg0.getError();
            return ret;
        },
        __wbg_getExtension_8e8c3be603d4f5ce: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getParameter_7ddbe9f9606f6a80: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getParameter(arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getProgramInfoLog_50a07d12dddd0da6: function(arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getProgramInfoLog_72665662cf78b5a2: function(arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getProgramParameter_1f5cceb73030e823: function(arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getProgramParameter_41e1ea6f52a71ba5: function(arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getReader_533994892cd607f7: function(arg0) {
            const ret = arg0.getReader();
            return ret;
        },
        __wbg_getShaderInfoLog_337a0567e83283d1: function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderInfoLog_663a9b136ab42b32: function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderParameter_95d4ad40668ee798: function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getShaderParameter_9e9aa18598294f3b: function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getSupportedExtensions_63e3eaba880055c5: function(arg0) {
            const ret = arg0.getSupportedExtensions();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getUniformBlockIndex_78264d4d94f8252d: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformBlockIndex(arg1, getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_getUniformLocation_11fd99fee70965dc: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getUniformLocation_c493d2f5f1a6213d: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_7473564f5d9fdd2a: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.get(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_get_971a0c45d172643f: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_headers_92567b07014384b9: function(arg0) {
            const ret = arg0.headers;
            return ret;
        },
        __wbg_height_e56f6fb197710e09: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_info_726982aff9befe16: function(arg0) {
            console.info(arg0);
        },
        __wbg_innerHeight_047a04fc237d09df: function() { return handleError(function (arg0) {
            const ret = arg0.innerHeight;
            return ret;
        }, arguments); },
        __wbg_innerWidth_4a973110eeb5f463: function() { return handleError(function (arg0) {
            const ret = arg0.innerWidth;
            return ret;
        }, arguments); },
        __wbg_instanceof_Cache_8fd96a0a3cc8f936: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Cache;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_327e7f7530c72bbd: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlElement_6b02a3740edba922: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Memory_37fa5d38ff0dd2f3: function(arg0) {
            let result;
            try {
                result = arg0 instanceof WebAssembly.Memory;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Promise_e6e764b945c3128a: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Promise;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Response_8f49efbd4bfd76d6: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_WebGl2RenderingContext_e27143c72f888655: function(arg0) {
            let result;
            try {
                result = arg0 instanceof WebGL2RenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_5625ff9937037a38: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_length_1009454859bb3e03: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_36bd29c6848c2144: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_c812b8efd064d998: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_linkProgram_124252d16ea0ef40: function(arg0, arg1) {
            arg0.linkProgram(arg1);
        },
        __wbg_linkProgram_dd3cfc19950a354c: function(arg0, arg1) {
            arg0.linkProgram(arg1);
        },
        __wbg_load_c7c58f19755d1352: function() { return handleError(function (arg0, arg1) {
            const ret = Atomics.load(arg0, arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_location_5d269cf0aa99107a: function(arg0) {
            const ret = arg0.location;
            return ret;
        },
        __wbg_log_e6372b4fbfc9f81e: function(arg0) {
            console.log(arg0);
        },
        __wbg_match_ffcc8249cd04426a: function(arg0, arg1, arg2) {
            const ret = arg0.match(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_movementX_dc66b81da8d5fd63: function(arg0) {
            const ret = arg0.movementX;
            return ret;
        },
        __wbg_movementY_3c9e1b4c5853d2c5: function(arg0) {
            const ret = arg0.movementY;
            return ret;
        },
        __wbg_new_116be93542d39019: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_358857d90afd5a2d: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_3867db84790e6cb4: function(arg0) {
            const ret = new SharedArrayBuffer(arg0 >>> 0);
            return ret;
        },
        __wbg_new_418fb92a013d5930: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___js_sys_25757ba37a016bd2___Function_fn_wasm_bindgen_bc064ae633717a1___JsValue_____wasm_bindgen_bc064ae633717a1___sys__Undefined___js_sys_25757ba37a016bd2___Function_fn_wasm_bindgen_bc064ae633717a1___JsValue_____wasm_bindgen_bc064ae633717a1___sys__Undefined_______true_(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = 0;
            }
        },
        __wbg_new_77cc4f4f472aeb81: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_84a929404f177239: function() { return handleError(function (arg0, arg1) {
            const ret = new Worker(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_d1599c9e69d35606: function() { return handleError(function (arg0, arg1) {
            const ret = new WebAssembly.Instance(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_new_e3fb27841b78e4f4: function() { return handleError(function (arg0) {
            const ret = new WebAssembly.Module(arg0);
            return ret;
        }, arguments); },
        __wbg_new_ebe3e0f6837f0879: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_f545e2e1ea609f29: function(arg0) {
            const ret = new Int32Array(arg0);
            return ret;
        },
        __wbg_new_from_slice_3eea173078478cfe: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_with_args_75f20e1087b74fa8: function(arg0, arg1, arg2, arg3) {
            const ret = new Function(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_new_with_length_c06762a91328d9e9: function(arg0) {
            const ret = new Int32Array(arg0 >>> 0);
            return ret;
        },
        __wbg_new_with_length_ef112d2291d8ab95: function(arg0) {
            const ret = new Float32Array(arg0 >>> 0);
            return ret;
        },
        __wbg_new_with_str_sequence_4916aa40615983fe: function() { return handleError(function (arg0) {
            const ret = new Blob(arg0);
            return ret;
        }, arguments); },
        __wbg_notify_5f5e34143c548cc7: function() { return handleError(function (arg0, arg1) {
            const ret = Atomics.notify(arg0, arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_now_8b265300afd5f2b9: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_of_0c6464fa8d2aa86d: function(arg0) {
            const ret = Array.of(arg0);
            return ret;
        },
        __wbg_of_598c0ff0cd48a890: function(arg0, arg1) {
            const ret = Array.of(arg0, arg1);
            return ret;
        },
        __wbg_ok_917dc17857b16c56: function(arg0) {
            const ret = arg0.ok;
            return ret;
        },
        __wbg_open_ffcfe46db9d914e4: function(arg0, arg1, arg2) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_pixelStorei_11bdfb5bc6a39d28: function(arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        },
        __wbg_pixelStorei_86481a168d6e225e: function(arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        },
        __wbg_pointerLockElement_61a618d25b8e9e63: function(arg0) {
            const ret = arg0.pointerLockElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_polygonOffset_2b8b141e8cc17c10: function(arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        },
        __wbg_polygonOffset_94b427c5130ab6c2: function(arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        },
        __wbg_postMessage_ff0d3fa36478ee89: function() { return handleError(function (arg0, arg1) {
            arg0.postMessage(arg1);
        }, arguments); },
        __wbg_preventDefault_19878c58b8010668: function(arg0) {
            arg0.preventDefault();
        },
        __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_prototypesetcall_e30a3abb428d3d47: function(arg0, arg1, arg2) {
            Int32Array.prototype.set.call(getArrayI32FromWasm0(arg0, arg1), arg2);
        },
        __wbg_push_adb0107829f02d75: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_put_4d7dc635e282e7b7: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.put(getStringFromWasm0(arg1, arg2), arg3);
            return ret;
        },
        __wbg_queueMicrotask_ac694eae12e92dfb: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_queueMicrotask_be5fe34a8f4cad4d: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_readBuffer_2de0b72ac08915c8: function(arg0, arg1) {
            arg0.readBuffer(arg1 >>> 0);
        },
        __wbg_readPixels_0033d2834b498dda: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_readPixels_0e3230bf7a891882: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_readPixels_8f8bde9ee420ba35: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_renderbufferStorage_33c57e600b175bd6: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        },
        __wbg_renderbufferStorage_3fb6d5a0f3e07d46: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        },
        __wbg_requestAnimationFrame_bcb3ce6247e27dd4: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.requestAnimationFrame(arg1);
            return ret;
        }, arguments); },
        __wbg_requestPointerLock_961ad291c2e0865b: function(arg0) {
            arg0.requestPointerLock();
        },
        __wbg_resolve_020f95d838c6ef25: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_revokeObjectURL_709bc205d98c34ba: function() { return handleError(function (arg0, arg1) {
            URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_scissor_2f02706fbca6e98a: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_scissor_cdfb84de20f004b6: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_search_e85b52d847b83659: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_setAttribute_507f8367905a9c03: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_set_577f5f7485b6744e: function(arg0, arg1, arg2) {
            arg0.set(getArrayF32FromWasm0(arg1, arg2));
        },
        __wbg_set_8155bb79a948541b: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_9e08f8fa085c9c19: function(arg0, arg1, arg2) {
            arg0.set(getArrayI32FromWasm0(arg1, arg2));
        },
        __wbg_set_b9b5b5cb7b495037: function(arg0, arg1, arg2) {
            arg0.set(getArrayU8FromWasm0(arg1, arg2));
        },
        __wbg_set_height_d72f2b76484a44de: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_onmessage_6f838578941fe42d: function(arg0, arg1) {
            arg0.onmessage = arg1;
        },
        __wbg_set_width_36ef6630b22fc519: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_shaderSource_7d3f360b4b626db7: function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        },
        __wbg_shaderSource_dcba4cd3379b35bd: function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_c7aea38d4de089bc: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_42d4fae05e59267a: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_e0db14a0eba6a812: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_status_b0de02a07fd7d927: function(arg0) {
            const ret = arg0.status;
            return ret;
        },
        __wbg_stencilFunc_a9a445618401c118: function(arg0, arg1, arg2, arg3) {
            arg0.stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_stencilFunc_b5073faed00da15b: function(arg0, arg1, arg2, arg3) {
            arg0.stencilFunc(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_stencilMask_020d2d7ea8e4f640: function(arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        },
        __wbg_stencilMask_967f16a89bfd056a: function(arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        },
        __wbg_stencilOp_0e1f4346d590a142: function(arg0, arg1, arg2, arg3) {
            arg0.stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
        },
        __wbg_stencilOp_39d229912d4e6149: function(arg0, arg1, arg2, arg3) {
            arg0.stencilOp(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
        },
        __wbg_store_523722c647247b86: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Atomics.store(arg0, arg1 >>> 0, arg2);
            return ret;
        }, arguments); },
        __wbg_subarray_a4cc58201c7359fd: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_terminate_ce8875dabb0fdeb6: function(arg0) {
            arg0.terminate();
        },
        __wbg_texImage2D_053488112c3d702f: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage2D_2854247ff7d047a1: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage2D_44740302c934daf1: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texParameteri_2bc38aa8e9964d77: function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_texParameteri_dd4f56c2acbbe859: function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_then_7026b513a94278a8: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_then_72819b8d4e081fb5: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_uniform1f_e92095ce29c38424: function(arg0, arg1, arg2) {
            arg0.uniform1f(arg1, arg2);
        },
        __wbg_uniform1f_e93503bc589b432d: function(arg0, arg1, arg2) {
            arg0.uniform1f(arg1, arg2);
        },
        __wbg_uniform1i_235dff1d94e0df95: function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        },
        __wbg_uniform1i_d5db9c3184abbd04: function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        },
        __wbg_uniform2f_07ad9cd0c199a97a: function(arg0, arg1, arg2, arg3) {
            arg0.uniform2f(arg1, arg2, arg3);
        },
        __wbg_uniform2f_eb1a640b2e29e26b: function(arg0, arg1, arg2, arg3) {
            arg0.uniform2f(arg1, arg2, arg3);
        },
        __wbg_uniform3f_a145e21c0ac04d3a: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniform3f(arg1, arg2, arg3, arg4);
        },
        __wbg_uniform3f_e58dbcedf17ad36b: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniform3f(arg1, arg2, arg3, arg4);
        },
        __wbg_uniform4f_61192d516e9bede4: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        },
        __wbg_uniform4f_d9bb623add5d2541: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        },
        __wbg_uniformBlockBinding_057177606c8b522f: function(arg0, arg1, arg2, arg3) {
            arg0.uniformBlockBinding(arg1, arg2 >>> 0, arg3 >>> 0);
        },
        __wbg_uniformMatrix4fv_20161efad644f822: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        },
        __wbg_uniformMatrix4fv_8689fd0481ac5ab4: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        },
        __wbg_useProgram_1c047de878f20b72: function(arg0, arg1) {
            arg0.useProgram(arg1);
        },
        __wbg_useProgram_9edff145e073d3b1: function(arg0, arg1) {
            arg0.useProgram(arg1);
        },
        __wbg_vertexAttribPointer_7bc186aca7721b90: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_vertexAttribPointer_b0838f8618a8c446: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_viewport_07bb1829f0fe2245: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_viewport_dfe81d333ce7be86: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_warn_917d7f727ab78481: function(arg0) {
            console.warn(arg0);
        },
        __wbg_width_1952934caca67137: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 1158, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 2404, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue______true__1_);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 2499, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_bc064ae633717a1___JsError___true_);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [F64, F64, F64], shim_idx: 730, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [F64, F64, I32, I32, I32, I32], shim_idx: 703, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__i32__i32__i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [F64, F64, I32], shim_idx: 732, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [F64, F64], shim_idx: 728, ret: F64, inner_ret: Some(F64) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__f64__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000008: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [F64], shim_idx: 15, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000009: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [F64], shim_idx: 726, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000000a: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64, F64, F64, F64, F64, F64], shim_idx: 771, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__f64__f64__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000000b: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64, F64, F64, F64], shim_idx: 705, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000000c: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64, F64, F64], shim_idx: 704, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000000d: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64, F64], shim_idx: 745, ret: F64, inner_ret: Some(F64) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__true_);
            return ret;
        },
        __wbindgen_cast_000000000000000e: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64, F64], shim_idx: 747, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000000f: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64, I32, F64, I32, I32], shim_idx: 706, ret: F64, inner_ret: Some(F64) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__i32__f64__i32__i32__f64__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000010: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, F64], shim_idx: 743, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000011: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, F64], shim_idx: 757, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000012: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, I32, F64, F64], shim_idx: 708, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__f64__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000013: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, I32, F64], shim_idx: 707, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__f64__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000014: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, I32, I32, I32, I32], shim_idx: 711, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000015: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, I32, I32, I32], shim_idx: 710, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000016: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, I32, I32], shim_idx: 709, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000017: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32, I32], shim_idx: 759, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000018: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32], shim_idx: 753, ret: F64, inner_ret: Some(F64) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__f64__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000019: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32, I32], shim_idx: 755, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000001a: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32], shim_idx: 737, ret: F64, inner_ret: Some(F64) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__true_);
            return ret;
        },
        __wbindgen_cast_000000000000001b: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32], shim_idx: 739, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000001c: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32, I32], shim_idx: 741, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32______true_);
            return ret;
        },
        __wbindgen_cast_000000000000001d: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [I32], shim_idx: 735, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__true_);
            return ret;
        },
        __wbindgen_cast_000000000000001e: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 2411, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true_);
            return ret;
        },
        __wbindgen_cast_000000000000001f: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("MouseEvent")], shim_idx: 2411, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true__30);
            return ret;
        },
        __wbindgen_cast_0000000000000020: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 2411, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true__31);
            return ret;
        },
        __wbindgen_cast_0000000000000021: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [U32, NamedExternref("Array<any>")], shim_idx: 739, ret: Externref, inner_ret: Some(Externref) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__true__32);
            return ret;
        },
        __wbindgen_cast_0000000000000022: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 2415, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke_______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000023: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 767, ret: F64, inner_ret: Some(F64) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000024: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 769, ret: I32, inner_ret: Some(I32) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__true_);
            return ret;
        },
        __wbindgen_cast_0000000000000025: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000026: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
            const ret = getArrayF32FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000027: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
            const ret = getArrayI16FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000028: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
            const ret = getArrayI32FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000029: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
            const ret = getArrayI8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000002a: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
            const ret = getArrayU16FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000002b: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
            const ret = getArrayU32FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000002c: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000002d: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./classic-web_bg.js": import0,
    };
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__true_(arg0, arg1) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__true_(arg0, arg1);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__true_(arg0, arg1) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__true_(arg0, arg1);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue______true_(arg0, arg1, arg2);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue______true__1_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue______true__1_(arg0, arg1, arg2);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true_(arg0, arg1, arg2);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true__30(arg0, arg1, arg2) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true__30(arg0, arg1, arg2);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true__31(arg0, arg1, arg2) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___web_sys_9be9b19cbdf51052___features__gen_MouseEvent__MouseEvent______true__31(arg0, arg1, arg2);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_bc064ae633717a1___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___wasm_bindgen_bc064ae633717a1___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_bc064ae633717a1___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___js_sys_25757ba37a016bd2___Function_fn_wasm_bindgen_bc064ae633717a1___JsValue_____wasm_bindgen_bc064ae633717a1___sys__Undefined___js_sys_25757ba37a016bd2___Function_fn_wasm_bindgen_bc064ae633717a1___JsValue_____wasm_bindgen_bc064ae633717a1___sys__Undefined_______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___js_sys_25757ba37a016bd2___Function_fn_wasm_bindgen_bc064ae633717a1___JsValue_____wasm_bindgen_bc064ae633717a1___sys__Undefined___js_sys_25757ba37a016bd2___Function_fn_wasm_bindgen_bc064ae633717a1___JsValue_____wasm_bindgen_bc064ae633717a1___sys__Undefined_______true_(arg0, arg1, arg2, arg3);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__true_(arg0, arg1, arg2);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__true__32(arg0, arg1, arg2, arg3) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__true__32(arg0, arg1, arg2, arg3);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32______true_(arg0, arg1, arg2, arg3);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__true_(arg0, arg1, arg2, arg3) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__true_(arg0, arg1, arg2, arg3);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__true_(arg0, arg1, arg2, arg3) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__true_(arg0, arg1, arg2, arg3);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__f64__true_(arg0, arg1, arg2, arg3, arg4) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__f64__true_(arg0, arg1, arg2, arg3, arg4);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__i32__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__i32__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__i32__true_(arg0, arg1, arg2, arg3, arg4) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__i32__true_(arg0, arg1, arg2, arg3, arg4);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__i32__f64__i32__i32__f64__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__i32__f64__i32__i32__f64__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__true_(arg0, arg1, arg2, arg3, arg4, arg5) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__true_(arg0, arg1, arg2, arg3, arg4, arg5);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___i32__i32__f64__f64__f64__f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64______true_(arg0, arg1, arg2);
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__i32__true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__i32__true_(arg0, arg1, arg2);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__f64__true_(arg0, arg1, arg2, arg3) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__f64__true_(arg0, arg1, arg2, arg3);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__i32__i32__true_(arg0, arg1, arg2, arg3, arg4) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__i32__i32__true_(arg0, arg1, arg2, arg3, arg4);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__i32__i32__i32__i32__i32__true_(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    return ret;
}

function wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4) {
    const ret = wasm.wasm_bindgen_bc064ae633717a1___convert__closures_____invoke___f64__f64__f64__i32__true_(arg0, arg1, arg2, arg3, arg4);
    return ret;
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt16ArrayMemory0 = null;
function getInt16ArrayMemory0() {
    if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
        cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
    }
    return cachedInt16ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedInt16ArrayMemory0 = null;
    cachedInt32ArrayMemory0 = null;
    cachedInt8ArrayMemory0 = null;
    cachedUint16ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('classic-web_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
