export const handleInvalid = (e, t) => {
    const currentInput = e.target.name;
    const error =
        currentInput == "phone"
            ? t("invalid_phone")
            : currentInput == "code"
            ? t("validation_code")
            : currentInput == "car_number"
            ? t("validation_car_number")
            : "";
    e.target.setCustomValidity(error);
};

export const handleChange = (e) => {
    e.target.setCustomValidity("");
    const validation = e.target.getAttribute("data-validation");
    if (validation === "text") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "numbers") {
        const cleanedValue = e.target.value.replace(/[^0-9\- ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "numbersOnly") {
        const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "textNumbers") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-_ ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "carNumber") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "email") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "color") {
        const cleanedValue = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "address") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
        e.target.value = cleanedValue;
    }
};

export const handlePaste = (e) => {
    const validation = e.target.getAttribute("data-validation");
    let pasteData = (e.clipboardData || window.clipboardData).getData("text");
    if (validation === "text") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת\- ]/g, "");
    } else if (validation === "numbers") {
        pasteData = pasteData.replace(/[^0-9\- ]/g, "");
    } else if (validation === "numbersOnly") {
        pasteData = pasteData.replace(/[^0-9]/g, "");
    } else if (validation === "textNumbers") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-_ ]/g, "");
    } else if (validation === "carNumber") {
        pasteData = pasteData.replace(/[^a-zA-Z0-9]/g, "");
    } else if (validation === "email") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
    } else if (validation === "color") {
        pasteData = pasteData.replace(/[^#0-9A-Fa-f]/g, "");
    } else if (validation === "address") {
        pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
    }

    e.preventDefault();
    document.execCommand("insertText", false, pasteData);
};
export const handleKeyDown = (e, exeFun) => {
    if (e.key === "Enter") {
        exeFun && exeFun(e);
    }
};

export const useValidation = (t, validationType) => {
    return {
        onChange: handleChange,
        onPaste: handlePaste,
        onInvalid: (e) => handleInvalid(e, t),
        "data-validation": validationType,
    };
};
