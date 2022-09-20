import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SearchInput = (props) => {
  const onChange = (e) => {
    console.log({ e });
    props.onChange(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mb-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor: "base-input",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Search"
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "text",
        id: "base-input",
        value: props.val,
        onChange,
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this);
};
function Index() {
  const [searchValue, setSearchValue] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    if (!searchValue) {
      console.log();
    } else {
      if (searchValue.length > 2) {
        const lcValue = searchValue.toLowerCase();
      }
    }
  }, [searchValue, []]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container max-w-6xl p-8 bg-gray-800 h-screen",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "mb-3 py-6 w-full flex flex-col justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex mt-16 mb-4 place-content-center w-full",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: "/logo.svg",
                className: "mr-4 h-8",
                alt: "TxPipe Logo"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 37,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-m text-gray-400 font-normal",
                children: "Starter Kit provided by TxPipe"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 38,
                columnNumber: 21
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/index.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "text-3xl text-gray-200 font-extrabold",
            children: "Ada Handle to Address"
          }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, {
        val: searchValue,
        onChange: setSearchValue
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-white text-xs text-right mb-2"
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-6 gap-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "col-span-6",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max"
          }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 49,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-4XCSBO3W.js.map