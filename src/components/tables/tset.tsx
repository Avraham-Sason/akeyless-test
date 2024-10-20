// // Table.tsx
// import React, { createContext, useContext, useState, useEffect } from "react";
// import ExcelJS from "exceljs";
// import { saveAs } from "file-saver";
// import { emptyFilterSvg, slashFilterSvg, sortSvg, exportToExcelSvg } from "../../assets";
// import { TableProps, FilterProps, TableContextProps, TableHeaderProps, TableRowProps, TableCellProps, SumColumn } from "../../types";

// // Create a Context for the Table
// const TableContext = createContext<TableContextProps | null>(null);

// const Table = ({
//     data,
//     headers,
//     searchElement,
//     keysToRender = [],
//     headerCellStyle,
//     rowStyles = {},
//     cellStyle = {},
//     tableContainerClass = "",
//     tableContainerStyle = {},
//     headerStyle = {},
//     tableStyle = {},
//     containerStyle = {},
//     containerClassName = "",
//     searchInputStyle = {},
//     searchInputClassName = "",
//     filterableColumns = [],
//     sortKeys,
//     exportToExcelKeys,
//     dataToAddToExcelTable,
//     sumColumns,
//     includeSearch,
//     excelFileName,
//     summaryLabel = "",
//     summaryContainerStyle = {},
//     summaryLabelStyle = {},
//     summaryRowStyle = {},
//     searchPlaceHolder = "Search in table ...",
//     filter_label = "Filter by",
//     sort_label = "Sort by",
//     export_excel_label = "Export to excel",
//     onRowClick = (data) => {},
//     lang = "en",
//     children,
// }: TableProps & { children: React.ReactNode }) => {
//     // State management
//     const [searchQuery, setSearchQuery] = useState("");
//     const [sortColumn, setSortColumn] = useState<number | null>(null);
//     const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
//     const [filteredData, setFilteredData] = useState(data);
//     const [filters, setFilters] = useState<Record<string, string[]>>({});
//     const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");

//     // Initialize filter options
//     const filterOptions = React.useMemo(() => {
//         return filterableColumns.reduce((acc: Record<string, any[]>, col) => {
//             acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
//             return acc;
//         }, {});
//     }, [data, filterableColumns]);

//     // Initialize filters
//     useEffect(() => {
//         const initFilters = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
//         setFilters(initFilters);
//     }, [filterableColumns]);

//     // Effect to filter data
//     useEffect(() => {
//         let filtered = data;

//         // Search filtering
//         if (includeSearch && searchQuery) {
//             filtered = filtered.filter((item) => keysToRender.some((key) => item[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())));
//         }

//         // Column filters
//         if (filterableColumns.length > 0) {
//             Object.keys(filters).forEach((key) => {
//                 if (filters[key].length > 0) {
//                     filtered = filtered.filter((item) => filters[key].includes(item[key]));
//                 }
//             });
//         }

//         // Sorting
//         if (sortColumn !== null && sortOrder !== null && sortKeys?.length) {
//             filtered = [...filtered].sort((a, b) => {
//                 const key = sortKeys[sortColumn];
//                 const aValue = a[key];
//                 const bValue = b[key];

//                 if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//                 if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//                 return 0;
//             });
//         }

//         setFilteredData(filtered);
//     }, [searchQuery, sortColumn, sortOrder, filters, data, keysToRender, includeSearch, filterableColumns, sortKeys]);

//     const contextValue: TableContextProps = {
//         data: filteredData,
//         headers,
//         keysToRender,
//         filterableColumns,
//         sumColumns,
//         sortKeys,
//         exportToExcelKeys,
//         dataToAddToExcelTable,
//         includeSearch,
//         excelFileName,
//         searchElement,
//         searchPlaceHolder,
//         filter_label,
//         sort_label,
//         export_excel_label,
//         summaryLabel,
//         onRowClick,
//         lang,
//         filters,
//         setFilters,
//         filterOptions,
//         filterPopupsDisplay,
//         setFilterPopupsDisplay,
//         searchQuery,
//         setSearchQuery,
//         sortColumn,
//         setSortColumn,
//         sortOrder,
//         setSortOrder,
//         handleSort: (columnIndex: number) => {
//             let newSortOrder: "asc" | "desc" = "asc";
//             if (sortColumn === columnIndex && sortOrder === "asc") {
//                 newSortOrder = "desc";
//             }
//             setSortColumn(columnIndex);
//             setSortOrder(newSortOrder);
//         },
//         handleFilterChange: (dataKey: string, value: string) => {
//             setFilters((prevFilters) => {
//                 const newFilters = { ...prevFilters };
//                 if (newFilters[dataKey].includes(value)) {
//                     newFilters[dataKey] = newFilters[dataKey].filter((item) => item !== value);
//                 } else {
//                     newFilters[dataKey].push(value);
//                 }
//                 return newFilters;
//             });
//         },
//         handleFilterClick: (dataKey: string) => {
//             setFilterPopupsDisplay((prev) => (prev === dataKey ? "" : dataKey));
//         },
//         clearFilter: () => {
//             const initFilters = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
//             setFilters(initFilters);
//         },
//     };

