// Table.tsx
import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { emptyFilterSvg, slashFilterSvg, sortSvg, exportToExcelSvg } from "../../assets";
import { TableProps, FilterProps, TableHeaderProps, TableRowProps, TableCellProps } from "../../types";

const TableContext = createContext<any | null>(null);
const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must be used within a Table component");
    }
    return context;
};

const Table = ({
    data,
    headers,
    searchElement,
    keysToRender = [],
    headerCellStyle,
    rowStyles = {},
    cellStyle = {},
    tableContainerClass = "",
    tableContainerStyle = {},
    headerStyle = {},
    tableStyle = {},
    containerStyle = {},
    containerClassName = "",
    searchInputStyle = {},
    searchInputClassName = "",
    filterableColumns = [],
    sortKeys,
    exportToExcelKeys,
    dataToAddToExcelTable,
    sumColumns,
    includeSearch,
    excelFileName,
    summaryLabel = "",
    summaryContainerStyle = {},
    summaryLabelStyle = {},
    summaryRowStyle = {},
    searchPlaceHolder = "Search in table ...",
    filter_label = "Filter by",
    sort_label = "Sort by",
    export_excel_label = "Export to excel",
    onRowClick = (data) => {},
    lang = "en",
    children,
}: TableProps & { children: ReactNode }) => {
    // State management
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
    const [filteredData, setFilteredData] = useState(data);

    const initialFilters = useMemo(() => {
        return filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
    }, [filterableColumns]);

    const [filters, setFilters] = useState<Record<string, string[]>>(initialFilters);
    const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");

    // Initialize filter options
    const filterOptions = useMemo(() => {
        return filterableColumns.reduce((acc: Record<string, any[]>, col) => {
            acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
            return acc;
        }, {});
    }, [data, filterableColumns]);

    // Effect to filter data
    useEffect(() => {
        let filtered = data;
        // Search filtering
        if (includeSearch && searchQuery) {
            filtered = filtered.filter((item) => keysToRender.some((key) => item[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())));
        }

        // Column filters
        if (filterableColumns.length > 0) {
            Object.keys(filters).forEach((key) => {
                if (filters[key].length > 0) {
                    filtered = filtered.filter((item) => filters[key].includes(item[key]));
                }
            });
        }

        // Sorting
        if (sortColumn !== null && sortOrder !== null && sortKeys?.length) {
            filtered = [...filtered].sort((a, b) => {
                const key = sortKeys[sortColumn];
                const aValue = a[key];
                const bValue = b[key];

                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }

        setFilteredData(filtered);
    }, [searchQuery, sortColumn, sortOrder, filters, data, keysToRender, includeSearch, filterableColumns, sortKeys]);

    const contextValue = {
        searchQuery,
        setSearchQuery,
        sortColumn,
        setSortColumn,
        sortOrder,
        setSortOrder,
        filteredData,
        setFilteredData,
        filters,
        setFilters,
        filterPopupsDisplay,
        setFilterPopupsDisplay,
        filterOptions,
        data,
        headers,
        searchElement,
        keysToRender,
        headerCellStyle,
        rowStyles,
        cellStyle,
        tableContainerClass,
        tableContainerStyle,
        headerStyle,
        tableStyle,
        searchInputStyle,
        searchInputClassName,
        filterableColumns,
        sortKeys,
        exportToExcelKeys,
        dataToAddToExcelTable,
        sumColumns,
        includeSearch,
        excelFileName,
        summaryLabel,
        summaryContainerStyle,
        summaryLabelStyle,
        summaryRowStyle,
        searchPlaceHolder,
        filter_label,
        sort_label,
        export_excel_label,
        onRowClick,
        lang,
    };

    return (
        <TableContext.Provider value={contextValue}>
            <div className={`flex flex-col gap-2 ${containerClassName}`} style={containerStyle}>
                {children}
            </div>
        </TableContext.Provider>
    );
};

export const Filter = ({
    index,
    filterableColumn,
}: {
    index: number;
    filterableColumn?: { header: string; dataKey: string; ui?: (option: any) => ReactNode };
}) => {
    const { handleFilterClick, filterPopupsDisplay, filterOptions, filters, onFilterChange, filter_label, lang, headers } = useTableContext();
    const displayRight = (lang === "he" && index === headers.length - 1) || (lang === "en" && index !== headers.length - 1);
    return (
        <>
            {filterableColumn && (
                <>
                    {/* filter button */}
                    <button
                        title={filter_label + " " + filterableColumn.header}
                        className="absolute top-1 right-1 text-[12px]"
                        onClick={() => handleFilterClick(filterableColumn.dataKey)}
                    >
                        {filterPopupsDisplay === filterableColumn.dataKey ? (
                            <>{filters[filterableColumn.dataKey]?.length > 0 ? <>{slashFilterSvg(true)}</> : <>{emptyFilterSvg(true)}</>}</>
                        ) : (
                            <>{filters[filterableColumn.dataKey]?.length > 0 ? <>{slashFilterSvg()}</> : <>{emptyFilterSvg()}</>}</>
                        )}
                    </button>
                    {/* filter popup */}
                    {filterPopupsDisplay === filterableColumn.dataKey && (
                        <div
                            className={`absolute z-10 top-1 ${displayRight ? "right-[-165px]" : "left-[-80px]"}
                              w-40 h-32 bg-white p-1 flex flex-col items-center gap-2 shadow`}
                        >
                            <div className="text-start border-black border-b-[1px] w-[90%]">{filter_label + " " + filterableColumn.header}</div>
                            <div className="overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ">
                                {filterOptions[filterableColumn.dataKey]?.map((option, i) => (
                                    <div key={i} className="flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white">
                                        <input
                                            type="checkbox"
                                            className="cursor-pointer"
                                            checked={filters[filterableColumn.dataKey]?.includes(option)}
                                            onChange={() => onFilterChange(filterableColumn.dataKey, option)}
                                        />
                                        <button className="flex-1 text-start px-2" onClick={() => onFilterChange(filterableColumn.dataKey, option)}>
                                            {filterableColumn.ui ? filterableColumn.ui(option) : option}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export const TableHeader = () => {
    const {
        headers,
        headerStyle,
        headerCellStyle,
        onSort,
        sortColumn,
        sortOrder,
        filterableColumns = [],
        sortDisplay,
        sort_label,
    } = useTableContext();
    return (
        <thead className="bg-gray-50 sticky top-0">
            <tr style={headerStyle}>
                {headers.map((header, index) => {
                    const filterableColumn = filterableColumns.find((col) => col.header === header);
                    return (
                        <th
                            title={sortDisplay ? `${sort_label} ${header}` : header}
                            style={headerCellStyle}
                            key={index}
                            className=" border-black border-[1px] max-w-[130px] px-2 text-center relative"
                        >
                            {/* header value */}
                            <div className={`px-2 ${sortDisplay ? "cursor-pointer" : ""}`} onClick={() => sortDisplay && onSort(index)}>
                                {header}
                            </div>
                            {/* sort */}
                            {sortDisplay && sortColumn === index && (sortOrder === "asc" ? <>{sortSvg()}</> : <>{sortSvg(true)}</>)}
                            {/* filter */}
                            <Filter filterableColumn={filterableColumn} index={index} />
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export const TableRow = ({ item, rowStyles, cellStyle, keysToRender = [], onRowClick }: TableRowProps) => (
    <tr onClick={() => onRowClick(item)} style={rowStyles}>
        {keysToRender.map((key, index) => (
            <TableCell cellStyle={cellStyle} key={index} value={item[key]} />
        ))}
    </tr>
);

export const TableCell = ({ value, cellStyle }: TableCellProps) => (
    <td
        title={["string", "number", "boolean"].includes(typeof value) ? value : ""}
        style={cellStyle}
        className="chivo ellipsis border-black border-[1px] max-w-[90px] px-[4px] text-center"
    >
        {value}
    </td>
);

export const getFixedNumber = (number = 0, fix = 4) => {
    const sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};

export default Table;
