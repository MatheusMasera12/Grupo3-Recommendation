import { importShared } from './__federation_fn_import-dSf-FNT7.js';
import { j as jsxRuntimeExports } from './jsx-runtime-DtXR568w.js';
import { t as theme } from './theme-B4H87mHi.js';
import { c as createSvgIcon } from './createSvgIcon-BJia9uWz.js';
import { R as RESOURCE_TYPE_COLORS, a as RESOURCE_TYPE_LABELS, b as api, p as parseResourceFromBackend } from './resourceService-db-U-UsL.js';
import { G as Grid2 } from './Grid2-Nyi8gLgH.js';

const AutoAwesomeIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"
}), 'AutoAwesome');

const {Card,CardContent,CardActions,Typography: Typography$1,Chip,Box: Box$1,LinearProgress} = await importShared('@mui/material');
function getScoreColor(score) {
  if (score >= 0.7) return "success";
  if (score >= 0.4) return "warning";
  return "error";
}
function getScoreLabel(score) {
  if (score >= 0.7) return "Alta compatibilidade";
  if (score >= 0.4) return "Compatibilidade média";
  return "Compatibilidade baixa";
}
function RecommendationCard({ recommendation, onSelect }) {
  const scorePercent = Math.round(recommendation.score * 100);
  const scoreColor = getScoreColor(recommendation.score);
  const resource = recommendation.resource;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: onSelect ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": onSelect ? { transform: "translateY(-3px)", boxShadow: 6 } : {},
        "&:focus-visible": { outline: "3px solid", outlineColor: "primary.main", outlineOffset: 2 }
      },
      onClick: () => onSelect?.(recommendation.id),
      role: onSelect ? "button" : void 0,
      tabIndex: onSelect ? 0 : void 0,
      "aria-label": resource?.name ? `Ver mais sobre: ${resource.name}` : "Ver recomendação",
      onKeyDown: onSelect ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(recommendation.id);
        }
      } : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { sx: { flexGrow: 1, pb: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { sx: { display: "flex", alignItems: "center", gap: 1, mb: 1.5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAwesomeIcon, { color: "primary", sx: { fontSize: 18 }, "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$1, { variant: "caption", color: "primary.main", fontWeight: 700, children: "Indicado para você" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              variant: "h6",
              fontWeight: 700,
              gutterBottom: true,
              sx: {
                lineHeight: 1.35,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              },
              children: resource?.name ?? `Recurso #${recommendation.resourceId}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2.5,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              },
              children: recommendation.reason
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { role: "group", "aria-label": `Compatibilidade: ${scorePercent}% — ${getScoreLabel(recommendation.score)}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { sx: { display: "flex", justifyContent: "space-between", mb: 0.75 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$1, { variant: "caption", color: "text.secondary", fontWeight: 500, children: "Compatibilidade com seu perfil" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography$1, { variant: "caption", fontWeight: 700, color: `${scoreColor}.main`, children: [
                scorePercent,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LinearProgress,
              {
                variant: "determinate",
                value: scorePercent,
                color: scoreColor,
                sx: { borderRadius: 3, height: 8, bgcolor: "action.hover" },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$1, { variant: "caption", color: `${scoreColor}.main`, fontWeight: 600, sx: { mt: 0.5, display: "block" }, children: getScoreLabel(recommendation.score) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardActions, { sx: { px: 2, pb: 2.5, pt: 0 }, children: resource?.type && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Chip,
          {
            label: RESOURCE_TYPE_LABELS[resource.type],
            size: "small",
            color: RESOURCE_TYPE_COLORS[resource.type],
            variant: "filled"
          }
        ) })
      ]
    }
  );
}

function parseRecommendationFromBackend(item) {
  return {
    id: String(item.id),
    resourceId: item.resource ? String(item.resource.id) : "",
    resource: item.resource ? parseResourceFromBackend(item.resource) : void 0,
    score: item.score !== void 0 ? Number(item.score) : 0.88,
    reason: item.description || "Recomendado com base no seu perfil",
    userId: String(item.userId),
    createdAt: item.createdAt || "",
    updatedAt: item.updatedAt || ""
  };
}
function getUserIdFromToken() {
  try {
    const token = localStorage.getItem("auth_token");
    if (!token) return void 0;
    const parts = token.split(".");
    if (parts.length < 2) return void 0;
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(decodeURIComponent(atob(base64).split("").map(function(c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join("")));
    return payload.idUser || payload.id || payload.sub;
  } catch (err) {
    console.error("Error decoding token:", err);
    return void 0;
  }
}
async function fetchRecommendations(userId) {
  const resolvedUserId = getUserIdFromToken();
  if (!resolvedUserId) {
    return [];
  }
  const { data } = await api.get(`/api/recommendations/user/${resolvedUserId}`);
  let items = [];
  if (data && Array.isArray(data)) {
    items = data;
  } else if (data && typeof data === "object" && "content" in data && Array.isArray(data.content)) {
    items = data.content || [];
  }
  return items.map(parseRecommendationFromBackend);
}

const {useState,useEffect,useCallback} = await importShared('react');
function useRecommendations(userId) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRecommendations(userId);
      setRecommendations(data);
    } catch {
      setError("Erro ao carregar recomendações. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }, [userId]);
  useEffect(() => {
    void load();
  }, [load]);
  return { recommendations, loading, error, refetch: load };
}

const {ThemeProvider,CssBaseline,Container,Box,Typography,CircularProgress,Alert,Button} = await importShared('@mui/material');
function RecommendationContent() {
  const { recommendations, loading, error, refetch } = useRecommendations();
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Alert,
      {
        severity: "error",
        action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { color: "inherit", size: "small", onClick: refetch, children: "Tentar novamente" }),
        children: error
      }
    );
  }
  if (recommendations.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { textAlign: "center", py: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", color: "text.secondary", children: "Nenhuma recomendação disponível no momento." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid2, { container: true, spacing: 3, children: recommendations.map((rec) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid2, { size: { xs: 12, sm: 6, md: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationCard, { recommendation: rec }) }, rec.id)) });
}
function RecommendationView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { theme, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CssBaseline, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { maxWidth: "lg", sx: { py: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { mb: 4 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", component: "h1", fontWeight: 700, gutterBottom: true, children: "Recomendações" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", color: "text.secondary", children: "Recursos selecionados especialmente para você." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationContent, {})
    ] })
  ] });
}

export { RecommendationView as default };
