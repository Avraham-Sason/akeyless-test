import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { SetStateAction, ReactNode } from 'react';
import { TObject } from 'akeyless-types-commons';

interface CheckBoxProps {
    id: string;
    checked: boolean;
    setChecked: React__default.Dispatch<SetStateAction<boolean>>;
    style?: React__default.CSSProperties;
    rotate: boolean;
}
declare const Checkbox: ({ id, checked, setChecked, rotate, style }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

interface TableProvider {
    sortColumn: number;
    sortOrder: "asc" | "desc";
    handleSort: (columnIndex: number) => void;
    searchQuery: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataToRender: TObject<any>[];
    filters: TObject<string[]>;
    filterPopupsDisplay: string;
    filterOptions: any;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
}
interface FilterProps {
    index: number;
    filterableColumn: {
        header: string;
        dataKey: string;
        ui?: (option: any) => ReactNode;
    };
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
    optionalElement?: ReactNode;
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

declare const useSort: () => {
    sortColumn: number;
    sortOrder: "asc" | "desc";
    handleSort: (columnIndex: number) => void;
};
declare const useSearch: () => {
    searchQuery: string;
    handleSearch: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
};
declare const useFilter: ({ data, dataToRender, setDataToRender, filterableColumns, includeSearch, searchQuery, keysToRender, sortColumn, sortOrder, sortKeys, }: {
    data: any;
    dataToRender: any;
    setDataToRender: any;
    filterableColumns: any;
    includeSearch: any;
    searchQuery: any;
    keysToRender: any;
    sortColumn: any;
    sortOrder: any;
    sortKeys: any;
}) => {
    filters: TObject<string[]>;
    filterPopupsDisplay: string;
    filterOptions: any;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
};
declare const useExportToExcel: ({ excelFileName, exportToExcelKeys, dataToAddToExcelTable, dataToRender, headers, sumColumns }: {
    excelFileName: any;
    exportToExcelKeys: any;
    dataToAddToExcelTable: any;
    dataToRender: any;
    headers: any;
    sumColumns: any;
}) => {
    onExportExcelClick: () => Promise<void>;
};
declare const Filter: ({ filterableColumn, index }: FilterProps) => react_jsx_runtime.JSX.Element;
declare const TableHead: () => react_jsx_runtime.JSX.Element;
declare const TableRow: ({ item, rowStyles, cellStyle, keysToRender, onRowClick }: TableRowProps) => react_jsx_runtime.JSX.Element;
declare const TableCell: ({ value, cellStyle }: TableCellProps) => react_jsx_runtime.JSX.Element;
declare const getFixedNumber: (number?: number, fix?: number) => string;
declare const ExportToExcel: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const Search: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const Summary: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const TableBody: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;

declare const TableContext: React$1.Context<TableProps & TableProvider>;
declare const useTableContext: () => TableProps & TableProvider;
declare const Table: (props: TableProps) => react_jsx_runtime.JSX.Element;

interface LoaderProps {
    color?: string;
    size?: number;
    style?: React__default.CSSProperties;
    className?: string;
}
declare const Loader: React__default.FC<LoaderProps>;

declare const InputContainer: ({ name, inputType, labelContent, defaultValue, validationName, containerClassName, labelClassName, elementClassName, required, validationType, onKeyDown, }: InputContainerProps) => react_jsx_runtime.JSX.Element;
declare const SelectContainer: ({ name, labelContent, containerClassName, labelClassName, defaultValue, elementClassName, optionClassName, required, options, }: SelectContainerProps) => react_jsx_runtime.JSX.Element;
declare const ModularForm: ({ submitFunction, elements, headerContent, buttonContent, formClassName, headerClassName, direction, }: ModularFormProps) => react_jsx_runtime.JSX.Element;
declare const ConfirmForm: ({ onV, onX, headline, direction }: ConfirmFormProps) => react_jsx_runtime.JSX.Element;
declare const DatePicker: ({ submit, formClassName, labelsClassName, inputsClassName, buttonClassName, buttonStyle, defaultFrom, defaultTo, direction, fromText, toText, buttonText, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

export { Checkbox, ConfirmForm, DatePicker, ExportToExcel, Filter, InputContainer, Loader, ModularForm, Search, SelectContainer, Summary, Table, TableBody, TableCell, TableContext, TableHead, TableRow, getFixedNumber, useExportToExcel, useFilter, useSearch, useSort, useTableContext };
