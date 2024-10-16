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
// src/helpers/index.ts
var helpers_exports = {};
__export(helpers_exports, {
    handleChange: function() {
        return handleChange;
    },
    handleInvalid: function() {
        return handleInvalid;
    },
    handlePaste: function() {
        return handlePaste;
    },
    useValidation: function() {
        return useValidation;
    }
});
module.exports = __toCommonJS(helpers_exports);
// src/helpers/forms.ts
var handleInvalid = function(e, requireError) {
    e.target.setCustomValidity(requireError || "This filed is required !");
};
var handleChange = function(e) {
    e.target.setCustomValidity("");
    var validation = e.target.getAttribute("data-validation");
    if (validation === "text") {
        var cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "numbers") {
        var cleanedValue1 = e.target.value.replace(/[^0-9\- +]/g, "");
        e.target.value = cleanedValue1;
    } else if (validation === "numbersOnly") {
        var cleanedValue2 = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = cleanedValue2;
    } else if (validation === "price") {
        var cleanedValue3 = e.target.value.replace(/[^0-9\.]/g, "");
        e.target.value = cleanedValue3;
    } else if (validation === "textNumbers") {
        var cleanedValue4 = e.target.value.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
        e.target.value = cleanedValue4;
    } else if (validation === "email") {
        var cleanedValue5 = e.target.value.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
        e.target.value = cleanedValue5;
    } else if (validation === "color") {
        var cleanedValue6 = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
        e.target.value = cleanedValue6;
    } else if (validation === "address") {
        var cleanedValue7 = e.target.value.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
        e.target.value = cleanedValue7;
    } else if (validation === "cars") {
        var cleanedValue8 = e.target.value.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
        e.target.value = cleanedValue8;
    } else if (validation === "charts") {
        var cleanedValue9 = e.target.value.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
        e.target.value = cleanedValue9;
    } else {
        e.target.value = e.target.value;
    }
};
var handlePaste = function(e) {
    var validation = e.currentTarget.getAttribute("data-validation");
    var pasteData = e.clipboardData.getData("text");
    if (validation === "text") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת\- ]/g, "");
    } else if (validation === "numbers") {
        pasteData = pasteData.replace(/[^0-9\- +]/g, "");
    } else if (validation === "numbersOnly") {
        pasteData = pasteData.replace(/[^0-9]/g, "");
    } else if (validation === "price") {
        pasteData = pasteData.replace(/[^0-9\.]/g, "");
    } else if (validation === "textNumbers") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
    } else if (validation === "email") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
    } else if (validation === "color") {
        pasteData = pasteData.replace(/[^#0-9A-Fa-f]/g, "");
    } else if (validation === "address") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
    } else if (validation === "cars") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
    } else if (validation === "charts") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
    }
    e.preventDefault();
    document.execCommand("insertText", false, pasteData);
};
var useValidation = function(validationType, requireError) {
    return {
        onChange: handleChange,
        onPaste: handlePaste,
        onInvalid: function(e) {
            return handleInvalid(e, requireError);
        },
        "data-validation": validationType
    };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    handleChange: handleChange,
    handleInvalid: handleInvalid,
    handlePaste: handlePaste,
    useValidation: useValidation
});
