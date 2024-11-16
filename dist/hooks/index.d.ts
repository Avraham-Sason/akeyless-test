import * as zustand from 'zustand';
import { T as TableProps, a as TableProviderType, U as UseFilterProps, S as SortOptions } from '../tables-w6Z3LoIM.js';
import { TObject } from 'akeyless-types-commons';
import 'react';

declare function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string): void;

declare const useTableContext: () => TableProps & TableProviderType;
declare const useFilter: ({ data, dataToRender, setDataToRender, filterableColumns, includeSearch, searchQuery, keysToRender, sortColumn, sortOrder, sortKeys, }: UseFilterProps) => {
    filters: TObject<string[]>;
    filterPopupsDisplay: string;
    filterOptions: Record<string, any[]>;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
};
declare const useSort: () => {
    sortColumn: number;
    sortOrder: SortOptions;
    handleSort: (columnIndex: number) => void;
};
declare const useSearch: () => {
    searchQuery: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const useCreateTableStore: () => zustand.UseBoundStore<zustand.StoreApi<any>>;

export { useCreateTableStore, useFilter, useSafeEffect, useSearch, useSort, useTableContext };
