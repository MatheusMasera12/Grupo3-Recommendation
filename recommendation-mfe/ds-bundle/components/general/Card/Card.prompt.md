Card from @grupo3/recommendation-mfe. Use via `window.RecommendationMfe.Card` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<DesignSystemProvider>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface CardProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<CardClasses> & Partial<ClassNameMap<never>>;
  /** If `true`, the card will use raised styling. */
  raised?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: unknown;
  /** The variant to use. */
  variant?: "outlined" | "elevation";
  /** Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive. */
  elevation?: number;
  /** If `true`, rounded corners are disabled. */
  square?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: React.Ref;
  id?: string;
  component?: "symbol" | "object" | "style" | "button" | "clipPath" | "filter" | "marker" | "mask" | "p" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | (string & {}) /* +164 more */;
}
```
