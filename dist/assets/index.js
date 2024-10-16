"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/assets/index.ts
var assets_exports = {};
__export(assets_exports, {
    GreenVSvg: function() {
        return GreenVSvg;
    },
    RedXSvg: function() {
        return RedXSvg;
    }
});
module.exports = __toCommonJS(assets_exports);
// src/assets/svg.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var RedXSvg = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "32",
        height: height || "32",
        viewBox: viewBox || "0 0 32 32",
        fill: "none",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                d: "M21.0801 10.3C20.6101 9.80996 19.8301 9.79996 19.3401 10.27L15.6101 13.89L11.8801 10.27C11.3901 9.79996 10.6101 9.80996 10.1401 10.3C9.67008 10.79 9.68008 11.57 10.1701 12.04L13.8501 15.61L10.1701 19.18C9.68008 19.65 9.67008 20.43 10.1401 20.92C10.6101 21.41 11.3901 21.42 11.8801 20.95L15.6101 17.33L19.3401 20.95C19.5701 21.17 19.8801 21.3 20.2001 21.3C20.8801 21.29 21.4301 20.73 21.4201 20.04C21.4201 19.72 21.2901 19.41 21.0601 19.19L17.3801 15.62L21.0601 12.05C21.5501 11.58 21.5601 10.8 21.0901 10.31L21.0801 10.3Z",
                fill: "#FF4C2B"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                d: "M15.61 0C6.99 0 0 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
                fill: "#FF4C2B"
            })
        ]
    });
};
var GreenVSvg = function(param) {
    var height = param.height, width = param.width, viewBox = param.viewBox;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width || "32",
        height: height || "32",
        viewBox: viewBox || "0 0 32 32",
        fill: "none",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                d: "M15.61 0C6.99 0 0.01 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
                fill: "#3B8F08"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                d: "M21.66 10.15L13.37 18.44L9.58003 14.54C9.10003 14.06 8.32003 14.07 7.84003 14.54C7.38003 15.01 7.36003 15.76 7.82003 16.24L12.48 21.03C12.96 21.52 13.74 21.52 14.23 21.05L23.41 11.87C23.88 11.38 23.87 10.6 23.38 10.13C22.9 9.67003 22.15 9.67003 21.68 10.13L21.66 10.15Z",
                fill: "#3B8F08"
            })
        ]
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    GreenVSvg: GreenVSvg,
    RedXSvg: RedXSvg
});
