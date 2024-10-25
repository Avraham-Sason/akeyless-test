import { TObject } from 'akeyless-types-commons';
import { ReactNode } from 'react';

interface TableProviderType {
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
    children: ReactNode;
}
interface SummaryProps {
    sumColumns: {
        label: string;
        dataKey: string;
        ui?: (value: string | number) => ReactNode;
    }[];
    dataToRender: Record<string, any>[];
    summaryLabel?: string;
    summaryLabelStyle?: React.CSSProperties;
    summaryRowStyle?: React.CSSProperties;
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

export type { BaseElementProps, ConfirmFormProps, DatePickerProps, Direction, FilterProps, InputContainerProps, InputElement, ModularFormProps, SelectContainerProps, SelectElement, SummaryProps, TableCellProps, TableHeaderProps, TableProps, TableProviderType, TableRowProps };
