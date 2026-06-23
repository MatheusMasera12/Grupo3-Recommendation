import * as React from 'react';

/**
 * Button — from @grupo3/recommendation-mfe@1.0.0.
 * @replaces button
 */
export interface ButtonProps {
  loading?: boolean;
  /** The content of the component. */
  children?: React.ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ButtonClasses> & Partial<ClassNameMap<never>>;
  /** The color of the component. It supports both default and custom theme colors, which can be added as shown in the [palett */
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** If `true`, no elevation is used. */
  disableElevation?: boolean;
  /** If `true`, the keyboard focus ripple is disabled. */
  disableFocusRipple?: boolean;
  /** Element placed after the children. */
  endIcon?: React.ReactNode;
  /** If `true`, the button will take up the full width of its container. */
  fullWidth?: boolean;
  /** The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node. */
  href?: string;
  /** Element placed before the children if the button is in loading state. The node should contain an element with `role="pro */
  loadingIndicator?: React.ReactNode;
  /** The loading indicator can be positioned on the start, end, or the center of the button. */
  loadingPosition?: "center" | "start" | "end";
  /** The size of the component. `small` is equivalent to the dense button styling. */
  size?: "small" | "medium" | "large";
  /** Element placed before the children. */
  startIcon?: React.ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: unknown;
  /** The variant to use. */
  variant?: "text" | "outlined" | "contained";
  /** A ref for imperative actions. It currently only supports `focusVisible()` action. */
  action?: React.Ref;
  /** If `true`, the ripples are centered. They won't start at the cursor interaction position. */
  centerRipple?: boolean;
  /** If `true`, the ripple effect is disabled. ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure */
  disableRipple?: boolean;
  /** If `true`, the touch ripple effect is disabled. */
  disableTouchRipple?: boolean;
  /** If `true`, the base button will have a keyboard focus ripple. */
  focusRipple?: boolean;
  /** This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the  */
  focusVisibleClassName?: string;
  /** The component used to render a link when the `href` prop is provided. */
  LinkComponent?: "symbol" | "object" | "style" | "button" | "clipPath" | "filter" | "marker" | "mask" | "p" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | (string & {}) /* +164 more */;
  tabIndex?: number;
  /** Props applied to the `TouchRipple` element. */
  TouchRippleProps?: Partial<TouchRippleProps>;
  /** A ref that points to the `TouchRipple` element. */
  touchRippleRef?: React.Ref;
  className?: string;
  style?: CSSProperties;
  /** Allows getting a ref to the component instance. Once the component unmounts, React will set `ref.current` to `null` (or  */
  ref?: React.Ref;
  id?: string;
  component?: "symbol" | "object" | "style" | "button" | "clipPath" | "filter" | "marker" | "mask" | "p" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | (string & {}) /* +164 more */;
}

export declare const Button: React.ComponentType<ButtonProps>;
