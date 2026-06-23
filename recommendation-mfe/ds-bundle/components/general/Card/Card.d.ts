import * as React from 'react';

/**
 * Card — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface CardProps {
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

export declare const Card: React.ComponentType<CardProps>;
