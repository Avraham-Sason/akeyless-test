import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { SetStateAction } from 'react';
import { T as TableProps, a as TableProviderType } from '../tables-w6Z3LoIM.js';
import { InputContainerProps, SelectContainerProps, ModularFormProps, ConfirmFormProps, DatePickerProps } from '../types/index.js';
import 'akeyless-types-commons';

interface CheckBoxProps {
    id: string;
    checked: boolean;
    setChecked: React.Dispatch<SetStateAction<boolean>>;
    style?: React.CSSProperties;
    rotate: boolean;
}
declare const Checkbox: ({ id, checked, setChecked, rotate, style }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

interface ErrorBoundaryProps {
    fallback?: React.ReactNode;
    children: React.ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | react_jsx_runtime.JSX.Element | Iterable<React.ReactNode> | null | undefined;
}

interface LoaderProps {
    color?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}
declare const Loader: React.FC<LoaderProps>;

declare const TableContext: React.Context<(TableProps & TableProviderType) | null>;
declare const Table: (props: TableProps) => react_jsx_runtime.JSX.Element;

declare const InputContainer: ({ validationError, name, inputType, labelContent, defaultValue, validationName, containerClassName, labelClassName, elementClassName, required, onKeyDown, }: InputContainerProps) => react_jsx_runtime.JSX.Element;
declare const SelectContainer: ({ name, labelContent, containerClassName, labelClassName, defaultValue, elementClassName, optionClassName, required, options, }: SelectContainerProps) => react_jsx_runtime.JSX.Element;
declare const ModularForm: ({ submitFunction, elements, headerContent, buttonContent, formClassName, headerClassName, direction, }: ModularFormProps) => react_jsx_runtime.JSX.Element;
declare const ConfirmForm: ({ onV, onX, headline, direction }: ConfirmFormProps) => react_jsx_runtime.JSX.Element;
declare const DatePicker: ({ submit, formClassName, labelsClassName, inputsClassName, buttonClassName, buttonStyle, defaultFrom, defaultTo, direction, fromText, toText, buttonText, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { Checkbox, ConfirmForm, DatePicker, ErrorBoundary, InputContainer, Loader, ModularForm, SelectContainer, Table, TableContext };
