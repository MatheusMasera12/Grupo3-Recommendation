Input from @grupo3/recommendation-mfe. Use via `window.RecommendationMfe.Input` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<DesignSystemProvider>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface InputProps {
  /** The variant to use. */
  variant?: "outlined" | "filled" | "standard";
  /** Props applied to the Input element. It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/), [`Outli */
  InputProps?: Partial<OutlinedInputProps> | Partial<FilledInputProps> | Partial<InputProps>;
  /** This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like a */
  autoComplete?: string;
  /** If `true`, the `input` element is focused during the first mount. */
  autoFocus?: boolean;
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TextFieldClasses>;
  /** The color of the component. It supports both default and custom theme colors, which can be added as shown in the [palett */
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  /** The default value. Use when the component is not controlled. */
  defaultValue?: unknown;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** If `true`, the label is displayed in an error state. */
  error?: boolean;
  /** Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element. */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /** If `true`, the input will take up the full width of its container. */
  fullWidth?: boolean;
  /** The helper text content. */
  helperText?: React.ReactNode;
  /** The id of the `input` element. Use this prop to make `label` and `helperText` accessible for screen readers. */
  id?: string;
  /** Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element. Pointer events like `onClick` */
  InputLabelProps?: Partial<InputLabelProps>;
  /** [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element. */
  inputProps?: InputBaseComponentProps;
  /** Pass a ref to the `input` element. */
  inputRef?: React.Ref;
  /** The label content. */
  label?: React.ReactNode;
  /** If `true`, a `textarea` element is rendered instead of an input. */
  multiline?: boolean;
  /** Name attribute of the `input` element. */
  name?: string;
  /** The short hint displayed in the `input` before the user enters a value. */
  placeholder?: string;
  /** If `true`, the label is displayed as required and the `input` element is required. */
  required?: boolean;
  /** Number of rows to display when multiline option is set to true. */
  rows?: string | number;
  /** Maximum number of rows to display when multiline option is set to true. */
  maxRows?: string | number;
  /** Minimum number of rows to display when multiline option is set to true. */
  minRows?: string | number;
  /** Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `inp */
  select?: boolean;
  /** Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element. */
  SelectProps?: Partial<FilledSelectProps & BaseSelectProps<unknown>> | Partial<StandardSelectProps & BaseSelectProps<unknown>> | Partial<OutlinedSelectProps & BaseSelectProps<unknown>>;
  /** The size of the component. */
  size?: "small" | "medium";
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: unknown;
  /** Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/E */
  type?: unknown;
  /** The value of the `input` element, required for a controlled component. */
  value?: unknown;
  className?: string;
  style?: CSSProperties;
  /** If `dense` or `normal`, will adjust vertical spacing of this and contained components. */
  margin?: "dense" | "none" | "normal";
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: React.Ref;
  /** If `true`, the component is displayed in focused state. */
  focused?: boolean;
  /** If `true`, the label is hidden. This is used to increase density for a `FilledInput`. Be sure to add `aria-label` to the */
  hiddenLabel?: boolean;
  component?: "symbol" | "object" | "style" | "button" | "clipPath" | "filter" | "marker" | "mask" | "p" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | (string & {}) /* +164 more */;
  /** The components used for each slot inside. */
  slots?: Partial<TextFieldSlots>;
  /** The props used for each slot inside. */
  slotProps?: unknown;
}
```
