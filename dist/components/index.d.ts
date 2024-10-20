import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { SetStateAction, ReactNode } from 'react';

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
    filterLabel: string;
    sort_label: string;
}
interface FilterProps {
    index: number;
    filterLabel: string;
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
    filterLabel?: string;
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
    fromText?: string;
    toText?: string;
    buttonText?: string;
}

declare const Filter: ({ filterableColumn, handleFilterClick, filterPopupsDisplay, index, filterOptions, filters, onFilterChange, filterLabel, lang, headers, }: FilterProps) => react_jsx_runtime.JSX.Element;
declare const TableHeader: ({ headers, headerStyle, headerCellStyle, onSort, sortColumn, sortOrder, onFilterChange, filters, filterOptions, filterableColumns, filterPopupsDisplay, lang, handleFilterClick, sortDisplay, filterLabel, sort_label, }: TableHeaderProps) => react_jsx_runtime.JSX.Element;
declare const TableRow: ({ item, rowStyles, cellStyle, keysToRender, onRowClick }: TableRowProps) => react_jsx_runtime.JSX.Element;
declare const TableCell: ({ value, cellStyle }: TableCellProps) => react_jsx_runtime.JSX.Element;
declare const getFixedNumber: (number?: number, fix?: number) => string;
declare const ExportToExcel: ({ exportToExcelKeys, dataToAddToExcelTable, excelFileName, filteredData, headers, sumColumns, export_excel_label }: {
    exportToExcelKeys: any;
    dataToAddToExcelTable: any;
    excelFileName: any;
    filteredData: any;
    headers: any;
    sumColumns: any;
    export_excel_label: any;
}) => react_jsx_runtime.JSX.Element;

declare const Table: ({ data, headers, searchElement, keysToRender, lang, onRowClick, containerStyle, containerClassName, tableContainerClass, tableContainerStyle, tableStyle, rowStyles, cellStyle, headerStyle, headerCellStyle, searchInputStyle, searchInputClassName, includeSearch, searchPlaceHolder, sortKeys, sort_label, filterableColumns, filterLabel, exportToExcelKeys, dataToAddToExcelTable, export_excel_label, excelFileName, sumColumns, summaryLabel, summaryContainerStyle, summaryLabelStyle, summaryRowStyle, }: TableProps) => react_jsx_runtime.JSX.Element;
declare const useSort: () => {
    sortColumn: number;
    sortOrder: "asc" | "desc";
    handleSort: (columnIndex: number) => void;
};
declare const useSearch: () => {
    searchQuery: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const useFilter: ({ data, filterableColumns, includeSearch, searchQuery, keysToRender, sortColumn, sortOrder, sortKeys }: {
    data: any;
    filterableColumns: any;
    includeSearch: any;
    searchQuery: any;
    keysToRender: any;
    sortColumn: any;
    sortOrder: any;
    sortKeys: any;
}) => {
    filteredData: Record<string, any>[];
    filters: Record<string, string[]>;
    filterPopupsDisplay: string;
    filterOptions: any;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
};
declare const useExportToExcel: ({ excelFileName, exportToExcelKeys, dataToAddToExcelTable, filteredData, headers, sumColumns }: {
    excelFileName: any;
    exportToExcelKeys: any;
    dataToAddToExcelTable: any;
    filteredData: any;
    headers: any;
    sumColumns: any;
}) => {
    onExportExcelClick: () => Promise<void>;
};

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
declare const DatePicker: ({ submit, formClassName, labelsClassName, inputsClassName, buttonClassName, buttonStyle, defaultFrom, defaultTo, direction, fromText, toText, buttonText, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { Checkbox, ConfirmForm, DatePicker, ExportToExcel, Filter, InputContainer, Loader, ModularForm, SelectContainer, Table, TableCell, TableHeader, TableRow, getFixedNumber, useExportToExcel, useFilter, useSearch, useSort };
