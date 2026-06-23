import { importShared } from './__federation_fn_import-dSf-FNT7.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import { B as Button } from './Button-BZcTzjlq.js';

const {Container,Box,Typography} = await importShared('@mui/material');

const {Link} = await importShared('react-router-dom');
function NotFoundPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        gap: 3
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h1", fontWeight: 900, color: "primary.main", lineHeight: 1, children: "404" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", fontWeight: 600, children: "Página não encontrada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { color: "text.secondary", children: "A página que você está procurando não existe ou foi movida." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", size: "large", children: "Voltar ao início" }) })
      ]
    }
  ) });
}

export { NotFoundPage as default };
