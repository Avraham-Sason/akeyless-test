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
// src/components/index.ts
var components_exports = {};
__export(components_exports, {
    Button: function() {
        return Button_default;
    },
    Checkbox: function() {
        return Checkbox;
    }
});
module.exports = __toCommonJS(components_exports);
// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = function(param) {
    var label = param.label;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        className: "bg-red-500 text-green-500 px-4 py-2",
        children: label || "no label provide"
    });
};
var Button_default = Button;
// src/components/Checkboxes.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Checkbox = function(param) {
    var id = param.id, checked = param.checked, setChecked = param.setChecked, _param_rotate = param.rotate, rotate = _param_rotate === void 0 ? true : _param_rotate, style = param.style;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        className: "checkbox-wrapper-51",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
                type: "checkbox",
                id: id,
                className: "hidden",
                checked: checked,
                onChange: function() {
                    return setChecked(!checked);
                }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", {
                htmlFor: id,
                className: "relative block w-[42px] h-[24px] cursor-pointer transform-gpu",
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
                        className: "relative top-[1px] left-[1px] w-[40px] h-[22px] rounded-[12px] transition-colors duration-200 ease-in-out ".concat(checked ? "bg-[#52d66b]" : "bg-[#c8ccd4]")
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
                        className: "absolute ".concat(rotate ? "left-0" : "right-0", " top-0  w-[24px] h-[24px] bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ").concat(checked ? rotate ? "translate-x-[18px]" : "-translate-x-[18px]" : ""),
                        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
                            width: "10px",
                            height: "10px",
                            viewBox: "0 0 10 10",
                            className: "m-[7px] fill-none",
                            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
                                d: "M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "transition-all duration-500 linear",
                                stroke: checked ? "#52d66b" : "#c8ccd4",
                                style: {
                                    strokeDasharray: checked ? "25" : "24",
                                    strokeDashoffset: checked ? "25" : "0"
                                }
                            })
                        })
                    })
                ]
            })
        ]
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    Checkbox: Checkbox
});
