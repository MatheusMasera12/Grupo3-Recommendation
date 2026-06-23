var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
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
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.RecommendationMfe;
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx2(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsx2;
      module.exports.jsxDEV = jsx2;
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/ResourceList.tsx
  var ResourceList_exports = {};
  __export(ResourceList_exports, {
    Carregando: () => Carregando,
    ComErro: () => ComErro,
    ComRecursos: () => ComRecursos,
    SemRecursos: () => SemRecursos
  });
  init_define_import_meta_env();

  // ds-shim:ds:ResourceList
  var ds_ResourceList_exports = {};
  __export(ds_ResourceList_exports, {
    default: () => ds_ResourceList_default
  });
  init_define_import_meta_env();
  __reExport(ds_ResourceList_exports, __toESM(require_ds_raw()));
  var g = window.RecommendationMfe;
  var ds_ResourceList_default = g["ResourceList"] !== void 0 ? g["ResourceList"] : g;

  // .design-sync/previews/ResourceList.tsx
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var RECURSOS = [
    { id: "1", name: "Introdução à Informática", description: "Aprenda a usar o computador do zero.", type: "course", url: "https://exemplo.com", tags: ["tecnologia"], createdAt: "2024-01-01", updatedAt: "2024-01-01" },
    { id: "2", name: "Como usar o WhatsApp", description: "Guia completo para se comunicar pelo WhatsApp.", type: "video", tags: ["comunicação"], createdAt: "2024-01-02", updatedAt: "2024-01-02" },
    { id: "3", name: "Alimentação Saudável na Terceira Idade", description: "Dicas de nutrição para manter a saúde e disposição.", type: "article", tags: ["saúde"], createdAt: "2024-01-03", updatedAt: "2024-01-03" },
    { id: "4", name: "Exercícios para a Memória", description: "Atividades cognitivas para manter a mente ativa.", type: "book", createdAt: "2024-01-04", updatedAt: "2024-01-04" }
  ];
  function ComRecursos() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_ResourceList_exports.ResourceList,
      {
        resources: RECURSOS,
        loading: false,
        error: null,
        onAdd: () => {
        },
        onEdit: () => {
        },
        onDelete: () => Promise.resolve(),
        onRetry: () => {
        }
      }
    );
  }
  function Carregando() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_ResourceList_exports.ResourceList,
      {
        resources: [],
        loading: true,
        error: null,
        onAdd: () => {
        },
        onEdit: () => {
        },
        onDelete: () => Promise.resolve()
      }
    );
  }
  function SemRecursos() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_ResourceList_exports.ResourceList,
      {
        resources: [],
        loading: false,
        error: null,
        onAdd: () => {
        },
        onEdit: () => {
        },
        onDelete: () => Promise.resolve()
      }
    );
  }
  function ComErro() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_ResourceList_exports.ResourceList,
      {
        resources: [],
        loading: false,
        error: "Não foi possível carregar os materiais. Verifique sua conexão com a internet.",
        onAdd: () => {
        },
        onEdit: () => {
        },
        onDelete: () => Promise.resolve(),
        onRetry: () => {
        }
      }
    );
  }
  return __toCommonJS(ResourceList_exports);
})();
