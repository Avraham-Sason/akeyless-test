import { Direction } from "../types";

export interface BaseElementProps {
    name: string;
    labelContent: string;
    defaultValue?: string;
    required?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    elementClassName?: string;
}

export interface InputElement extends BaseElementProps {
    type: "input";
    validationType?: string;
    inputType: string;
    validationName?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface SelectElement extends BaseElementProps {
    type: "select";
    options: { value: string; label: string }[];
    optionClassName?: string;
}

export interface InputContainerProps extends Partial<InputElement> {}
export interface SelectContainerProps extends Partial<SelectElement> {}

type FormElement = InputElement | SelectElement;

export interface ModularFormProps {
    submitFunction?: (form: React.FormEvent<HTMLFormElement>) => Promise<void>;
    elements?: FormElement[];
    headerContent?: string;
    buttonContent?: string;
    formClassName?: string;
    headerClassName?: string;
    direction?: Direction;
}

export interface ConfirmFormProps {
    onV: () => Promise<void>;
    onX: () => Promise<void>;
    headline?: string;
    direction?: Direction;
}

export interface DatePickerProps {
    submit?: (form: React.FormEvent<HTMLFormElement>) => Promise<void>;
    formClassName?: string;
    labelsClassName?: string;
    inputsClassName?: string;
    buttonClassName?: string;
    buttonStyle?: React.CSSProperties;
    defaultFrom?: string;
    defaultTo?: string;
    direction?: Direction;
}