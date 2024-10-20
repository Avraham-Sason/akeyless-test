import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import { exportToExcelSvg } from "../../assets";
import { getFixedNumber, TableHeader, TableRow } from "./utils";
import { TableProps } from "../../types";

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
