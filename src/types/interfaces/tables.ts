import { ReactNode } from "react";

export interface TableHeaderProps {
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
    filterableColumns?: { header: string; dataKey: string; ui?: (option: any) => ReactNode }[];
    filterPopupsDisplay: string;
    sortDisplay: boolean;
    filter_label: string;
    sort_label: string;
    setFilterPopupsDisplay: React.Dispatch<React.SetStateAction<string>>;
}
export interface FilterProps {
    index: number;
    filter_label: string;
    filterableColumn?: { header: string; dataKey: string; ui?: (option: any) => ReactNode };
    handleFilterClick: (dataKey: string) => void;
    filterPopupsDisplay: string;
    filterOptions: Record<string, any[]>;
    filters: Record<string, any[]>;
    onFilterChange: (dataKey: string, value: string) => void;
    lang: "en" | "he";
    headers: string[];
}
export interface TableRowProps {
    item: Record<string, any>;
    rowStyles?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
    keysToRender: string[];
    onRowClick: (data?: any) => void;
}
export interface TableCellProps {
    value: any;
    cellStyle?: React.CSSProperties;
}
export interface TableProps {
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
    filterableColumns?: { header: string; dataKey: string; ui?: (value: any) => ReactNode }[];
    sortKeys?: string[];
    exportToExcelKeys?: string[];
    excelFileName?: string;
    dataToAddToExcelTable?: { key: string; value: any; header: string }[];
    sumColumns?: { label: string; dataKey: string; ui?: (value: any) => ReactNode }[];
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

export interface SummaryProps {
    sumColumns: { label: string; dataKey: string; ui?: (value: string | number) => ReactNode }[];
    filteredData: Record<string, any>[];
    summaryLabel?: string;
    summaryLabelStyle?: React.CSSProperties;
    summaryRowStyle?: React.CSSProperties;
}
