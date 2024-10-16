import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { SetStateAction, ReactNode } from 'react';

interface SvgProps {
    width?: string;
    height?: string;
    viewBox?: string;
}
declare const RedXSvg: ({ height, width, viewBox }: SvgProps) => react_jsx_runtime.JSX.Element;
declare const GreenVSvg: ({ height, width, viewBox }: SvgProps) => react_jsx_runtime.JSX.Element;

declare const Assets_GreenVSvg: typeof GreenVSvg;
declare const Assets_RedXSvg: typeof RedXSvg;
declare namespace Assets {
  export { Assets_GreenVSvg as GreenVSvg, Assets_RedXSvg as RedXSvg };
}

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
    filterableColumn?: {
        header: string;
        dataKey: string;
        ui?: (option: any) => ReactNode;
    };
    handleFilterClick: (dataKey: string) => void;
    filterPopupsDisplay: string;
    filter_label: string;
    index: number;
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
interface TableProps {
    data: Record<string, any>[];
    headers: string[];
    keysToRender: string[];
    searchElement?: ReactNode;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    includeSearch?: boolean;
    searchInputStyle?: React.CSSProperties;
    searchInputClassName?: string;
    tableContainerStyle?: React.CSSProperties;
    tableContainerClass?: string;
    tableStyle?: React.CSSProperties;
    rowStyles?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    headerCellStyle?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
    filterableColumns?: {
        header: string;
        dataKey: string;
        ui?: (value: any) => ReactNode;
    }[];
    sortKeys?: string[];
    exportToExcelKeys?: string[];
    excelFileName?: string;
    dataToAddToExcelTable?: {
        key: string;
        value: any;
        header: string;
    }[];
    sumColumns?: {
        label: string;
        dataKey: string;
        ui?: (value: any) => ReactNode;
    }[];
    searchPlaceHolder?: string;
    summaryContainerStyle?: React.CSSProperties;
    summaryLabelStyle?: React.CSSProperties;
    summaryRowStyle?: React.CSSProperties;
    summaryLabel?: string;
    filter_label?: string;
    sort_label?: string;
    export_excel_label?: string;
    onRowClick?: (data?: any) => void;
    lang: "en" | "he";
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

type Types_BaseElementProps = BaseElementProps;
type Types_ConfirmFormProps = ConfirmFormProps;
type Types_DatePickerProps = DatePickerProps;
type Types_Direction = Direction;
type Types_FilterProps = FilterProps;
type Types_InputContainerProps = InputContainerProps;
type Types_InputElement = InputElement;
type Types_ModularFormProps = ModularFormProps;
type Types_SelectContainerProps = SelectContainerProps;
type Types_SelectElement = SelectElement;
type Types_TableCellProps = TableCellProps;
type Types_TableHeaderProps = TableHeaderProps;
type Types_TableProps = TableProps;
type Types_TableRowProps = TableRowProps;
declare namespace Types {
  export type { Types_BaseElementProps as BaseElementProps, Types_ConfirmFormProps as ConfirmFormProps, Types_DatePickerProps as DatePickerProps, Types_Direction as Direction, Types_FilterProps as FilterProps, Types_InputContainerProps as InputContainerProps, Types_InputElement as InputElement, Types_ModularFormProps as ModularFormProps, Types_SelectContainerProps as SelectContainerProps, Types_SelectElement as SelectElement, Types_TableCellProps as TableCellProps, Types_TableHeaderProps as TableHeaderProps, Types_TableProps as TableProps, Types_TableRowProps as TableRowProps };
}

declare const Table: ({ data, headers, searchElement, keysToRender, headerCellStyle, rowStyles, cellStyle, tableContainerClass, tableContainerStyle, headerStyle, tableStyle, containerStyle, containerClassName, searchInputStyle, searchInputClassName, filterableColumns, sortKeys, exportToExcelKeys, dataToAddToExcelTable, sumColumns, includeSearch, excelFileName, summaryLabel, summaryContainerStyle, summaryLabelStyle, summaryRowStyle, searchPlaceHolder, filter_label, sort_label, export_excel_label, onRowClick, lang, }: TableProps) => react_jsx_runtime.JSX.Element;
declare const getFixedNumber: (number?: number, fix?: number) => string;

declare const sortSvg: (upside_down?: boolean) => react_jsx_runtime.JSX.Element;
declare const emptyFilterSvg: (solid?: boolean) => react_jsx_runtime.JSX.Element;
declare const slashFilterSvg: (solid?: boolean) => react_jsx_runtime.JSX.Element;
declare const exportToExcelSvg: () => react_jsx_runtime.JSX.Element;

declare const assets$1_emptyFilterSvg: typeof emptyFilterSvg;
declare const assets$1_exportToExcelSvg: typeof exportToExcelSvg;
declare const assets$1_slashFilterSvg: typeof slashFilterSvg;
declare const assets$1_sortSvg: typeof sortSvg;
declare namespace assets$1 {
  export { assets$1_emptyFilterSvg as emptyFilterSvg, assets$1_exportToExcelSvg as exportToExcelSvg, assets$1_slashFilterSvg as slashFilterSvg, assets$1_sortSvg as sortSvg };
}

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

declare const Components_Button: typeof Button;
declare const Components_Checkbox: typeof Checkbox;
declare const Components_ConfirmForm: typeof ConfirmForm;
declare const Components_DatePicker: typeof DatePicker;
declare const Components_InputContainer: typeof InputContainer;
declare const Components_Loader: typeof Loader;
declare const Components_ModularForm: typeof ModularForm;
declare const Components_SelectContainer: typeof SelectContainer;
declare const Components_Table: typeof Table;
declare const Components_getFixedNumber: typeof getFixedNumber;
declare namespace Components {
  export { Components_Button as Button, Components_Checkbox as Checkbox, Components_ConfirmForm as ConfirmForm, Components_DatePicker as DatePicker, Components_InputContainer as InputContainer, Components_Loader as Loader, Components_ModularForm as ModularForm, Components_SelectContainer as SelectContainer, Components_Table as Table, assets$1 as assets, Components_getFixedNumber as getFixedNumber };
}

declare const handleInvalid: (e: React$1.InvalidEvent<HTMLInputElement>, requireError?: string) => void;
declare const handleChange: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
declare const handlePaste: (e: React$1.ClipboardEvent<HTMLInputElement>) => void;
declare const useValidation: (validationType: string, requireError?: string) => {
    onChange: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
    onPaste: (e: React$1.ClipboardEvent<HTMLInputElement>) => void;
    onInvalid: (e: React$1.InvalidEvent<HTMLInputElement>) => void;
    "data-validation": string;
};

declare const Helpers_handleChange: typeof handleChange;
declare const Helpers_handleInvalid: typeof handleInvalid;
declare const Helpers_handlePaste: typeof handlePaste;
declare const Helpers_useValidation: typeof useValidation;
declare namespace Helpers {
  export { Helpers_handleChange as handleChange, Helpers_handleInvalid as handleInvalid, Helpers_handlePaste as handlePaste, Helpers_useValidation as useValidation };
}

declare const useSomeHook: () => void;

declare const Hooks_useSomeHook: typeof useSomeHook;
declare namespace Hooks {
  export { Hooks_useSomeHook as useSomeHook };
}

declare const assets: typeof Assets;
declare const components: typeof Components;
declare const helpers: typeof Helpers;
declare const hooks: typeof Hooks;
declare const types: typeof Types;

export { assets, components, helpers, hooks, types };
