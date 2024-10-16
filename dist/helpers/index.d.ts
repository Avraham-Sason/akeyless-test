import React from 'react';

declare const handleInvalid: (e: React.InvalidEvent<HTMLInputElement>, requireError?: string) => void;
declare const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
declare const handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
declare const useValidation: (validationType: string, requireError?: string) => {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    onInvalid: (e: React.InvalidEvent<HTMLInputElement>) => void;
    "data-validation": string;
};

export { handleChange, handleInvalid, handlePaste, useValidation };
