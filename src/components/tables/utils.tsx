import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import { emptyFilterSvg, exportToExcelSvg, slashFilterSvg, sortSvg } from "./assets";
import { FilterProps, TableCellProps, TableHeaderProps, TableProps, TableRowProps } from "../../types";

const Filter = ({
    filterableColumn,
    handleFilterClick,
    filterPopupsDisplay,
    index,
    filterOptions,
    filters,
    onFilterChange,
    filter_label,
    lang,
    headers,
}: FilterProps) => {
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

const TableHeader = ({
    headers,
    headerStyle,
    headerCellStyle,
    onSort,
    sortColumn,
    sortOrder,
    onFilterChange,
    clearFilter,
    filters,
    filterOptions,
    filterableColumns = [],
    filterPopupsDisplay,
    setFilterPopupsDisplay,
    lang,
    handleFilterClick,
    sortDisplay,
    filter_label,
    sort_label,
}: TableHeaderProps) => {
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
                            <Filter
                                lang={lang}
                                headers={headers}
                                filter_label={filter_label}
                                filterOptions={filterOptions}
                                filterPopupsDisplay={filterPopupsDisplay}
                                filterableColumn={filterableColumn}
                                filters={filters}
                                handleFilterClick={handleFilterClick}
                                index={index}
                                onFilterChange={onFilterChange}
                            />
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

const TableRow = ({ item, rowStyles, cellStyle, keysToRender = [], onRowClick }: TableRowProps) => (
    <tr onClick={() => onRowClick(item)} style={rowStyles}>
        {keysToRender.map((key, index) => (
            <TableCell cellStyle={cellStyle} key={index} value={item[key]} />
        ))}
    </tr>
);

const TableCell = ({ value, cellStyle }: TableCellProps) => (
    <td
        title={["string", "number", "boolean"].includes(typeof value) ? value : ""}
        style={cellStyle}
        className="chivo ellipsis border-black border-[1px] max-w-[90px] px-[4px] text-center"
    >
        {value}
    </td>
);

export const Table = ({
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
}: TableProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortColumn, setSortColumn] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
    const [filteredData, setFilteredData] = useState<Record<string, any>[]>(data);
    const initFilter = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
    const [filters, setFilters] = useState<Record<string, string[]>>(initFilter);
    const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");
    const filterOptions = filterableColumns.reduce((acc: Record<string, any[]>, col) => {
        acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
        return acc;
    }, {});
    useEffect(() => {
        let filtered = filteredData;
        if (includeSearch) {
            filtered = data.filter((item) => keysToRender.some((key) => item[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())));
        }
        if (filterableColumns.length > 0) {
            Object.keys(filters).forEach((key) => {
                if (filters[key].length > 0) {
                    filtered = filtered.filter((item) => filters[key].includes(item[key]));
                }
            });
        }
        if (sortColumn !== null && sortOrder !== null && sortKeys?.length) {
            filtered = filtered.sort((a, b) => {
                const key = sortKeys[sortColumn];
                console.log("data", a);
                console.log("key", key);
                console.log("value", a[key]);

                const aValue = a[sortKeys[sortColumn]];
                const bValue = b[sortKeys[sortColumn]];

                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }
        setFilteredData(filtered);
    }, [searchQuery, sortColumn, sortOrder, filters, data]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSort = (columnIndex: number) => {
        let newSortOrder: "asc" | "desc" = "asc";
        if (sortColumn === columnIndex && sortOrder === "asc") {
            newSortOrder = "desc";
        }
        setSortColumn(columnIndex);
        setSortOrder(newSortOrder);
    };

    const handleFilterChange = (dataKey: string, value: string) => {
        const newFilters = { ...filters };
        if (newFilters[dataKey].includes(value)) {
            newFilters[dataKey] = newFilters[dataKey].filter((item) => item !== value);
        } else {
            newFilters[dataKey].push(value);
        }
        setFilters(newFilters);
    };

    const clearFilter = () => {
        setFilters(initFilter);
    };

    const addPropertiesToExcel = (properties: { key: string; value: any; header: string }[]) => {
        let newData = [...filteredData];
        let newHeaders = [...headers];
        properties.forEach((val) => {
            newHeaders.unshift(val.header);
            newData = newData.map((v) => ({ ...v, [val.key]: val.value }));
        });
        return { data: newData, headers: newHeaders };
    };
    const onExportExcelClick = async (): Promise<void> => {
        if (exportToExcelKeys) {
            // create worksheet
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet("Sheet1");
            const dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : { data: filteredData, headers };
            // add rows
            worksheet.addRow(dataToExport.headers);
            dataToExport.data.forEach((item: Record<string, any>) => {
                const row = exportToExcelKeys.map((key: string) => item[key]);
                worksheet.addRow(row);
            });
            // summary
            if (sumColumns) {
                sumColumns.forEach((val) => {
                    const sumRow = worksheet.addRow([]);
                    sumRow.getCell(1).value = val.label;
                    const value = filteredData
                        .reduce((acc, v) => {
                            return acc + Number(v[val.dataKey]) || 0;
                        }, 0)
                        .toFixed(2);
                    sumRow.getCell(2).value = value;
                });
            }
            // download file
            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            saveAs(blob, `${excelFileName || "table_data"}.xlsx`);
        }
    };

    const handleFilterClick = (dataKey: string) => {
        setFilterPopupsDisplay((prev) => {
            if (prev === dataKey) {
                clearFilter();
                return "";
            }
            return dataKey;
        });
    };
    return (
        <div className={`flex flex-col gap-2  ${containerClassName}`} style={containerStyle}>
            {/* head container */}
            {
                <div className="flex justify-start gap-2 ">
                    {/* search */}
                    {includeSearch && (
                        <input
                            className={`w-40 border-black border-[1px] px-2 rounded-md ${searchInputClassName}`}
                            type="text"
                            placeholder={searchPlaceHolder}
                            value={searchQuery}
                            onChange={handleSearch}
                            style={searchInputStyle}
                        />
                    )}
                    {/* export to excel */}
                    {exportToExcelKeys && (
                        <button
                            onClick={onExportExcelClick}
                            title={export_excel_label}
                            className="px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]"
                        >
                            {exportToExcelSvg()}
                        </button>
                    )}
                    {/* some element */}
                    {searchElement && searchElement}
                </div>
            }
            {/* table */}
            <div style={tableContainerStyle} className={`animate-slide-in-up overflow-y-auto  ${tableContainerClass}`}>
                <table style={tableStyle} className="min-w-full text-sm font-light relative">
                    <TableHeader
                        lang={lang}
                        filter_label={filter_label}
                        sort_label={sort_label}
                        headers={headers}
                        headerStyle={headerStyle}
                        headerCellStyle={headerCellStyle}
                        // sort
                        sortDisplay={Boolean(sortKeys)}
                        onSort={handleSort}
                        sortColumn={sortColumn}
                        sortOrder={sortOrder}
                        // filters
                        filters={filters}
                        filterOptions={filterOptions}
                        filterableColumns={filterableColumns}
                        filterPopupsDisplay={filterPopupsDisplay}
                        setFilterPopupsDisplay={setFilterPopupsDisplay}
                        clearFilter={clearFilter}
                        onFilterChange={handleFilterChange}
                        handleFilterClick={handleFilterClick}
                    />
                    <tbody onClick={() => handleFilterClick("")}>
                        {filteredData.map((item, index) => (
                            <TableRow
                                onRowClick={onRowClick}
                                keysToRender={keysToRender}
                                rowStyles={rowStyles}
                                cellStyle={cellStyle}
                                key={index}
                                item={item}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {/* summary */}
            {sumColumns && (
                <div style={summaryContainerStyle} className="w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold">
                    <div style={summaryLabelStyle}>{summaryLabel}</div>
                    <div style={summaryRowStyle} className="flex gap-3">
                        {sumColumns.map((val) => {
                            const sum_res = filteredData.reduce((acc, v) => acc + Number(v[val.dataKey]) || 0, 0);
                            const sum_value = getFixedNumber(sum_res);
                            return (
                                <div key={val.dataKey + val.label} className="flex gap-1 justify-start">
                                    <div>{val.label}</div>
                                    <span>:</span>
                                    <div>{val.ui ? val.ui(sum_value) : sum_value}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export const getFixedNumber = (number = 0, fix = 4) => {
    const sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};
