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
export { handleChange, handleInvalid, handlePaste, useValidation };
