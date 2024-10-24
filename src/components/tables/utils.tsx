import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import React, { useState, useEffect, memo, createContext, useContext, useMemo } from "react";
import { emptyFilterSvg, exportToExcelSvg, slashFilterSvg, sortSvg } from "../../assets";
import { FilterProps, TableCellProps, TableHeaderProps, TableProps, TableRowProps } from "../../types";
import { useTableContext } from "./Table";
import { TObject } from "akeyless-types-commons";

export const useSort = () => {
    const [sortColumn, setSortColumn] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
    const handleSort = (columnIndex: number) => {
        let newSortOrder: "asc" | "desc" = "asc";
        if (sortColumn === columnIndex && sortOrder === "asc") {
            newSortOrder = "desc";
        }
        setSortColumn(columnIndex);
        setSortOrder(newSortOrder);
    };
    return { sortColumn, sortOrder, handleSort };
};
export const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    return { searchQuery, handleSearch };
};

export const useFilter = ({
    data,
    dataToRender,
    setDataToRender,
    filterableColumns,
    includeSearch,
    searchQuery,
    keysToRender,
    sortColumn,
    sortOrder,
    sortKeys,
}) => {
    const initFilter = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
    const [filters, setFilters] = useState<TObject<string[]>>(initFilter);
    const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");
    const filterOptions = filterableColumns.reduce((acc: Record<string, any[]>, col) => {
        acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
        return acc;
    }, {});
    useEffect(() => {
        let filtered = dataToRender;
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
                const aValue = a[sortKeys[sortColumn]];
                const bValue = b[sortKeys[sortColumn]];
                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }
        setDataToRender(filtered);
    }, [searchQuery, sortColumn, sortOrder, filters, data]);

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
    const handleFilterClick = (dataKey: string) => {
        setFilterPopupsDisplay((prev) => {
            if (prev === dataKey) {
                clearFilter();
                return "";
            }
            return dataKey;
        });
    };
    return {
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
    };
};

export const useExportToExcel = ({ excelFileName, exportToExcelKeys, dataToAddToExcelTable, dataToRender, headers, sumColumns }) => {
    const addPropertiesToExcel = (properties: { key: string; value: any; header: string }[]) => {
        let newData = [...dataToRender];
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
            const dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : { data: dataToRender, headers };
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
                    const value = dataToRender
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
    return { onExportExcelClick };
};

export const Filter = ({ filterableColumn, index }: FilterProps) => {
    const { lang, headers, filters, filterOptions, filterPopupsDisplay, handleFilterChange, handleFilterClick, filterLabel } = useTableContext();
    const displayRight = (lang === "he" && index === headers.length - 1) || (lang === "en" && index !== headers.length - 1);
    console.log("filterableColumn", filterableColumn);

    return (
        <>
            {/* filter button */}
            <button
                title={filterLabel + " " + filterableColumn.header}
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
                    <div className="text-start border-black border-b-[1px] w-[90%]">{filterLabel + " " + filterableColumn.header}</div>
                    <div className="overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ">
                        {filterOptions[filterableColumn.dataKey]?.map((option: string, i: number) => (
                            <div key={i} className="flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white">
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                    checked={filters[filterableColumn.dataKey]?.includes(option)}
                                    onChange={() => handleFilterChange(filterableColumn.dataKey, option)}
                                />
                                <button className="flex-1 text-start px-2" onClick={() => handleFilterChange(filterableColumn.dataKey, option)}>
                                    {filterableColumn.ui ? filterableColumn.ui(option) : option}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export const TableHead = () => {
    const {
        headers,
        headerStyle,
        headerCellStyle,
        sortColumn,
        handleSort,
        sortKeys,
        sortOrder,
        filterableColumns = [],
        sort_label,
    } = useTableContext();
    const sortDisplay = useMemo<boolean>(() => Boolean(sortKeys.length), [sortKeys]);
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
                            <div className={`px-2 ${sortDisplay ? "cursor-pointer" : ""}`} onClick={() => sortDisplay && handleSort(index)}>
                                {header}
                            </div>
                            {/* sort */}
                            {sortDisplay && sortColumn === index && (sortOrder === "asc" ? <>{sortSvg()}</> : <>{sortSvg(true)}</>)}
                            {/* filter */}
                            {filterableColumn && <Filter filterableColumn={filterableColumn} index={index} />}
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

export const ExportToExcel = memo(() => {
    const { exportToExcelKeys, dataToAddToExcelTable, excelFileName, dataToRender, headers, sumColumns, export_excel_label } = useTableContext();
    const addPropertiesToExcel = (properties: { key: string; value: any; header: string }[]) => {
        let newData = [...dataToRender];
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
            const dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : { data: dataToRender, headers };
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
                    const value = dataToRender
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
    return (
        <button onClick={onExportExcelClick} title={export_excel_label} className="px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]">
            {exportToExcelSvg()}
        </button>
    );
});

export const Search = memo(() => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { searchPlaceHolder, searchInputClassName, searchInputStyle } = useTableContext();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    return (
        <input
            className={`w-40 border-black border-[1px] px-2 rounded-md ${searchInputClassName}`}
            type="text"
            placeholder={searchPlaceHolder}
            value={searchQuery}
            onChange={handleSearch}
            style={searchInputStyle}
        />
    );
});
export const Summary = memo(() => {
    const { summaryContainerStyle, summaryLabelStyle, summaryLabel, summaryRowStyle, sumColumns, dataToRender } = useTableContext();

    return (
        <div style={summaryContainerStyle} className="w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold">
            <div style={summaryLabelStyle}>{summaryLabel}</div>
            <div style={summaryRowStyle} className="flex gap-3">
                {sumColumns.map((val) => {
                    const sum_res = dataToRender.reduce((acc, v) => acc + Number(v[val.dataKey]) || 0, 0);
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
    );
});
export const TableBody = memo(() => {
    const { handleFilterClick, onRowClick, dataToRender, keysToRender, rowStyles, cellStyle } = useTableContext();
    return (
        <tbody onClick={() => handleFilterClick("")}>
            {dataToRender.map((item, index) => (
                <TableRow onRowClick={onRowClick} keysToRender={keysToRender} rowStyles={rowStyles} cellStyle={cellStyle} key={index} item={item} />
            ))}
        </tbody>
    );
});
