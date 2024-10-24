import { createContext, useContext, useEffect, useState } from "react";
import { ExportToExcel, Search, Summary, TableHead, TableRow, TableBody, useFilter, useSearch, useSort } from "./utils";
import { TableProps, TableProvider } from "../../types";
import { TObject } from "akeyless-types-commons";

export const TableContext = createContext<(TableProps & TableProvider) | null>(null);

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must be used within a Table component");
    }
    return context;
};
export const Table = (props: TableProps) => {
    const {
        // basic props
        data,
        headers,
        optionalElement,
        keysToRender = [],
        lang = "en",
        onRowClick = (data) => {},
        // container styles props
        containerStyle = {},
        containerClassName = "",
        tableContainerClass = "",
        tableContainerStyle = {},
        tableStyle = {},
        rowStyles = {},
        cellStyle = {},
        // header styles
        headerStyle = {},
        headerCellStyle,
        searchInputStyle = {},
        searchInputClassName = "",
        // search
        includeSearch,
        searchPlaceHolder = "Search in table ...",
        // sort
        sortKeys,
        sort_label = "Sort by",
        // filter
        filterableColumns = [],
        filterLabel = "Filter by",
        // export to excel
        exportToExcelKeys,
        dataToAddToExcelTable,
        export_excel_label = "Export to excel",
        excelFileName,
        // summary
        sumColumns,
        summaryLabel = "",
        summaryContainerStyle = {},
        summaryLabelStyle = {},
        summaryRowStyle = {},
    } = props;
    // rendered data
    const [dataToRender, setDataToRender] = useState<TObject<any>[]>(data);
    //
    const { sortColumn, sortOrder, handleSort } = useSort();
    const { searchQuery, handleSearch } = useSearch();
    const { filters, filterPopupsDisplay, filterOptions, handleFilterChange, handleFilterClick } = useFilter({
        data,
        dataToRender,
        setDataToRender,
        filterableColumns,
        includeSearch,
        searchQuery,
        sortColumn,
        sortOrder,
        keysToRender,
        sortKeys,
    });
    console.log("table rendered");
    const providerValues = {
        ...props,
        sortColumn,
        sortOrder,
        handleSort,
        searchQuery,
        handleSearch,
        dataToRender,
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
    };
    return (
        <TableContext.Provider value={providerValues}>
            {
                <div className={`flex flex-col gap-2  ${containerClassName}`} style={containerStyle}>
                    {/* container header */}
                    <div className="flex justify-start gap-2 ">
                        {/* search */}
                        {includeSearch && <Search />}
                        {/* export to excel */}
                        {exportToExcelKeys && <ExportToExcel />}
                        {/* optional element */}
                        {optionalElement && optionalElement}
                    </div>
                    {/* table */}
                    <div style={tableContainerStyle} className={`animate-slide-in-up overflow-y-auto  ${tableContainerClass}`}>
                        <table style={tableStyle} className="min-w-full text-sm font-light relative">
                            <TableHead />
                            <TableBody />
                        </table>
                    </div>
                    {/* summary */}
                    {sumColumns && <Summary />}
                </div>
            }
        </TableContext.Provider>
    );
};