//     return (
//         <TableContext.Provider value={contextValue}>
//             <div className={`flex flex-col gap-2 ${restProps.containerClassName}`} style={restProps.containerStyle}>
//                 {children}
//             </div>
//         </TableContext.Provider>
//     );
// };

// // Sub-components
// Table.Search = () => {
//     const context = useContext(TableContext);
//     if (!context || !context.includeSearch) return null;

//     const { searchQuery, setSearchQuery, searchPlaceHolder, searchElement, searchInputStyle, searchInputClassName } = context;

//     return (
//         <div className="flex justify-start gap-2">
//             <input
//                 className={`w-40 border-black border-[1px] px-2 rounded-md ${searchInputClassName}`}
//                 type="text"
//                 placeholder={searchPlaceHolder}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 style={searchInputStyle}
//             />
//             {searchElement}
//         </div>
//     );
// };

// Table.ExportButton = () => {
//     const context = useContext(TableContext);
//     if (!context || !context.exportToExcelKeys) return null;

//     const { exportToExcelKeys, filteredData, dataToAddToExcelTable, excelFileName, export_excel_label, headers, sumColumns } = context;

//     const onExportExcelClick = async (): Promise<void> => {
//         const workbook = new ExcelJS.Workbook();
//         const worksheet = workbook.addWorksheet("Sheet1");

//         // Prepare data
//         let exportData = filteredData;
//         let exportHeaders = headers;

//         if (dataToAddToExcelTable) {
//             dataToAddToExcelTable.forEach((prop) => {
//                 exportData = exportData.map((item) => ({ [prop.key]: prop.value, ...item }));
//                 exportHeaders = [prop.header, ...exportHeaders];
//             });
//         }

//         // Add headers
//         worksheet.addRow(exportHeaders);

//         // Add data rows
//         exportData.forEach((item) => {
//             const row = exportToExcelKeys.map((key) => item[key]);
//             worksheet.addRow(row);
//         });

//         // Add summary
//         if (sumColumns) {
//             sumColumns.forEach((col) => {
//                 const sum = exportData.reduce((acc, item) => acc + Number(item[col.dataKey]) || 0, 0);
//                 const sumRow = worksheet.addRow([]);
//                 sumRow.getCell(1).value = col.label;
//                 sumRow.getCell(2).value = sum.toFixed(2);
//             });
//         }

//         // Export file
//         const buffer = await workbook.xlsx.writeBuffer();
//         const blob = new Blob([buffer], {
//             type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//         });
//         saveAs(blob, `${excelFileName || "table_data"}.xlsx`);
//     };

//     return (
//         <button onClick={onExportExcelClick} title={export_excel_label} className="px-2 py-[2px] bg-[#547f22] text-white rounded-lg text-[16px]">
//             {exportToExcelSvg()}
//         </button>
//     );
// };

// Table.Header = ({ children, ...props }: TableHeaderProps & { children: React.ReactNode }) => {
//     const context = useContext(TableContext);
//     if (!context) return null;

//     const {
//         headers,
//         handleSort,
//         sortColumn,
//         sortOrder,
//         filterableColumns,
//         filter_label,
//         sort_label,
//         lang,
//         filterPopupsDisplay,
//         handleFilterClick,
//         filterOptions,
//         filters,
//         handleFilterChange,
//         sortKeys,
//     } = context;

//     return (
//         <table style={props.tableStyle} className="min-w-full text-sm font-light relative">
//             <thead className="bg-gray-50 sticky top-0">
//                 <tr style={props.headerStyle}>
//                     {headers.map((header, index) => {
//                         const filterableColumn = filterableColumns.find((col) => col.header === header);
//                         const isSortable = sortKeys && sortKeys.includes(header);
//                         return (
//                             <th
//                                 key={index}
//                                 title={isSortable ? `${sort_label} ${header}` : header}
//                                 style={props.headerCellStyle}
//                                 className="border-black border-[1px] max-w-[130px] px-2 text-center relative"
//                             >
//                                 {/* Header Text */}
//                                 <div className={`px-2 ${isSortable ? "cursor-pointer" : ""}`} onClick={() => isSortable && handleSort(index)}>
//                                     {header}
//                                 </div>

//                                 {/* Sort Icon */}
//                                 {isSortable && sortColumn === index && <>{sortSvg(sortOrder === "desc")}</>}

