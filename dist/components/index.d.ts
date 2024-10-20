import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { SetStateAction, ReactNode } from 'react';

interface ButtonProps {
    label?: string;
}
declare const Button: ({ label }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface CheckBoxProps {
    id: string;
    checked: boolean;
    setChecked: React$1.Dispatch<SetStateAction<boolean>>;
    style?: React$1.CSSProperties;
    rotate: boolean;
}
declare const Checkbox: ({ id, checked, setChecked, rotate, style }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

interface TableHeaderProps {
    headers: string[];
    lang: "en" | "he";
    headerStyle?: React.CSSProperties;
    headerCellStyle?: React.CSSProperties;
    onSort: (index: number) => void;
    sortColumn: number | null;
    sortOrder: "asc" | "desc" | null;
    onFilterChange: (dataKey: string, value: string) => void;
    clearFilter: () => void;
    handleFilterClick: (dataKey: string) => void;
    filters: Record<string, string[]>;
    filterOptions: Record<string, any[]>;
    filterableColumns?: {
        header: string;
        dataKey: string;
        ui?: (option: any) => ReactNode;
    }[];
    filterPopupsDisplay: string;
    sortDisplay: boolean;
    filter_label: string;
    sort_label: string;
    setFilterPopupsDisplay: React.Dispatch<React.SetStateAction<string>>;
}
interface FilterProps {
    index: number;
    filter_label: string;
    filterableColumn?: {
        header: string;
        dataKey: string;
        ui?: (option: any) => ReactNode;
    };
    handleFilterClick: (dataKey: string) => void;
    filterPopupsDisplay: string;
    filterOptions: Record<string, any[]>;
    filters: Record<string, any[]>;
    onFilterChange: (dataKey: string, value: string) => void;
    lang: "en" | "he";
    headers: string[];
}
interface TableRowProps {
    item: Record<string, any>;
    rowStyles?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
    keysToRender: string[];
    onRowClick: (data?: any) => void;
}
interface TableCellProps {
    value: any;
    cellStyle?: React.CSSProperties;
}

type Direction = "rtl" | "ltr";

interface BaseElementProps {
    name: string;
    labelContent: string;
    defaultValue?: string;
    required?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    elementClassName?: string;
}
interface InputElement extends BaseElementProps {
    type: "input";
    validationType?: string;
    inputType: string;
    validationName?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
interface SelectElement extends BaseElementProps {
    type: "select";
    options: {
        value: string;
        label: string;
    }[];
    optionClassName?: string;
}
interface InputContainerProps extends Partial<InputElement> {
}
interface SelectContainerProps extends Partial<SelectElement> {
}
type FormElement = InputElement | SelectElement;
interface ModularFormProps {
    submitFunction?: (form: React.FormEvent<HTMLFormElement>) => Promise<void>;
    elements?: FormElement[];
    headerContent?: string;
    buttonContent?: string;
    formClassName?: string;
    headerClassName?: string;
    direction?: Direction;
}
interface ConfirmFormProps {
    onV: () => Promise<void>;
    onX: () => Promise<void>;
    headline?: string;
    direction?: Direction;
}
interface DatePickerProps {
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

declare const Filter: ({ filterableColumn, handleFilterClick, filterPopupsDisplay, index, filterOptions, filters, onFilterChange, filter_label, lang, headers, }: FilterProps) => react_jsx_runtime.JSX.Element;
declare const TableHeader: ({ headers, headerStyle, headerCellStyle, onSort, sortColumn, sortOrder, onFilterChange, clearFilter, filters, filterOptions, filterableColumns, filterPopupsDisplay, setFilterPopupsDisplay, lang, handleFilterClick, sortDisplay, filter_label, sort_label, }: TableHeaderProps) => react_jsx_runtime.JSX.Element;
declare const TableRow: ({ item, rowStyles, cellStyle, keysToRender, onRowClick }: TableRowProps) => react_jsx_runtime.JSX.Element;
declare const TableCell: ({ value, cellStyle }: TableCellProps) => react_jsx_runtime.JSX.Element;
declare const getFixedNumber: (number?: number, fix?: number) => string;

interface LoaderProps {
    color?: string;
    size?: number;
    style?: React$1.CSSProperties;
    className?: string;
}
declare const Loader: React$1.FC<LoaderProps>;

declare const InputContainer: ({ name, inputType, labelContent, defaultValue, validationName, containerClassName, labelClassName, elementClassName, required, validationType, onKeyDown, }: InputContainerProps) => react_jsx_runtime.JSX.Element;
declare const SelectContainer: ({ name, labelContent, containerClassName, labelClassName, defaultValue, elementClassName, optionClassName, required, options, }: SelectContainerProps) => react_jsx_runtime.JSX.Element;
declare const ModularForm: ({ submitFunction, elements, headerContent, buttonContent, formClassName, headerClassName, direction, }: ModularFormProps) => react_jsx_runtime.JSX.Element;
declare const ConfirmForm: ({ onV, onX, headline, direction }: ConfirmFormProps) => react_jsx_runtime.JSX.Element;
declare const DatePicker: ({ submit, formClassName, labelsClassName, inputsClassName, buttonClassName, buttonStyle, defaultFrom, defaultTo, direction, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { Button, Checkbox, ConfirmForm, DatePicker, Filter, InputContainer, Loader, ModularForm, SelectContainer, TableCell, TableHeader, TableRow, getFixedNumber };
