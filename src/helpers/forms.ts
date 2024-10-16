import React from "react";
import { TranslateFunction } from "../types";

interface ValidationEvent extends React.ChangeEvent<HTMLInputElement> {
    clipboardData?: DataTransfer;
}

export const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>, requireError?: string) => {
    e.target.setCustomValidity(requireError || "This filed is required !");
};

export const handleChange = (e: ValidationEvent) => {
    e.target.setCustomValidity("");
    const validation = e.target.getAttribute("data-validation");
    if (validation === "text") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "numbers") {
        const cleanedValue = e.target.value.replace(/[^0-9\- +]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "numbersOnly") {
        const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "price") {
        const cleanedValue = e.target.value.replace(/[^0-9\.]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "textNumbers") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
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
    } else if (validation === "cars") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
        e.target.value = cleanedValue;
    } else if (validation === "charts") {
        const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
        e.target.value = cleanedValue;
    } else {
        e.target.value = e.target.value;
    }
};

export const handlePaste = (e: ValidationEvent) => {
    const validation = e.target.getAttribute("data-validation");
    let pasteData = e.clipboardData.getData("text");
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

export const useValidation = (validationType: string, requireError?: string) => {
    return {
        onChange: handleChange,
        onPaste: handlePaste,
        onInvalid: (e: React.InvalidEvent<HTMLInputElement>) => handleInvalid(e, requireError),
        "data-validation": validationType,
    };
};
