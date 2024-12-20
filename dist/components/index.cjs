var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.tsx
var components_exports = {};
__export(components_exports, {
  Checkbox: () => Checkbox,
  ConfirmForm: () => ConfirmForm,
  DatePicker: () => DatePicker,
  ErrorBoundary: () => ErrorBoundary,
  ExportToExcel: () => ExportToExcel,
  Filter: () => Filter,
  InputContainer: () => InputContainer,
  Loader: () => Loader,
  ModularForm: () => ModularForm,
  Search: () => Search,
  SelectContainer: () => SelectContainer,
  Summary: () => Summary,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCell: () => TableCell,
  TableContext: () => TableContext,
  TableHead: () => TableHead,
  TableProvider: () => TableProvider,
  TableRow: () => TableRow,
  getFixedNumber: () => getFixedNumber
});
module.exports = __toCommonJS(components_exports);

// src/components/utils/Checkboxes.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Checkbox = ({ id, checked, setChecked, rotate = true, style }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "checkbox-wrapper-51", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", id, className: "hidden", checked, onChange: () => setChecked(!checked) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { htmlFor: id, className: "relative block w-[42px] h-[24px] cursor-pointer transform-gpu", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: `relative top-[1px] left-[1px] w-[40px] h-[22px] rounded-[12px] transition-colors duration-200 ease-in-out ${checked ? "bg-[#52d66b]" : "bg-[#c8ccd4]"}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "span",
        {
          className: `absolute ${rotate ? "left-0" : "right-0"} top-0  w-[24px] h-[24px] bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${checked ? rotate ? "translate-x-[18px]" : "-translate-x-[18px]" : ""}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "10px", height: "10px", viewBox: "0 0 10 10", className: "m-[7px] fill-none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              d: "M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "transition-all duration-500 linear",
              stroke: checked ? "#52d66b" : "#c8ccd4",
              style: {
                strokeDasharray: checked ? "25" : "24",
                strokeDashoffset: checked ? "25" : "0"
              }
            }
          ) })
        }
      )
    ] })
  ] });
};

// src/components/utils/ErrorBoundary.tsx
var import_react = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var ErrorBoundary = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.log("Error Info:", errorInfo);
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "full center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9...." }) });
    }
    return this.props.children;
  }
};

// src/components/utils/loaders.tsx
var import_react_spinners = require("react-spinners");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Loader = ({ color, size, style = {}, className = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `flex items-center justify-center ${className}`, style, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_spinners.ClipLoader, { loading: true, color: color || "#699A2C", size: size || 18 }) });
};

// src/components/table/utils.tsx
var import_exceljs = __toESM(require("exceljs"), 1);
var import_file_saver = require("file-saver");
var import_react5 = require("react");

// src/assets/svg.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var RedXSvg = ({ height, width, viewBox }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: width || "32", height: height || "32", viewBox: viewBox || "0 0 32 32", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "path",
    {
      d: "M21.0801 10.3C20.6101 9.80996 19.8301 9.79996 19.3401 10.27L15.6101 13.89L11.8801 10.27C11.3901 9.79996 10.6101 9.80996 10.1401 10.3C9.67008 10.79 9.68008 11.57 10.1701 12.04L13.8501 15.61L10.1701 19.18C9.68008 19.65 9.67008 20.43 10.1401 20.92C10.6101 21.41 11.3901 21.42 11.8801 20.95L15.6101 17.33L19.3401 20.95C19.5701 21.17 19.8801 21.3 20.2001 21.3C20.8801 21.29 21.4301 20.73 21.4201 20.04C21.4201 19.72 21.2901 19.41 21.0601 19.19L17.3801 15.62L21.0601 12.05C21.5501 11.58 21.5601 10.8 21.0901 10.31L21.0801 10.3Z",
      fill: "#FF4C2B"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "path",
    {
      d: "M15.61 0C6.99 0 0 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
      fill: "#FF4C2B"
    }
  )
] });
var GreenVSvg = ({ height, width, viewBox }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: width || "32", height: height || "32", viewBox: viewBox || "0 0 32 32", fill: "none", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "path",
    {
      d: "M15.61 0C6.99 0 0.01 6.99 0 15.61C0.86 36.32 30.36 36.31 31.22 15.61C31.21 6.99 24.23 0 15.61 0ZM15.61 28.76C8.35 28.76 2.47 22.87 2.46 15.61C3.18 -1.84 28.04 -1.83 28.76 15.61C28.76 22.87 22.87 28.75 15.61 28.76Z",
      fill: "#3B8F08"
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "path",
    {
      d: "M21.66 10.15L13.37 18.44L9.58003 14.54C9.10003 14.06 8.32003 14.07 7.84003 14.54C7.38003 15.01 7.36003 15.76 7.82003 16.24L12.48 21.03C12.96 21.52 13.74 21.52 14.23 21.05L23.41 11.87C23.88 11.38 23.87 10.6 23.38 10.13C22.9 9.67003 22.15 9.67003 21.68 10.13L21.66 10.15Z",
      fill: "#3B8F08"
    }
  )
] });

// src/assets/table.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var sortSvg = (upside_down) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      style: upside_down ? { transform: "rotate(180deg)" } : {},
      className: "absolute top-[3px] left-1",
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 1536.000000 1536.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(0.000000,1536.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M6465 15350 c3 -5 -27 -25 -68 -44 -40 -19 -103 -57 -140 -86 -37 -28 -584 -569 -1215 -1203 -631 -633 -1699 -1705 -2374 -2382 -674 -676 -1237 -1243 -1249 -1260 -13 -16 -37 -46 -53 -65 -36 -41 -108 -185 -126 -250 -32 -119 -30 -352 3 -465 35 -120 102 -231 197 -325 132 -133 288 -208 479 -231 214 -26 418 31 596 166 39 29 703 685 1477 1458 774 772 1432 1421 1461 1441 105 73 239 71 347 -3 52 -36 70 -57 107 -131 17 -33 18 -252 24 -4710 6 -4979 3 -4715 49 -4855 118 -363 507 -605 876 -545 77 13 201 53 245 79 19 12 45 26 59 31 41 18 157 119 206 179 43 53 113 173 127 217 3 11 16 51 29 89 l22 70 6 4690 c5 4887 4 4736 43 4784 6 7 16 23 22 34 20 42 116 103 188 120 42 10 75 13 85 8 10 -5 34 -11 55 -15 20 -4 59 -21 85 -38 26 -17 686 -671 1467 -1453 781 -782 1443 -1439 1470 -1459 68 -49 178 -106 245 -128 30 -10 100 -24 155 -32 87 -12 114 -12 200 1 128 18 187 39 360 131 37 19 178 162 211 212 36 56 94 176 94 194 0 7 7 31 16 52 23 55 23 352 0 406 -9 21 -16 46 -16 56 0 30 -83 185 -130 242 -80 98 -4793 4810 -4865 4865 -66 50 -182 111 -250 132 -16 5 -29 15 -27 21 1 9 -62 12 -249 12 -157 0 -248 -4 -244 -10z" }),
          " "
        ] }),
        " "
      ]
    }
  );
};
var emptyFilterSvg = (solid) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: solid ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 900.000000 900.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M382 8980 c-7 -11 -19 -20 -27 -20 -46 0 -166 -99 -196 -162 -46 -95 -51 -115 -47 -199 3 -70 9 -95 37 -149 42 -85 45 -90 118 -190 34 -47 72 -98 83 -115 12 -16 50 -70 85 -120 143 -200 188 -263 235 -330 27 -38 56 -79 64 -90 8 -11 46 -65 85 -120 38 -55 96 -136 128 -179 32 -44 60 -84 62 -90 2 -6 32 -48 65 -93 34 -45 99 -137 146 -203 47 -66 113 -159 148 -205 34 -46 62 -87 62 -90 0 -4 20 -33 45 -65 25 -32 45 -61 45 -64 0 -3 33 -50 73 -105 39 -54 106 -146 147 -205 41 -58 103 -144 138 -191 34 -46 62 -87 62 -90 0 -3 22 -36 50 -73 27 -37 61 -83 75 -102 14 -19 59 -82 100 -140 41 -58 95 -133 120 -167 25 -34 45 -66 45 -70 0 -4 13 -22 28 -40 15 -17 47 -61 72 -97 25 -37 74 -107 110 -156 36 -50 99 -138 140 -196 41 -58 108 -150 148 -205 39 -54 72 -102 72 -105 0 -3 20 -32 45 -64 25 -32 45 -62 45 -67 0 -5 14 -22 30 -38 17 -16 30 -33 30 -38 0 -5 19 -34 43 -65 90 -122 154 -259 178 -387 11 -56 14 -423 19 -1850 l5 -1780 29 -58 c36 -71 112 -148 168 -171 24 -10 51 -22 60 -27 24 -12 205 -11 213 1 3 6 15 10 25 10 11 0 34 6 52 14 18 8 52 21 76 30 64 24 118 44 165 62 23 8 55 22 70 30 16 8 36 14 46 14 9 0 26 7 37 15 10 8 27 15 37 15 11 0 31 6 45 14 15 8 47 22 72 31 25 9 60 23 78 31 18 8 39 14 47 14 7 0 26 6 42 14 15 8 48 22 73 31 25 10 57 23 72 31 14 8 35 14 45 14 11 0 28 7 39 15 10 8 26 15 35 15 14 0 62 19 197 76 18 8 40 14 48 14 9 0 28 6 42 14 28 15 36 18 235 92 23 9 56 22 72 29 17 7 50 21 75 31 84 34 127 77 181 182 9 18 20 56 24 85 4 28 10 714 14 1522 6 1402 7 1472 25 1520 41 109 110 235 188 344 46 62 88 121 93 130 6 9 30 45 55 80 72 101 159 222 250 351 47 67 113 159 148 205 34 46 62 87 62 90 0 4 27 42 60 85 33 43 60 81 60 84 0 3 22 36 50 73 27 37 60 83 72 101 13 18 30 41 38 52 8 10 35 49 60 85 25 37 73 104 108 150 34 46 62 87 62 90 0 3 33 50 73 103 40 53 81 111 91 127 11 17 45 65 78 107 32 43 58 80 58 83 0 4 20 33 45 65 25 32 45 63 45 70 0 6 7 13 15 16 8 4 15 10 15 16 0 5 26 44 58 86 32 42 70 95 85 117 64 95 144 206 208 292 38 51 69 95 69 99 0 3 13 23 29 43 26 33 92 126 193 271 21 30 48 68 60 85 85 112 108 144 108 150 0 3 27 42 60 85 33 43 60 81 60 85 0 3 28 44 63 90 34 47 82 114 107 151 25 36 50 71 56 77 5 7 32 44 58 82 27 39 62 86 77 106 16 20 29 42 29 48 0 6 4 11 8 11 5 0 25 32 45 71 36 68 37 75 37 175 0 118 -13 163 -69 234 -37 48 -127 112 -173 124 -16 3 -28 13 -28 21 0 13 -486 15 -4103 15 -4091 0 -4102 0 -4115 -20z" }),
          " "
        ] }),
        " "
      ]
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 300.000000 300.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(0.000000,300.000000) scale(0.050000,-0.050000)", fill: "#000000", stroke: "none", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M58 5702 c-100 -101 -84 -148 136 -416 107 -130 242 -294 301 -366 58 -71 173 -211 254 -310 81 -99 441 -535 799 -969 l652 -789 0 -1201 c0 -1396 2 -1411 182 -1411 60 0 1302 604 1360 662 36 36 38 79 38 935 0 494 5 925 12 959 8 41 370 495 1110 1393 1202 1459 1158 1394 1040 1513 l-59 58 -2883 0 -2883 0 -59 -58z m5349 -327 c-16 -26 -150 -190 -683 -835 -169 -203 -381 -460 -472 -570 -90 -110 -290 -352 -443 -537 -154 -186 -301 -369 -329 -408 l-50 -70 -6 -913 -5 -913 -410 -205 c-225 -112 -413 -204 -418 -204 -6 0 -12 503 -15 1117 l-6 1118 -50 70 c-27 39 -175 222 -329 408 -153 185 -353 427 -443 537 -91 110 -303 367 -472 570 -533 645 -667 809 -683 835 -12 20 474 25 2407 25 1933 0 2419 -5 2407 -25z" }),
          " "
        ] }),
        " "
      ]
    }
  ) });
};
var slashFilterSvg = (solid) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: solid ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-[-4px] mr-[-2px] ", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "20",
      viewBox: "0 0 900.000000 900.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M1000 8221 c-71 -27 -103 -47 -149 -92 -122 -123 -144 -294 -58 -456 22 -42 6838 -6858 6880 -6880 162 -86 333 -64 456 58 123 123 144 294 57 458 -10 19 -508 525 -1107 1124 l-1089 1089 1 256 1 257 676 1350 677 1350 115 6 c125 6 173 20 244 68 54 37 89 78 124 145 24 46 27 61 27 161 0 100 -3 115 -28 162 -52 100 -119 157 -225 194 -54 18 -131 19 -2817 19 l-2762 0 -341 340 c-188 186 -356 347 -374 357 -103 55 -220 68 -308 34z" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M2340 5338 c0 -7 146 -305 325 -662 l325 -649 0 -1112 c0 -1043 1 -1114 18 -1160 27 -76 47 -107 94 -154 48 -47 80 -67 153 -93 46 -17 120 -18 1231 -18 1085 0 1186 1 1235 17 30 9 66 24 81 33 68 40 158 146 158 186 0 14 -3600 3624 -3614 3624 -3 0 -6 -6 -6 -12z" }),
          " "
        ] }),
        " "
      ]
    }
  ) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-[-4px] mr-[-2px] ", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "20",
      viewBox: "0 0 900.000000 900.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(0.000000,900.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M1000 8221 c-71 -27 -103 -47 -149 -92 -122 -123 -144 -294 -58 -456 22 -42 6838 -6858 6880 -6880 162 -86 333 -64 456 58 123 123 144 294 57 458 -10 19 -508 525 -1107 1124 l-1089 1089 1 256 1 257 676 1350 677 1350 115 6 c125 6 173 20 244 68 54 37 89 78 124 145 24 46 27 61 27 161 0 100 -3 115 -28 162 -52 100 -119 157 -225 194 -54 18 -131 19 -2817 19 l-2762 0 -341 340 c-188 186 -356 347 -374 357 -103 55 -220 68 -308 34z m5494 -1490 c6 -10 -1204 -2436 -1226 -2458 -13 -13 -168 139 -1247 1217 -677 677 -1231 1236 -1231 1241 0 12 3697 12 3704 0z" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M2340 5338 c0 -7 146 -305 325 -662 l325 -649 0 -1112 c0 -1043 1 -1114 18 -1160 27 -76 47 -107 94 -154 48 -47 80 -67 153 -93 46 -17 120 -18 1231 -18 1085 0 1186 1 1235 17 30 9 66 24 81 33 68 40 158 146 158 185 0 18 -692 715 -709 715 -6 0 -11 -38 -13 -97 l-3 -98 -745 0 -745 0 -3 858 -2 859 -694 694 c-382 382 -697 694 -700 694 -3 0 -6 -6 -6 -12z" }),
          " "
        ] }),
        " "
      ]
    }
  ) }) });
};
var exportToExcelSvg = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 150.000000 150.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { transform: "translate(0.000000,150.000000) scale(0.100000,-0.100000)", fill: "#ffffff", stroke: "none", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M205 1418 c-3 -7 -4 -317 -3 -688 l3 -675 435 -3 c239 -1 441 0 449 3 11 4 9 11 -9 30 l-23 25 -396 2 -396 3 0 625 0 625 280 0 280 0 5 -190 5 -190 190 -5 190 -5 5 -175 5 -175 25 0 25 0 3 200 2 199 -202 203 -203 203 -333 0 c-257 0 -334 -3 -337 -12z m828 -235 c70 -70 127 -131 127 -135 0 -5 -60 -7 -132 -6 l-133 3 -3 133 c-1 72 1 132 6 132 4 0 65 -57 135 -127z" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M518 915 c-6 -6 9 -37 42 -90 11 -16 23 -37 27 -45 4 -8 19 -36 35 -61 15 -25 28 -56 28 -68 0 -20 -29 -69 -121 -209 -16 -24 -29 -47 -29 -53 0 -5 31 -9 68 -9 l69 0 42 82 c60 116 66 118 107 35 56 -114 53 -112 127 -115 51 -2 67 0 67 11 0 7 -5 18 -11 24 -11 11 -26 36 -49 78 -6 11 -19 34 -30 50 -11 17 -24 40 -29 52 -5 11 -15 24 -20 28 -26 16 -18 33 97 212 25 39 39 70 34 75 -5 5 -36 8 -68 6 l-59 -3 -42 -84 c-24 -46 -45 -86 -48 -89 -6 -6 -44 40 -45 54 0 6 -13 35 -29 65 l-28 54 -65 3 c-35 2 -67 0 -70 -3z" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M1135 548 c-3 -7 -6 -67 -7 -133 l-3 -120 -55 -3 c-30 -1 -61 -5 -68 -7 -8 -3 28 -53 95 -132 122 -146 129 -153 140 -153 4 0 22 17 38 37 26 32 53 63 175 206 13 15 30 27 38 27 9 0 12 3 8 7 -3 4 -39 9 -79 12 l-72 6 -5 130 -5 130 -98 3 c-72 2 -99 -1 -102 -10z m145 -183 l5 -130 28 -3 c15 -2 27 -8 27 -14 0 -18 -92 -128 -107 -128 -11 1 -97 107 -101 125 -2 8 7 15 25 17 l28 3 3 120 c1 66 4 126 7 133 3 9 18 12 42 10 l38 -3 5 -130z" }),
          " "
        ] }),
        " "
      ]
    }
  );
};

// src/hooks/global.ts
var import_react2 = require("react");

// src/hooks/table.ts
var import_react3 = require("react");
var import_zustand = require("zustand");
var useTableContext = () => {
  const context = (0, import_react3.useContext)(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a Table component");
  }
  return context;
};
var useFilter = ({
  data,
  dataToRender,
  setDataToRender,
  filterableColumns,
  includeSearch,
  searchQuery,
  keysToRender,
  sortColumn,
  sortOrder,
  sortKeys
}) => {
  const initFilter = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
  const [filters, setFilters] = (0, import_react3.useState)(initFilter);
  const [filterPopupsDisplay, setFilterPopupsDisplay] = (0, import_react3.useState)("");
  const filterOptions = filterableColumns.reduce((acc, col) => {
    acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
    return acc;
  }, {});
  (0, import_react3.useEffect)(() => {
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
  const handleFilterChange = (dataKey, value) => {
    const newFilters = { ...filters };
    console.log("data from filter", { filters, newFilters, dataKey, value });
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
  const handleFilterClick = (dataKey) => {
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
    handleFilterClick
  };
};
var useSort = () => {
  const [sortColumn, setSortColumn] = (0, import_react3.useState)(null);
  const [sortOrder, setSortOrder] = (0, import_react3.useState)(null);
  const handleSort = (columnIndex) => {
    let newSortOrder = "asc";
    if (sortColumn === columnIndex && sortOrder === "asc") {
      newSortOrder = "desc";
    }
    setSortColumn(columnIndex);
    setSortOrder(newSortOrder);
  };
  return { sortColumn, sortOrder, handleSort };
};
var useSearch = () => {
  const [searchQuery, setSearchQuery] = (0, import_react3.useState)("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return { searchQuery, handleSearch };
};

// src/hooks/WebWorker.ts
var import_react4 = require("react");

// src/components/table/utils.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var getFixedNumber = (number = 0, fix = 4) => {
  const sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
  return String(sum_value);
};
var TableRow = ({ item }) => {
  const { rowStyles, cellStyle, keysToRender, onRowClick } = useTableContext();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tr", { onClick: () => onRowClick && onRowClick(item), style: rowStyles, children: keysToRender.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableCell, { value: item[key] }, index)) });
};
var TableCell = ({ value }) => {
  const { cellStyle } = useTableContext();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "td",
    {
      title: ["string", "number", "boolean"].includes(typeof value) ? value : "",
      style: cellStyle,
      className: "chivo ellipsis border-black border-[1px] max-w-[90px] px-[4px] text-center",
      children: value
    }
  );
};
var TableHead = (0, import_react5.memo)((props) => {
  const {
    headers,
    headerStyle,
    headerCellStyle,
    sortColumn,
    handleSort,
    sortKeys,
    sortOrder,
    filterableColumns = [],
    sortLabel
  } = useTableContext();
  const sortDisplay = (0, import_react5.useMemo)(() => Boolean(sortKeys.length), [sortKeys]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("thead", { className: "bg-gray-50 sticky top-0", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tr", { style: headerStyle, children: headers.map((header, index) => {
    const filterableColumn = filterableColumns.find((col) => col.header === header);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "th",
      {
        title: sortDisplay ? `${sortLabel} ${header}` : header,
        style: headerCellStyle,
        className: " border-black border-[1px] max-w-[130px] px-2 text-center relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `px-2 ${sortDisplay ? "cursor-pointer" : ""}`, onClick: () => sortDisplay && handleSort(index), children: header }),
          sortDisplay && sortColumn === index && (sortOrder === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: sortSvg() }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: sortSvg(true) })),
          filterableColumn && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Filter, { filterableColumn, index })
        ]
      },
      index
    );
  }) }) });
});
var TableBody = (0, import_react5.memo)((props) => {
  const { handleFilterClick, onRowClick, dataToRender, keysToRender, rowStyles, cellStyle } = useTableContext();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("tbody", { onClick: () => handleFilterClick(""), children: dataToRender.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TableRow, { item }, index)) });
});
var Filter = (0, import_react5.memo)(({ filterableColumn, index }) => {
  const { direction, headers, filters, filterOptions, filterPopupsDisplay, handleFilterChange, handleFilterClick, filterLabel } = useTableContext();
  const displayRight = direction === "rtl" && index === headers.length - 1 || direction === "ltr" && index !== headers.length - 1;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        title: filterLabel + " " + filterableColumn.header,
        className: "absolute top-1 right-1 text-[12px]",
        onClick: () => handleFilterClick(filterableColumn.dataKey),
        children: filterPopupsDisplay === filterableColumn.dataKey ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: filters[filterableColumn.dataKey]?.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: slashFilterSvg(true) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: emptyFilterSvg(true) }) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: filters[filterableColumn.dataKey]?.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: slashFilterSvg() }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: emptyFilterSvg() }) })
      }
    ),
    filterPopupsDisplay === filterableColumn.dataKey && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: `absolute z-10 top-1 ${displayRight ? "right-[-165px]" : "left-[-80px]"}
                              w-40 h-32 bg-white p-1 flex flex-col items-center gap-2 shadow`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-start border-black border-b-[1px] w-[90%]", children: filterLabel + " " + filterableColumn.header }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ", children: filterOptions[filterableColumn.dataKey]?.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                type: "checkbox",
                className: "cursor-pointer",
                checked: filters[filterableColumn.dataKey]?.includes(option),
                onChange: () => handleFilterChange(filterableColumn.dataKey, option)
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "flex-1 text-start px-2", onClick: () => handleFilterChange(filterableColumn.dataKey, option), children: filterableColumn.ui ? filterableColumn.ui(option) : option })
          ] }, i)) })
        ]
      }
    )
  ] });
});
var ExportToExcel = (0, import_react5.memo)((props) => {
  const { exportToExcelKeys, dataToAddToExcelTable, excelFileName, dataToRender, headers, sumColumns, exportExcelLabel } = useTableContext();
  const addPropertiesToExcel = (properties) => {
    let newData = [...dataToRender];
    let newHeaders = [...headers];
    properties.forEach((val) => {
      newHeaders.unshift(val.header);
      newData = newData.map((v) => ({ ...v, [val.key]: val.value }));
    });
    return { data: newData, headers: newHeaders };
  };
  const onExportExcelClick = async () => {
    if (exportToExcelKeys) {
      const workbook = new import_exceljs.default.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");
      const dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : { data: dataToRender, headers };
      worksheet.addRow(dataToExport.headers);
      dataToExport.data.forEach((item) => {
        const row = exportToExcelKeys.map((key) => item[key]);
        worksheet.addRow(row);
      });
      if (sumColumns) {
        sumColumns.forEach((val) => {
          const sumRow = worksheet.addRow([]);
          sumRow.getCell(1).value = val.label;
          const value = dataToRender.reduce((acc, v) => {
            return acc + Number(v[val.dataKey]) || 0;
          }, 0).toFixed(2);
          sumRow.getCell(2).value = value;
        });
      }
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      (0, import_file_saver.saveAs)(blob, `${excelFileName || "table_data"}.xlsx`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { onClick: onExportExcelClick, title: exportExcelLabel, className: "px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]", children: exportToExcelSvg() });
});
var Search = (0, import_react5.memo)((props) => {
  const { searchQuery, handleSearch, searchPlaceHolder, searchInputClassName, searchInputStyle } = useTableContext();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "input",
    {
      className: `w-40 border-black border-[1px] px-2 rounded-md ${searchInputClassName}`,
      type: "text",
      placeholder: searchPlaceHolder,
      value: searchQuery,
      onChange: handleSearch,
      style: searchInputStyle
    }
  );
});
var Summary = (0, import_react5.memo)((props) => {
  const { summaryContainerStyle, summaryLabelStyle, summaryLabel, summaryRowStyle, sumColumns, dataToRender } = useTableContext();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: summaryContainerStyle, className: "w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: summaryLabelStyle, children: summaryLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: summaryRowStyle, className: "flex gap-3", children: sumColumns.map((val) => {
      const sum_res = dataToRender.reduce((acc, v) => acc + Number(v[val.dataKey]) || 0, 0);
      const sum_value = getFixedNumber(sum_res);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex gap-1 justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: val.label }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: ":" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: val.ui ? val.ui(sum_value) : sum_value })
      ] }, val.dataKey + val.label);
    }) })
  ] });
});

// src/components/table/Table.tsx
var import_react6 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var TableContext = (0, import_react6.createContext)(null);
var TableProvider = (props) => {
  const {
    // basic props
    data,
    headers,
    optionalElement,
    keysToRender = [],
    direction = "ltr",
    onRowClick = (data2) => {
    },
    // container styles props
    containerStyle,
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
    sortLabel = "Sort by",
    // filter
    filterableColumns = [],
    filterLabel = "Filter by",
    // export to excel
    exportToExcelKeys,
    dataToAddToExcelTable,
    exportExcelLabel = "Export to excel",
    excelFileName,
    // summary
    sumColumns,
    summaryLabel = "",
    summaryContainerStyle = {},
    summaryLabelStyle = {},
    summaryRowStyle = {}
  } = props;
  const [dataToRender, setDataToRender] = (0, import_react6.useState)(data);
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
    sortKeys
  });
  const providerValues = {
    ...props,
    //
    direction,
    keysToRender,
    filterableColumns,
    //
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
    handleFilterClick
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TableContext.Provider, { value: providerValues, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `flex flex-col gap-2 ${containerClassName}`, style: containerStyle, children: props.children }) });
};
var Table = (props) => {
  const {
    containerStyle = {},
    optionalElement,
    containerClassName = "",
    tableContainerClass = "",
    tableContainerStyle = {},
    tableStyle = {},
    includeSearch,
    exportToExcelKeys,
    sumColumns
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(TableProvider, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex justify-start gap-2 ", children: [
      includeSearch && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Search, { render: false }),
      exportToExcelKeys && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ExportToExcel, { render: false }),
      optionalElement && optionalElement
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: tableContainerStyle, className: `animate-slide-in-up overflow-y-auto  ${tableContainerClass}`, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("table", { style: tableStyle, className: "min-w-full text-sm font-light relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TableHead, {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TableBody, { render: false })
    ] }) }),
    sumColumns && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Summary, { render: false })
  ] });
};

// src/components/forms/index.tsx
var import_react7 = require("react");
var import_moment2 = __toESM(require("moment"), 1);

// src/helpers/firebase.ts
var import_moment = __toESM(require("moment"), 1);
var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");
var import_meta = {};
var initApp = () => {
  const isNodeEnv = typeof process !== "undefined" && process.env;
  const firebaseConfig = {
    apiKey: isNodeEnv ? process.env.NEXT_PUBLIC_API_KEY : import_meta.env.VITE_API_KEY,
    authDomain: isNodeEnv ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import_meta.env.VITE_AUTH_DOMAIN,
    projectId: isNodeEnv ? process.env.NEXT_PUBLIC_PROJECT_ID : import_meta.env.VITE_PROJECT_ID,
    storageBucket: isNodeEnv ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import_meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: isNodeEnv ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import_meta.env.VITE_MESSAGING_SENDER_ID,
    appId: isNodeEnv ? process.env.NEXT_PUBLIC_APP_ID : import_meta.env.VITE_APP_ID
  };
  try {
    const app = (0, import_app.initializeApp)(firebaseConfig);
    const auth2 = (0, import_auth.getAuth)(app);
    const db2 = (0, import_firestore.getFirestore)(app);
    return { db: db2, auth: auth2 };
  } catch (error) {
    console.error("Failed to initialize Firebase app:", error);
    return { db: null, auth: null };
  }
};
var { db, auth } = initApp();
var collections = {
  clients: (0, import_firestore.collection)(db, "nx-clients"),
  sites: (0, import_firestore.collection)(db, "nx-sites"),
  cars: (0, import_firestore.collection)(db, "units"),
  users: (0, import_firestore.collection)(db, "nx-users"),
  lastLocations: (0, import_firestore.collection)(db, "last_locations"),
  ermEvents: (0, import_firestore.collection)(db, "erm_events_general"),
  erm2Events: (0, import_firestore.collection)(db, "erm2_events_general"),
  ruptelaEvents: (0, import_firestore.collection)(db, "ruptela_events_general"),
  polygons: (0, import_firestore.collection)(db, "nx-polygons"),
  polygonEvents: (0, import_firestore.collection)(db, "polygon_events"),
  polygonCars: (0, import_firestore.collection)(db, "polygon_cars"),
  canbus: (0, import_firestore.collection)(db, "erm_canbus_parameters"),
  states: (0, import_firestore.collection)(db, "erm_states"),
  app_pro_commands_queue: (0, import_firestore.collection)(db, "app_pro_commands_queue"),
  trips: (0, import_firestore.collection)(db, "erm2_trip"),
  tripsDetails: (0, import_firestore.collection)(db, "erm2_trip_details"),
  audit: (0, import_firestore.collection)(db, "nx-audit"),
  nx_settings: (0, import_firestore.collection)(db, "nx-settings"),
  settings: (0, import_firestore.collection)(db, "settings"),
  translations: (0, import_firestore.collection)(db, "nx-translations"),
  nx_cars: (0, import_firestore.collection)(db, "nx-cars"),
  boards: (0, import_firestore.collection)(db, "boards"),
  protection_types: (0, import_firestore.collection)(db, "protectionTypes"),
  board_types: (0, import_firestore.collection)(db, "boardTypes"),
  charge_capacities: (0, import_firestore.collection)(db, "nx-charge-capacities")
};
var fire_base_TIME_TEMP = import_firestore.Timestamp.now;

// src/helpers/forms.ts
var handleInvalid = (e, requireError) => {
  e.target.setCustomValidity(requireError || "This filed is required !");
};
var handleChange = (e) => {
  e.target.setCustomValidity("");
  const validation = e.target.getAttribute("data-validation");
  if (validation === "text") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "numbers") {
    const cleanedValue = e.target.value.replace(/[^0-9\- +]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "numbersOnly") {
    const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "price") {
    const cleanedValue = e.target.value.replace(/[^0-9\.]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "textNumbers") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "email") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "color") {
    const cleanedValue = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "address") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "cars") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "charts") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
    e.target.value = cleanedValue;
  } else {
    e.target.value = e.target.value;
  }
};
var handlePaste = (e) => {
  const validation = e.currentTarget.getAttribute("data-validation");
  let pasteData = e.clipboardData.getData("text");
  if (validation === "text") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת\- ]/g, "");
  } else if (validation === "numbers") {
    pasteData = pasteData.replace(/[^0-9\- +]/g, "");
  } else if (validation === "numbersOnly") {
    pasteData = pasteData.replace(/[^0-9]/g, "");
  } else if (validation === "price") {
    pasteData = pasteData.replace(/[^0-9\.]/g, "");
  } else if (validation === "textNumbers") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
  } else if (validation === "email") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
  } else if (validation === "color") {
    pasteData = pasteData.replace(/[^#0-9A-Fa-f]/g, "");
  } else if (validation === "address") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
  } else if (validation === "cars") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
  } else if (validation === "charts") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
  }
  e.preventDefault();
  document.execCommand("insertText", false, pasteData);
};
var useValidation = (validationType, requireError) => {
  return {
    onChange: handleChange,
    onPaste: handlePaste,
    onInvalid: (e) => handleInvalid(e, requireError),
    "data-validation": validationType
  };
};

// src/helpers/phoneNumber.ts
var import_libphonenumber_js = require("libphonenumber-js");

// src/components/forms/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var InputContainer = ({
  validationError,
  name = "",
  inputType = "text",
  labelContent = "",
  defaultValue = "",
  validationName = "textNumbers",
  containerClassName = "",
  labelClassName = "",
  elementClassName = "",
  required = false,
  onKeyDown
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `center ${containerClassName}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: `text-start w-[30%] ${labelClassName}`, htmlFor: name, children: [
      labelContent,
      " :"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "input",
      {
        className: `w-[70%] bg-none border-b-[1px] border-black ${elementClassName}`,
        defaultValue,
        ...useValidation(validationName),
        required,
        name,
        onKeyDown,
        type: inputType
      }
    )
  ] });
};
var SelectContainer = ({
  name = "",
  labelContent = "",
  containerClassName = "",
  labelClassName = "",
  defaultValue = "",
  elementClassName = "",
  optionClassName = "",
  required = false,
  options = []
}) => {
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const [selectedValue, setSelectedValue] = (0, import_react7.useState)(defaultValue || options[0]?.value || "");
  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `center ${containerClassName}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: `text-start w-[30%] ${labelClassName}`, htmlFor: name, children: [
      labelContent,
      " :"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `w-[70%] relative ${elementClassName}`, onClick: () => setIsOpen(!isOpen), children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `border-b-[1px] border-black max-h-6 cursor-pointer ${elementClassName}`, children: options?.find((opt) => opt.value === selectedValue)?.label || selectedValue }),
      isOpen ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fa-light fa-chevron-up absolute top-[1px] left-1 cursor-pointer" }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("i", { className: "fa-light fa-chevron-down absolute top-[1px] left-1 cursor-pointer" }),
      isOpen && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute w-full bg-white border border-gray-300 max-h-32 overflow-y-auto z-10", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "div",
        {
          className: `p-2 cursor-pointer hover:bg-gray-200 ${optionClassName}`,
          onClick: () => handleOptionClick(option.value),
          children: option.label
        },
        option.value
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { value: selectedValue, type: "hidden", name, required })
    ] })
  ] });
};
var ModularForm = ({
  submitFunction = async (form) => {
  },
  elements = [],
  headerContent,
  buttonContent = "",
  formClassName = "",
  headerClassName = "",
  direction = "rtl"
}) => {
  const [errorMsg, setErrorMsg] = (0, import_react7.useState)("");
  const [isLoading, setIsLoading] = (0, import_react7.useState)(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await submitFunction(e);
    } catch (err) {
      if (typeof err === "string") {
        setErrorMsg(err);
      }
      console.error("Error from submit ModularForm:", err);
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("form", { onSubmit, style: { direction }, className: `w-[350px] px-5 py-5 flex flex-col gap-5 ${formClassName}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `border-b-2 border-[#547f22] pb-2 text-start font-bold text-[20px] ${headerClassName}`, children: headerContent }),
    elements.map((element, index) => {
      switch (element.type) {
        case "input":
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(InputContainer, { ...element }, index);
        case "select":
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SelectContainer, { ...element }, index);
        default:
          return null;
      }
    }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { title: errorMsg, className: "text-[#f22] text-[18px] max-w-[80%] ellipsis", children: errorMsg }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { disabled: isLoading, className: "bg-[#547f22] px-3 py-1 rounded-lg text-white min-w-20", type: "submit", children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Loader, { size: 25, color: "#fff" }) : buttonContent })
    ] })
  ] });
};
var ConfirmForm = ({ onV, onX, headline = "", direction = "rtl" }) => {
  const onConfirm = async () => {
    try {
      await onV();
    } catch (error) {
      console.error("'onV' failed:", error);
    }
  };
  const onDenied = async () => {
    try {
      await onX();
    } catch (error) {
      console.error("'onX' failed:", error);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { direction, padding: "30px" }, className: "full col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-lg font-bold", children: headline }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "center gap-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { onClick: onDenied, children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(RedXSvg, {}),
        " "
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { onClick: onConfirm, children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GreenVSvg, {}),
        " "
      ] })
    ] })
  ] });
};
var DatePicker = ({
  submit = async (form) => {
  },
  formClassName = "",
  labelsClassName = "",
  inputsClassName = "",
  buttonClassName = "",
  buttonStyle = {},
  defaultFrom,
  defaultTo,
  direction = "rtl",
  fromText = "From date",
  toText = "To date",
  buttonText = "Search"
}) => {
  const [isLoading, setIsLoading] = (0, import_react7.useState)(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await submit(e);
    setIsLoading(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("form", { style: { direction }, onSubmit, className: `w-full h-10 flex justify-start gap-3 items-center ${formClassName}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: `center text-[14px] relative gap-2 ${labelsClassName}`, htmlFor: "from", children: [
      fromText,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          className: `w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ${inputsClassName}`,
          type: "date",
          name: "from",
          defaultValue: defaultFrom || (0, import_moment2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: `center text-[14px] relative gap-2 ${labelsClassName}`, htmlFor: "to", children: [
      toText,
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          className: `w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ${inputsClassName}`,
          type: "date",
          name: "to",
          defaultValue: defaultTo || (0, import_moment2.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DD")
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        disabled: isLoading,
        style: buttonStyle,
        className: `bg-[#699a2c] text-[#fff] font-[500] w-[75px] h-[27px] ${buttonClassName}`,
        type: "submit",
        children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Loader, { className: "pt-[2px]", size: 20, color: "#fff" }) : buttonText
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox,
  ConfirmForm,
  DatePicker,
  ErrorBoundary,
  ExportToExcel,
  Filter,
  InputContainer,
  Loader,
  ModularForm,
  Search,
  SelectContainer,
  Summary,
  Table,
  TableBody,
  TableCell,
  TableContext,
  TableHead,
  TableProvider,
  TableRow,
  getFixedNumber
});