//                                 {/* Filter Component */}
//                                 {filterableColumn && <Table.Filter index={index} filterableColumn={filterableColumn} />}
//                             </th>
//                         );
//                     })}
//                 </tr>
//             </thead>
//         </table>
//     );
// };

// Table.Filter = ({ filterableColumn, index }: FilterProps & { index: number }) => {
//     const context = useContext(TableContext);
//     if (!context) return null;

//     const { filter_label, lang, headers, filterPopupsDisplay, handleFilterClick, filterOptions, filters, handleFilterChange } = context;

//     const displayRight = (lang === "he" && index === headers.length - 1) || (lang === "en" && index !== headers.length - 1);

//     return (
//         <div>
//             {/* Filter Button */}
//             <button
//                 title={`${filter_label} ${filterableColumn.header}`}
//                 className="absolute top-1 right-1 text-[12px]"
//                 onClick={() => handleFilterClick(filterableColumn.dataKey)}
//             >
//                 {filterPopupsDisplay === filterableColumn.dataKey
//                     ? filters[filterableColumn.dataKey]?.length > 0
//                         ? slashFilterSvg(true)
//                         : emptyFilterSvg(true)
//                     : filters[filterableColumn.dataKey]?.length > 0
//                     ? slashFilterSvg()
//                     : emptyFilterSvg()}
//             </button>

//             {/* Filter Popup */}
//             {filterPopupsDisplay === filterableColumn.dataKey && (
//                 <div
//                     className={`absolute z-10 top-1 ${
//                         displayRight ? "right-[-165px]" : "left-[-80px]"
//                     } w-40 h-32 bg-white p-1 flex flex-col items-center gap-2 shadow`}
//                 >
//                     <div className="text-start border-black border-b-[1px] w-[90%]">{`${filter_label} ${filterableColumn.header}`}</div>
//                     <div className="overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ">
//                         {filterOptions[filterableColumn.dataKey]?.map((option, i) => (
//                             <div key={i} className="flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white">
//                                 <input
//                                     type="checkbox"
//                                     className="cursor-pointer"
//                                     checked={filters[filterableColumn.dataKey]?.includes(option)}
//                                     onChange={() => handleFilterChange(filterableColumn.dataKey, option)}
//                                 />
//                                 <button className="flex-1 text-start px-2" onClick={() => handleFilterChange(filterableColumn.dataKey, option)}>
//                                     {filterableColumn.ui ? filterableColumn.ui(option) : option}
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// Table.Body = ({ ...props }) => {
//     const context = useContext(TableContext);
//     if (!context) return null;

//     const { data, keysToRender, onRowClick } = context;

//     return (
//         <tbody onClick={() => context.setFilterPopupsDisplay("")} {...props}>
//             {data.map((item, index) => (
//                 <Table.Row key={index} item={item} onClick={() => onRowClick(item)} />
//             ))}
//         </tbody>
//     );
// };

// Table.Row = ({ item, onClick, ...props }: TableRowProps & { item: Record<string, any>; onClick: () => void }) => {
//     const context = useContext(TableContext);
//     if (!context) return null;

//     const { keysToRender } = context;

//     return (
//         <tr onClick={onClick} style={props.rowStyles}>
//             {keysToRender.map((key, index) => (
//                 <Table.Cell key={index} value={item[key]} />
//             ))}
//         </tr>
//     );
// };

// Table.Cell = ({ value, ...props }: TableCellProps) => {
//     return (
//         <td
//             title={["string", "number", "boolean"].includes(typeof value) ? value : ""}
//             style={props.cellStyle}
//             className="chivo ellipsis border-black border-[1px] max-w-[90px] px-[4px] text-center"
//         >
//             {value}
//         </td>
//     );
// };

// Table.Summary = () => {
//     const context = useContext(TableContext);
//     if (!context || !context.sumColumns) return null;

//     const { filteredData, sumColumns, summaryLabel, summaryContainerStyle, summaryLabelStyle, summaryRowStyle } = context;

//     const getFixedNumber = (number = 0, fix = 4) => {
//         const sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
//         return String(sum_value);
//     };

//     return (
//         <div style={summaryContainerStyle} className="w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold">
//             <div style={summaryLabelStyle}>{summaryLabel}</div>
//             <div style={summaryRowStyle} className="flex gap-3">
//                 {sumColumns.map((col: SumColumn) => {
//                     const sum = filteredData.reduce((acc, item) => acc + Number(item[col.dataKey]) || 0, 0);
//                     const sumValue = getFixedNumber(sum);
//                     return (
//                         <div key={col.dataKey + col.label} className="flex gap-1 justify-start">
//                             <div>{col.label}</div>
//                             <span>:</span>
//                             <div>{col.ui ? col.ui(sumValue) : sumValue}</div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Table;
