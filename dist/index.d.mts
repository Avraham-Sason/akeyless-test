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

declare const Table: ({ data, headers, searchElement, keysToRender, headerCellStyle, rowStyles, cellStyle, tableContainerClass, tableContainerStyle, headerStyle, tableStyle, containerStyle, containerClassName, searchInputStyle, searchInputClassName, filterableColumns, sortKeys, exportToExcelKeys, dataToAddToExcelTable, sumColumns, includeSearch, excelFileName, summaryLabel, summaryContainerStyle, summaryLabelStyle, summaryRowStyle, searchPlaceHolder, filter_label, sort_label, export_excel_label, onRowClick, lang, }: TableProps) => react_jsx_runtime.JSX.Element;
declare const getFixedNumber: (number?: number, fix?: number) => string;

declare const sortSvg: (upside_down?: boolean) => react_jsx_runtime.JSX.Element;
declare const emptyFilterSvg: (solid?: boolean) => react_jsx_runtime.JSX.Element;
declare const slashFilterSvg: (solid?: boolean) => react_jsx_runtime.JSX.Element;
declare const exportToExcelSvg: () => react_jsx_runtime.JSX.Element;

declare const Components_Button: typeof Button;
declare const Components_Checkbox: typeof Checkbox;
type Components_FilterProps = FilterProps;
declare const Components_Table: typeof Table;
type Components_TableCellProps = TableCellProps;
type Components_TableHeaderProps = TableHeaderProps;
type Components_TableProps = TableProps;
type Components_TableRowProps = TableRowProps;
declare const Components_emptyFilterSvg: typeof emptyFilterSvg;
declare const Components_exportToExcelSvg: typeof exportToExcelSvg;
declare const Components_getFixedNumber: typeof getFixedNumber;
declare const Components_slashFilterSvg: typeof slashFilterSvg;
declare const Components_sortSvg: typeof sortSvg;
declare namespace Components {
  export { Components_Button as Button, Components_Checkbox as Checkbox, type Components_FilterProps as FilterProps, Components_Table as Table, type Components_TableCellProps as TableCellProps, type Components_TableHeaderProps as TableHeaderProps, type Components_TableProps as TableProps, type Components_TableRowProps as TableRowProps, Components_emptyFilterSvg as emptyFilterSvg, Components_exportToExcelSvg as exportToExcelSvg, Components_getFixedNumber as getFixedNumber, Components_slashFilterSvg as slashFilterSvg, Components_sortSvg as sortSvg };
}

declare const components: typeof Components;

export { components };
