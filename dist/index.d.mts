import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { SetStateAction } from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface CheckBoxProps {
    id: string;
    checked: boolean;
    setChecked: React.Dispatch<SetStateAction<boolean>>;
    style?: React.CSSProperties;
    rotate: boolean;
}
declare const Checkbox: ({ id, checked, setChecked, rotate, style }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

declare const Components_Button: typeof Button;
declare const Components_Checkbox: typeof Checkbox;
declare namespace Components {
  export { Components_Button as Button, Components_Checkbox as Checkbox };
}

declare const components: typeof Components;

export { components };
