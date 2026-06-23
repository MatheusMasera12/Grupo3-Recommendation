# RecommendationMfe (@grupo3/recommendation-mfe@1.0.0)

This design system is the published @grupo3/recommendation-mfe React library, bundled as a single
browser global. All 11 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.RecommendationMfe`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry (tokens and fonts; this DS injects component styles at runtime). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.RecommendationMfe.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Button } = window.RecommendationMfe;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Button />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<DesignSystemProvider>{children}</DesignSystemProvider>
```

## Tokens

0 CSS custom properties from @grupo3/recommendation-mfe. Names are
preserved verbatim from upstream. None detected — this DS may compute styles at runtime (CSS-in-JS).



## Components

### general
- `Button`
- `Card`
- `DesignSystemProvider`
- `Input`
- `Navbar`
- `RecommendationCard`
- `ResourceForm`
- `ResourceList`
- `SearchBar`
- `Sidebar`
- `UserProfileCard`
