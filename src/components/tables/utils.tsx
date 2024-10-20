import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import { emptyFilterSvg, slashFilterSvg, sortSvg } from "../../assets";
import { FilterProps, TableCellProps, TableHeaderProps, TableRowProps } from "../../types";

export const Filter = ({
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

export const TableHeader = ({
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

// export const ExportExcel = ({exportToExcelKeys,dataToAddToExcelTable}) => {
//     const addPropertiesToExcel = (properties: { key: string; value: any; header: string }[]) => {
//         let newData = [...filteredData];
//         let newHeaders = [...headers];
//         properties.forEach((val) => {
//             newHeaders.unshift(val.header);
//             newData = newData.map((v) => ({ ...v, [val.key]: val.value }));
//         });
//         return { data: newData, headers: newHeaders };
//     };
//     const onExportExcelClick = async (): Promise<void> => {
//         if (exportToExcelKeys) {
//             // create worksheet
//             const workbook = new ExcelJS.Workbook();
//             const worksheet = workbook.addWorksheet("Sheet1");
//             const dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : { data: filteredData, headers };
//             // add rows
//             worksheet.addRow(dataToExport.headers);
//             dataToExport.data.forEach((item: Record<string, any>) => {
//                 const row = exportToExcelKeys.map((key: string) => item[key]);
//                 worksheet.addRow(row);
//             });
//             // summary
//             if (sumColumns) {
//                 sumColumns.forEach((val) => {
//                     const sumRow = worksheet.addRow([]);
//                     sumRow.getCell(1).value = val.label;
//                     const value = filteredData
//                         .reduce((acc, v) => {
//                             return acc + Number(v[val.dataKey]) || 0;
//                         }, 0)
//                         .toFixed(2);
//                     sumRow.getCell(2).value = value;
//                 });
//             }
//             // download file
//             const buffer = await workbook.xlsx.writeBuffer();
//             const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
//             saveAs(blob, `${excelFileName || "table_data"}.xlsx`);
//         }
//     };
//     return (
//         <button
//             onClick={onExportExcelClick}
//             title={export_excel_label}
//             className="px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]"
//         >
//             {exportToExcelSvg()}
//         </button>
//     )}
// }