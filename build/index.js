var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-XJCPBRGB.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "ADA Handle Starter Kit",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react3 = require("react");

// app/services/elasticsearch.server.ts
var import_elasticsearch = require("@elastic/elasticsearch"), client = new import_elasticsearch.Client({
  node: "https://elastic-es-http.ftr-adahandle-v0.svc.cluster.local:9200",
  auth: { username: "", password: "" }
});
async function searchHandle(name) {
  return await client.search({
    index: "adahandles.mainnet",
    size: 20
  });
}

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ request, params }) => (await searchHandle("test"), null), SearchInput = (props) => {
  let onChange = (e) => {
    props.onChange(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mb-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor: "base-input",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Search"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "text",
        id: "base-input",
        value: props.val,
        onChange,
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this);
};
function Index() {
  let [searchValue, setSearchValue] = (0, import_react3.useState)("");
  return (0, import_react3.useEffect)(() => {
    if (!searchValue)
      console.log();
    else if (searchValue.length > 2) {
      let lcValue = searchValue.toLowerCase();
    }
  }, [searchValue, []]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-screen h-screen bg-gray-800",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container max-w-6xl p-16  h-full w-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
          className: "mb-3 py-6 w-full flex flex-col justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: "/logo.svg",
                  className: "mr-4 h-6",
                  alt: "TxPipe Logo"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 45,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  className: "text-m text-gray-400 font-normal",
                  children: "Starter Kit provided by TxPipe"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 46,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
              className: "text-3xl text-gray-200 font-extrabold mt-4",
              children: "Ada Handle to Address"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 49,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 rounded-lg border border-blue-500 bg-blue-600 bg-opacity-10 p-4 text-white mb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "font-bold",
                  children: "Look for the Address associated to an ADA handle"
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 51,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "text-sm text-blue-500 mt-2",
                  children: "This starter kit implements the functionality provided by the Scrolls library for searching the address associated to an ADA handle. Start typing the name of the handle for doing a real-time search in the blockchain."
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 52,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 50,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, {
          val: searchValue,
          onChange: setSearchValue
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-white text-xs text-right mb-2"
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-cols-6 gap-6",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "col-span-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 61,
              columnNumber: 21
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1538bda5", entry: { module: "/build/entry.client-7OWBMBRN.js", imports: ["/build/_shared/chunk-EM4O3TO7.js", "/build/_shared/chunk-IE366Y5W.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Z3ELFJJ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2OOIOUIP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1538BDA5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
