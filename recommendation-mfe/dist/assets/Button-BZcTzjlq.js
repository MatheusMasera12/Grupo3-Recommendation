import { importShared } from './__federation_fn_import-dSf-FNT7.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';

const {Button:MuiButton,CircularProgress,Box} = await importShared('@mui/material');

function Button({ loading = false, disabled, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MuiButton, { disabled: disabled || loading, "aria-busy": loading || void 0, ...props, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 18, color: "inherit", "aria-hidden": "true" }),
    children
  ] }) : children });
}

export { Button as B };
