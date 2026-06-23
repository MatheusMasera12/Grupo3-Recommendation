import { s as styleFunctionSx, b as capitalize, a as createTheme, h as handleBreakpoints, r as resolveBreakpointValues, e as createUnarySpacing, f as deepmerge, m as mergeBreakpointsInOrder, g as getValue, j as createSpacing, k as createBreakpoints, c as createTheme$1, l as formatMuiErrorMessage, n as createTypography, o as createThemeWithVars, p as blue, q as common, t as green, u as grey, v as lightBlue, w as orange, x as purple, y as red, z as duration, A as alpha, B as getOverlayAlpha, C as darken, D as lighten, E as emphasize, F as getPath, G as clamp } from '../createTheme-D4SGCTFw.js';
export { H as createColorScheme, I as createMuiTheme, J as createTransitions, K as decomposeColor, L as easing, M as getContrastRatio, N as getLuminance, O as hexToRgb, P as hslToRgb, Q as private_createMixins, R as private_excludeVariablesFromRoot, S as recomposeColor, T as rgbToHex, U as shouldSkipGeneratingVar } from '../createTheme-D4SGCTFw.js';
import { i as internal_serializeStyles, f as styled, b as clsx, D as DefaultPropsProvider, d as composeClasses, g as generateUtilityClass, e as defaultTheme$3, T as THEME_ID, h as generateUtilityClasses, C as ClassNameGenerator, u as useDefaultProps, s as styled$2, m as memoTheme, c as createSvgIcon, r as resolveProps, j as rootShouldForwardProp, k as slotShouldForwardProp, S as SvgIcon } from '../createSvgIcon-BJia9uWz.js';
export { l as getSvgIconUtilityClass, n as svgIconClasses } from '../createSvgIcon-BJia9uWz.js';
import { importShared } from '../__federation_fn_import-dSf-FNT7.js';
import { u as useTheme$1, e as extendSxProp$1, a as useTheme$2, g as getThemeProps, s as styled$1, b as useThemeProps$1, c as useTheme$3, i as isMuiElement } from '../Grid2-Nyi8gLgH.js';
export { G as Grid2 } from '../Grid2-Nyi8gLgH.js';
import { j as jsxRuntimeExports } from '../jsx-runtime-DtXR568w.js';
import { _ as _extends } from '../emotion-use-insertion-effect-with-fallbacks.browser.esm-BLozvz9H.js';
import { keyframes, css } from '../__federation_shared_@emotion/react-CKozeCB7.js';
import { g as getDefaultExportFromCjs } from '../_commonjsHelpers-B85MJLTf.js';
import { d as createCache, S as StyleSheet, T as ThemeContext$1 } from '../emotion-element-f0de968e.browser.esm-CThtExcP.js';

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

{
  propTypes.exports = factoryWithThrowingShims();
}

var propTypesExports = propTypes.exports;
const PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

const React$2S = await importShared('react');
const {CacheProvider} = await importShared('@emotion/react');
const cacheMap = /* @__PURE__ */ new Map();
const createEmotionCache = (options, CustomSheet) => {
  const cache = createCache(options);
  cache.sheet = new CustomSheet({
    key: cache.key,
    nonce: cache.sheet.nonce,
    container: cache.sheet.container,
    speedy: cache.sheet.isSpeedy,
    prepend: cache.sheet.prepend,
    insertionPoint: cache.sheet.insertionPoint
  });
  return cache;
};
let insertionPoint;
if (typeof document === "object") {
  insertionPoint = document.querySelector('[name="emotion-insertion-point"]');
  if (!insertionPoint) {
    insertionPoint = document.createElement("meta");
    insertionPoint.setAttribute("name", "emotion-insertion-point");
    insertionPoint.setAttribute("content", "");
    const head = document.querySelector("head");
    if (head) {
      head.prepend(insertionPoint);
    }
  }
}
function getCache(injectFirst, enableCssLayer) {
  if (injectFirst || enableCssLayer) {
    class MyStyleSheet extends StyleSheet {
      insert(rule, options) {
        if (this.key && this.key.endsWith("global")) {
          this.before = insertionPoint;
        }
        return super.insert(rule, options);
      }
    }
    const emotionCache = createEmotionCache({
      key: "css",
      insertionPoint: injectFirst ? insertionPoint : void 0
    }, MyStyleSheet);
    if (enableCssLayer) {
      const prevInsert = emotionCache.insert;
      emotionCache.insert = (...args) => {
        if (!args[1].styles.match(/^@layer\s+[^{]*$/)) {
          args[1].styles = `@layer mui {${args[1].styles}}`;
        }
        return prevInsert(...args);
      };
    }
    return emotionCache;
  }
  return void 0;
}
function StyledEngineProvider(props) {
  const {
    injectFirst,
    enableCssLayer,
    children
  } = props;
  const cache = React$2S.useMemo(() => {
    const cacheKey = `${injectFirst}-${enableCssLayer}`;
    if (typeof document === "object" && cacheMap.has(cacheKey)) {
      return cacheMap.get(cacheKey);
    }
    const fresh = getCache(injectFirst, enableCssLayer);
    cacheMap.set(cacheKey, fresh);
    return fresh;
  }, [injectFirst, enableCssLayer]);
  return cache ? /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, {
    value: cache,
    children
  }) : children;
}

await importShared('react');
const {Global} = await importShared('@emotion/react');
function isEmpty$2(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$3(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty$2(themeInput) ? defaultTheme : themeInput) : styles;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
    styles: globalStyles
  });
}

await importShared('react');
function wrapGlobalLayer(styles) {
  const serialized = internal_serializeStyles(styles);
  if (styles !== serialized && serialized.styles) {
    if (!serialized.styles.match(/^@layer\s+[^{]*$/)) {
      serialized.styles = `@layer global{${serialized.styles}}`;
    }
    return serialized;
  }
  return styles;
}
function GlobalStyles$2({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = useTheme$1(defaultTheme);
  const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
  let globalStyles = typeof styles === "function" ? styles(resolvedTheme) : styles;
  if (resolvedTheme.modularCssLayers) {
    if (Array.isArray(globalStyles)) {
      globalStyles = globalStyles.map((styleArg) => {
        if (typeof styleArg === "function") {
          return wrapGlobalLayer(styleArg(resolvedTheme));
        }
        return wrapGlobalLayer(styleArg);
      });
    } else {
      globalStyles = wrapGlobalLayer(globalStyles);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$3, {
    styles: globalStyles
  });
}

const React$2R = await importShared('react');
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx);
  const Box = /*#__PURE__*/React$2R.forwardRef(function Box(inProps, ref) {
    const theme = useTheme$1(defaultTheme);
    const {
      className,
      component = 'div',
      ...other
    } = extendSxProp$1(inProps);
    return /*#__PURE__*/jsxRuntimeExports.jsx(BoxRoot, {
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box;
}

const React$2Q = await importShared('react');


/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? React$2Q.useLayoutEffect : React$2Q.useEffect;

const React$2P = await importShared('react');
function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = React$2P.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }
    return defaultMatches;
  });
  useEnhancedEffect(() => {
    if (!matchMedia) {
      return void 0;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      setMatch(queryList.matches);
    };
    updateMatch();
    queryList.addEventListener("change", updateMatch);
    return () => {
      queryList.removeEventListener("change", updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}
const safeReact$1 = {
  ...React$2P
};
const maybeReactUseSyncExternalStore = safeReact$1.useSyncExternalStore;
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = React$2P.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = React$2P.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = React$2P.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {
      }];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, (notify) => {
      mediaQueryList.addEventListener("change", notify);
      return () => {
        mediaQueryList.removeEventListener("change", notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function unstable_createUseMediaQuery(params = {}) {
  const {
    themeId
  } = params;
  return function useMediaQuery2(queryInput, options = {}) {
    let theme = useTheme$2();
    if (theme && themeId) {
      theme = theme[themeId] || theme;
    }
    const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
    const {
      defaultMatches = false,
      matchMedia = supportMatchMedia ? window.matchMedia : null,
      ssrMatchMedia = null,
      noSsr = false
    } = getThemeProps({
      name: "MuiUseMediaQuery",
      props: options,
      theme
    });
    let query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
    query = query.replace(/^@media( ?)/m, "");
    if (query.includes("print")) {
      console.warn([`MUI: You have provided a \`print\` query to the \`useMediaQuery\` hook.`, "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join("\n"));
    }
    const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== void 0 ? useMediaQueryNew : useMediaQueryOld;
    const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
    return match;
  };
}
unstable_createUseMediaQuery();

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce$1(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

function deprecatedPropType(validator, reason) {
  {
    return () => null;
  }
}

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

function requirePropFactory(componentNameInError, Component) {
  {
    return () => null;
  }
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const React$2O = await importShared('react');

let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React$2O.useState(idOverride);
  const id = idOverride || defaultId;
  React$2O.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  ...React$2O
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

function unsupportedProp(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}

const React$2N = await importShared('react');

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React$2N.useRef(controlled !== void 0);
  const [valueState, setValue] = React$2N.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = React$2N.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

const React$2M = await importShared('react');

/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = React$2M.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React$2M.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}

const React$2L = await importShared('react');


/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  const cleanupRef = React$2L.useRef(undefined);
  const refEffect = React$2L.useCallback(instance => {
    const cleanups = refs.map(ref => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === 'function') {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === 'function' ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach(refCleanup => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
  return React$2L.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

const React$2K = await importShared('react');

const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = React$2K.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

const React$2J = await importShared('react');

const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  React$2J.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}

class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
  }
  return false;
}

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(win = window) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
}

const React$2I = await importShared('react');

const usePreviousProps = value => {
  const ref = React$2I.useRef({});
  React$2I.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const React$2H = await importShared('react');


/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
function getValidReactChildren(children) {
  return React$2H.Children.toArray(children).filter(child => /*#__PURE__*/React$2H.isValidElement(child));
}

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent$1(element) {
  return typeof element === 'string';
}

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent$1(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps$1(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps$1({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = appendOwnerState(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}

const React$2G = await importShared('react');


/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */
function getReactElementRef(element) {
  // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
  if (parseInt(React$2G.version, 10) >= 19) {
    return element?.props?.ref || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return element?.ref || null;
}

const React$2F = await importShared('react');

const ThemeContext = /* @__PURE__ */ React$2F.createContext(null);

const React$2E = await importShared('react');
function useTheme() {
  const theme = React$2E.useContext(ThemeContext);
  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
const nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

const React$2D = await importShared('react');
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    return mergedTheme;
  }
  return {
    ...outerTheme,
    ...localTheme
  };
}
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  const theme = React$2D.useMemo(() => {
    const output = outerTheme === null ? {
      ...localTheme
    } : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, {
    value: theme,
    children
  });
}

const React$2C = await importShared('react');
const RtlContext = /* @__PURE__ */ React$2C.createContext();
function RtlProvider({
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RtlContext.Provider, {
    value: value ?? true,
    ...props
  });
}
const useRtl = () => {
  const value = React$2C.useContext(RtlContext);
  return value ?? false;
};

await importShared('react');
function useLayerOrder(theme) {
  const upperTheme = useTheme$2();
  const id = useId() || '';
  const {
    modularCssLayers
  } = theme;
  let layerOrder = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx';
  if (!modularCssLayers || upperTheme !== null) {
    // skip this hook if upper theme exists.
    layerOrder = '';
  } else if (typeof modularCssLayers === 'string') {
    layerOrder = modularCssLayers.replace(/mui(?!\.)/g, layerOrder);
  } else {
    layerOrder = `@layer ${layerOrder};`;
  }
  useEnhancedEffect(() => {
    const head = document.querySelector('head');
    if (!head) {
      return;
    }
    const firstChild = head.firstChild;
    if (layerOrder) {
      // Only insert if first child doesn't have data-mui-layer-order attribute
      if (firstChild && firstChild.hasAttribute?.('data-mui-layer-order') && firstChild.getAttribute('data-mui-layer-order') === id) {
        return;
      }
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-mui-layer-order', id);
      styleElement.textContent = layerOrder;
      head.prepend(styleElement);
    } else {
      head.querySelector(`style[data-mui-layer-order="${id}"]`)?.remove();
    }
  }, [layerOrder, id]);
  if (!layerOrder) {
    return null;
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$2, {
    styles: layerOrder
  });
}

const React$2B = await importShared('react');
const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React$2B.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? {
        ...upperTheme,
        [themeId]: mergedTheme
      } : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? {
      ...upperTheme,
      [themeId]: localTheme
    } : {
      ...upperTheme,
      ...localTheme
    };
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useTheme$2(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = (themeId ? engineTheme[themeId] : engineTheme).direction === "rtl";
  const layerOrder = useLayerOrder(engineTheme);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
      value: engineTheme,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RtlProvider, {
        value: rtlValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DefaultPropsProvider, {
          value: themeId ? engineTheme[themeId].components : engineTheme.components,
          children: [layerOrder, children]
        })
      })
    })
  });
}

/**
 * Split this component for RSC import
 */
await importShared('react');
const DEFAULT_MODE_STORAGE_KEY = 'mode';
const DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
const DEFAULT_ATTRIBUTE = 'data-color-scheme';
function InitColorSchemeScript(options) {
  const {
    defaultMode = 'system',
    defaultLightColorScheme = 'light',
    defaultDarkColorScheme = 'dark',
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute: initialAttribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = 'document.documentElement',
    nonce
  } = options || {};
  let setter = '';
  let attribute = initialAttribute;
  if (initialAttribute === 'class') {
    attribute = '.%s';
  }
  if (initialAttribute === 'data') {
    attribute = '[data-%s]';
  }
  if (attribute.startsWith('.')) {
    const selector = attribute.substring(1);
    setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
      ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
  }
  const matches = attribute.match(/\[([^\]]+)\]/); // case [data-color-scheme=%s] or [data-color-scheme]
  if (matches) {
    const [attr, value] = matches[1].split('=');
    if (!value) {
      setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
      ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
    }
    setter += `
      ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
  } else {
    setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx("script", {
    suppressHydrationWarning: true,
    nonce: typeof window === 'undefined' ? nonce : ''
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${setter}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}

function noop$3() {}
const localStorageManager = ({
  key,
  storageWindow
}) => {
  if (!storageWindow && typeof window !== 'undefined') {
    storageWindow = window;
  }
  return {
    get(defaultValue) {
      if (typeof window === 'undefined') {
        return undefined;
      }
      if (!storageWindow) {
        return defaultValue;
      }
      let value;
      try {
        value = storageWindow.localStorage.getItem(key);
      } catch {
        // Unsupported
      }
      return value || defaultValue;
    },
    set: value => {
      if (storageWindow) {
        try {
          storageWindow.localStorage.setItem(key, value);
        } catch {
          // Unsupported
        }
      }
    },
    subscribe: handler => {
      if (!storageWindow) {
        return noop$3;
      }
      const listener = event => {
        const value = event.newValue;
        if (event.key === key) {
          handler(value);
        }
      };
      storageWindow.addEventListener('storage', listener);
      return () => {
        storageWindow.removeEventListener('storage', listener);
      };
    }
  };
};

const React$2A = await importShared('react');
function noop$2() {}
function getSystemMode(mode) {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && mode === 'system') {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      return 'dark';
    }
    return 'light';
  }
  return undefined;
}
function processState(state, callback) {
  if (state.mode === 'light' || state.mode === 'system' && state.systemMode === 'light') {
    return callback('light');
  }
  if (state.mode === 'dark' || state.mode === 'system' && state.systemMode === 'dark') {
    return callback('dark');
  }
  return undefined;
}
function getColorScheme(state) {
  return processState(state, mode => {
    if (mode === 'light') {
      return state.lightColorScheme;
    }
    if (mode === 'dark') {
      return state.darkColorScheme;
    }
    return undefined;
  });
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = 'light',
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === 'undefined' ? undefined : window,
    storageManager = localStorageManager,
    noSsr = false
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(',');
  const isMultiSchemes = supportedColorSchemes.length > 1;
  const modeStorage = React$2A.useMemo(() => storageManager?.({
    key: modeStorageKey,
    storageWindow
  }), [storageManager, modeStorageKey, storageWindow]);
  const lightStorage = React$2A.useMemo(() => storageManager?.({
    key: `${colorSchemeStorageKey}-light`,
    storageWindow
  }), [storageManager, colorSchemeStorageKey, storageWindow]);
  const darkStorage = React$2A.useMemo(() => storageManager?.({
    key: `${colorSchemeStorageKey}-dark`,
    storageWindow
  }), [storageManager, colorSchemeStorageKey, storageWindow]);
  const [state, setState] = React$2A.useState(() => {
    const initialMode = modeStorage?.get(defaultMode) || defaultMode;
    const lightColorScheme = lightStorage?.get(defaultLightColorScheme) || defaultLightColorScheme;
    const darkColorScheme = darkStorage?.get(defaultDarkColorScheme) || defaultDarkColorScheme;
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme,
      darkColorScheme
    };
  });
  const [isClient, setIsClient] = React$2A.useState(noSsr || !isMultiSchemes);
  React$2A.useEffect(() => {
    setIsClient(true); // to rerender the component after hydration
  }, []);
  const colorScheme = getColorScheme(state);
  const setMode = React$2A.useCallback(mode => {
    setState(currentState => {
      if (mode === currentState.mode) {
        // do nothing if mode does not change
        return currentState;
      }
      const newMode = mode ?? defaultMode;
      modeStorage?.set(newMode);
      return {
        ...currentState,
        mode: newMode,
        systemMode: getSystemMode(newMode)
      };
    });
  }, [modeStorage, defaultMode]);
  const setColorScheme = React$2A.useCallback(value => {
    if (!value) {
      setState(currentState => {
        lightStorage?.set(defaultLightColorScheme);
        darkStorage?.set(defaultDarkColorScheme);
        return {
          ...currentState,
          lightColorScheme: defaultLightColorScheme,
          darkColorScheme: defaultDarkColorScheme
        };
      });
    } else if (typeof value === 'string') {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState(currentState => {
          const newState = {
            ...currentState
          };
          processState(currentState, mode => {
            if (mode === 'light') {
              lightStorage?.set(value);
              newState.lightColorScheme = value;
            }
            if (mode === 'dark') {
              darkStorage?.set(value);
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else {
      setState(currentState => {
        const newState = {
          ...currentState
        };
        const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        if (newLightColorScheme) {
          if (!joinedColorSchemes.includes(newLightColorScheme)) {
            console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.lightColorScheme = newLightColorScheme;
            lightStorage?.set(newLightColorScheme);
          }
        }
        if (newDarkColorScheme) {
          if (!joinedColorSchemes.includes(newDarkColorScheme)) {
            console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.darkColorScheme = newDarkColorScheme;
            darkStorage?.set(newDarkColorScheme);
          }
        }
        return newState;
      });
    }
  }, [joinedColorSchemes, lightStorage, darkStorage, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React$2A.useCallback(event => {
    if (state.mode === 'system') {
      setState(currentState => {
        const systemMode = event?.matches ? 'dark' : 'light';

        // Early exit, nothing changed.
        if (currentState.systemMode === systemMode) {
          return currentState;
        }
        return {
          ...currentState,
          systemMode
        };
      });
    }
  }, [state.mode]);

  // Ref hack to avoid adding handleMediaQuery as a dep
  const mediaListener = React$2A.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React$2A.useEffect(() => {
    if (typeof window.matchMedia !== 'function' || !isMultiSchemes) {
      return undefined;
    }
    const handler = (...args) => mediaListener.current(...args);

    // Always listen to System preference
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handler);
    handler(media);
    return () => {
      media.removeListener(handler);
    };
  }, [isMultiSchemes]);

  // Handle when localStorage has changed
  React$2A.useEffect(() => {
    if (isMultiSchemes) {
      const unsubscribeMode = modeStorage?.subscribe(value => {
        if (!value || ['light', 'dark', 'system'].includes(value)) {
          setMode(value || defaultMode);
        }
      }) || noop$2;
      const unsubscribeLight = lightStorage?.subscribe(value => {
        if (!value || joinedColorSchemes.match(value)) {
          setColorScheme({
            light: value
          });
        }
      }) || noop$2;
      const unsubscribeDark = darkStorage?.subscribe(value => {
        if (!value || joinedColorSchemes.match(value)) {
          setColorScheme({
            dark: value
          });
        }
      }) || noop$2;
      return () => {
        unsubscribeMode();
        unsubscribeLight();
        unsubscribeDark();
      };
    }
    return undefined;
  }, [setColorScheme, setMode, joinedColorSchemes, defaultMode, storageWindow, isMultiSchemes, modeStorage, lightStorage, darkStorage]);
  return {
    ...state,
    mode: isClient ? state.mode : undefined,
    systemMode: isClient ? state.systemMode : undefined,
    colorScheme: isClient ? colorScheme : undefined,
    setMode,
    setColorScheme
  };
}

const React$2z = await importShared('react');
const DISABLE_CSS_TRANSITION = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function createCssVarsProvider(options) {
  const {
    themeId,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: defaultTheme = {},
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    defaultColorScheme,
    resolveTheme
  } = options;
  const defaultContext = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  };
  const ColorSchemeContext = /* @__PURE__ */ React$2z.createContext(void 0);
  const useColorScheme = () => React$2z.useContext(ColorSchemeContext) || defaultContext;
  const defaultColorSchemes = {};
  const defaultComponents = {};
  function CssVarsProvider(props) {
    const {
      children,
      theme: themeProp,
      modeStorageKey = defaultModeStorageKey,
      colorSchemeStorageKey = defaultColorSchemeStorageKey,
      disableTransitionOnChange = designSystemTransitionOnChange,
      storageManager,
      storageWindow = typeof window === "undefined" ? void 0 : window,
      documentNode = typeof document === "undefined" ? void 0 : document,
      colorSchemeNode = typeof document === "undefined" ? void 0 : document.documentElement,
      disableNestedContext = false,
      disableStyleSheetGeneration = false,
      defaultMode: initialMode = "system",
      noSsr
    } = props;
    const hasMounted = React$2z.useRef(false);
    const upperTheme = useTheme();
    const ctx = React$2z.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const initialTheme = React$2z.useMemo(() => {
      if (themeProp) {
        return themeProp;
      }
      return typeof defaultTheme === "function" ? defaultTheme() : defaultTheme;
    }, [themeProp]);
    const scopedTheme = initialTheme[themeId];
    const restThemeProp = scopedTheme || initialTheme;
    const {
      colorSchemes = defaultColorSchemes,
      components = defaultComponents,
      cssVarPrefix
    } = restThemeProp;
    const joinedColorSchemes = Object.keys(colorSchemes).filter((k) => !!colorSchemes[k]).join(",");
    const allColorSchemes = React$2z.useMemo(() => joinedColorSchemes.split(","), [joinedColorSchemes]);
    const defaultLightColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
    const defaultMode = colorSchemes[defaultLightColorScheme2] && colorSchemes[defaultDarkColorScheme2] ? initialMode : colorSchemes[restThemeProp.defaultColorScheme]?.palette?.mode || restThemeProp.palette?.mode;
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme: defaultLightColorScheme2,
      defaultDarkColorScheme: defaultDarkColorScheme2,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageManager,
      storageWindow,
      noSsr
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }
    const memoTheme = React$2z.useMemo(() => {
      const calculatedColorScheme = colorScheme || restThemeProp.defaultColorScheme;
      const themeVars = restThemeProp.generateThemeVars?.() || restThemeProp.vars;
      const theme = {
        ...restThemeProp,
        components,
        colorSchemes,
        cssVarPrefix,
        vars: themeVars
      };
      if (typeof theme.generateSpacing === "function") {
        theme.spacing = theme.generateSpacing();
      }
      if (calculatedColorScheme) {
        const scheme = colorSchemes[calculatedColorScheme];
        if (scheme && typeof scheme === "object") {
          Object.keys(scheme).forEach((schemeKey) => {
            if (scheme[schemeKey] && typeof scheme[schemeKey] === "object") {
              theme[schemeKey] = {
                ...theme[schemeKey],
                ...scheme[schemeKey]
              };
            } else {
              theme[schemeKey] = scheme[schemeKey];
            }
          });
        }
      }
      return resolveTheme ? resolveTheme(theme) : theme;
    }, [restThemeProp, colorScheme, components, colorSchemes, cssVarPrefix]);
    const colorSchemeSelector = restThemeProp.colorSchemeSelector;
    useEnhancedEffect(() => {
      if (colorScheme && colorSchemeNode && colorSchemeSelector && colorSchemeSelector !== "media") {
        const selector = colorSchemeSelector;
        let rule = colorSchemeSelector;
        if (selector === "class") {
          rule = `.%s`;
        }
        if (selector === "data") {
          rule = `[data-%s]`;
        }
        if (selector?.startsWith("data-") && !selector.includes("%s")) {
          rule = `[${selector}="%s"]`;
        }
        if (rule.startsWith(".")) {
          colorSchemeNode.classList.remove(...allColorSchemes.map((scheme) => rule.substring(1).replace("%s", scheme)));
          colorSchemeNode.classList.add(rule.substring(1).replace("%s", colorScheme));
        } else {
          const matches = rule.replace("%s", colorScheme).match(/\[([^\]]+)\]/);
          if (matches) {
            const [attr, value] = matches[1].split("=");
            if (!value) {
              allColorSchemes.forEach((scheme) => {
                colorSchemeNode.removeAttribute(attr.replace(colorScheme, scheme));
              });
            }
            colorSchemeNode.setAttribute(attr, value ? value.replace(/"|'/g, "") : "");
          } else {
            colorSchemeNode.setAttribute(rule, colorScheme);
          }
        }
      }
    }, [colorScheme, colorSchemeSelector, colorSchemeNode, allColorSchemes]);
    React$2z.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css = documentNode.createElement("style");
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css);
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React$2z.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React$2z.useMemo(() => ({
      allColorSchemes,
      colorScheme,
      darkColorScheme,
      lightColorScheme,
      mode,
      setColorScheme,
      setMode: setMode ,
      systemMode
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode, memoTheme.colorSchemeSelector]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || restThemeProp.cssVariables === false || nested && upperTheme?.cssVarPrefix === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = /* @__PURE__ */ jsxRuntimeExports.jsxs(React$2z.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$1, {
        themeId: scopedTheme ? themeId : void 0,
        theme: memoTheme,
        children
      }), shouldGenerateStyleSheet && /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$3, {
        styles: memoTheme.generateStyleSheets?.() || []
      })]
    });
    if (nested) {
      return element;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  const defaultLightColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
  const defaultDarkColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
  const getInitColorSchemeScript = (params) => InitColorSchemeScript({
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey,
    ...params
  });
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}

const React$2y = await importShared('react');
const defaultTheme$2 = createTheme();
const defaultCreateStyledComponent$1 = styled$1("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
const useThemePropsDefault$1 = (inProps) => useThemeProps$1({
  props: inProps,
  name: "MuiContainer",
  defaultTheme: defaultTheme$2
});
const useUtilityClasses$1P = (ownerState, componentName) => {
  const getContainerUtilityClass = (slot) => {
    return generateUtilityClass(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ["root", maxWidth && `maxWidth${capitalize(String(maxWidth))}`, fixed && "fixed", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent$1,
    useThemeProps = useThemePropsDefault$1,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    ...!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...ownerState.maxWidth === "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up("xs")]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    },
    ...ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== "xs" && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    }
  }));
  const Container = /* @__PURE__ */ React$2y.forwardRef(function Container2(inProps, ref) {
    const props = useThemeProps(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth = "lg",
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth
    };
    const classes = useUtilityClasses$1P(ownerState, componentName);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContainerRoot, {
        as: component,
        ownerState,
        className: clsx(classes.root, className),
        ref,
        ...other
      })
    );
  });
  return Container;
}

const React$2x = await importShared('react');
const defaultTheme$1 = createTheme();
const defaultCreateStyledComponent = styled$1("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return useThemeProps$1({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme$1
  });
}
function joinChildren(children, separator) {
  const childrenArray = React$2x.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/* @__PURE__ */ React$2x.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: "flex",
    flexDirection: "column",
    ...handleBreakpoints({
      theme
    }, resolveBreakpointValues({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), (propValue) => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /* @__PURE__ */ React$2x.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp$1(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StackRoot, {
      as: component,
      ownerState,
      ref,
      className: clsx(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
  return Stack;
}

function adaptV4Theme(inputTheme) {
  const {
    defaultProps = {},
    mixins = {},
    overrides = {},
    palette = {},
    props = {},
    styleOverrides = {},
    ...other
  } = inputTheme;
  const theme = {
    ...other,
    components: {}
  };
  Object.keys(defaultProps).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = defaultProps[component];
    theme.components[component] = componentValue;
  });
  Object.keys(props).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.defaultProps = props[component];
    theme.components[component] = componentValue;
  });
  Object.keys(styleOverrides).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = styleOverrides[component];
    theme.components[component] = componentValue;
  });
  Object.keys(overrides).forEach((component) => {
    const componentValue = theme.components[component] || {};
    componentValue.styleOverrides = overrides[component];
    theme.components[component] = componentValue;
  });
  theme.spacing = createSpacing(inputTheme.spacing);
  const breakpoints = createBreakpoints(inputTheme.breakpoints || {});
  const spacing = theme.spacing;
  theme.mixins = {
    gutters: (styles = {}) => {
      return {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        ...styles,
        [breakpoints.up("sm")]: {
          paddingLeft: spacing(3),
          paddingRight: spacing(3),
          ...styles[breakpoints.up("sm")]
        }
      };
    },
    ...mixins
  };
  const {
    type: typeInput,
    mode: modeInput,
    ...paletteRest
  } = palette;
  const finalMode = modeInput || typeInput || "light";
  theme.palette = {
    // theme.palette.text.hint
    text: {
      hint: finalMode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: finalMode,
    type: finalMode,
    ...paletteRest
  };
  return theme;
}

function createMuiStrictModeTheme(options, ...args) {
  return createTheme$1(deepmerge({
    unstable_strictMode: true
  }, options), ...args);
}

let warnedOnce$1 = false;

// To remove in v6
function createStyles(styles) {
  if (!warnedOnce$1) {
    console.warn(['MUI: createStyles from @mui/material/styles is deprecated.', 'Please use @mui/styles/createStyles'].join('\n'));
    warnedOnce$1 = true;
  }
  return styles;
}

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}

// Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}

// Emulate the sass function "unitless"
function toUnitless(length) {
  return parseFloat(length);
}

// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
function convertLength(baseFontSize) {
  return (length, toUnit) => {
    const fromUnit = getUnit(length);

    // Optimize for cases where `from` and `to` units are accidentally the same.
    if (fromUnit === toUnit) {
      return length;
    }

    // Convert input length to pixels.
    let pxLength = toUnitless(length);
    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      }
    }

    // Convert length in pixels to the output unit
    let outputLength = pxLength;
    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}

// fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height
function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}

/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */
function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = 'rem',
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(breakpoint => {
    let value = min + factor * breakpoint;
    if (transform !== null) {
      value = transform(value);
    }
    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`
    };
  });
  return output;
}

function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ["sm", "md", "lg"],
    disableAlign = false,
    factor = 2,
    variants = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = options;
  const theme = {
    ...themeInput
  };
  theme.typography = {
    ...theme.typography
  };
  const typography = theme.typography;
  const convert = convertLength(typography.htmlFontSize);
  const breakpointValues = breakpoints.map((x) => theme.breakpoints.values[x]);
  variants.forEach((variant) => {
    const style = typography[variant];
    if (!style) {
      return;
    }
    const remFontSize = parseFloat(convert(style.fontSize, "rem"));
    if (remFontSize <= 1) {
      return;
    }
    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style;
    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error(formatMuiErrorMessage(6));
    }
    if (!isUnitless(lineHeight)) {
      lineHeight = parseFloat(convert(lineHeight, "rem")) / parseFloat(remFontSize);
    }
    let transform = null;
    if (!disableAlign) {
      transform = (value) => alignProperty({
        size: value,
        grid: fontGrid({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }
    typography[variant] = {
      ...style,
      ...responsiveProperty({
        cssProperty: "fontSize",
        min: minFontSize,
        max: maxFontSize,
        unit: "rem",
        breakpoints: breakpointValues,
        transform
      })
    };
  });
  return theme;
}

function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme$3,
    themeId: THEME_ID
  });
}

await importShared('react');
function ThemeProviderNoVars({
  theme: themeInput,
  ...props
}) {
  const scopedTheme = THEME_ID in themeInput ? themeInput[THEME_ID] : undefined;
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$1, {
    ...props,
    themeId: scopedTheme ? THEME_ID : undefined,
    theme: scopedTheme || themeInput
  });
}

await importShared('react');
const defaultConfig = {
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'mui-mode'
};

await importShared('react');
const {
  CssVarsProvider: InternalCssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: deprecatedGetInitColorSchemeScript
} = createCssVarsProvider({
  themeId: THEME_ID,
  // @ts-ignore ignore module augmentation tests
  theme: () => createTheme$1({
    cssVariables: true
  }),
  colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
  modeStorageKey: defaultConfig.modeStorageKey,
  defaultColorScheme: {
    light: defaultConfig.defaultLightColorScheme,
    dark: defaultConfig.defaultDarkColorScheme
  },
  resolveTheme: (theme) => {
    const newTheme = {
      ...theme,
      typography: createTypography(theme.palette, theme.typography)
    };
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  }
});
function Experimental_CssVarsProvider(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InternalCssVarsProvider, {
    ...props
  });
}
let warnedInitScriptOnce = false;
const getInitColorSchemeScript = (params) => {
  if (!warnedInitScriptOnce) {
    console.warn(["MUI: The getInitColorSchemeScript function has been deprecated.", "", "You should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`", "and replace the function call with `<InitColorSchemeScript />` instead."].join("\n"));
    warnedInitScriptOnce = true;
  }
  return deprecatedGetInitColorSchemeScript(params);
};
const CssVarsProvider = InternalCssVarsProvider;

const React$2w = await importShared('react');
function ThemeProvider({
  theme,
  ...props
}) {
  const noVarsTheme = React$2w.useMemo(() => {
    if (typeof theme === 'function') {
      return theme;
    }
    const muiTheme = THEME_ID in theme ? theme[THEME_ID] : theme;
    if (!('colorSchemes' in muiTheme)) {
      if (!('vars' in muiTheme)) {
        // For non-CSS variables themes, set `vars` to null to prevent theme inheritance from the upper theme.
        // The example use case is the docs demo that uses ThemeProvider to customize the theme while the upper theme is using CSS variables.
        return {
          ...theme,
          vars: null
        };
      }
      return theme;
    }
    return null;
  }, [theme]);
  if (noVarsTheme) {
    return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProviderNoVars, {
      theme: noVarsTheme,
      ...props
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(CssVarsProvider, {
    theme: theme,
    ...props
  });
}

function makeStyles() {
  throw new Error(formatMuiErrorMessage(14));
}

function withStyles() {
  throw new Error(formatMuiErrorMessage(15));
}

function withTheme() {
  throw new Error(formatMuiErrorMessage(16));
}

let warnedOnce = false;
function deprecatedExtendTheme(...args) {
  if (!warnedOnce) {
    console.warn(['MUI: The `experimental_extendTheme` has been stabilized.', '', "You should use `import { extendTheme } from '@mui/material/styles'`"].join('\n'));
    warnedOnce = true;
  }
  return createThemeWithVars(...args);
}

function experimental_sx() {
  throw new Error(formatMuiErrorMessage(19));
}

function getGrid2UtilityClass(slot) {
  return generateUtilityClass('MuiGrid2', slot);
}
const SPACINGS$2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS$1 = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS$1 = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES$1 = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const grid2Classes = generateUtilityClasses('MuiGrid2', ['root', 'container',
// spacings
...SPACINGS$2.map(spacing => `spacing-xs-${spacing}`),
// direction values
...DIRECTIONS$1.map(direction => `direction-xs-${direction}`),
// wrap values
...WRAPS$1.map(wrap => `wrap-xs-${wrap}`),
// grid sizes for all breakpoints
...GRID_SIZES$1.map(size => `grid-xs-${size}`), ...GRID_SIZES$1.map(size => `grid-sm-${size}`), ...GRID_SIZES$1.map(size => `grid-md-${size}`), ...GRID_SIZES$1.map(size => `grid-lg-${size}`), ...GRID_SIZES$1.map(size => `grid-xl-${size}`)]);

await importShared('react');
function GlobalStyles$1(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
    ...props,
    defaultTheme: defaultTheme$3,
    themeId: THEME_ID
  });
}

await importShared('react');
function globalCss(styles) {
  return function GlobalStylesWrapper(props) {
    return (
      /*#__PURE__*/
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      jsxRuntimeExports.jsx(GlobalStyles$1, {
        styles: typeof styles === 'function' ? theme => styles({
          theme,
          ...props
        }) : styles
      })
    );
  };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_createExtendSxProp() {
  return extendSxProp$1;
}

function mergeSlotProps(externalSlotProps, defaultSlotProps) {
  if (!externalSlotProps) {
    return defaultSlotProps;
  }
  if (typeof externalSlotProps === 'function' || typeof defaultSlotProps === 'function') {
    return ownerState => {
      const defaultSlotPropsValue = typeof defaultSlotProps === 'function' ? defaultSlotProps(ownerState) : defaultSlotProps;
      const externalSlotPropsValue = typeof externalSlotProps === 'function' ? externalSlotProps({
        ...ownerState,
        ...defaultSlotPropsValue
      }) : externalSlotProps;
      const className = clsx(ownerState?.className, defaultSlotPropsValue?.className, externalSlotPropsValue?.className);
      return {
        ...defaultSlotPropsValue,
        ...externalSlotPropsValue,
        ...(!!className && {
          className
        }),
        ...(defaultSlotPropsValue?.style && externalSlotPropsValue?.style && {
          style: {
            ...defaultSlotPropsValue.style,
            ...externalSlotPropsValue.style
          }
        }),
        ...(defaultSlotPropsValue?.sx && externalSlotPropsValue?.sx && {
          sx: [...(Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx]), ...(Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx])]
        })
      };
    };
  }
  const typedDefaultSlotProps = defaultSlotProps;
  const className = clsx(typedDefaultSlotProps?.className, externalSlotProps?.className);
  return {
    ...defaultSlotProps,
    ...externalSlotProps,
    ...(!!className && {
      className
    }),
    ...(typedDefaultSlotProps?.style && externalSlotProps?.style && {
      style: {
        ...typedDefaultSlotProps.style,
        ...externalSlotProps.style
      }
    }),
    ...(typedDefaultSlotProps?.sx && externalSlotProps?.sx && {
      sx: [...(Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx]), ...(Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx])]
    })
  };
}

const unstable_ClassNameGenerator = {
  configure: (generator) => {
    ClassNameGenerator.configure(generator);
  }
};

const pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};

const deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea'
};

const indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};

const cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4'
};

const teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5'
};

const lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17'
};

const lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00'
};

const yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};

const amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00'
};

const deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00'
};

const brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037'
};

const blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64'
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
}, Symbol.toStringTag, { value: 'Module' }));

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

const config = {
  disabled: false
};

const React$2v = await importShared('react');

const TransitionGroupContext = React$2v.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

const React$2u = await importShared('react');

const ReactDOM$2 = await importShared('react-dom');
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM$2.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM$2.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM$2.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM$2.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children; _this$props.in; _this$props.mountOnEnter; _this$props.unmountOnExit; _this$props.appear; _this$props.enter; _this$props.exit; _this$props.timeout; _this$props.addEndListener; _this$props.onEnter; _this$props.onEntering; _this$props.onEntered; _this$props.onExit; _this$props.onExiting; _this$props.onExited; _this$props.nodeRef; var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React$2u.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React$2u.cloneElement(React$2u.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React$2u.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop$1() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

const {Children,cloneElement,isValidElement} = await importShared('react');

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

const React$2t = await importShared('react');
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React$2t.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React$2t.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React$2t.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React$2t.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;

const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: style.transitionDuration ?? (typeof timeout === 'number' ? timeout : timeout[options.mode] || 0),
    easing: style.transitionTimingFunction ?? (typeof easing === 'object' ? easing[options.mode] : easing),
    delay: style.transitionDelay
  };
}

function getCollapseUtilityClass(slot) {
  return generateUtilityClass('MuiCollapse', slot);
}
const collapseClasses = generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);

const React$2s = await importShared('react');
const useUtilityClasses$1O = (ownerState) => {
  const {
    orientation,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `${orientation}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${orientation}`],
    wrapperInner: ["wrapperInner", `${orientation}`]
  };
  return composeClasses(slots, getCollapseUtilityClass, classes);
};
const CollapseRoot = styled$2("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.state === "entered" && styles.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles.hidden];
  }
})(memoTheme(({
  theme
}) => ({
  height: 0,
  overflow: "hidden",
  transition: theme.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: theme.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
})));
const CollapseWrapper = styled$2("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (props, styles) => styles.wrapper
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
});
const CollapseWrapperInner = styled$2("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (props, styles) => styles.wrapperInner
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
});
const Collapse = /* @__PURE__ */ React$2s.forwardRef(function Collapse2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCollapse"
  });
  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = "0px",
    component,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = "vertical",
    style,
    timeout = duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const ownerState = {
    ...props,
    orientation,
    collapsedSize: collapsedSizeProp
  };
  const classes = useUtilityClasses$1O(ownerState);
  const theme = useTheme$3();
  const timer = useTimeout();
  const wrapperRef = React$2s.useRef(null);
  const autoTransitionDuration = React$2s.useRef();
  const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === "horizontal";
  const size = isHorizontal ? "width" : "height";
  const nodeRef = React$2s.useRef(null);
  const handleRef = useForkRef(ref, nodeRef);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      wrapperRef.current.style.position = "absolute";
    }
    node.style[size] = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();
    if (wrapperRef.current && isHorizontal) {
      wrapperRef.current.style.position = "";
    }
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = `${wrapperSize}px`;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = "auto";
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback((node) => {
    node.style[size] = `${getWrapperSize()}px`;
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback((node) => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onExiting) {
      onExiting(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTransitionDuration.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    timeout: timeout === "auto" ? null : timeout,
    ...other,
    children: (state, {
      ownerState: incomingOwnerState,
      ...restChildProps
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseRoot, {
      as: component,
      className: clsx(classes.root, className, {
        "entered": classes.entered,
        "exited": !inProp && collapsedSize === "0px" && classes.hidden
      }[state]),
      style: {
        [isHorizontal ? "minWidth" : "minHeight"]: collapsedSize,
        ...style
      },
      ref: handleRef,
      ownerState: {
        ...ownerState,
        state
      },
      ...restChildProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapper, {
        ownerState: {
          ...ownerState,
          state
        },
        className: classes.wrapper,
        ref: wrapperRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapperInner, {
          ownerState: {
            ...ownerState,
            state
          },
          className: classes.wrapperInner,
          children
        })
      })
    })
  });
});
if (Collapse) {
  Collapse.muiSupportAuto = true;
}

function getPaperUtilityClass(slot) {
  return generateUtilityClass('MuiPaper', slot);
}
const paperClasses = generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

const React$2r = await importShared('react');
const useUtilityClasses$1N = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled$2("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]];
  }
})(memoTheme(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
})));
const Paper = /* @__PURE__ */ React$2r.forwardRef(function Paper2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPaper"
  });
  const theme = useTheme$3();
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses$1N(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperRoot, {
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref,
    ...other,
    style: {
      ...variant === "elevation" && {
        "--Paper-shadow": (theme.vars || theme).shadows[elevation],
        ...theme.vars && {
          "--Paper-overlay": theme.vars.overlays?.[elevation]
        },
        ...!theme.vars && theme.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${alpha("#fff", getOverlayAlpha(elevation))}, ${alpha("#fff", getOverlayAlpha(elevation))})`
        }
      },
      ...other.style
    }
  });
});

const React$2q = await importShared('react');

const AccordionContext = /* @__PURE__ */ React$2q.createContext({});

/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */
function useSlot(
/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */
name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    internalForwardedProps,
    shouldForwardComponentProp = false,
    ...useSlotPropsParams
  } = parameters;
  const {
    component: rootComponent,
    slots = {
      [name]: undefined
    },
    slotProps = {
      [name]: undefined
    },
    ...other
  } = externalForwardedProps;
  const elementType = slots[name] || initialElementType;

  // `slotProps[name]` can be a callback that receives the component's ownerState.
  // `resolvedComponentsProps` is always a plain object.
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = mergeSlotProps$1({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === 'root' ? other : undefined,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
  const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, {
    ...(name === 'root' && !rootComponent && !slots[name] && internalForwardedProps),
    ...(name !== 'root' && !slots[name] && internalForwardedProps),
    ...mergedProps,
    ...(LeafComponent && !shouldForwardComponentProp && {
      as: LeafComponent
    }),
    ...(LeafComponent && shouldForwardComponentProp && {
      component: LeafComponent
    }),
    ref
  }, ownerState);
  return [elementType, props];
}

function getAccordionUtilityClass(slot) {
  return generateUtilityClass('MuiAccordion', slot);
}
const accordionClasses = generateUtilityClasses('MuiAccordion', ['root', 'heading', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);

const React$2p = await importShared('react');
const useUtilityClasses$1M = (ownerState) => {
  const {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", !square && "rounded", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    heading: ["heading"],
    region: ["region"]
  };
  return composeClasses(slots, getAccordionUtilityClass, classes);
};
const AccordionRoot = styled$2(Paper, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${accordionClasses.region}`]: styles.region
    }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
  }
})(memoTheme(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: theme.transitions.create(["margin"], transition),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&::before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (theme.vars || theme).palette.divider,
      transition: theme.transitions.create(["opacity", "background-color"], transition)
    },
    "&:first-of-type": {
      "&::before": {
        display: "none"
      }
    },
    [`&.${accordionClasses.expanded}`]: {
      "&::before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&::before": {
          display: "none"
        }
      }
    },
    [`&.${accordionClasses.disabled}`]: {
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  };
}), memoTheme(({
  theme
}) => ({
  variants: [{
    props: (props) => !props.square,
    style: {
      borderRadius: 0,
      "&:first-of-type": {
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius
      },
      "&:last-of-type": {
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }
  }, {
    props: (props) => !props.disableGutters,
    style: {
      [`&.${accordionClasses.expanded}`]: {
        margin: "16px 0"
      }
    }
  }]
})));
const AccordionHeading = styled$2("h3", {
  name: "MuiAccordion",
  slot: "Heading",
  overridesResolver: (props, styles) => styles.heading
})({
  all: "unset"
});
const Accordion = /* @__PURE__ */ React$2p.forwardRef(function Accordion2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAccordion"
  });
  const {
    children: childrenProp,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    square = false,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    TransitionProps: TransitionPropsProp,
    ...other
  } = props;
  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "Accordion",
    state: "expanded"
  });
  const handleChange = React$2p.useCallback((event) => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const [summary, ...children] = React$2p.Children.toArray(childrenProp);
  const contextValue = React$2p.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);
  const ownerState = {
    ...props,
    square,
    disabled,
    disableGutters,
    expanded
  };
  const classes = useUtilityClasses$1M(ownerState);
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionPropsProp,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: AccordionRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    ownerState,
    ref,
    additionalProps: {
      square
    }
  });
  const [AccordionHeadingSlot, accordionProps] = useSlot("heading", {
    elementType: AccordionHeading,
    externalForwardedProps,
    className: classes.heading,
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Collapse,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AccordionHeadingSlot, {
      ...accordionProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContext.Provider, {
        value: contextValue,
        children: summary
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      in: expanded,
      timeout: "auto",
      ...transitionProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        "aria-labelledby": summary.props.id,
        id: summary.props["aria-controls"],
        role: "region",
        className: classes.region,
        children
      })
    })]
  });
});

function getAccordionActionsUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionActions', slot);
}
const accordionActionsClasses = generateUtilityClasses('MuiAccordionActions', ['root', 'spacing']);

const React$2o = await importShared('react');
const useUtilityClasses$1L = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getAccordionActionsUtilityClass, classes);
};
const AccordionActionsRoot = styled$2("div", {
  name: "MuiAccordionActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  variants: [{
    props: (props) => !props.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
});
const AccordionActions = /* @__PURE__ */ React$2o.forwardRef(function AccordionActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAccordionActions"
  });
  const {
    className,
    disableSpacing = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableSpacing
  };
  const classes = useUtilityClasses$1L(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionActionsRoot, {
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});

function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionDetails', slot);
}
const accordionDetailsClasses = generateUtilityClasses('MuiAccordionDetails', ['root']);

const React$2n = await importShared('react');
const useUtilityClasses$1K = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
};
const AccordionDetailsRoot = styled$2("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
})));
const AccordionDetails = /* @__PURE__ */ React$2n.forwardRef(function AccordionDetails2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAccordionDetails"
  });
  const {
    className,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1K(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetailsRoot, {
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});

const React$2m = await importShared('react');
/**
 * Lazy initialization container for the Ripple instance. This improves
 * performance by delaying mounting the ripple until it's needed.
 */
class LazyRipple {
  /** React ref to the ripple instance */

  /** If the ripple component should be mounted */

  /** Promise that resolves when the ripple component is mounted */

  /** If the ripple component has been mounted */

  /** React state hook setter */

  static create() {
    return new LazyRipple();
  }
  static use() {
    /* eslint-disable */
    const ripple = useLazyRef(LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React$2m.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React$2m.useEffect(ripple.mountEffect, [shouldMount]);
    /* eslint-enable */

    return ripple;
  }
  constructor() {
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  mountEffect = () => {
    if (this.shouldMount && !this.didMount) {
      if (this.ref.current !== null) {
        this.didMount = true;
        this.mounted.resolve();
      }
    }
  };

  /* Ripple API */

  start(...args) {
    this.mount().then(() => this.ref.current?.start(...args));
  }
  stop(...args) {
    this.mount().then(() => this.ref.current?.stop(...args));
  }
  pulsate(...args) {
    this.mount().then(() => this.ref.current?.pulsate(...args));
  }
}
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}

const React$2l = await importShared('react');
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React$2l.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React$2l.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: childClassName
    })
  });
}

function getTouchRippleUtilityClass(slot) {
  return generateUtilityClass('MuiTouchRipple', slot);
}
const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

const React$2k = await importShared('react');
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
const TouchRippleRoot = styled$2("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled$2(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
const TouchRipple = /* @__PURE__ */ React$2k.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React$2k.useState([]);
  const nextKey = React$2k.useRef(0);
  const rippleCallback = React$2k.useRef(null);
  React$2k.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React$2k.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = React$2k.useRef(null);
  const container = React$2k.useRef(null);
  const startCommit = React$2k.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React$2k.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if (event?.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event?.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event?.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React$2k.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React$2k.useCallback((event, cb) => {
    startTimer.clear();
    if (event?.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React$2k.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, {
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

const React$2j = await importShared('react');
const useUtilityClasses$1J = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled$2("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ React$2j.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React$2j.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React$2j.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React$2j.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React$2j.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, "stop", (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const handleKeyDown = useEventCallback((event) => {
    if (focusRipple && !event.repeat && focusVisible && event.key === " ") {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses$1J(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type,
    ...buttonProps,
    ...other,
    children: [children, enableTouchRipple ? /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback((event) => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}

function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = generateUtilityClasses('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);

const React$2i = await importShared('react');
const useUtilityClasses$1I = (ownerState) => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", expanded && "expanded", !disableGutters && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", expanded && "expanded"]
  };
  return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
};
const AccordionSummaryRoot = styled$2(ButtonBase, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    display: "flex",
    width: "100%",
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(["min-height", "background-color"], transition),
    [`&.${accordionSummaryClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${accordionSummaryClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${accordionSummaryClasses.disabled})`]: {
      cursor: "pointer"
    },
    variants: [{
      props: (props) => !props.disableGutters,
      style: {
        [`&.${accordionSummaryClasses.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
}));
const AccordionSummaryContent = styled$2("span", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  textAlign: "start",
  flexGrow: 1,
  margin: "12px 0",
  variants: [{
    props: (props) => !props.disableGutters,
    style: {
      transition: theme.transitions.create(["margin"], {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${accordionSummaryClasses.expanded}`]: {
        margin: "20px 0"
      }
    }
  }]
})));
const AccordionSummaryExpandIconWrapper = styled$2("span", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (props, styles) => styles.expandIconWrapper
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  color: (theme.vars || theme).palette.action.active,
  transform: "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${accordionSummaryClasses.expanded}`]: {
    transform: "rotate(180deg)"
  }
})));
const AccordionSummary = /* @__PURE__ */ React$2i.forwardRef(function AccordionSummary2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAccordionSummary"
  });
  const {
    children,
    className,
    expandIcon,
    focusVisibleClassName,
    onClick,
    slots,
    slotProps,
    ...other
  } = props;
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = React$2i.useContext(AccordionContext);
  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = {
    ...props,
    expanded,
    disabled,
    disableGutters
  };
  const classes = useUtilityClasses$1I(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    shouldForwardComponentProp: true,
    className: clsx(classes.root, className),
    elementType: AccordionSummaryRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      focusRipple: false,
      disableRipple: true,
      disabled,
      "aria-expanded": expanded,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName)
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onClick: (event) => {
        handlers.onClick?.(event);
        handleChange(event);
      }
    })
  });
  const [ContentSlot, contentSlotProps] = useSlot("content", {
    className: classes.content,
    elementType: AccordionSummaryContent,
    externalForwardedProps,
    ownerState
  });
  const [ExpandIconWrapperSlot, expandIconWrapperSlotProps] = useSlot("expandIconWrapper", {
    className: classes.expandIconWrapper,
    elementType: AccordionSummaryExpandIconWrapper,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ContentSlot, {
      ...contentSlotProps,
      children
    }), expandIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandIconWrapperSlot, {
      ...expandIconWrapperSlotProps,
      children: expandIcon
    })]
  });
});

/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */
function hasCorrectMainProperty(obj) {
  return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
      return false;
    }
  }
  return true;
}

/**
 * Creates a filter function used to filter simple palette color options.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns ([, value]: [any, PaletteColorOptions]) => boolean
 */
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}

function getAlertUtilityClass(slot) {
  return generateUtilityClass('MuiAlert', slot);
}
const alertClasses = generateUtilityClasses('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'colorSuccess', 'colorInfo', 'colorWarning', 'colorError', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);

function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass('MuiCircularProgress', slot);
}
const circularProgressClasses = generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);

const React$2h = await importShared('react');
const SIZE = 44;
const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
const rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
const dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
const useUtilityClasses$1H = (ownerState) => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize(color)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = styled$2("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const CircularProgressSVG = styled$2("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles) => styles.svg
})({
  display: "block"
  // Keeps the progress centered
});
const CircularProgressCircle = styled$2("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(memoTheme(({
  theme
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
const CircularProgress = /* @__PURE__ */ React$2h.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color = "primary",
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses$1H(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressRoot, {
    className: clsx(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState,
    ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'loading', 'loadingIndicator', 'loadingWrapper']);

const React$2g = await importShared('react');
const useUtilityClasses$1G = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", disabled && "disabled", color !== "default" && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled$2(ButtonBase, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.loading && styles.loading, ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: (props) => !props.disableRipple,
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme(({
  theme
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: "transparent",
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses.loading}`]: {
    color: "transparent"
  }
})));
const IconButtonLoadingIndicator = styled$2("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => styles.loadingIndicator
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }]
}));
const IconButton = /* @__PURE__ */ React$2g.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium",
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses$1G(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref,
    ...other,
    ownerState,
    children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});

await importShared('react');
const SuccessOutlinedIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined');

await importShared('react');
const ReportProblemOutlinedIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined');

await importShared('react');
const ErrorOutlineIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline');

await importShared('react');
const InfoOutlinedIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined');

await importShared('react');
const ClearIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

const React$2f = await importShared('react');
const useUtilityClasses$1F = (ownerState) => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color || severity)}`, `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
const AlertRoot = styled$2(Paper, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  return {
    ...theme.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "standard"
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
        [`& .${alertClasses.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "outlined"
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        border: `1px solid ${(theme.vars || theme).palette[color].light}`,
        [`& .${alertClasses.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "filled"
      },
      style: {
        fontWeight: theme.typography.fontWeightMedium,
        ...theme.vars ? {
          color: theme.vars.palette.Alert[`${color}FilledColor`],
          backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
        } : {
          backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
          color: theme.palette.getContrastText(theme.palette[color].main)
        }
      }
    }))]
  };
}));
const AlertIcon = styled$2("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = styled$2("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles) => styles.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
const AlertAction = styled$2("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
const defaultIconMapping = {
  success: /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};
const Alert = /* @__PURE__ */ React$2f.forwardRef(function Alert2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
    action,
    children,
    className,
    closeText = "Close",
    color,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    severity,
    variant,
    colorSeverity: color || severity
  };
  const classes = useUtilityClasses$1F(ownerState);
  const externalForwardedProps = {
    slots: {
      closeButton: components.CloseButton,
      closeIcon: components.CloseIcon,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    shouldForwardComponentProp: true,
    className: clsx(classes.root, className),
    elementType: AlertRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      role,
      elevation: 0
    }
  });
  const [IconSlot, iconSlotProps] = useSlot("icon", {
    className: classes.icon,
    elementType: AlertIcon,
    externalForwardedProps,
    ownerState
  });
  const [MessageSlot, messageSlotProps] = useSlot("message", {
    className: classes.message,
    elementType: AlertMessage,
    externalForwardedProps,
    ownerState
  });
  const [ActionSlot, actionSlotProps] = useSlot("action", {
    className: classes.action,
    elementType: AlertAction,
    externalForwardedProps,
    ownerState
  });
  const [CloseButtonSlot, closeButtonProps] = useSlot("closeButton", {
    elementType: IconButton,
    externalForwardedProps,
    ownerState
  });
  const [CloseIconSlot, closeIconProps] = useSlot("closeIcon", {
    elementType: ClearIcon,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [icon !== false ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, {
      ...iconSlotProps,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSlot, {
      ...messageSlotProps,
      children
    }), action != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSlot, {
      ...actionSlotProps,
      children: action
    }) : null, action == null && onClose ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSlot, {
      ...actionSlotProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButtonSlot, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose,
        ...closeButtonProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIconSlot, {
          fontSize: "small",
          ...closeIconProps
        })
      })
    }) : null]
  });
});

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
const typographyClasses = generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const React$2e = await importShared('react');
const v6Colors$1 = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const extendSxProp = internal_createExtendSxProp();
const useUtilityClasses$1E = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled$2("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
    props: {
      variant
    },
    style: value
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === "string").map(([color]) => ({
    props: {
      color: `text${capitalize(color)}`
    },
    style: {
      color: (theme.vars || theme).palette.text[color]
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.paragraph,
    style: {
      marginBottom: 16
    }
  }]
})));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const Typography = /* @__PURE__ */ React$2e.forwardRef(function Typography2(inProps, ref) {
  const {
    color,
    ...themeProps
  } = useDefaultProps({
    props: inProps,
    name: "MuiTypography"
  });
  const isSxColor = !v6Colors$1[color];
  const props = extendSxProp({
    ...themeProps,
    ...isSxColor && {
      color
    }
  });
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$1E(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TypographyRoot, {
    as: Component,
    ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState,
    style: {
      ...align !== "inherit" && {
        "--Typography-textAlign": align
      },
      ...other.style
    }
  });
});

function getAlertTitleUtilityClass(slot) {
  return generateUtilityClass('MuiAlertTitle', slot);
}
const alertTitleClasses = generateUtilityClasses('MuiAlertTitle', ['root']);

const React$2d = await importShared('react');
const useUtilityClasses$1D = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAlertTitleUtilityClass, classes);
};
const AlertTitleRoot = styled$2(Typography, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => {
  return {
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: -2
  };
}));
const AlertTitle = /* @__PURE__ */ React$2d.forwardRef(function AlertTitle2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAlertTitle"
  });
  const {
    className,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1D(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitleRoot, {
    gutterBottom: true,
    component: "div",
    ownerState,
    ref,
    className: clsx(classes.root, className),
    ...other
  });
});

function getAppBarUtilityClass(slot) {
  return generateUtilityClass('MuiAppBar', slot);
}
const appBarClasses = generateUtilityClasses('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning']);

const React$2c = await importShared('react');
const useUtilityClasses$1C = (ownerState) => {
  const {
    color,
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, `position${capitalize(position)}`]
  };
  return composeClasses(slots, getAppBarUtilityClass, classes);
};
const joinVars = (var1, var2) => var1 ? `${var1?.replace(")", "")}, ${var2})` : var2;
const AppBarRoot = styled$2(Paper, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${capitalize(ownerState.position)}`], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  variants: [{
    props: {
      position: "fixed"
    },
    style: {
      position: "fixed",
      zIndex: (theme.vars || theme).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    }
  }, {
    props: {
      position: "absolute"
    },
    style: {
      position: "absolute",
      zIndex: (theme.vars || theme).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "sticky"
    },
    style: {
      position: "sticky",
      zIndex: (theme.vars || theme).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "static"
    },
    style: {
      position: "static"
    }
  }, {
    props: {
      position: "relative"
    },
    style: {
      position: "relative"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      "--AppBar-color": "inherit"
    }
  }, {
    props: {
      color: "default"
    },
    style: {
      "--AppBar-background": theme.vars ? theme.vars.palette.AppBar.defaultBg : theme.palette.grey[100],
      "--AppBar-color": theme.vars ? theme.vars.palette.text.primary : theme.palette.getContrastText(theme.palette.grey[100]),
      ...theme.applyStyles("dark", {
        "--AppBar-background": theme.vars ? theme.vars.palette.AppBar.defaultBg : theme.palette.grey[900],
        "--AppBar-color": theme.vars ? theme.vars.palette.text.primary : theme.palette.getContrastText(theme.palette.grey[900])
      })
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--AppBar-background": (theme.vars ?? theme).palette[color].main,
      "--AppBar-color": (theme.vars ?? theme).palette[color].contrastText
    }
  })), {
    props: (props) => props.enableColorOnDark === true && !["inherit", "transparent"].includes(props.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)"
    }
  }, {
    props: (props) => props.enableColorOnDark === false && !["inherit", "transparent"].includes(props.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...theme.applyStyles("dark", {
        backgroundColor: theme.vars ? joinVars(theme.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: theme.vars ? joinVars(theme.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
      })
    }
  }, {
    props: {
      color: "transparent"
    },
    style: {
      "--AppBar-background": "transparent",
      "--AppBar-color": "inherit",
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...theme.applyStyles("dark", {
        backgroundImage: "none"
      })
    }
  }]
})));
const AppBar = /* @__PURE__ */ React$2c.forwardRef(function AppBar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAppBar"
  });
  const {
    className,
    color = "primary",
    enableColorOnDark = false,
    position = "fixed",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    position,
    enableColorOnDark
  };
  const classes = useUtilityClasses$1C(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppBarRoot, {
    square: true,
    component: "header",
    ownerState,
    elevation: 4,
    className: clsx(classes.root, className, position === "fixed" && "mui-fixed"),
    ref,
    ...other
  });
});

const React$2b = await importShared('react');
function stripDiacritics(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.startsWith(input) : candidate.includes(input);
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
const defaultFilterOptions = createFilterOptions();
const pageSize = 5;
const defaultIsActiveElementInListbox = (listboxRef) => listboxRef.current !== null && listboxRef.current.parentElement?.contains(document.activeElement);
const MULTIPLE_DEFAULT_VALUE = [];
function getInputValue(value, multiple, getOptionLabel) {
  if (multiple || value == null) {
    return "";
  }
  const optionLabel = getOptionLabel(value);
  return typeof optionLabel === "string" ? optionLabel : "";
}
function useAutocomplete(props) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = "Mui",
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = "useAutocomplete",
    defaultValue = props.multiple ? MULTIPLE_DEFAULT_VALUE : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled: disabledProp,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionKey,
    getOptionLabel: getOptionLabelProp = (option) => option.label ?? option,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value2) => option === value2,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = useId(idProp);
  let getOptionLabel = getOptionLabelProp;
  getOptionLabel = (option) => {
    const optionLabel = getOptionLabelProp(option);
    if (typeof optionLabel !== "string") {
      return String(optionLabel);
    }
    return optionLabel;
  };
  const ignoreFocus = React$2b.useRef(false);
  const firstFocus = React$2b.useRef(true);
  const inputRef = React$2b.useRef(null);
  const listboxRef = React$2b.useRef(null);
  const [anchorEl, setAnchorEl] = React$2b.useState(null);
  const [focusedTag, setFocusedTag] = React$2b.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React$2b.useRef(defaultHighlighted);
  const initialInputValue = React$2b.useRef(getInputValue(defaultValue ?? valueProp, multiple, getOptionLabel)).current;
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = useControlled({
    controlled: inputValueProp,
    default: initialInputValue,
    name: componentName,
    state: "inputValue"
  });
  const [focused, setFocused] = React$2b.useState(false);
  const resetInputValue = React$2b.useCallback((event, newValue, reason) => {
    const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
    if (!isOptionSelected && !clearOnBlur) {
      return;
    }
    const newInputValue = getInputValue(newValue, multiple, getOptionLabel);
    if (inputValue === newInputValue) {
      return;
    }
    setInputValueState(newInputValue);
    if (onInputChange) {
      onInputChange(event, newInputValue, reason);
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
  const [open, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: "open"
  });
  const [inputPristine, setInputPristine] = React$2b.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen ? filterOptions(
    options.filter((option) => {
      if (filterSelectedOptions && (multiple ? value : [value]).some((value2) => value2 !== null && isOptionEqualToValue(option, value2))) {
        return false;
      }
      return true;
    }),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? "" : inputValue,
      getOptionLabel
    }
  ) : [];
  const previousProps = usePreviousProps({
    filteredOptions,
    value,
    inputValue
  });
  React$2b.useEffect(() => {
    const valueChange = value !== previousProps.value;
    if (focused && !valueChange) {
      return;
    }
    if (freeSolo && !valueChange) {
      return;
    }
    resetInputValue(null, value, "reset");
  }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
  const focusTag = useEventCallback((tagToFocus) => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  });
  React$2b.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);
  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index < 0 || index >= filteredOptions.length) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);
      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute("aria-disabled") === "true";
      if (option && option.hasAttribute("tabindex") && !nextFocusDisabled) {
        return nextFocus;
      }
      if (direction === "next") {
        nextFocus = (nextFocus + 1) % filteredOptions.length;
      } else {
        nextFocus = (nextFocus - 1 + filteredOptions.length) % filteredOptions.length;
      }
      if (nextFocus === index) {
        return -1;
      }
    }
  }
  const setHighlightedIndex = useEventCallback(({
    event,
    index,
    reason
  }) => {
    highlightedIndexRef.current = index;
    if (index === -1) {
      inputRef.current.removeAttribute("aria-activedescendant");
    } else {
      inputRef.current.setAttribute("aria-activedescendant", `${id}-option-${index}`);
    }
    if (onHighlightChange && ["mouse", "keyboard", "touch"].includes(reason)) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }
    if (!listboxRef.current) {
      return;
    }
    const prev = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
    if (prev) {
      prev.classList.remove(`${unstable_classNamePrefix}-focused`);
      prev.classList.remove(`${unstable_classNamePrefix}-focusVisible`);
    }
    let listboxNode = listboxRef.current;
    if (listboxRef.current.getAttribute("role") !== "listbox") {
      listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
    }
    if (!listboxNode) {
      return;
    }
    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }
    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);
    if (!option) {
      return;
    }
    option.classList.add(`${unstable_classNamePrefix}-focused`);
    if (reason === "keyboard") {
      option.classList.add(`${unstable_classNamePrefix}-focusVisible`);
    }
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== "mouse" && reason !== "touch") {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = useEventCallback(({
    event,
    diff,
    direction = "next",
    reason
  }) => {
    if (!popupOpen) {
      return;
    }
    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;
      if (diff === "reset") {
        return defaultHighlighted;
      }
      if (diff === "start") {
        return 0;
      }
      if (diff === "end") {
        return maxIndex;
      }
      const newIndex = highlightedIndexRef.current + diff;
      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }
        return maxIndex;
      }
      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }
        return 0;
      }
      return newIndex;
    };
    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    });
    if (autoComplete && diff !== "reset") {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option;
        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const getPreviousHighlightedOptionIndex = () => {
    const isSameValue = (value1, value2) => {
      const label1 = value1 ? getOptionLabel(value1) : "";
      const label2 = value2 ? getOptionLabel(value2) : "";
      return label1 === label2;
    };
    if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
      const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
      if (previousHighlightedOption) {
        return filteredOptions.findIndex((option) => {
          return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
        });
      }
    }
    return -1;
  };
  const syncHighlightedIndex = React$2b.useCallback(() => {
    if (!popupOpen) {
      return;
    }
    const previousHighlightedOptionIndex = getPreviousHighlightedOptionIndex();
    if (previousHighlightedOptionIndex !== -1) {
      highlightedIndexRef.current = previousHighlightedOptionIndex;
      return;
    }
    const valueItem = multiple ? value[0] : value;
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: "reset"
      });
      return;
    }
    if (!listboxRef.current) {
      return;
    }
    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current];
      if (multiple && currentOption && value.findIndex((val) => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }
      const itemIndex = filteredOptions.findIndex((optionItem) => isOptionEqualToValue(optionItem, valueItem));
      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: "reset"
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }
      return;
    }
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    }
    setHighlightedIndex({
      index: highlightedIndexRef.current
    });
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    inputValue,
    multiple
  ]);
  const handleListboxRef = useEventCallback((node) => {
    setRef(listboxRef, node);
    if (!node) {
      return;
    }
    syncHighlightedIndex();
  });
  React$2b.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);
  const handleOpen = (event) => {
    if (open) {
      return;
    }
    setOpenState(true);
    setInputPristine(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }
    setOpenState(false);
    if (onClose) {
      onClose(event, reason);
    }
  };
  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
        return;
      }
    } else if (value === newValue) {
      return;
    }
    if (onChange) {
      onChange(event, newValue, reason, details);
    }
    setValueState(newValue);
  };
  const isTouch = React$2b.useRef(false);
  const selectNewValue = (event, option, reasonProp = "selectOption", origin = "options") => {
    let reason = reasonProp;
    let newValue = option;
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = newValue.findIndex((valueItem) => isOptionEqualToValue(option, valueItem));
      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== "freeSolo") {
        newValue.splice(itemIndex, 1);
        reason = "removeOption";
      }
    }
    resetInputValue(event, newValue, reason);
    handleValue(event, newValue, reason, {
      option
    });
    if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
      handleClose(event, reason);
    }
    if (blurOnSelect === true || blurOnSelect === "touch" && isTouch.current || blurOnSelect === "mouse" && !isTouch.current) {
      inputRef.current.blur();
    }
  };
  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      if (direction === "next" && nextFocus === value.length || direction === "previous" && nextFocus === -1) {
        return -1;
      }
      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);
      if (!option || !option.hasAttribute("tabindex") || option.disabled || option.getAttribute("aria-disabled") === "true") {
        nextFocus += direction === "next" ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }
    if (inputValue === "") {
      handleClose(event, "toggleInput");
    }
    let nextTag = focusedTag;
    if (focusedTag === -1) {
      if (inputValue === "" && direction === "previous") {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === "next" ? 1 : -1;
      if (nextTag < 0) {
        nextTag = 0;
      }
      if (nextTag === value.length) {
        nextTag = -1;
      }
    }
    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };
  const handleClear = (event) => {
    ignoreFocus.current = true;
    setInputValueState("");
    if (onInputChange) {
      onInputChange(event, "", "clear");
    }
    handleValue(event, multiple ? [] : null, "clear");
  };
  const handleKeyDown = (other) => (event) => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }
    if (event.defaultMuiPrevented) {
      return;
    }
    if (focusedTag !== -1 && !["ArrowLeft", "ArrowRight"].includes(event.key)) {
      setFocusedTag(-1);
      focusTag(-1);
    }
    if (event.which !== 229) {
      switch (event.key) {
        case "Home":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "start",
              direction: "next",
              reason: "keyboard",
              event
            });
          }
          break;
        case "End":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "end",
              direction: "previous",
              reason: "keyboard",
              event
            });
          }
          break;
        case "PageUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "PageDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowLeft":
          handleFocusTag(event, "previous");
          break;
        case "ArrowRight":
          handleFocusTag(event, "next");
          break;
        case "Enter":
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
            event.preventDefault();
            if (disabled) {
              return;
            }
            selectNewValue(event, option, "selectOption");
            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== "" && inputValueIsSelectedValue === false) {
            if (multiple) {
              event.preventDefault();
            }
            selectNewValue(event, inputValue, "createOption", "freeSolo");
          }
          break;
        case "Escape":
          if (popupOpen) {
            event.preventDefault();
            event.stopPropagation();
            handleClose(event, "escape");
          } else if (clearOnEscape && (inputValue !== "" || multiple && value.length > 0)) {
            event.preventDefault();
            event.stopPropagation();
            handleClear(event);
          }
          break;
        case "Backspace":
          if (multiple && !readOnly && inputValue === "" && value.length > 0) {
            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          break;
        case "Delete":
          if (multiple && !readOnly && inputValue === "" && value.length > 0 && focusedTag !== -1) {
            const index = focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          break;
      }
    }
  };
  const handleFocus = (event) => {
    setFocused(true);
    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };
  const handleBlur = (event) => {
    if (unstable_isActiveElementInListbox(listboxRef)) {
      inputRef.current.focus();
      return;
    }
    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;
    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], "blur");
    } else if (autoSelect && freeSolo && inputValue !== "") {
      selectNewValue(event, inputValue, "blur", "freeSolo");
    } else if (clearOnBlur) {
      resetInputValue(event, value, "blur");
    }
    handleClose(event, "blur");
  };
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);
      if (onInputChange) {
        onInputChange(event, newValue, "input");
      }
    }
    if (newValue === "") {
      if (!disableClearable && !multiple) {
        handleValue(event, null, "clear");
      }
    } else {
      handleOpen(event);
    }
  };
  const handleOptionMouseMove = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-option-index"));
    if (highlightedIndexRef.current !== index) {
      setHighlightedIndex({
        event,
        index,
        reason: "mouse"
      });
    }
  };
  const handleOptionTouchStart = (event) => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    });
    isTouch.current = true;
  };
  const handleOptionClick = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-option-index"));
    selectNewValue(event, filteredOptions[index], "selectOption");
    isTouch.current = false;
  };
  const handleTagDelete = (index) => (event) => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, "removeOption", {
      option: value[index]
    });
  };
  const handlePopupIndicator = (event) => {
    if (open) {
      handleClose(event, "toggleInput");
    } else {
      handleOpen(event);
    }
  };
  const handleMouseDown = (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    if (event.target.getAttribute("id") !== id) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    inputRef.current.focus();
    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }
    firstFocus.current = false;
  };
  const handleInputMouseDown = (event) => {
    if (!disabledProp && (inputValue === "" || !open)) {
      handlePopupIndicator(event);
    }
  };
  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;
  if (groupBy) {
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);
      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }
      return acc;
    }, []);
  }
  if (disabledProp && focused) {
    handleBlur();
  }
  return {
    getRootProps: (other = {}) => ({
      ...other,
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": popupOpen ? "" : null,
      "aria-autocomplete": autoComplete ? "both" : "list",
      "aria-controls": listboxAvailable ? `${id}-listbox` : void 0,
      "aria-expanded": listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: inputRef,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: disabledProp
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handleClear
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handlePopupIndicator
    }),
    getTagProps: ({
      index
    }) => ({
      key: index,
      "data-tag-index": index,
      tabIndex: -1,
      ...!readOnly && {
        onDelete: handleTagDelete(index)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${id}-listbox`,
      "aria-labelledby": `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      const selected = (multiple ? value : [value]).some((value2) => value2 != null && isOptionEqualToValue(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionKey?.(option) ?? getOptionLabel(option),
        tabIndex: -1,
        role: "option",
        id: `${id}-option-${index}`,
        onMouseMove: handleOptionMouseMove,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        "data-option-index": index,
        "aria-disabled": disabled,
        "aria-selected": selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    expanded: popupOpen && anchorEl,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions
  };
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement$1(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement$1(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement$1(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round$1 = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement$1(element)) {
    scaleX = element.offsetWidth > 0 ? round$1(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round$1(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement$1(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round$1(x * dpr) / dpr || 0,
    y: round$1(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement$1(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement$1(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round$1(rect.width) / element.offsetWidth || 1;
  var scaleY = round$1(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement$1(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const React$2a = await importShared('react');

const ReactDOM$1 = await importShared('react-dom');
function getContainer$1(container) {
  return typeof container === "function" ? container() : container;
}
const Portal = /* @__PURE__ */ React$2a.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React$2a.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ React$2a.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ React$2a.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /* @__PURE__ */ React$2a.cloneElement(children, newProps);
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ ReactDOM$1.createPortal(children, mountNode) : mountNode;
});

function getPopperUtilityClass(slot) {
  return generateUtilityClass('MuiPopper', slot);
}
generateUtilityClasses('MuiPopper', ['root']);

const React$29 = await importShared('react');
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl$1(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== void 0;
}
const useUtilityClasses$1B = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /* @__PURE__ */ React$29.forwardRef(function PopperTooltip2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps,
    // @ts-ignore internal logic
    ownerState: ownerStateProp,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other
  } = props;
  const tooltipRef = React$29.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React$29.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React$29.useRef(handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React$29.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React$29.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React$29.useState(resolveAnchorEl$1(anchorEl));
  React$29.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React$29.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl$1(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = createPopper(resolvedAnchorElement, tooltipRef.current, {
      placement: rtlPlacement,
      ...popperOptions,
      modifiers: popperModifiers
    });
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses$1B(props);
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
    ...rootProps,
    children: typeof children === "function" ? children(childProps) : children
  });
});
const Popper$1 = /* @__PURE__ */ React$29.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const [exited, setExited] = React$29.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl$1(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
    disablePortal,
    container,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PopperTooltip, {
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots,
      ...other,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display,
        ...style
      },
      TransitionProps: transitionProps,
      children
    })
  });
});

const React$28 = await importShared('react');
const PopperRoot = styled$2(Popper$1, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
const Popper = /* @__PURE__ */ React$28.forwardRef(function Popper2(inProps, ref) {
  const isRtl = useRtl();
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPopper"
  });
  const {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps,
    ...other
  } = props;
  const RootComponent = slots?.root ?? components?.Root;
  const otherProps = {
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    ...other
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PopperRoot, {
    as: component,
    direction: isRtl ? "rtl" : "ltr",
    slots: {
      root: RootComponent
    },
    slotProps: slotProps ?? componentsProps,
    ...otherProps,
    ref
  });
});

function getListSubheaderUtilityClass(slot) {
  return generateUtilityClass('MuiListSubheader', slot);
}
const listSubheaderClasses = generateUtilityClasses('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);

const React$27 = await importShared('react');
const useUtilityClasses$1A = (ownerState) => {
  const {
    classes,
    color,
    disableGutters,
    inset,
    disableSticky
  } = ownerState;
  const slots = {
    root: ["root", color !== "default" && `color${capitalize(color)}`, !disableGutters && "gutters", inset && "inset", !disableSticky && "sticky"]
  };
  return composeClasses(slots, getListSubheaderUtilityClass, classes);
};
const ListSubheaderRoot = styled$2("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`], !ownerState.disableGutters && styles.gutters, ownerState.inset && styles.inset, !ownerState.disableSticky && styles.sticky];
  }
})(memoTheme(({
  theme
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (theme.vars || theme).palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (theme.vars || theme).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (theme.vars || theme).palette.background.paper
    }
  }]
})));
const ListSubheader = /* @__PURE__ */ React$27.forwardRef(function ListSubheader2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListSubheader"
  });
  const {
    className,
    color = "default",
    component = "li",
    disableGutters = false,
    disableSticky = false,
    inset = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disableGutters,
    disableSticky,
    inset
  };
  const classes = useUtilityClasses$1A(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListSubheaderRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});
if (ListSubheader) {
  ListSubheader.muiSkipListHighlight = true;
}

await importShared('react');
const CancelIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel');

function getChipUtilityClass(slot) {
  return generateUtilityClass('MuiChip', slot);
}
const chipClasses = generateUtilityClasses('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorDefault', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);

const React$26 = await importShared('react');
const useUtilityClasses$1z = (ownerState) => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize(size)}`, `color${capitalize(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize(color)}`, `${variant}${capitalize(color)}`],
    label: ["label", `label${capitalize(size)}`],
    avatar: ["avatar", `avatar${capitalize(size)}`, `avatarColor${capitalize(color)}`],
    icon: ["icon", `icon${capitalize(size)}`, `iconColor${capitalize(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize(size)}`, `deleteIconColor${capitalize(color)}`, `deleteIcon${capitalize(variant)}Color${capitalize(color)}`]
  };
  return composeClasses(slots, getChipUtilityClass, classes);
};
const ChipRoot = styled$2("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses.avatar}`]: styles.avatar
    }, {
      [`& .${chipClasses.avatar}`]: styles[`avatar${capitalize(size)}`]
    }, {
      [`& .${chipClasses.avatar}`]: styles[`avatarColor${capitalize(color)}`]
    }, {
      [`& .${chipClasses.icon}`]: styles.icon
    }, {
      [`& .${chipClasses.icon}`]: styles[`icon${capitalize(size)}`]
    }, {
      [`& .${chipClasses.icon}`]: styles[`iconColor${capitalize(iconColor)}`]
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles.deleteIcon
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles[`deleteIcon${capitalize(size)}`]
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles[`deleteIconColor${capitalize(color)}`]
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles[`deleteIcon${capitalize(variant)}Color${capitalize(color)}`]
    }, styles.root, styles[`size${capitalize(size)}`], styles[`color${capitalize(color)}`], clickable && styles.clickable, clickable && color !== "default" && styles[`clickableColor${capitalize(color)})`], onDelete && styles.deletable, onDelete && color !== "default" && styles[`deletableColor${capitalize(color)}`], styles[variant], styles[`${variant}${capitalize(color)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${chipClasses.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : alpha(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${chipClasses.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${chipClasses.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => {
      return {
        props: {
          color
        },
        style: {
          backgroundColor: (theme.vars || theme).palette[color].main,
          color: (theme.vars || theme).palette[color].contrastText,
          [`& .${chipClasses.deleteIcon}`]: {
            color: theme.vars ? `rgba(${theme.vars.palette[color].contrastTextChannel} / 0.7)` : alpha(theme.palette[color].contrastText, 0.7),
            "&:hover, &:active": {
              color: (theme.vars || theme).palette[color].contrastText
            }
          }
        }
      };
    }), {
      props: (props) => props.iconColor === props.color,
      style: {
        [`& .${chipClasses.icon}`]: {
          color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
        }
      }
    }, {
      props: (props) => props.iconColor === props.color && props.color !== "default",
      style: {
        [`& .${chipClasses.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: true
      },
      style: {
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => {
      return {
        props: {
          color,
          onDelete: true
        },
        style: {
          [`&.${chipClasses.focusVisible}`]: {
            background: (theme.vars || theme).palette[color].dark
          }
        }
      };
    }), {
      props: {
        clickable: true
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[1]
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        color,
        clickable: true
      },
      style: {
        [`&:hover, &.${chipClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: (theme.vars || theme).palette.action.hover
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`& .${chipClasses.avatar}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses.icon}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${chipClasses.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        variant: "outlined",
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : alpha(theme.palette[color].main, 0.7)}`,
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette[color].main, theme.palette.action.focusOpacity)
        },
        [`& .${chipClasses.deleteIcon}`]: {
          color: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : alpha(theme.palette[color].main, 0.7),
          "&:hover, &:active": {
            color: (theme.vars || theme).palette[color].main
          }
        }
      }
    }))]
  };
}));
const ChipLabel = styled$2("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles.label, styles[`label${capitalize(size)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
const Chip = /* @__PURE__ */ React$26.forwardRef(function Chip2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiChip"
  });
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = false,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...other
  } = props;
  const chipRef = React$26.useRef(null);
  const handleRef = useForkRef(chipRef, ref);
  const handleDeleteIconClick = (event) => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = (event) => {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = (event) => {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase : ComponentProp || "div";
  const ownerState = {
    ...props,
    component,
    disabled,
    size,
    color,
    iconColor: /* @__PURE__ */ React$26.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  };
  const classes = useUtilityClasses$1z(ownerState);
  const moreProps = component === ButtonBase ? {
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible,
    ...onDelete && {
      disableRipple: true
    }
  } : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && /* @__PURE__ */ React$26.isValidElement(deleteIconProp) ? /* @__PURE__ */ React$26.cloneElement(deleteIconProp, {
      className: clsx(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CancelIcon, {
      className: clsx(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && /* @__PURE__ */ React$26.isValidElement(avatarProp)) {
    avatar = /* @__PURE__ */ React$26.cloneElement(avatarProp, {
      className: clsx(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && /* @__PURE__ */ React$26.isValidElement(iconProp)) {
    icon = /* @__PURE__ */ React$26.cloneElement(iconProp, {
      className: clsx(classes.icon, iconProp.props.className)
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ChipRoot, {
    as: component,
    className: clsx(classes.root, className),
    disabled: clickable && disabled ? true : void 0,
    onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState,
    ...moreProps,
    ...other,
    children: [avatar || icon, /* @__PURE__ */ jsxRuntimeExports.jsx(ChipLabel, {
      className: clsx(classes.label),
      ownerState,
      children: label
    }), deleteIcon]
  });
});

const React$25 = await importShared('react');
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles$5 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isObjectEmpty(object) {
  for (const _ in object) {
    return false;
  }
  return true;
}
function isEmpty$1(obj) {
  return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}
const TextareaAutosize = /* @__PURE__ */ React$25.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value,
    ...other
  } = props;
  const {
    current: isControlled
  } = React$25.useRef(value != null);
  const textareaRef = React$25.useRef(null);
  const handleRef = useForkRef(forwardedRef, textareaRef);
  const heightRef = React$25.useRef(null);
  const hiddenTextareaRef = React$25.useRef(null);
  const calculateTextareaStyles = React$25.useCallback(() => {
    const textarea = textareaRef.current;
    const hiddenTextarea = hiddenTextareaRef.current;
    if (!textarea || !hiddenTextarea) {
      return void 0;
    }
    const containerWindow = ownerWindow(textarea);
    const computedStyle = containerWindow.getComputedStyle(textarea);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    hiddenTextarea.style.width = computedStyle.width;
    hiddenTextarea.value = textarea.value || props.placeholder || "x";
    if (hiddenTextarea.value.slice(-1) === "\n") {
      hiddenTextarea.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = hiddenTextarea.scrollHeight;
    hiddenTextarea.value = "x";
    const singleRowHeight = hiddenTextarea.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const didHeightChange = useEventCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
      return false;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    return heightRef.current != null && heightRef.current !== outerHeightStyle;
  });
  const syncHeight = React$25.useCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
      return;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      textarea.style.height = `${outerHeightStyle}px`;
    }
    textarea.style.overflow = textareaStyles.overflowing ? "hidden" : "";
  }, [calculateTextareaStyles]);
  const frameRef = React$25.useRef(-1);
  useEnhancedEffect(() => {
    const debouncedHandleResize = debounce$1(syncHeight);
    const textarea = textareaRef?.current;
    if (!textarea) {
      return void 0;
    }
    const containerWindow = ownerWindow(textarea);
    containerWindow.addEventListener("resize", debouncedHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (didHeightChange()) {
          resizeObserver.unobserve(textarea);
          cancelAnimationFrame(frameRef.current);
          syncHeight();
          frameRef.current = requestAnimationFrame(() => {
            resizeObserver.observe(textarea);
          });
        }
      });
      resizeObserver.observe(textarea);
    }
    return () => {
      debouncedHandleResize.clear();
      cancelAnimationFrame(frameRef.current);
      containerWindow.removeEventListener("resize", debouncedHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight, didHeightChange]);
  useEnhancedEffect(() => {
    syncHeight();
  });
  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$25.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style,
      ...other
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: hiddenTextareaRef,
      tabIndex: -1,
      style: {
        ...styles$5.shadow,
        ...style,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

const React$24 = await importShared('react');

const FormControlContext = /* @__PURE__ */ React$24.createContext(void 0);

const React$23 = await importShared('react');
function useFormControl() {
  return React$23.useContext(FormControlContext);
}

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}

// Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
}

// Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.
function isAdornedStart(obj) {
  return obj.startAdornment;
}

function getInputBaseUtilityClass(slot) {
  return generateUtilityClass('MuiInputBase', slot);
}
const inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'readOnly', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);

var _InputGlobalStyles;
const React$22 = await importShared('react');
const rootOverridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === "small" && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
};
const inputOverridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.input, ownerState.size === "small" && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === "search" && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
};
const useUtilityClasses$1y = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled$2("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body1,
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState,
      size
    }) => ownerState.multiline && size === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "100%"
    }
  }]
})));
const InputBaseInput = styled$2("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const placeholder = {
    color: "currentColor",
    ...theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: light ? 0.42 : 0.5
    },
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
}));
const InputGlobalStyles = globalCss({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
});
const InputBase = /* @__PURE__ */ React$22.forwardRef(function InputBase2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    color,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    error,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    margin,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    size,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp,
    ...other
  } = props;
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = React$22.useRef(value != null);
  const inputRef = React$22.useRef();
  const handleInputRefWarning = React$22.useCallback((instance) => {
  }, []);
  const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = React$22.useState(false);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React$22.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = React$22.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  React$22.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      inputProps = {
        type: void 0,
        minRows: rows,
        maxRows: rows,
        ...inputProps
      };
    } else {
      inputProps = {
        type: void 0,
        maxRows,
        minRows,
        ...inputProps
      };
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React$22.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  };
  const classes = useUtilityClasses$1y(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input = slots.input || components.Input || InputBaseInput;
  inputProps = {
    ...inputProps,
    ...slotProps.input ?? componentsProps.input
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$22.Fragment, {
    children: [!disableInjectingGlobalStyles && typeof InputGlobalStyles === "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (_InputGlobalStyles || (_InputGlobalStyles = /* @__PURE__ */ jsxRuntimeExports.jsx(InputGlobalStyles, {}))), /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, {
      ...rootProps,
      ref,
      onClick: handleClick,
      ...other,
      ...!isHostComponent(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      },
      className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
        value: null,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type,
          ...inputProps,
          ...!isHostComponent(Input) && {
            as: InputComponent,
            ownerState: {
              ...ownerState,
              ...inputProps.ownerState
            }
          },
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        })
      }), endAdornment, renderSuffix ? renderSuffix({
        ...fcs,
        startAdornment
      }) : null]
    })]
  });
});

function getInputUtilityClass(slot) {
  return generateUtilityClass('MuiInput', slot);
}
const inputClasses = {
  ...inputBaseClasses,
  ...generateUtilityClasses('MuiInput', ['root', 'underline', 'input'])
};

function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass('MuiOutlinedInput', slot);
}
const outlinedInputClasses = {
  ...inputBaseClasses,
  ...generateUtilityClasses('MuiOutlinedInput', ['root', 'notchedOutline', 'input'])
};

function getFilledInputUtilityClass(slot) {
  return generateUtilityClass('MuiFilledInput', slot);
}
const filledInputClasses = {
  ...inputBaseClasses,
  ...generateUtilityClasses('MuiFilledInput', ['root', 'underline', 'input', 'adornedStart', 'adornedEnd', 'sizeSmall', 'multiline', 'hiddenLabel'])
};

await importShared('react');
const ArrowDropDownIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

function getAutocompleteUtilityClass(slot) {
  return generateUtilityClass('MuiAutocomplete', slot);
}
const autocompleteClasses = generateUtilityClasses('MuiAutocomplete', ['root', 'expanded', 'fullWidth', 'focused', 'focusVisible', 'tag', 'tagSizeSmall', 'tagSizeMedium', 'hasPopupIcon', 'hasClearIcon', 'inputRoot', 'input', 'inputFocused', 'endAdornment', 'clearIndicator', 'popupIndicator', 'popupIndicatorOpen', 'popper', 'popperDisablePortal', 'paper', 'listbox', 'loading', 'noOptions', 'option', 'groupLabel', 'groupUl']);

var _ClearIcon, _ArrowDropDownIcon;
const React$21 = await importShared('react');
const useUtilityClasses$1x = (ownerState) => {
  const {
    classes,
    disablePortal,
    expanded,
    focused,
    fullWidth,
    hasClearIcon,
    hasPopupIcon,
    inputFocused,
    popupOpen,
    size
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", focused && "focused", fullWidth && "fullWidth", hasClearIcon && "hasClearIcon", hasPopupIcon && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", inputFocused && "inputFocused"],
    tag: ["tag", `tagSize${capitalize(size)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", popupOpen && "popupIndicatorOpen"],
    popper: ["popper", disablePortal && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return composeClasses(slots, getAutocompleteUtilityClass, classes);
};
const AutocompleteRoot = styled$2("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      fullWidth,
      hasClearIcon,
      hasPopupIcon,
      inputFocused,
      size
    } = ownerState;
    return [{
      [`& .${autocompleteClasses.tag}`]: styles.tag
    }, {
      [`& .${autocompleteClasses.tag}`]: styles[`tagSize${capitalize(size)}`]
    }, {
      [`& .${autocompleteClasses.inputRoot}`]: styles.inputRoot
    }, {
      [`& .${autocompleteClasses.input}`]: styles.input
    }, {
      [`& .${autocompleteClasses.input}`]: inputFocused && styles.inputFocused
    }, styles.root, fullWidth && styles.fullWidth, hasPopupIcon && styles.hasPopupIcon, hasClearIcon && styles.hasClearIcon];
  }
})({
  [`&.${autocompleteClasses.focused} .${autocompleteClasses.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${autocompleteClasses.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${autocompleteClasses.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${autocompleteClasses.inputRoot}`]: {
    [`.${autocompleteClasses.hasPopupIcon}&, .${autocompleteClasses.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${autocompleteClasses.hasPopupIcon}.${autocompleteClasses.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${autocompleteClasses.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${inputClasses.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${inputClasses.root}.${inputBaseClasses.sizeSmall}`]: {
    [`& .${inputClasses.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${outlinedInputClasses.root}`]: {
    padding: 9,
    [`.${autocompleteClasses.hasPopupIcon}&, .${autocompleteClasses.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${autocompleteClasses.hasPopupIcon}.${autocompleteClasses.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${autocompleteClasses.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${autocompleteClasses.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${outlinedInputClasses.root}.${inputBaseClasses.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${autocompleteClasses.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${filledInputClasses.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${autocompleteClasses.hasPopupIcon}&, .${autocompleteClasses.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${autocompleteClasses.hasPopupIcon}.${autocompleteClasses.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${filledInputClasses.input}`]: {
      padding: "7px 4px"
    },
    [`& .${autocompleteClasses.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${filledInputClasses.root}.${inputBaseClasses.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${filledInputClasses.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${inputBaseClasses.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${filledInputClasses.root}.${inputBaseClasses.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${autocompleteClasses.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${filledInputClasses.root}.${inputBaseClasses.hiddenLabel}.${inputBaseClasses.sizeSmall}`]: {
    [`& .${autocompleteClasses.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${autocompleteClasses.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${autocompleteClasses.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: true
    },
    style: {
      [`& .${autocompleteClasses.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: true
    },
    style: {
      [`& .${autocompleteClasses.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
});
const AutocompleteEndAdornment = styled$2("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (props, styles) => styles.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
});
const AutocompleteClearIndicator = styled$2(IconButton, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (props, styles) => styles.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
});
const AutocompletePopupIndicator = styled$2(IconButton, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popupIndicator, ownerState.popupOpen && styles.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: true
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
});
const AutocompletePopper = styled$2(Popper, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${autocompleteClasses.option}`]: styles.option
    }, styles.popper, ownerState.disablePortal && styles.popperDisablePortal];
  }
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.modal,
  variants: [{
    props: {
      disablePortal: true
    },
    style: {
      position: "absolute"
    }
  }]
})));
const AutocompletePaper = styled$2(Paper, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body1,
  overflow: "auto"
})));
const AutocompleteLoading = styled$2("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (props, styles) => styles.loading
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})));
const AutocompleteNoOptions = styled$2("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (props, styles) => styles.noOptions
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})));
const AutocompleteListbox = styled$2("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (props, styles) => styles.listbox
})(memoTheme(({
  theme
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${autocompleteClasses.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${autocompleteClasses.focused}`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${autocompleteClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${autocompleteClasses.focused}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (theme.vars || theme).palette.action.selected
        }
      },
      [`&.${autocompleteClasses.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    }
  }
})));
const AutocompleteGroupLabel = styled$2(ListSubheader, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (props, styles) => styles.groupLabel
})(memoTheme(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  top: -8
})));
const AutocompleteGroupUl = styled$2("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (props, styles) => styles.groupUl
})({
  padding: 0,
  [`& .${autocompleteClasses.option}`]: {
    paddingLeft: 24
  }
});
const Autocomplete = /* @__PURE__ */ React$21.forwardRef(function Autocomplete2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAutocomplete"
  });
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    ChipProps: ChipPropsProp,
    className,
    clearIcon = _ClearIcon || (_ClearIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(ClearIcon, {
      fontSize: "small"
    })),
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    clearText = "Clear",
    closeText = "Close",
    componentsProps,
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    disablePortal = false,
    filterOptions,
    filterSelectedOptions = false,
    forcePopupIcon = "auto",
    freeSolo = false,
    fullWidth = false,
    getLimitTagsText = (more) => `+${more}`,
    getOptionDisabled,
    getOptionKey,
    getOptionLabel: getOptionLabelProp,
    isOptionEqualToValue,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    limitTags = -1,
    ListboxComponent: ListboxComponentProp,
    ListboxProps: ListboxPropsProp,
    loading = false,
    loadingText = "Loading…",
    multiple = false,
    noOptionsText = "No options",
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open,
    openOnFocus = false,
    openText = "Open",
    options,
    PaperComponent: PaperComponentProp,
    PopperComponent: PopperComponentProp,
    popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDropDownIcon, {})),
    readOnly = false,
    renderGroup: renderGroupProp,
    renderInput,
    renderOption: renderOptionProp,
    renderTags,
    selectOnFocus = !props.freeSolo,
    size = "medium",
    slots = {},
    slotProps = {},
    value: valueProp,
    ...other
  } = props;
  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    expanded,
    id,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = useAutocomplete({
    ...props,
    componentName: "Autocomplete"
  });
  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
  const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  const {
    onMouseDown: handleInputMouseDown
  } = getInputProps();
  const {
    ref: listboxRef,
    ...otherListboxProps
  } = getListboxProps();
  const defaultGetOptionLabel = (option) => option.label ?? option;
  const getOptionLabel = getOptionLabelProp || defaultGetOptionLabel;
  const ownerState = {
    ...props,
    disablePortal,
    expanded,
    focused,
    fullWidth,
    getOptionLabel,
    hasClearIcon,
    hasPopupIcon,
    inputFocused: focusedTag === -1,
    popupOpen,
    size
  };
  const classes = useUtilityClasses$1x(ownerState);
  const externalForwardedProps = {
    slots: {
      paper: PaperComponentProp,
      popper: PopperComponentProp,
      ...slots
    },
    slotProps: {
      chip: ChipPropsProp,
      listbox: ListboxPropsProp,
      ...componentsProps,
      ...slotProps
    }
  };
  const [ListboxSlot, listboxProps] = useSlot("listbox", {
    elementType: AutocompleteListbox,
    externalForwardedProps,
    ownerState,
    className: classes.listbox,
    additionalProps: otherListboxProps,
    ref: listboxRef
  });
  const [PaperSlot, paperProps] = useSlot("paper", {
    elementType: Paper,
    externalForwardedProps,
    ownerState,
    className: classes.paper
  });
  const [PopperSlot, popperProps] = useSlot("popper", {
    elementType: Popper,
    externalForwardedProps,
    ownerState,
    className: classes.popper,
    additionalProps: {
      disablePortal,
      style: {
        width: anchorEl ? anchorEl.clientWidth : null
      },
      role: "presentation",
      anchorEl,
      open: popupOpen
    }
  });
  let startAdornment;
  if (multiple && value.length > 0) {
    const getCustomizedTagProps = (params) => ({
      className: classes.tag,
      disabled,
      ...getTagProps(params)
    });
    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps, ownerState);
    } else {
      startAdornment = value.map((option, index) => {
        const {
          key,
          ...customTagProps
        } = getCustomizedTagProps({
          index
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, {
          label: getOptionLabel(option),
          size,
          ...customTagProps,
          ...externalForwardedProps.slotProps.chip
        }, key);
      });
    }
  }
  if (limitTags > -1 && Array.isArray(startAdornment)) {
    const more = startAdornment.length - limitTags;
    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: classes.tag,
        children: getLimitTagsText(more)
      }, startAdornment.length));
    }
  }
  const defaultRenderGroup = (params) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AutocompleteGroupLabel, {
      className: classes.groupLabel,
      ownerState,
      component: "div",
      children: params.group
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(AutocompleteGroupUl, {
      className: classes.groupUl,
      ownerState,
      children: params.children
    })]
  }, params.key);
  const renderGroup = renderGroupProp || defaultRenderGroup;
  const defaultRenderOption = (props2, option) => {
    const {
      key,
      ...otherProps
    } = props2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
      ...otherProps,
      children: getOptionLabel(option)
    }, key);
  };
  const renderOption = renderOptionProp || defaultRenderOption;
  const renderListOption = (option, index) => {
    const optionProps = getOptionProps({
      option,
      index
    });
    return renderOption({
      ...optionProps,
      className: classes.option
    }, option, {
      selected: optionProps["aria-selected"],
      index,
      inputValue
    }, ownerState);
  };
  const clearIndicatorSlotProps = externalForwardedProps.slotProps.clearIndicator;
  const popupIndicatorSlotProps = externalForwardedProps.slotProps.popupIndicator;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$21.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(AutocompleteRoot, {
      ref,
      className: clsx(classes.root, className),
      ownerState,
      ...getRootProps(other),
      children: renderInput({
        id,
        disabled,
        fullWidth: true,
        size: size === "small" ? "small" : void 0,
        InputLabelProps: getInputLabelProps(),
        InputProps: {
          ref: setAnchorEl,
          className: classes.inputRoot,
          startAdornment,
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) {
              handleInputMouseDown(event);
            }
          },
          ...(hasClearIcon || hasPopupIcon) && {
            endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsxs(AutocompleteEndAdornment, {
              className: classes.endAdornment,
              ownerState,
              children: [hasClearIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(AutocompleteClearIndicator, {
                ...getClearProps(),
                "aria-label": clearText,
                title: clearText,
                ownerState,
                ...clearIndicatorSlotProps,
                className: clsx(classes.clearIndicator, clearIndicatorSlotProps?.className),
                children: clearIcon
              }) : null, hasPopupIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(AutocompletePopupIndicator, {
                ...getPopupIndicatorProps(),
                disabled,
                "aria-label": popupOpen ? closeText : openText,
                title: popupOpen ? closeText : openText,
                ownerState,
                ...popupIndicatorSlotProps,
                className: clsx(classes.popupIndicator, popupIndicatorSlotProps?.className),
                children: popupIcon
              }) : null]
            })
          }
        },
        inputProps: {
          className: classes.input,
          disabled,
          readOnly,
          ...getInputProps()
        }
      })
    }), anchorEl ? /* @__PURE__ */ jsxRuntimeExports.jsx(AutocompletePopper, {
      as: PopperSlot,
      ...popperProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AutocompletePaper, {
        as: PaperSlot,
        ...paperProps,
        children: [loading && groupedOptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(AutocompleteLoading, {
          className: classes.loading,
          ownerState,
          children: loadingText
        }) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(AutocompleteNoOptions, {
          className: classes.noOptions,
          ownerState,
          role: "presentation",
          onMouseDown: (event) => {
            event.preventDefault();
          },
          children: noOptionsText
        }) : null, groupedOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ListboxSlot, {
          as: ListboxComponentProp,
          ...listboxProps,
          children: groupedOptions.map((option, index) => {
            if (groupBy) {
              return renderGroup({
                key: option.key,
                group: option.group,
                children: option.options.map((option2, index2) => renderListOption(option2, option.index + index2))
              });
            }
            return renderListOption(option, index);
          })
        }) : null]
      })
    }) : null]
  });
});

await importShared('react');
const Person = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person');

function getAvatarUtilityClass(slot) {
  return generateUtilityClass('MuiAvatar', slot);
}
const avatarClasses = generateUtilityClasses('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);

const React$20 = await importShared('react');
const useUtilityClasses$1w = (ownerState) => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ["root", variant, colorDefault && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  };
  return composeClasses(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = styled$2("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.colorDefault && styles.colorDefault];
  }
})(memoTheme(({
  theme
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: true
    },
    style: {
      color: (theme.vars || theme).palette.background.default,
      ...theme.vars ? {
        backgroundColor: theme.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: theme.palette.grey[400],
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.grey[600]
        })
      }
    }
  }]
})));
const AvatarImg = styled$2("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (props, styles) => styles.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
});
const AvatarFallback = styled$2(Person, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (props, styles) => styles.fallback
})({
  width: "75%",
  height: "75%"
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = React$20.useState(false);
  React$20.useEffect(() => {
    if (!src && !srcSet) {
      return void 0;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
const Avatar = /* @__PURE__ */ React$20.forwardRef(function Avatar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAvatar"
  });
  const {
    alt,
    children: childrenProp,
    className,
    component = "div",
    slots = {},
    slotProps = {},
    imgProps,
    sizes,
    src,
    srcSet,
    variant = "circular",
    ...other
  } = props;
  let children = null;
  const ownerState = {
    ...props,
    component,
    variant
  };
  const loaded = useLoaded({
    ...imgProps,
    ...typeof slotProps.img === "function" ? slotProps.img(ownerState) : slotProps.img,
    src,
    srcSet
  });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== "error";
  ownerState.colorDefault = !hasImgNotFailing;
  delete ownerState.ownerState;
  const classes = useUtilityClasses$1w(ownerState);
  const [ImgSlot, imgSlotProps] = useSlot("img", {
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps: {
      slots,
      slotProps: {
        img: {
          ...imgProps,
          ...slotProps.img
        }
      }
    },
    additionalProps: {
      alt,
      src,
      srcSet,
      sizes
    },
    ownerState
  });
  if (hasImgNotFailing) {
    children = /* @__PURE__ */ jsxRuntimeExports.jsx(ImgSlot, {
      ...imgSlotProps
    });
  } else if (!!childrenProp || childrenProp === 0) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, {
      ownerState,
      className: classes.fallback
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ...other,
    ownerState,
    children
  });
});

function getAvatarGroupUtilityClass(slot) {
  return generateUtilityClass('MuiAvatarGroup', slot);
}
const avatarGroupClasses = generateUtilityClasses('MuiAvatarGroup', ['root', 'avatar']);

const React$1$ = await importShared('react');
const SPACINGS$1 = {
  small: -16,
  medium: -8
};
const useUtilityClasses$1v = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    avatar: ["avatar"]
  };
  return composeClasses(slots, getAvatarGroupUtilityClass, classes);
};
const AvatarGroupRoot = styled$2("div", {
  name: "MuiAvatarGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{
      [`& .${avatarGroupClasses.avatar}`]: styles.avatar
    }, styles.root];
  }
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row-reverse",
  [`& .${avatarClasses.root}`]: {
    border: `2px solid ${(theme.vars || theme).palette.background.default}`,
    boxSizing: "content-box",
    marginLeft: "var(--AvatarGroup-spacing, -8px)",
    "&:last-child": {
      marginLeft: 0
    }
  }
})));
const AvatarGroup = /* @__PURE__ */ React$1$.forwardRef(function AvatarGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAvatarGroup"
  });
  const {
    children: childrenProp,
    className,
    component = "div",
    componentsProps,
    max = 5,
    renderSurplus,
    slotProps = {},
    slots = {},
    spacing = "medium",
    total,
    variant = "circular",
    ...other
  } = props;
  let clampedMax = max < 2 ? 2 : max;
  const ownerState = {
    ...props,
    max,
    spacing,
    component,
    variant
  };
  const classes = useUtilityClasses$1v(ownerState);
  const children = React$1$.Children.toArray(childrenProp).filter((child) => {
    return /* @__PURE__ */ React$1$.isValidElement(child);
  });
  const totalAvatars = total || children.length;
  if (totalAvatars === clampedMax) {
    clampedMax += 1;
  }
  clampedMax = Math.min(totalAvatars + 1, clampedMax);
  const maxAvatars = Math.min(children.length, clampedMax - 1);
  const extraAvatars = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
  const extraAvatarsElement = renderSurplus ? renderSurplus(extraAvatars) : `+${extraAvatars}`;
  let marginValue;
  if (ownerState.spacing && SPACINGS$1[ownerState.spacing] !== void 0) {
    marginValue = SPACINGS$1[ownerState.spacing];
  } else if (ownerState.spacing === 0) {
    marginValue = 0;
  } else {
    marginValue = -ownerState.spacing || SPACINGS$1.medium;
  }
  const externalForwardedProps = {
    slots,
    slotProps: {
      surplus: slotProps.additionalAvatar ?? componentsProps?.additionalAvatar,
      ...componentsProps,
      ...slotProps
    }
  };
  const [SurplusSlot, surplusProps] = useSlot("surplus", {
    elementType: Avatar,
    externalForwardedProps,
    className: classes.avatar,
    ownerState,
    additionalProps: {
      variant
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AvatarGroupRoot, {
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref,
    ...other,
    style: {
      "--AvatarGroup-spacing": `${marginValue}px`,
      // marginValue is always defined
      ...other.style
    },
    children: [extraAvatars ? /* @__PURE__ */ jsxRuntimeExports.jsx(SurplusSlot, {
      ...surplusProps,
      children: extraAvatarsElement
    }) : null, children.slice(0, maxAvatars).reverse().map((child) => {
      return /* @__PURE__ */ React$1$.cloneElement(child, {
        className: clsx(child.props.className, classes.avatar),
        variant: child.props.variant || variant
      });
    })]
  });
});

const React$1_ = await importShared('react');
const styles$4 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ React$1_.forwardRef(function Fade2(props, ref) {
  const theme = useTheme$3();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const nodeRef = React$1_.useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef: nodeRef ,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /* @__PURE__ */ React$1_.cloneElement(children, {
        style: {
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles$4[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});

function getBackdropUtilityClass(slot) {
  return generateUtilityClass('MuiBackdrop', slot);
}
const backdropClasses = generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

const React$1Z = await importShared('react');
const useUtilityClasses$1u = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled$2("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: true
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
});
const Backdrop = /* @__PURE__ */ React$1Z.forwardRef(function Backdrop2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    invisible = false,
    open,
    components = {},
    componentsProps = {},
    slotProps = {},
    slots = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    invisible
  };
  const classes = useUtilityClasses$1u(ownerState);
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    root: components.Root,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    ...componentsProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: BackdropRoot,
    externalForwardedProps,
    className: clsx(classes.root, className),
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Fade,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
    in: open,
    timeout: transitionDuration,
    ...other,
    ...transitionProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
      "aria-hidden": true,
      ...rootProps,
      classes,
      ref,
      children
    })
  });
});

/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base-ui/react-badge/#hook)
 *
 * API:
 *
 * - [useBadge API](https://mui.com/base-ui/react-badge/hooks-api/#use-badge)
 */
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}

function getBadgeUtilityClass(slot) {
  return generateUtilityClass('MuiBadge', slot);
}
const badgeClasses = generateUtilityClasses('MuiBadge', ['root', 'badge', 'dot', 'standard', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft', 'invisible', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'overlapRectangular', 'overlapCircular',
// TODO: v6 remove the overlap value from these class keys
'anchorOriginTopLeftCircular', 'anchorOriginTopLeftRectangular', 'anchorOriginTopRightCircular', 'anchorOriginTopRightRectangular', 'anchorOriginBottomLeftCircular', 'anchorOriginBottomLeftRectangular', 'anchorOriginBottomRightCircular', 'anchorOriginBottomRightRectangular']);

const React$1Y = await importShared('react');
const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;
const useUtilityClasses$1t = (ownerState) => {
  const {
    color,
    anchorOrigin,
    invisible,
    overlap,
    variant,
    classes = {}
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", variant, invisible && "invisible", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, `overlap${capitalize(overlap)}`, color !== "default" && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};
const BadgeRoot = styled$2("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
});
const BadgeBadge = styled$2("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.badge, styles[ownerState.variant], styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(ownerState.overlap)}`], ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`], ownerState.invisible && styles.invisible];
  }
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(12),
  minWidth: RADIUS_STANDARD * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: RADIUS_STANDARD * 2,
  borderRadius: RADIUS_STANDARD,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: (theme.vars || theme).palette[color].main,
      color: (theme.vars || theme).palette[color].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: RADIUS_DOT,
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: true
    },
    style: {
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  }]
})));
function getAnchorOrigin(anchorOrigin) {
  return {
    vertical: anchorOrigin?.vertical ?? "top",
    horizontal: anchorOrigin?.horizontal ?? "right"
  };
}
const Badge = /* @__PURE__ */ React$1Y.forwardRef(function Badge2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBadge"
  });
  const {
    anchorOrigin: anchorOriginProp,
    className,
    classes: classesProp,
    component,
    components = {},
    componentsProps = {},
    children,
    overlap: overlapProp = "rectangular",
    color: colorProp = "default",
    invisible: invisibleProp = false,
    max: maxProp = 99,
    badgeContent: badgeContentProp,
    slots,
    slotProps,
    showZero = false,
    variant: variantProp = "standard",
    ...other
  } = props;
  const {
    badgeContent,
    invisible: invisibleFromHook,
    max,
    displayValue: displayValueFromHook
  } = useBadge({
    max: maxProp,
    invisible: invisibleProp,
    badgeContent: badgeContentProp,
    showZero
  });
  const prevProps = usePreviousProps({
    anchorOrigin: getAnchorOrigin(anchorOriginProp),
    color: colorProp,
    overlap: overlapProp,
    variant: variantProp,
    badgeContent: badgeContentProp
  });
  const invisible = invisibleFromHook || badgeContent == null && variantProp !== "dot";
  const {
    color = colorProp,
    overlap = overlapProp,
    anchorOrigin: anchorOriginPropProp,
    variant = variantProp
  } = invisible ? prevProps : props;
  const anchorOrigin = getAnchorOrigin(anchorOriginPropProp);
  const displayValue = variant !== "dot" ? displayValueFromHook : void 0;
  const ownerState = {
    ...props,
    badgeContent,
    invisible,
    max,
    displayValue,
    showZero,
    anchorOrigin,
    color,
    overlap,
    variant
  };
  const classes = useUtilityClasses$1t(ownerState);
  const externalForwardedProps = {
    slots: {
      root: slots?.root ?? components.Root,
      badge: slots?.badge ?? components.Badge
    },
    slotProps: {
      root: slotProps?.root ?? componentsProps.root,
      badge: slotProps?.badge ?? componentsProps.badge
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: BadgeRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    className: clsx(classes.root, className),
    ref,
    additionalProps: {
      as: component
    }
  });
  const [BadgeSlot, badgeProps] = useSlot("badge", {
    elementType: BadgeBadge,
    externalForwardedProps,
    ownerState,
    className: classes.badge
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeSlot, {
      ...badgeProps,
      children: displayValue
    })]
  });
});

function getBottomNavigationUtilityClass(slot) {
  return generateUtilityClass('MuiBottomNavigation', slot);
}
const bottomNavigationClasses = generateUtilityClasses('MuiBottomNavigation', ['root']);

const React$1X = await importShared('react');
const useUtilityClasses$1s = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getBottomNavigationUtilityClass, classes);
};
const BottomNavigationRoot = styled$2("div", {
  name: "MuiBottomNavigation",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  height: 56,
  backgroundColor: (theme.vars || theme).palette.background.paper
})));
const BottomNavigation = /* @__PURE__ */ React$1X.forwardRef(function BottomNavigation2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBottomNavigation"
  });
  const {
    children,
    className,
    component = "div",
    onChange,
    showLabels = false,
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    showLabels
  };
  const classes = useUtilityClasses$1s(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNavigationRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: React$1X.Children.map(children, (child, childIndex) => {
      if (!/* @__PURE__ */ React$1X.isValidElement(child)) {
        return null;
      }
      const childValue = child.props.value === void 0 ? childIndex : child.props.value;
      return /* @__PURE__ */ React$1X.cloneElement(child, {
        selected: childValue === value,
        showLabel: child.props.showLabel !== void 0 ? child.props.showLabel : showLabels,
        value: childValue,
        onChange
      });
    })
  });
});

function getBottomNavigationActionUtilityClass(slot) {
  return generateUtilityClass('MuiBottomNavigationAction', slot);
}
const bottomNavigationActionClasses = generateUtilityClasses('MuiBottomNavigationAction', ['root', 'iconOnly', 'selected', 'label']);

const React$1W = await importShared('react');
const useUtilityClasses$1r = (ownerState) => {
  const {
    classes,
    showLabel,
    selected
  } = ownerState;
  const slots = {
    root: ["root", !showLabel && !selected && "iconOnly", selected && "selected"],
    label: ["label", !showLabel && !selected && "iconOnly", selected && "selected"]
  };
  return composeClasses(slots, getBottomNavigationActionUtilityClass, classes);
};
const BottomNavigationActionRoot = styled$2(ButtonBase, {
  name: "MuiBottomNavigationAction",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.showLabel && !ownerState.selected && styles.iconOnly];
  }
})(memoTheme(({
  theme
}) => ({
  transition: theme.transitions.create(["color", "padding-top"], {
    duration: theme.transitions.duration.short
  }),
  padding: "0px 12px",
  minWidth: 80,
  maxWidth: 168,
  color: (theme.vars || theme).palette.text.secondary,
  flexDirection: "column",
  flex: "1",
  [`&.${bottomNavigationActionClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  variants: [{
    props: ({
      showLabel,
      selected
    }) => !showLabel && !selected,
    style: {
      paddingTop: 14
    }
  }, {
    props: ({
      showLabel,
      selected,
      label
    }) => !showLabel && !selected && !label,
    style: {
      paddingTop: 0
    }
  }]
})));
const BottomNavigationActionLabel = styled$2("span", {
  name: "MuiBottomNavigationAction",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(memoTheme(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(12),
  opacity: 1,
  transition: "font-size 0.2s, opacity 0.2s",
  transitionDelay: "0.1s",
  [`&.${bottomNavigationActionClasses.selected}`]: {
    fontSize: theme.typography.pxToRem(14)
  },
  variants: [{
    props: ({
      showLabel,
      selected
    }) => !showLabel && !selected,
    style: {
      opacity: 0,
      transitionDelay: "0s"
    }
  }]
})));
const BottomNavigationAction = /* @__PURE__ */ React$1W.forwardRef(function BottomNavigationAction2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBottomNavigationAction"
  });
  const {
    className,
    icon,
    label,
    onChange,
    onClick,
    // eslint-disable-next-line react/prop-types -- private, always overridden by BottomNavigation
    selected,
    showLabel,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1r(ownerState);
  const handleChange = (event) => {
    if (onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: BottomNavigationActionRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    shouldForwardComponentProp: true,
    ownerState,
    ref,
    className: clsx(classes.root, className),
    additionalProps: {
      focusRipple: true
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onClick: (event) => {
        handlers.onClick?.(event);
        handleChange(event);
      }
    })
  });
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: BottomNavigationActionLabel,
    externalForwardedProps,
    ownerState,
    className: classes.label
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [icon, /* @__PURE__ */ jsxRuntimeExports.jsx(LabelSlot, {
      ...labelProps,
      children: label
    })]
  });
});

const boxClasses = generateUtilityClasses('MuiBox', ['root']);

const defaultTheme = createTheme$1();
const Box = createBox({
  themeId: THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses.root,
  generateClassName: ClassNameGenerator.generate
});

await importShared('react');
const MoreHorizIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz');

await importShared('react');
const BreadcrumbCollapsedButton = styled$2(ButtonBase, {
  name: "MuiBreadcrumbCollapsed"
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`,
  ...theme.palette.mode === "light" ? {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[700]
  } : {
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[100]
  },
  borderRadius: 2,
  "&:hover, &:focus": {
    ...theme.palette.mode === "light" ? {
      backgroundColor: theme.palette.grey[200]
    } : {
      backgroundColor: theme.palette.grey[600]
    }
  },
  "&:active": {
    boxShadow: theme.shadows[0],
    ...theme.palette.mode === "light" ? {
      backgroundColor: emphasize(theme.palette.grey[200], 0.12)
    } : {
      backgroundColor: emphasize(theme.palette.grey[600], 0.12)
    }
  }
})));
const BreadcrumbCollapsedIcon = styled$2(MoreHorizIcon)({
  width: 24,
  height: 16
});
function BreadcrumbCollapsed(props) {
  const {
    slots = {},
    slotProps = {},
    ...otherProps
  } = props;
  const ownerState = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbCollapsedButton, {
      focusRipple: true,
      ...otherProps,
      ownerState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbCollapsedIcon, {
        as: slots.CollapsedIcon,
        ownerState,
        ...slotProps.collapsedIcon
      })
    })
  });
}

function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass('MuiBreadcrumbs', slot);
}
const breadcrumbsClasses = generateUtilityClasses('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);

const React$1V = await importShared('react');
const useUtilityClasses$1q = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  };
  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};
const BreadcrumbsRoot = styled$2(Typography, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{
      [`& .${breadcrumbsClasses.li}`]: styles.li
    }, styles.root];
  }
})({});
const BreadcrumbsOl = styled$2("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (props, styles) => styles.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
const BreadcrumbsSeparator = styled$2("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function insertSeparators(items, className, separator, ownerState) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbsSeparator, {
        "aria-hidden": true,
        className,
        ownerState,
        children: separator
      }, `separator-${index}`));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
}
const Breadcrumbs = /* @__PURE__ */ React$1V.forwardRef(function Breadcrumbs2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBreadcrumbs"
  });
  const {
    children,
    className,
    component = "nav",
    slots = {},
    slotProps = {},
    expandText = "Show path",
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
    maxItems = 8,
    separator = "/",
    ...other
  } = props;
  const [expanded, setExpanded] = React$1V.useState(false);
  const ownerState = {
    ...props,
    component,
    expanded,
    expandText,
    itemsAfterCollapse,
    itemsBeforeCollapse,
    maxItems,
    separator
  };
  const classes = useUtilityClasses$1q(ownerState);
  const collapsedIconSlotProps = useSlotProps({
    elementType: slots.CollapsedIcon,
    externalSlotProps: slotProps.collapsedIcon,
    ownerState
  });
  const listRef = React$1V.useRef(null);
  const renderItemsBeforeAndAfter = (allItems2) => {
    const handleClickExpand = () => {
      setExpanded(true);
      const focusable = listRef.current.querySelector("a[href],button,[tabindex]");
      if (focusable) {
        focusable.focus();
      }
    };
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems2.length) {
      return allItems2;
    }
    return [...allItems2.slice(0, itemsBeforeCollapse), /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbCollapsed, {
      "aria-label": expandText,
      slots: {
        CollapsedIcon: slots.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: collapsedIconSlotProps
      },
      onClick: handleClickExpand
    }, "ellipsis"), ...allItems2.slice(allItems2.length - itemsAfterCollapse, allItems2.length)];
  };
  const allItems = React$1V.Children.toArray(children).filter((child) => {
    return /* @__PURE__ */ React$1V.isValidElement(child);
  }).map((child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: classes.li,
    children: child
  }, `child-${index}`));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbsRoot, {
    ref,
    component,
    color: "textSecondary",
    className: clsx(classes.root, className),
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbsOl, {
      className: classes.ol,
      ref: listRef,
      ownerState,
      children: insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator, ownerState)
    })
  });
});

function getButtonUtilityClass(slot) {
  return generateUtilityClass('MuiButton', slot);
}
const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorError', 'colorInfo', 'colorWarning', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'icon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge', 'loading', 'loadingWrapper', 'loadingIconPlaceholder', 'loadingIndicator', 'loadingPositionCenter', 'loadingPositionStart', 'loadingPositionEnd']);

const React$1U = await importShared('react');

const ButtonGroupContext = /* @__PURE__ */ React$1U.createContext({});

const React$1T = await importShared('react');

const ButtonGroupButtonContext = /* @__PURE__ */ React$1T.createContext(void 0);

const React$1S = await importShared('react');
const useUtilityClasses$1p = (ownerState) => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, `color${capitalize(color)}`, disableElevation && "disableElevation", fullWidth && "fullWidth", loading && `loadingPosition${capitalize(loadingPosition)}`],
    startIcon: ["icon", "startIcon", `iconSize${capitalize(size)}`],
    endIcon: ["icon", "endIcon", `iconSize${capitalize(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
const commonIconStyles = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}];
const ButtonRoot = styled$2(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.loading && styles.loading];
  }
})(memoTheme(({
  theme
}) => {
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return {
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${buttonClasses.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: `var(--variant-containedColor)`,
        backgroundColor: `var(--variant-containedBg)`,
        boxShadow: (theme.vars || theme).shadows[2],
        "&:hover": {
          boxShadow: (theme.vars || theme).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (theme.vars || theme).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[8]
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: (theme.vars || theme).shadows[6]
        },
        [`&.${buttonClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled,
          boxShadow: (theme.vars || theme).shadows[0],
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: `var(--variant-outlinedBorder, currentColor)`,
        backgroundColor: `var(--variant-outlinedBg)`,
        color: `var(--variant-outlinedColor)`,
        [`&.${buttonClasses.disabled}`]: {
          border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: `var(--variant-textColor)`,
        backgroundColor: `var(--variant-textBg)`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        "--variant-textColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedBorder": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5),
        "--variant-containedColor": (theme.vars || theme).palette[color].contrastText,
        "--variant-containedBg": (theme.vars || theme).palette[color].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (theme.vars || theme).palette[color].dark,
            "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (theme.vars || theme).palette[color].main,
            "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
            "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
            "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: true
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${buttonClasses.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: theme.transitions.duration.short
        }),
        [`&.${buttonClasses.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
}));
const ButtonStartIcon = styled$2("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, ownerState.loading && styles.startIconLoadingStart, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true,
      fullWidth: true
    },
    style: {
      marginRight: -8
    }
  }, ...commonIconStyles]
}));
const ButtonEndIcon = styled$2("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, ownerState.loading && styles.endIconLoadingEnd, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true,
      fullWidth: true
    },
    style: {
      marginLeft: -8
    }
  }, ...commonIconStyles]
}));
const ButtonLoadingIndicator = styled$2("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => styles.loadingIndicator
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: true
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: true
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
}));
const ButtonLoadingIconPlaceholder = styled$2("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (props, styles) => styles.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
});
const Button = /* @__PURE__ */ React$1S.forwardRef(function Button2(inProps, ref) {
  const contextProps = React$1S.useContext(ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = React$1S.useContext(ButtonGroupButtonContext);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text",
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant
  };
  const classes = useUtilityClasses$1p(ownerState);
  const startIcon = (startIconProp || loading && loadingPosition === "start") && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp || /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const endIcon = (endIconProp || loading && loadingPosition === "end") && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp || /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  const loader = typeof loading === "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loadingIndicator
      })
    })
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRoot, {
    ownerState,
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled: disabled || loading,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type,
    id: loading ? loadingId : idProp,
    ...other,
    classes,
    children: [startIcon, loadingPosition !== "end" && loader, children, loadingPosition === "end" && loader, endIcon]
  });
});

function getButtonGroupUtilityClass(slot) {
  return generateUtilityClass('MuiButtonGroup', slot);
}
const buttonGroupClasses = generateUtilityClasses('MuiButtonGroup', ['root', 'contained', 'outlined', 'text', 'disableElevation', 'disabled', 'firstButton', 'fullWidth', 'horizontal', 'vertical', 'colorPrimary', 'colorSecondary', 'grouped', 'groupedHorizontal', 'groupedVertical', 'groupedText', 'groupedTextHorizontal', 'groupedTextVertical', 'groupedTextPrimary', 'groupedTextSecondary', 'groupedOutlined', 'groupedOutlinedHorizontal', 'groupedOutlinedVertical', 'groupedOutlinedPrimary', 'groupedOutlinedSecondary', 'groupedContained', 'groupedContainedHorizontal', 'groupedContainedVertical', 'groupedContainedPrimary', 'groupedContainedSecondary', 'lastButton', 'middleButton']);

const React$1R = await importShared('react');
const overridesResolver$6 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [{
    [`& .${buttonGroupClasses.grouped}`]: styles.grouped
  }, {
    [`& .${buttonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.variant)}`]
  }, {
    [`& .${buttonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.variant)}${capitalize(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.variant)}${capitalize(ownerState.color)}`]
  }, {
    [`& .${buttonGroupClasses.firstButton}`]: styles.firstButton
  }, {
    [`& .${buttonGroupClasses.lastButton}`]: styles.lastButton
  }, {
    [`& .${buttonGroupClasses.middleButton}`]: styles.middleButton
  }, styles.root, styles[ownerState.variant], ownerState.disableElevation === true && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.orientation === "vertical" && styles.vertical];
};
const useUtilityClasses$1o = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    disableElevation,
    fullWidth,
    orientation,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, orientation, fullWidth && "fullWidth", disableElevation && "disableElevation", `color${capitalize(color)}`],
    grouped: ["grouped", `grouped${capitalize(orientation)}`, `grouped${capitalize(variant)}`, `grouped${capitalize(variant)}${capitalize(orientation)}`, `grouped${capitalize(variant)}${capitalize(color)}`, disabled && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return composeClasses(slots, getButtonGroupUtilityClass, classes);
};
const ButtonGroupRoot = styled$2("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: overridesResolver$6
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  borderRadius: (theme.vars || theme).shape.borderRadius,
  variants: [{
    props: {
      variant: "contained"
    },
    style: {
      boxShadow: (theme.vars || theme).shadows[2]
    }
  }, {
    props: {
      disableElevation: true
    },
    style: {
      boxShadow: "none"
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${buttonGroupClasses.lastButton},& .${buttonGroupClasses.middleButton}`]: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${buttonGroupClasses.lastButton},& .${buttonGroupClasses.middleButton}`]: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }
    }
  }, {
    props: {
      variant: "text",
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderRight: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${buttonGroupClasses.disabled}`]: {
          borderRight: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, {
    props: {
      variant: "text",
      orientation: "vertical"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderBottom: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
        [`&.${buttonGroupClasses.disabled}`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).flatMap(([color]) => [{
    props: {
      variant: "text",
      color
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5)
      }
    }
  }]), {
    props: {
      variant: "outlined",
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderRightColor: "transparent",
        "&:hover": {
          borderRightColor: "currentColor"
        }
      },
      [`& .${buttonGroupClasses.lastButton},& .${buttonGroupClasses.middleButton}`]: {
        marginLeft: -1
      }
    }
  }, {
    props: {
      variant: "outlined",
      orientation: "vertical"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderBottomColor: "transparent",
        "&:hover": {
          borderBottomColor: "currentColor"
        }
      },
      [`& .${buttonGroupClasses.lastButton},& .${buttonGroupClasses.middleButton}`]: {
        marginTop: -1
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "horizontal"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderRight: `1px solid ${(theme.vars || theme).palette.grey[400]}`,
        [`&.${buttonGroupClasses.disabled}`]: {
          borderRight: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, {
    props: {
      variant: "contained",
      orientation: "vertical"
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderBottom: `1px solid ${(theme.vars || theme).palette.grey[400]}`,
        [`&.${buttonGroupClasses.disabled}`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.action.disabled}`
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
    props: {
      variant: "contained",
      color
    },
    style: {
      [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
        borderColor: (theme.vars || theme).palette[color].dark
      }
    }
  }))],
  [`& .${buttonGroupClasses.grouped}`]: {
    minWidth: 40,
    boxShadow: "none",
    props: {
      variant: "contained"
    },
    style: {
      "&:hover": {
        boxShadow: "none"
      }
    }
  }
})));
const ButtonGroup = /* @__PURE__ */ React$1R.forwardRef(function ButtonGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiButtonGroup"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = "horizontal",
    size = "medium",
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    orientation,
    size,
    variant
  };
  const classes = useUtilityClasses$1o(ownerState);
  const context = React$1R.useMemo(() => ({
    className: classes.grouped,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    size,
    variant
  }), [color, disabled, disableElevation, disableFocusRipple, disableRipple, fullWidth, size, variant, classes.grouped]);
  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;
  const getButtonPositionClassName = (index) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;
    if (isFirstButton && isLastButton) {
      return "";
    }
    if (isFirstButton) {
      return classes.firstButton;
    }
    if (isLastButton) {
      return classes.lastButton;
    }
    return classes.middleButton;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroupRoot, {
    as: component,
    role: "group",
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroupContext.Provider, {
      value: context,
      children: validChildren.map((child, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonGroupButtonContext.Provider, {
          value: getButtonPositionClassName(index),
          children: child
        }, index);
      })
    })
  });
});

function getCardUtilityClass(slot) {
  return generateUtilityClass('MuiCard', slot);
}
const cardClasses = generateUtilityClasses('MuiCard', ['root']);

const React$1Q = await importShared('react');
const useUtilityClasses$1n = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardUtilityClass, classes);
};
const CardRoot = styled$2(Paper, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  overflow: "hidden"
});
const Card = /* @__PURE__ */ React$1Q.forwardRef(function Card2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCard"
  });
  const {
    className,
    raised = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    raised
  };
  const classes = useUtilityClasses$1n(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardRoot, {
    className: clsx(classes.root, className),
    elevation: raised ? 8 : void 0,
    ref,
    ownerState,
    ...other
  });
});

function getCardActionAreaUtilityClass(slot) {
  return generateUtilityClass('MuiCardActionArea', slot);
}
const cardActionAreaClasses = generateUtilityClasses('MuiCardActionArea', ['root', 'focusVisible', 'focusHighlight']);

const React$1P = await importShared('react');
const useUtilityClasses$1m = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    focusHighlight: ["focusHighlight"]
  };
  return composeClasses(slots, getCardActionAreaUtilityClass, classes);
};
const CardActionAreaRoot = styled$2(ButtonBase, {
  name: "MuiCardActionArea",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => ({
  display: "block",
  textAlign: "inherit",
  borderRadius: "inherit",
  // for Safari to work https://github.com/mui/material-ui/issues/36285.
  width: "100%",
  [`&:hover .${cardActionAreaClasses.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.hoverOpacity,
    "@media (hover: none)": {
      opacity: 0
    }
  },
  [`&.${cardActionAreaClasses.focusVisible} .${cardActionAreaClasses.focusHighlight}`]: {
    opacity: (theme.vars || theme).palette.action.focusOpacity
  }
})));
const CardActionAreaFocusHighlight = styled$2("span", {
  name: "MuiCardActionArea",
  slot: "FocusHighlight",
  overridesResolver: (props, styles) => styles.focusHighlight
})(memoTheme(({
  theme
}) => ({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit",
  opacity: 0,
  backgroundColor: "currentcolor",
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.short
  })
})));
const CardActionArea = /* @__PURE__ */ React$1P.forwardRef(function CardActionArea2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardActionArea"
  });
  const {
    children,
    className,
    focusVisibleClassName,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1m(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: CardActionAreaRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    shouldForwardComponentProp: true,
    ownerState,
    ref,
    className: clsx(classes.root, className),
    additionalProps: {
      focusVisibleClassName: clsx(focusVisibleClassName, classes.focusVisible)
    }
  });
  const [FocusHighlightSlot, focusHighlightProps] = useSlot("focusHighlight", {
    elementType: CardActionAreaFocusHighlight,
    externalForwardedProps,
    ownerState,
    ref,
    className: classes.focusHighlight
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(FocusHighlightSlot, {
      ...focusHighlightProps
    })]
  });
});

function getCardActionsUtilityClass(slot) {
  return generateUtilityClass('MuiCardActions', slot);
}
const cardActionsClasses = generateUtilityClasses('MuiCardActions', ['root', 'spacing']);

const React$1O = await importShared('react');
const useUtilityClasses$1l = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getCardActionsUtilityClass, classes);
};
const CardActionsRoot = styled$2("div", {
  name: "MuiCardActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  variants: [{
    props: {
      disableSpacing: false
    },
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
});
const CardActions = /* @__PURE__ */ React$1O.forwardRef(function CardActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardActions"
  });
  const {
    disableSpacing = false,
    className,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableSpacing
  };
  const classes = useUtilityClasses$1l(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardActionsRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getCardContentUtilityClass(slot) {
  return generateUtilityClass('MuiCardContent', slot);
}
const cardContentClasses = generateUtilityClasses('MuiCardContent', ['root']);

const React$1N = await importShared('react');
const useUtilityClasses$1k = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = styled$2("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
});
const CardContent = /* @__PURE__ */ React$1N.forwardRef(function CardContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardContent"
  });
  const {
    className,
    component = "div",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$1k(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardContentRoot, {
    as: component,
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getCardHeaderUtilityClass(slot) {
  return generateUtilityClass('MuiCardHeader', slot);
}
const cardHeaderClasses = generateUtilityClasses('MuiCardHeader', ['root', 'avatar', 'action', 'content', 'title', 'subheader']);

const React$1M = await importShared('react');
const useUtilityClasses$1j = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    avatar: ["avatar"],
    action: ["action"],
    content: ["content"],
    title: ["title"],
    subheader: ["subheader"]
  };
  return composeClasses(slots, getCardHeaderUtilityClass, classes);
};
const CardHeaderRoot = styled$2("div", {
  name: "MuiCardHeader",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{
      [`& .${cardHeaderClasses.title}`]: styles.title
    }, {
      [`& .${cardHeaderClasses.subheader}`]: styles.subheader
    }, styles.root];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 16
});
const CardHeaderAvatar = styled$2("div", {
  name: "MuiCardHeader",
  slot: "Avatar",
  overridesResolver: (props, styles) => styles.avatar
})({
  display: "flex",
  flex: "0 0 auto",
  marginRight: 16
});
const CardHeaderAction = styled$2("div", {
  name: "MuiCardHeader",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})({
  flex: "0 0 auto",
  alignSelf: "flex-start",
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
});
const CardHeaderContent = styled$2("div", {
  name: "MuiCardHeader",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})({
  flex: "1 1 auto",
  [`.${typographyClasses.root}:where(& .${cardHeaderClasses.title})`]: {
    display: "block"
  },
  [`.${typographyClasses.root}:where(& .${cardHeaderClasses.subheader})`]: {
    display: "block"
  }
});
const CardHeader = /* @__PURE__ */ React$1M.forwardRef(function CardHeader2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardHeader"
  });
  const {
    action,
    avatar,
    component = "div",
    disableTypography = false,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    disableTypography
  };
  const classes = useUtilityClasses$1j(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      title: titleTypographyProps,
      subheader: subheaderTypographyProps,
      ...slotProps
    }
  };
  let title = titleProp;
  const [TitleSlot, titleSlotProps] = useSlot("title", {
    className: classes.title,
    elementType: Typography,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      variant: avatar ? "body2" : "h5",
      component: "span"
    }
  });
  if (title != null && title.type !== Typography && !disableTypography) {
    title = /* @__PURE__ */ jsxRuntimeExports.jsx(TitleSlot, {
      ...titleSlotProps,
      children: title
    });
  }
  let subheader = subheaderProp;
  const [SubheaderSlot, subheaderSlotProps] = useSlot("subheader", {
    className: classes.subheader,
    elementType: Typography,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      variant: avatar ? "body2" : "body1",
      color: "textSecondary",
      component: "span"
    }
  });
  if (subheader != null && subheader.type !== Typography && !disableTypography) {
    subheader = /* @__PURE__ */ jsxRuntimeExports.jsx(SubheaderSlot, {
      ...subheaderSlotProps,
      children: subheader
    });
  }
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: CardHeaderRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    ownerState
  });
  const [AvatarSlot, avatarSlotProps] = useSlot("avatar", {
    className: classes.avatar,
    elementType: CardHeaderAvatar,
    externalForwardedProps,
    ownerState
  });
  const [ContentSlot, contentSlotProps] = useSlot("content", {
    className: classes.content,
    elementType: CardHeaderContent,
    externalForwardedProps,
    ownerState
  });
  const [ActionSlot, actionSlotProps] = useSlot("action", {
    className: classes.action,
    elementType: CardHeaderAction,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [avatar && /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarSlot, {
      ...avatarSlotProps,
      children: avatar
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs(ContentSlot, {
      ...contentSlotProps,
      children: [title, subheader]
    }), action && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSlot, {
      ...actionSlotProps,
      children: action
    })]
  });
});

function getCardMediaUtilityClass(slot) {
  return generateUtilityClass('MuiCardMedia', slot);
}
const cardMediaClasses = generateUtilityClasses('MuiCardMedia', ['root', 'media', 'img']);

const React$1L = await importShared('react');
const useUtilityClasses$1i = (ownerState) => {
  const {
    classes,
    isMediaComponent,
    isImageComponent
  } = ownerState;
  const slots = {
    root: ["root", isMediaComponent && "media", isImageComponent && "img"]
  };
  return composeClasses(slots, getCardMediaUtilityClass, classes);
};
const CardMediaRoot = styled$2("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      isMediaComponent,
      isImageComponent
    } = ownerState;
    return [styles.root, isMediaComponent && styles.media, isImageComponent && styles.img];
  }
})({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  variants: [{
    props: {
      isMediaComponent: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      isImageComponent: true
    },
    style: {
      objectFit: "cover"
    }
  }]
});
const MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
const IMAGE_COMPONENTS = ["picture", "img"];
const CardMedia = /* @__PURE__ */ React$1L.forwardRef(function CardMedia2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardMedia"
  });
  const {
    children,
    className,
    component = "div",
    image,
    src,
    style,
    ...other
  } = props;
  const isMediaComponent = MEDIA_COMPONENTS.includes(component);
  const composedStyle = !isMediaComponent && image ? {
    backgroundImage: `url("${image}")`,
    ...style
  } : style;
  const ownerState = {
    ...props,
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.includes(component)
  };
  const classes = useUtilityClasses$1i(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardMediaRoot, {
    className: clsx(classes.root, className),
    as: component,
    role: !isMediaComponent && image ? "img" : void 0,
    ref,
    style: composedStyle,
    ownerState,
    src: isMediaComponent ? image || src : void 0,
    ...other,
    children
  });
});

function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass('PrivateSwitchBase', slot);
}
generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);

const React$1K = await importShared('react');
const useUtilityClasses$1h = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled$2(ButtonBase, {
  name: "MuiSwitchBase"
})({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "start" && ownerState.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "end" && ownerState.size !== "small",
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = styled$2("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: rootShouldForwardProp
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
const SwitchBase = /* @__PURE__ */ React$1K.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses$1h(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: "span",
      ...other
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onFocus: (event) => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: (event) => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: void 0,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = useSlot("input", {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onChange: (event) => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : void 0,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...type === "checkbox" && value === void 0 ? {} : {
        value
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});

await importShared('react');
const CheckBoxOutlineBlankIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank');

await importShared('react');
const CheckBoxIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox');

await importShared('react');
const IndeterminateCheckBoxIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox');

function getCheckboxUtilityClass(slot) {
  return generateUtilityClass('MuiCheckbox', slot);
}
const checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium']);

const React$1J = await importShared('react');
const useUtilityClasses$1g = (ownerState) => {
  const {
    classes,
    indeterminate,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", indeterminate && "indeterminate", `color${capitalize(color)}`, `size${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const CheckboxRoot = styled$2(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, styles[`size${capitalize(ownerState.size)}`], ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
        color: (theme.vars || theme).palette[color].main
      },
      [`&.${checkboxClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
const defaultCheckedIcon$1 = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBoxIcon, {});
const defaultIcon$2 = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
const Checkbox = /* @__PURE__ */ React$1J.forwardRef(function Checkbox2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCheckbox"
  });
  const {
    checkedIcon = defaultCheckedIcon$1,
    color = "primary",
    icon: iconProp = defaultIcon$2,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = "medium",
    disableRipple = false,
    className,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = {
    ...props,
    disableRipple,
    color,
    indeterminate,
    size
  };
  const classes = useUtilityClasses$1g(ownerState);
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: CheckboxRoot,
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    ownerState,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ React$1J.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /* @__PURE__ */ React$1J.cloneElement(indeterminateIcon, {
        fontSize: indeterminateIcon.props.fontSize ?? size
      }),
      disableRipple,
      slots,
      slotProps: {
        input: mergeSlotProps(typeof externalInputProps === "function" ? externalInputProps(ownerState) : externalInputProps, {
          "data-indeterminate": indeterminate
        })
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    classes
  });
});

const React$1I = await importShared('react');
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React$1I.useRef(false);
  const nodeRef = React$1I.useRef(null);
  const activatedRef = React$1I.useRef(false);
  const syntheticEventRef = React$1I.useRef(false);
  React$1I.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(getReactElementRef(children), nodeRef);
  const handleClickAway = useEventCallback((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().includes(nodeRef.current);
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React$1I.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React$1I.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return /* @__PURE__ */ React$1I.cloneElement(children, childrenProps);
}

const Container = createContainer({
  createStyledComponent: styled$2("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiContainer"
  })
});

function getContainerUtilityClass(slot) {
  return generateUtilityClass('MuiContainer', slot);
}
const containerClasses = generateUtilityClasses('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);

const React$1H = await importShared('react');
const isDynamicSupport = typeof globalCss({}) === "function";
const html = (theme, enableColorScheme) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...enableColorScheme && !theme.vars && {
    colorScheme: theme.palette.mode
  }
});
const body = (theme) => ({
  color: (theme.vars || theme).palette.text.primary,
  ...theme.typography.body1,
  backgroundColor: (theme.vars || theme).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (theme.vars || theme).palette.common.white
  }
});
const styles$3 = (theme, enableColorScheme = false) => {
  const colorSchemeStyles = {};
  if (enableColorScheme && theme.colorSchemes && typeof theme.getColorSchemeSelector === "function") {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      const selector = theme.getColorSchemeSelector(key);
      if (selector.startsWith("@")) {
        colorSchemeStyles[selector] = {
          ":root": {
            colorScheme: scheme.palette?.mode
          }
        };
      } else {
        colorSchemeStyles[selector.replace(/\s*&/, "")] = {
          colorScheme: scheme.palette?.mode
        };
      }
    });
  }
  let defaultStyles = {
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...body(theme),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    },
    ...colorSchemeStyles
  };
  const themeOverrides = theme.components?.MuiCssBaseline?.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
const SELECTOR = "mui-ecs";
const staticStyles = (theme) => {
  const result = styles$3(theme, false);
  const baseStyles = Array.isArray(result) ? result[0] : result;
  if (!theme.vars && baseStyles) {
    baseStyles.html[`:root:has(${SELECTOR})`] = {
      colorScheme: theme.palette.mode
    };
  }
  if (theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      const selector = theme.getColorSchemeSelector(key);
      if (selector.startsWith("@")) {
        baseStyles[selector] = {
          [`:root:not(:has(.${SELECTOR}))`]: {
            colorScheme: scheme.palette?.mode
          }
        };
      } else {
        baseStyles[selector.replace(/\s*&/, "")] = {
          [`&:not(:has(.${SELECTOR}))`]: {
            colorScheme: scheme.palette?.mode
          }
        };
      }
    });
  }
  return result;
};
const GlobalStyles = globalCss(isDynamicSupport ? ({
  theme,
  enableColorScheme
}) => styles$3(theme, enableColorScheme) : ({
  theme
}) => staticStyles(theme));
function CssBaseline(inProps) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$1H.Fragment, {
    children: [isDynamicSupport && /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
      enableColorScheme
    }), !isDynamicSupport && !enableColorScheme && /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: SELECTOR,
      style: {
        display: "none"
      }
    }), children]
  });
}

// track, thumb and active are derived from macOS 10.15.7
const scrollBar = {
  track: '#2b2b2b',
  thumb: '#6b6b6b',
  active: '#959595'
};
function darkScrollbar(options = scrollBar) {
  return {
    scrollbarColor: `${options.thumb} ${options.track}`,
    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
      backgroundColor: options.track
    },
    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: options.thumb,
      minHeight: 24,
      border: `3px solid ${options.track}`
    },
    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
      backgroundColor: options.active
    },
    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
      backgroundColor: options.active
    },
    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: options.active
    },
    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
      backgroundColor: options.track
    }
  };
}

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
  if (hide) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = !blacklist.includes(element);
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, hide);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = getScrollbarSize(ownerWindow(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      // Support html overflow-y: auto for scroll stability between pages
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = parent?.nodeName === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}

const React$1G = await importShared('react');
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React$1G.useRef(false);
  const sentinelStart = React$1G.useRef(null);
  const sentinelEnd = React$1G.useRef(null);
  const nodeToRestore = React$1G.useRef(null);
  const reactFocusEventTarget = React$1G.useRef(null);
  const activated = React$1G.useRef(false);
  const rootRef = React$1G.useRef(null);
  const handleRef = useForkRef(getReactElementRef(children), rootRef);
  const lastKeydown = React$1G.useRef(null);
  React$1G.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React$1G.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React$1G.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        const isShiftTab = Boolean(lastKeydown.current?.shiftKey && lastKeydown.current?.key === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$1G.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ React$1G.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}

const React$1F = await importShared('react');
function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}
const noop = () => {};

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const manager = new ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;

  // @ts-ignore internal logic
  const modal = React$1F.useRef({});
  const mountNodeRef = React$1F.useRef(null);
  const modalRef = React$1F.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = React$1F.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = () => manager.isTopModal(getModal());
  const handlePortalRef = useEventCallback(node => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React$1F.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp]);
  React$1F.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React$1F.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = otherHandlers => event => {
    otherHandlers.onKeyDown?.(event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || event.which === 229 ||
    // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const createHandleBackdropClick = otherHandlers => event => {
    otherHandlers.onClick?.(event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);

    // The custom event handlers shouldn't be spread on the root element
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...otherHandlers
    };
    return {
      /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */
      role: 'presentation',
      ...externalEventHandlers,
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    };
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return {
      'aria-hidden': true,
      ...externalEventHandlers,
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    };
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children?.props.onEnter ?? noop),
      onExited: createChainedFunction(handleExited, children?.props.onExited ?? noop)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
const modalClasses = generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);

const React$1E = await importShared('react');
const useUtilityClasses$1f = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
const ModalRoot = styled$2("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(memoTheme(({
  theme
}) => ({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open && ownerState.exited,
    style: {
      visibility: "hidden"
    }
  }]
})));
const ModalBackdrop = styled$2(Backdrop, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ React$1E.forwardRef(function Modal2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    onClose,
    onTransitionEnter,
    onTransitionExited,
    open,
    slotProps = {},
    slots = {},
    // eslint-disable-next-line react/prop-types
    theme,
    ...other
  } = props;
  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal({
    ...propsWithDefaults,
    rootRef: ref
  });
  const ownerState = {
    ...propsWithDefaults,
    exited
  };
  const classes = useUtilityClasses$1f(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const externalForwardedProps = {
    slots: {
      root: components.Root,
      backdrop: components.Backdrop,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    ref,
    elementType: ModalRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    getSlotProps: getRootProps,
    ownerState,
    className: clsx(className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
  });
  const [BackdropSlot, backdropProps] = useSlot("backdrop", {
    ref: BackdropProps?.ref,
    elementType: BackdropComponent,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps({
        ...otherHandlers,
        onClick: (event) => {
          if (onBackdropClick) {
            onBackdropClick(event);
          }
          if (otherHandlers?.onClick) {
            otherHandlers.onClick(event);
          }
        }
      });
    },
    className: clsx(BackdropProps?.className, classes?.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
      ...rootProps,
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropSlot, {
        ...backdropProps
      }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ React$1E.cloneElement(children, childProps)
      })]
    })
  });
});

function getDialogUtilityClass(slot) {
  return generateUtilityClass('MuiDialog', slot);
}
const dialogClasses = generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);

const React$1D = await importShared('react');

const DialogContext = /* @__PURE__ */ React$1D.createContext({});

const React$1C = await importShared('react');
const DialogBackdrop = styled$2(Backdrop, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
const useUtilityClasses$1e = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize(scroll)}`],
    paper: ["paper", `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
const DialogRoot = styled$2(Modal, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
const DialogContainer = styled$2("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
});
const DialogPaper = styled$2(Paper, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
      [`&.${dialogClasses.paperScrollBody}`]: {
        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
    props: {
      maxWidth
    },
    style: {
      maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}`,
      [`&.${dialogClasses.paperScrollBody}`]: {
        [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${dialogClasses.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
})));
const Dialog = /* @__PURE__ */ React$1C.forwardRef(function Dialog2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme$3();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    "aria-modal": ariaModal = true,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onBackdropClick,
    onClick,
    onClose,
    open,
    PaperComponent = Paper,
    PaperProps = {},
    scroll = "paper",
    slots = {},
    slotProps = {},
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  };
  const classes = useUtilityClasses$1e(ownerState);
  const backdropClick = React$1C.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = React$1C.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  const backwardCompatibleSlots = {
    transition: TransitionComponent,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionProps,
    paper: PaperProps,
    backdrop: BackdropProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    elementType: DialogRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.root, className),
    ref
  });
  const [BackdropSlot, backdropSlotProps] = useSlot("backdrop", {
    elementType: DialogBackdrop,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DialogPaper,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.paper, PaperProps.className)
  });
  const [ContainerSlot, containerSlotProps] = useSlot("container", {
    elementType: DialogContainer,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.container)
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Fade,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    closeAfterTransition: true,
    slots: {
      backdrop: BackdropSlot
    },
    slotProps: {
      backdrop: {
        transitionDuration,
        as: BackdropComponent,
        ...backdropSlotProps
      }
    },
    disableEscapeKeyDown,
    onClose,
    open,
    onClick: handleBackdropClick,
    ...rootSlotProps,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      ...transitionSlotProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContainerSlot, {
        onMouseDown: handleMouseDown,
        ...containerSlotProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, {
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby,
          "aria-modal": ariaModal,
          ...paperSlotProps,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContext.Provider, {
            value: dialogContextValue,
            children
          })
        })
      })
    })
  });
});

function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass('MuiDialogActions', slot);
}
const dialogActionsClasses = generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);

const React$1B = await importShared('react');
const useUtilityClasses$1d = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = styled$2("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
});
const DialogActions = /* @__PURE__ */ React$1B.forwardRef(function DialogActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogActions"
  });
  const {
    className,
    disableSpacing = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableSpacing
  };
  const classes = useUtilityClasses$1d(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogActionsRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getDialogContentUtilityClass(slot) {
  return generateUtilityClass('MuiDialogContent', slot);
}
const dialogContentClasses = generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);

function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass('MuiDialogTitle', slot);
}
const dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);

const React$1A = await importShared('react');
const useUtilityClasses$1c = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
const DialogContentRoot = styled$2("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(memoTheme(({
  theme
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.dividers,
    style: {
      [`.${dialogTitleClasses.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
})));
const DialogContent = /* @__PURE__ */ React$1A.forwardRef(function DialogContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    dividers
  };
  const classes = useUtilityClasses$1c(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getDialogContentTextUtilityClass(slot) {
  return generateUtilityClass('MuiDialogContentText', slot);
}
const dialogContentTextClasses = generateUtilityClasses('MuiDialogContentText', ['root']);

const React$1z = await importShared('react');
const useUtilityClasses$1b = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getDialogContentTextUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the Typography
    ...composedClasses
  };
};
const DialogContentTextRoot = styled$2(Typography, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
const DialogContentText = /* @__PURE__ */ React$1z.forwardRef(function DialogContentText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogContentText"
  });
  const {
    children,
    className,
    ...ownerState
  } = props;
  const classes = useUtilityClasses$1b(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentTextRoot, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref,
    ownerState,
    className: clsx(classes.root, className),
    ...props,
    classes
  });
});

const React$1y = await importShared('react');
const useUtilityClasses$1a = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = styled$2(Typography, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
const DialogTitle = /* @__PURE__ */ React$1y.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1a(ownerState);
  const {
    titleId = idProp
  } = React$1y.useContext(DialogContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitleRoot, {
    component: "h2",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp ?? titleId,
    ...other
  });
});

function getDividerUtilityClass(slot) {
  return generateUtilityClass('MuiDivider', slot);
}
const dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);

const React$1x = await importShared('react');
const useUtilityClasses$19 = (ownerState) => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ["root", absolute && "absolute", variant, light && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
  };
  return composeClasses(slots, getDividerUtilityClass, classes);
};
const DividerRoot = styled$2("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === "vertical" && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles.textAlignLeft];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: true
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: true
    },
    style: {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha(theme.palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: true
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.children && ownerState.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.orientation === "vertical" && ownerState.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === "right" && ownerState.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === "left" && ownerState.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
})));
const DividerWrapper = styled$2("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.wrapper, ownerState.orientation === "vertical" && styles.wrapperVertical];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }
  }]
})));
const Divider = /* @__PURE__ */ React$1x.forwardRef(function Divider2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDivider"
  });
  const {
    absolute = false,
    children,
    className,
    orientation = "horizontal",
    component = children || orientation === "vertical" ? "div" : "hr",
    flexItem = false,
    light = false,
    role = component !== "hr" ? "separator" : void 0,
    textAlign = "center",
    variant = "fullWidth",
    ...other
  } = props;
  const ownerState = {
    ...props,
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  };
  const classes = useUtilityClasses$19(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DividerRoot, {
    as: component,
    className: clsx(classes.root, className),
    role,
    ref,
    ownerState,
    "aria-orientation": role === "separator" && (component !== "hr" || orientation === "vertical") ? orientation : void 0,
    ...other,
    children: children ? /* @__PURE__ */ jsxRuntimeExports.jsx(DividerWrapper, {
      className: classes.wrapper,
      ownerState,
      children
    }) : null
  });
});
if (Divider) {
  Divider.muiSkipListHighlight = true;
}

const React$1w = await importShared('react');
function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  let offsetX = 0;
  let offsetY = 0;
  if (transform && transform !== "none" && typeof transform === "string") {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === "left") {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }
    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }
  if (direction === "right") {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }
    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }
  if (direction === "up") {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }
    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  }
  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }
  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}
function resolveContainer(containerPropProp) {
  return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
}
function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const Slide = /* @__PURE__ */ React$1w.forwardRef(function Slide2(props, ref) {
  const theme = useTheme$3();
  const defaultEasing = {
    enter: theme.transitions.easing.easeOut,
    exit: theme.transitions.easing.sharp
  };
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = "down",
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const childrenRef = React$1w.useRef(null);
  const handleRef = useForkRef(getReactElementRef(children), childrenRef, ref);
  const normalizedTransitionCallback = (callback) => (isAppearing) => {
    if (callback) {
      if (isAppearing === void 0) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    reflow(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", {
      ...transitionProps
    });
    node.style.transition = theme.transitions.create("transform", {
      ...transitionProps
    });
    node.style.webkitTransform = "none";
    node.style.transform = "none";
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    setTranslateValue(direction, node, containerProp);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback((node) => {
    node.style.webkitTransition = "";
    node.style.transition = "";
    if (onExited) {
      onExited(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(childrenRef.current, next);
    }
  };
  const updatePosition = React$1w.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  React$1w.useEffect(() => {
    if (inProp || direction === "down" || direction === "right") {
      return void 0;
    }
    const handleResize = debounce$1(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = ownerWindow(childrenRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]);
  React$1w.useEffect(() => {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear,
    in: inProp,
    timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /* @__PURE__ */ React$1w.cloneElement(children, {
        ref: handleRef,
        style: {
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...style,
          ...children.props.style
        },
        ...restChildProps
      });
    }
  });
});

function getDrawerUtilityClass(slot) {
  return generateUtilityClass('MuiDrawer', slot);
}
const drawerClasses = generateUtilityClasses('MuiDrawer', ['root', 'docked', 'paper', 'anchorLeft', 'anchorRight', 'anchorTop', 'anchorBottom', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);

const React$1v = await importShared('react');
const overridesResolver$5 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles.docked, styles.modal];
};
const useUtilityClasses$18 = (ownerState) => {
  const {
    classes,
    anchor,
    variant
  } = ownerState;
  const slots = {
    root: ["root", `anchor${capitalize(anchor)}`],
    docked: [(variant === "permanent" || variant === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${capitalize(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize(anchor)}`]
  };
  return composeClasses(slots, getDrawerUtilityClass, classes);
};
const DrawerRoot = styled$2(Modal, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: overridesResolver$5
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.drawer
})));
const DrawerDockedRoot = styled$2("div", {
  shouldForwardProp: rootShouldForwardProp,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: false,
  overridesResolver: overridesResolver$5
})({
  flex: "0 0 auto"
});
const DrawerPaper = styled$2(Paper, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (theme.vars || theme).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "left" && ownerState.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "top" && ownerState.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "right" && ownerState.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "bottom" && ownerState.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }]
})));
const oppositeDirection = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function isHorizontal(anchor) {
  return ["left", "right"].includes(anchor);
}
function getAnchor({
  direction
}, anchor) {
  return direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
const Drawer = /* @__PURE__ */ React$1v.forwardRef(function Drawer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDrawer"
  });
  const theme = useTheme$3();
  const isRtl = useRtl();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    anchor: anchorProp = "left",
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = false,
    ModalProps: {
      BackdropProps: BackdropPropsProp,
      ...ModalProps
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent,
    transitionDuration = defaultTransitionDuration,
    variant = "temporary",
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const mounted = React$1v.useRef(false);
  React$1v.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchorInvariant = getAnchor({
    direction: isRtl ? "rtl" : "ltr"
  }, anchorProp);
  const anchor = anchorProp;
  const ownerState = {
    ...props,
    anchor,
    elevation,
    open,
    variant,
    ...other
  };
  const classes = useUtilityClasses$18(ownerState);
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      paper: PaperProps,
      transition: SlideProps,
      ...slotProps,
      backdrop: mergeSlotProps(slotProps.backdrop || {
        ...BackdropProps,
        ...BackdropPropsProp
      }, {
        transitionDuration
      })
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: DrawerRoot,
    className: clsx(classes.root, classes.modal, className),
    shouldForwardComponentProp: true,
    ownerState,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      ...ModalProps
    },
    additionalProps: {
      open,
      onClose,
      hideBackdrop,
      slots: {
        backdrop: externalForwardedProps.slots.backdrop
      },
      slotProps: {
        backdrop: externalForwardedProps.slotProps.backdrop
      }
    }
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DrawerPaper,
    shouldForwardComponentProp: true,
    className: clsx(classes.paper, PaperProps.className),
    ownerState,
    externalForwardedProps,
    additionalProps: {
      elevation: variant === "temporary" ? elevation : 0,
      square: true
    }
  });
  const [DockedSlot, dockedSlotProps] = useSlot("docked", {
    elementType: DrawerDockedRoot,
    ref,
    className: clsx(classes.root, classes.docked, className),
    ownerState,
    externalForwardedProps,
    additionalProps: other
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Slide,
    ownerState,
    externalForwardedProps,
    additionalProps: {
      in: open,
      direction: oppositeDirection[anchorInvariant],
      timeout: transitionDuration,
      appear: mounted.current
    }
  });
  const drawer = /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, {
    ...paperSlotProps,
    children
  });
  if (variant === "permanent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DockedSlot, {
      ...dockedSlotProps,
      children: drawer
    });
  }
  const slidingDrawer = /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
    ...transitionSlotProps,
    children: drawer
  });
  if (variant === "persistent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DockedSlot, {
      ...dockedSlotProps,
      children: slidingDrawer
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    children: slidingDrawer
  });
});

function getFabUtilityClass(slot) {
  return generateUtilityClass('MuiFab', slot);
}
const fabClasses = generateUtilityClasses('MuiFab', ['root', 'primary', 'secondary', 'extended', 'circular', 'focusVisible', 'disabled', 'colorInherit', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'info', 'error', 'warning', 'success']);

const React$1u = await importShared('react');
const useUtilityClasses$17 = (ownerState) => {
  const {
    color,
    variant,
    classes,
    size
  } = ownerState;
  const slots = {
    root: ["root", variant, `size${capitalize(size)}`, color === "inherit" ? "colorInherit" : color]
  };
  const composedClasses = composeClasses(slots, getFabUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
const FabRoot = styled$2(ButtonBase, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, styles[capitalize(ownerState.size)], styles[ownerState.color]];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.button,
  minHeight: 36,
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: theme.transitions.duration.short
  }),
  borderRadius: "50%",
  padding: 0,
  minWidth: 0,
  width: 56,
  height: 56,
  zIndex: (theme.vars || theme).zIndex.fab,
  boxShadow: (theme.vars || theme).shadows[6],
  "&:active": {
    boxShadow: (theme.vars || theme).shadows[12]
  },
  color: theme.vars ? theme.vars.palette.text.primary : theme.palette.getContrastText?.(theme.palette.grey[300]),
  backgroundColor: (theme.vars || theme).palette.grey[300],
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.grey.A100,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: (theme.vars || theme).palette.grey[300]
    },
    textDecoration: "none"
  },
  [`&.${fabClasses.focusVisible}`]: {
    boxShadow: (theme.vars || theme).shadows[6]
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 40
    }
  }, {
    props: {
      size: "medium"
    },
    style: {
      width: 48,
      height: 48
    }
  }, {
    props: {
      variant: "extended"
    },
    style: {
      borderRadius: 48 / 2,
      padding: "0 16px",
      width: "auto",
      minHeight: "auto",
      minWidth: 48,
      height: 48
    }
  }, {
    props: {
      variant: "extended",
      size: "small"
    },
    style: {
      width: "auto",
      padding: "0 8px",
      borderRadius: 34 / 2,
      minWidth: 34,
      height: 34
    }
  }, {
    props: {
      variant: "extended",
      size: "medium"
    },
    style: {
      width: "auto",
      padding: "0 16px",
      borderRadius: 40 / 2,
      minWidth: 40,
      height: 40
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }]
})), memoTheme(({
  theme
}) => ({
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark", "contrastText"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].contrastText,
      backgroundColor: (theme.vars || theme).palette[color].main,
      "&:hover": {
        backgroundColor: (theme.vars || theme).palette[color].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (theme.vars || theme).palette[color].main
        }
      }
    }
  }))]
})), memoTheme(({
  theme
}) => ({
  [`&.${fabClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    boxShadow: (theme.vars || theme).shadows[0],
    backgroundColor: (theme.vars || theme).palette.action.disabledBackground
  }
})));
const Fab = /* @__PURE__ */ React$1u.forwardRef(function Fab2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFab"
  });
  const {
    children,
    className,
    color = "default",
    component = "button",
    disabled = false,
    disableFocusRipple = false,
    focusVisibleClassName,
    size = "large",
    variant = "circular",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableFocusRipple,
    size,
    variant
  };
  const classes = useUtilityClasses$17(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FabRoot, {
    className: clsx(classes.root, className),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ownerState,
    ref,
    ...other,
    classes,
    children
  });
});

const React$1t = await importShared('react');
const useUtilityClasses$16 = (ownerState) => {
  const {
    classes,
    disableUnderline,
    startAdornment,
    endAdornment,
    size,
    hiddenLabel,
    multiline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline", startAdornment && "adornedStart", endAdornment && "adornedEnd", size === "small" && `size${capitalize(size)}`, hiddenLabel && "hiddenLabel", multiline && "multiline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
const FilledInputRoot = styled$2(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(memoTheme(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${filledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${filledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${filledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${filledInputClasses.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${filledInputClasses.disabled}, .${filledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${filledInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        disableUnderline: false,
        color
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}`
        }
      }
    })), {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline && ownerState.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline && ownerState.hiddenLabel && ownerState.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
}));
const FilledInputInput = styled$2(InputBaseInput, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme(({
  theme
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!theme.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
      caretColor: theme.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...theme.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [theme.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hiddenLabel && ownerState.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
})));
const FilledInput = /* @__PURE__ */ React$1t.forwardRef(function FilledInput2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    disableUnderline = false,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    hiddenLabel,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text",
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableUnderline,
    fullWidth,
    inputComponent,
    multiline,
    type
  };
  const classes = useUtilityClasses$16(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(filledInputComponentsProps, slotProps ?? componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = slots.root ?? components.Root ?? FilledInputRoot;
  const InputSlot = slots.input ?? components.Input ?? FilledInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes
  });
});
FilledInput.muiName = "Input";

function getFormControlUtilityClasses(slot) {
  return generateUtilityClass('MuiFormControl', slot);
}
const formControlClasses = generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);

const React$1s = await importShared('react');
const useUtilityClasses$15 = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && `margin${capitalize(margin)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled$2("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
});
const FormControl = /* @__PURE__ */ React$1s.forwardRef(function FormControl2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size = "medium",
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  };
  const classes = useUtilityClasses$15(ownerState);
  const [adornedStart, setAdornedStart] = React$1s.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      React$1s.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React$1s.useState(() => {
    let initialFilled = false;
    if (children) {
      React$1s.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React$1s.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  React$1s.useRef(false);
  const onFilled = React$1s.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = React$1s.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = React$1s.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onFocus: () => {
        setFocused(true);
      },
      onEmpty,
      onFilled,
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, onEmpty, onFilled, required, size, variant]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children
    })
  });
});

function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass('MuiFormControlLabel', slot);
}
const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);

const React$1r = await importShared('react');
const useUtilityClasses$14 = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
    label: ["label", disabled && "disabled"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = styled$2("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses.disabled}`]: {
    cursor: "default"
  },
  [`& .${formControlLabelClasses.label}`]: {
    [`&.${formControlLabelClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement
    }) => labelPlacement === "start" || labelPlacement === "top" || labelPlacement === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
})));
const AsteriskComponent$1 = styled$2("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})(memoTheme(({
  theme
}) => ({
  [`&.${formControlLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const FormControlLabel = /* @__PURE__ */ React$1r.forwardRef(function FormControlLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    checked,
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    inputRef,
    label: labelProp,
    labelPlacement = "end",
    name,
    onChange,
    required: requiredProp,
    slots = {},
    slotProps = {},
    value,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const disabled = disabledProp ?? control.props.disabled ?? muiFormControl?.disabled;
  const required = requiredProp ?? control.props.required;
  const controlProps = {
    disabled,
    required
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = {
    ...props,
    disabled,
    labelPlacement,
    required,
    error: fcs.error
  };
  const classes = useUtilityClasses$14(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [TypographySlot, typographySlotProps] = useSlot("typography", {
    elementType: Typography,
    externalForwardedProps,
    ownerState
  });
  let label = labelProp;
  if (label != null && label.type !== Typography && !disableTypography) {
    label = /* @__PURE__ */ jsxRuntimeExports.jsx(TypographySlot, {
      component: "span",
      ...typographySlotProps,
      className: clsx(classes.label, typographySlotProps?.className),
      children: label
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControlLabelRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: [/* @__PURE__ */ React$1r.cloneElement(control, controlProps), required ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent$1, {
        ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: [" ", "*"]
      })]
    }) : label]
  });
});

function getFormGroupUtilityClass(slot) {
  return generateUtilityClass('MuiFormGroup', slot);
}
const formGroupClasses = generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);

const React$1q = await importShared('react');
const useUtilityClasses$13 = (ownerState) => {
  const {
    classes,
    row,
    error
  } = ownerState;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getFormGroupUtilityClass, classes);
};
const FormGroupRoot = styled$2("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.row && styles.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: true
    },
    style: {
      flexDirection: "row"
    }
  }]
});
const FormGroup = /* @__PURE__ */ React$1q.forwardRef(function FormGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormGroup"
  });
  const {
    className,
    row = false,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = {
    ...props,
    row,
    error: fcs.error
  };
  const classes = useUtilityClasses$13(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroupRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass('MuiFormHelperText', slot);
}
const formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);

var _span$3;
const React$1p = await importShared('react');
const useUtilityClasses$12 = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = styled$2("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size && styles[`size${capitalize(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
})));
const FormHelperText = /* @__PURE__ */ React$1p.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children,
    className,
    component = "p",
    disabled,
    error,
    filled,
    focused,
    margin,
    required,
    variant,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = {
    ...props,
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  delete ownerState.ownerState;
  const classes = useUtilityClasses$12(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperTextRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ...other,
    ownerState,
    children: children === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span$3 || (_span$3 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "​"
      }))
    ) : children
  });
});

function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass('MuiFormLabel', slot);
}
const formLabelClasses = generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);

const React$1o = await importShared('react');
const useUtilityClasses$11 = (ownerState) => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = styled$2("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color === "secondary" && styles.colorSecondary, ownerState.filled && styles.filled];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${formLabelClasses.focused}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${formLabelClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      },
      [`&.${formLabelClasses.error}`]: {
        color: (theme.vars || theme).palette.error.main
      }
    }
  }]
})));
const AsteriskComponent = styled$2("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})(memoTheme(({
  theme
}) => ({
  [`&.${formLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const FormLabel = /* @__PURE__ */ React$1o.forwardRef(function FormLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    color,
    component = "label",
    disabled,
    error,
    filled,
    focused,
    required,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  const classes = useUtilityClasses$11(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabelRoot, {
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref,
    ...other,
    children: [children, fcs.required && /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  });
});

const React$1n = await importShared('react');

const GridContext = /* @__PURE__ */ React$1n.createContext();

function getGridUtilityClass(slot) {
  return generateUtilityClass('MuiGrid', slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = generateUtilityClasses('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth',
// spacings
...SPACINGS.map(spacing => `spacing-xs-${spacing}`),
// direction values
...DIRECTIONS.map(direction => `direction-xs-${direction}`),
// wrap values
...WRAPS.map(wrap => `wrap-xs-${wrap}`),
// grid sizes for all breakpoints
...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);

const React$1m = await importShared('react');
function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    let styles = {};
    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }
    if (!size) {
      return globalStyles;
    }
    if (size === true) {
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    } else if (size === "auto") {
      styles = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    } else {
      const columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue === void 0 || columnValue === null) {
        return globalStyles;
      }
      const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
      let more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);
        if (themeSpacing !== "0px") {
          const fullWidth = `calc(${width} + ${themeSpacing})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }
      styles = {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width,
        ...more
      };
    }
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
    return globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  const directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return handleBreakpoints({
    theme
  }, directionValues, (propValue) => {
    const output = {
      flexDirection: propValue
    };
    if (propValue.startsWith("column")) {
      output[`& > .${gridClasses.item}`] = {
        maxWidth: "none"
      };
    }
    return output;
  });
}
function extractZeroValueBreakpointKeys({
  breakpoints,
  values
}) {
  let nonZeroKey = "";
  Object.keys(values).forEach((key) => {
    if (nonZeroKey !== "") {
      return;
    }
    if (values[key] !== 0) {
      nonZeroKey = key;
    }
  });
  const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
    return breakpoints[a] - breakpoints[b];
  });
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};
  if (container && rowSpacing !== 0) {
    const rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof rowSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: rowSpacingValues
      });
    }
    styles = handleBreakpoints({
      theme
    }, rowSpacingValues, (propValue, breakpoint) => {
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          marginTop: `calc(-1 * ${themeSpacing})`,
          [`& > .${gridClasses.item}`]: {
            paddingTop: themeSpacing
          }
        };
      }
      if (zeroValueBreakpointKeys?.includes(breakpoint)) {
        return {};
      }
      return {
        marginTop: 0,
        [`& > .${gridClasses.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};
  if (container && columnSpacing !== 0) {
    const columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof columnSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: columnSpacingValues
      });
    }
    styles = handleBreakpoints({
      theme
    }, columnSpacingValues, (propValue, breakpoint) => {
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        const negativeValue = `calc(-1 * ${themeSpacing})`;
        return {
          width: `calc(100% + ${themeSpacing})`,
          marginLeft: negativeValue,
          [`& > .${gridClasses.item}`]: {
            paddingLeft: themeSpacing
          }
        };
      }
      if (zeroValueBreakpointKeys?.includes(breakpoint)) {
        return {};
      }
      return {
        width: "100%",
        marginLeft: 0,
        [`& > .${gridClasses.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles;
}
function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [styles[`spacing-xs-${String(spacing)}`]];
  }
  const spacingStyles = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
    }
  });
  return spacingStyles;
}
const GridRoot = styled$2("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      container,
      direction,
      item,
      spacing,
      wrap,
      zeroMinWidth,
      breakpoints
    } = ownerState;
    let spacingStyles = [];
    if (container) {
      spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
    }
    const breakpointsStyles = [];
    breakpoints.forEach((breakpoint) => {
      const value = ownerState[breakpoint];
      if (value) {
        breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
      }
    });
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== "row" && styles[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
  }
})(
  // FIXME(romgrk): Can't use memoTheme here
  ({
    ownerState
  }) => ({
    boxSizing: "border-box",
    ...ownerState.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
    ...ownerState.item && {
      margin: 0
      // For instance, it's useful when used with a `figure` element.
    },
    ...ownerState.zeroMinWidth && {
      minWidth: 0
    },
    ...ownerState.wrap !== "wrap" && {
      flexWrap: ownerState.wrap
    }
  }),
  generateDirection,
  generateRowGap,
  generateColumnGap,
  generateGrid
);
function resolveSpacingClasses(spacing, breakpoints) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [`spacing-xs-${String(spacing)}`];
  }
  const classes = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      const className = `spacing-${breakpoint}-${String(value)}`;
      classes.push(className);
    }
  });
  return classes;
}
const useUtilityClasses$10 = (ownerState) => {
  const {
    classes,
    container,
    direction,
    item,
    spacing,
    wrap,
    zeroMinWidth,
    breakpoints
  } = ownerState;
  let spacingClasses = [];
  if (container) {
    spacingClasses = resolveSpacingClasses(spacing, breakpoints);
  }
  const breakpointsClasses = [];
  breakpoints.forEach((breakpoint) => {
    const value = ownerState[breakpoint];
    if (value) {
      breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
    }
  });
  const slots = {
    root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
  };
  return composeClasses(slots, getGridUtilityClass, classes);
};
const Grid = /* @__PURE__ */ React$1m.forwardRef(function Grid2(inProps, ref) {
  const themeProps = useDefaultProps({
    props: inProps,
    name: "MuiGrid"
  });
  const {
    breakpoints
  } = useTheme$3();
  const props = extendSxProp$1(themeProps);
  const {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = "div",
    container = false,
    direction = "row",
    item = false,
    rowSpacing: rowSpacingProp,
    spacing = 0,
    wrap = "wrap",
    zeroMinWidth = false,
    ...other
  } = props;
  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = React$1m.useContext(GridContext);
  const columns = container ? columnsProp || 12 : columnsContext;
  const breakpointsValues = {};
  const otherFiltered = {
    ...other
  };
  breakpoints.keys.forEach((breakpoint) => {
    if (other[breakpoint] != null) {
      breakpointsValues[breakpoint] = other[breakpoint];
      delete otherFiltered[breakpoint];
    }
  });
  const ownerState = {
    ...props,
    columns,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing,
    ...breakpointsValues,
    breakpoints: breakpoints.keys
  };
  const classes = useUtilityClasses$10(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GridContext.Provider, {
    value: columns,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridRoot, {
      ownerState,
      className: clsx(classes.root, className),
      as: component,
      ref,
      ...otherFiltered
    })
  });
});

const React$1l = await importShared('react');
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles$2 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ React$1l.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const timer = useTimeout();
  const autoTimeout = React$1l.useRef();
  const theme = useTheme$3();
  const nodeRef = React$1l.useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /* @__PURE__ */ React$1l.cloneElement(children, {
        style: {
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles$2[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
if (Grow) {
  Grow.muiSupportAuto = true;
}

const useMediaQuery = unstable_createUseMediaQuery({
  themeId: THEME_ID
});

const React$1k = await importShared('react');
const breakpointKeys = ["xs", "sm", "md", "lg", "xl"];
const isWidthUp = (breakpoint, width, inclusive = true) => {
  if (inclusive) {
    return breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width);
  }
  return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
};
const isWidthDown = (breakpoint, width, inclusive = false) => {
  if (inclusive) {
    return breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint);
  }
  return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};
const withWidth = (options = {}) => (Component) => {
  const {
    withTheme: withThemeOption = false,
    noSSR = false,
    initialWidth: initialWidthOption
  } = options;
  function WithWidth(props) {
    const contextTheme = useTheme$3();
    const theme = props.theme || contextTheme;
    const {
      initialWidth,
      width,
      ...other
    } = getThemeProps({
      theme,
      name: "MuiWithWidth",
      props
    });
    const [mountedState, setMountedState] = React$1k.useState(false);
    useEnhancedEffect(() => {
      setMountedState(true);
    }, []);
    const keys = theme.breakpoints.keys.slice().reverse();
    const widthComputed = keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null);
    const more = {
      width: width || (mountedState || noSSR ? widthComputed : void 0) || initialWidth || initialWidthOption,
      ...withThemeOption ? {
        theme
      } : {},
      ...other
    };
    if (more.width === void 0) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
      ...more
    });
  }
  return WithWidth;
};

function HiddenJs(props) {
  const {
    children,
    only,
    width
  } = props;
  const theme = useTheme$3();
  let visible = true;
  if (only) {
    if (Array.isArray(only)) {
      for (let i = 0; i < only.length; i += 1) {
        const breakpoint = only[i];
        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  }
  if (visible) {
    for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
      const breakpoint = theme.breakpoints.keys[i];
      const breakpointUp = props[`${breakpoint}Up`];
      const breakpointDown = props[`${breakpoint}Down`];
      if (breakpointUp && isWidthUp(breakpoint, width) || breakpointDown && isWidthDown(breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }
  if (!visible) {
    return null;
  }
  return children;
}
HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * If `true`, screens this size and down are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  lgDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  lgUp: PropTypes.bool,
  /**
   * If `true`, screens this size and down are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  mdDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  mdUp: PropTypes.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: PropTypes.oneOfType([PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]), PropTypes.arrayOf(PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]))]),
  /**
   * If `true`, screens this size and down are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  smDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  smUp: PropTypes.bool,
  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: PropTypes.string.isRequired,
  /**
   * If `true`, screens this size and down are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  xlDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  xlUp: PropTypes.bool,
  /**
   * If `true`, screens this size and down are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  xsDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  xsUp: PropTypes.bool
};
const HiddenJs$1 = withWidth()(HiddenJs);

function getHiddenCssUtilityClass(slot) {
  return generateUtilityClass('PrivateHiddenCss', slot);
}
generateUtilityClasses('PrivateHiddenCss', ['root', 'xlDown', 'xlUp', 'onlyXl', 'lgDown', 'lgUp', 'onlyLg', 'mdDown', 'mdUp', 'onlyMd', 'smDown', 'smUp', 'onlySm', 'xsDown', 'xsUp', 'onlyXs']);

await importShared('react');
const useUtilityClasses$$ = (ownerState) => {
  const {
    classes,
    breakpoints
  } = ownerState;
  const slots = {
    root: ["root", ...breakpoints.map(({
      breakpoint,
      dir
    }) => {
      return dir === "only" ? `${dir}${capitalize(breakpoint)}` : `${breakpoint}${capitalize(dir)}`;
    })]
  };
  return composeClasses(slots, getHiddenCssUtilityClass, classes);
};
const HiddenCssRoot = styled$2("div", {
  name: "PrivateHiddenCss",
  slot: "Root"
})(({
  theme,
  ownerState
}) => {
  const hidden = {
    display: "none"
  };
  return {
    ...ownerState.breakpoints.map(({
      breakpoint,
      dir
    }) => {
      if (dir === "only") {
        return {
          [theme.breakpoints.only(breakpoint)]: hidden
        };
      }
      return dir === "up" ? {
        [theme.breakpoints.up(breakpoint)]: hidden
      } : {
        [theme.breakpoints.down(breakpoint)]: hidden
      };
    }).reduce((r, o) => {
      Object.keys(o).forEach((k) => {
        r[k] = o[k];
      });
      return r;
    }, {})
  };
});
function HiddenCss(props) {
  const {
    children,
    className,
    only,
    ...other
  } = props;
  const theme = useTheme$3();
  const breakpoints = [];
  for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
    const breakpoint = theme.breakpoints.keys[i];
    const breakpointUp = other[`${breakpoint}Up`];
    const breakpointDown = other[`${breakpoint}Down`];
    if (breakpointUp) {
      breakpoints.push({
        breakpoint,
        dir: "up"
      });
    }
    if (breakpointDown) {
      breakpoints.push({
        breakpoint,
        dir: "down"
      });
    }
  }
  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach((breakpoint) => {
      breakpoints.push({
        breakpoint,
        dir: "only"
      });
    });
  }
  const ownerState = {
    ...props,
    breakpoints
  };
  const classes = useUtilityClasses$$(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HiddenCssRoot, {
    className: clsx(classes.root, className),
    ownerState,
    children
  });
}

await importShared('react');
function Hidden(props) {
  const {
    implementation = "js",
    lgDown = false,
    lgUp = false,
    mdDown = false,
    mdUp = false,
    smDown = false,
    smUp = false,
    xlDown = false,
    xlUp = false,
    xsDown = false,
    xsUp = false,
    ...other
  } = props;
  if (implementation === "js") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HiddenJs$1, {
      lgDown,
      lgUp,
      mdDown,
      mdUp,
      smDown,
      smUp,
      xlDown,
      xlUp,
      xsDown,
      xsUp,
      ...other
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HiddenCss, {
    lgDown,
    lgUp,
    mdDown,
    mdUp,
    smDown,
    smUp,
    xlDown,
    xlUp,
    xsDown,
    xsUp,
    ...other
  });
}

function getIconUtilityClass(slot) {
  return generateUtilityClass('MuiIcon', slot);
}
const iconClasses = generateUtilityClasses('MuiIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const React$1j = await importShared('react');
const useUtilityClasses$_ = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getIconUtilityClass, classes);
};
const IconRoot = styled$2("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://issues.chromium.org/issues/41375697
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  variants: [{
    props: {
      fontSize: "inherit"
    },
    style: {
      fontSize: "inherit"
    }
  }, {
    props: {
      fontSize: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(20)
    }
  }, {
    props: {
      fontSize: "medium"
    },
    style: {
      fontSize: theme.typography.pxToRem(24)
    }
  }, {
    props: {
      fontSize: "large"
    },
    style: {
      fontSize: theme.typography.pxToRem(36)
    }
  }, {
    props: {
      color: "action"
    },
    style: {
      color: (theme.vars || theme).palette.action.active
    }
  }, {
    props: {
      color: "disabled"
    },
    style: {
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: void 0
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const Icon = /* @__PURE__ */ React$1j.forwardRef(function Icon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiIcon"
  });
  const {
    baseClassName = "material-icons",
    className,
    color = "inherit",
    component: Component = "span",
    fontSize = "medium",
    ...other
  } = props;
  const ownerState = {
    ...props,
    baseClassName,
    color,
    component: Component,
    fontSize
  };
  const classes = useUtilityClasses$_(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconRoot, {
    as: Component,
    className: clsx(
      baseClassName,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      classes.root,
      className
    ),
    ownerState,
    "aria-hidden": true,
    ref,
    ...other
  });
});
Icon.muiName = "Icon";

function getImageListUtilityClass(slot) {
  return generateUtilityClass('MuiImageList', slot);
}
const imageListClasses = generateUtilityClasses('MuiImageList', ['root', 'masonry', 'quilted', 'standard', 'woven']);

const React$1i = await importShared('react');

const ImageListContext = /* @__PURE__ */ React$1i.createContext({});

const React$1h = await importShared('react');
const useUtilityClasses$Z = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant]
  };
  return composeClasses(slots, getImageListUtilityClass, classes);
};
const ImageListRoot = styled$2("ul", {
  name: "MuiImageList",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({
  display: "grid",
  overflowY: "auto",
  listStyle: "none",
  padding: 0,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  variants: [{
    props: {
      variant: "masonry"
    },
    style: {
      display: "block"
    }
  }]
});
const ImageList = /* @__PURE__ */ React$1h.forwardRef(function ImageList2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiImageList"
  });
  const {
    children,
    className,
    cols = 2,
    component = "ul",
    rowHeight = "auto",
    gap = 4,
    style: styleProp,
    variant = "standard",
    ...other
  } = props;
  const contextValue = React$1h.useMemo(() => ({
    rowHeight,
    gap,
    variant
  }), [rowHeight, gap, variant]);
  const style = variant === "masonry" ? {
    columnCount: cols,
    columnGap: gap,
    ...styleProp
  } : {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap,
    ...styleProp
  };
  const ownerState = {
    ...props,
    component,
    gap,
    rowHeight,
    variant
  };
  const classes = useUtilityClasses$Z(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ImageListRoot, {
    as: component,
    className: clsx(classes.root, classes[variant], className),
    ref,
    style,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageListContext.Provider, {
      value: contextValue,
      children
    })
  });
});

function getImageListItemUtilityClass(slot) {
  return generateUtilityClass('MuiImageListItem', slot);
}
const imageListItemClasses = generateUtilityClasses('MuiImageListItem', ['root', 'img', 'standard', 'woven', 'masonry', 'quilted']);

const React$1g = await importShared('react');
const useUtilityClasses$Y = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant],
    img: ["img"]
  };
  return composeClasses(slots, getImageListItemUtilityClass, classes);
};
const ImageListItemRoot = styled$2("li", {
  name: "MuiImageListItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${imageListItemClasses.img}`]: styles.img
    }, styles.root, styles[ownerState.variant]];
  }
})({
  display: "block",
  position: "relative",
  [`& .${imageListItemClasses.img}`]: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    display: "block"
  },
  variants: [{
    props: {
      variant: "standard"
    },
    style: {
      // For titlebar under list item
      display: "flex",
      flexDirection: "column"
    }
  }, {
    props: {
      variant: "woven"
    },
    style: {
      height: "100%",
      alignSelf: "center",
      "&:nth-of-type(even)": {
        height: "70%"
      }
    }
  }, {
    props: {
      variant: "standard"
    },
    style: {
      [`& .${imageListItemClasses.img}`]: {
        height: "auto",
        flexGrow: 1
      }
    }
  }]
});
const ImageListItem = /* @__PURE__ */ React$1g.forwardRef(function ImageListItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiImageListItem"
  });
  const {
    children,
    className,
    cols = 1,
    component = "li",
    rows = 1,
    style,
    ...other
  } = props;
  const {
    rowHeight = "auto",
    gap,
    variant
  } = React$1g.useContext(ImageListContext);
  let height = "auto";
  if (variant === "woven") {
    height = void 0;
  } else if (rowHeight !== "auto") {
    height = rowHeight * rows + gap * (rows - 1);
  }
  const ownerState = {
    ...props,
    cols,
    component,
    gap,
    rowHeight,
    rows,
    variant
  };
  const classes = useUtilityClasses$Y(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ImageListItemRoot, {
    as: component,
    className: clsx(classes.root, classes[variant], className),
    ref,
    style: {
      height,
      gridColumnEnd: variant !== "masonry" ? `span ${cols}` : void 0,
      gridRowEnd: variant !== "masonry" ? `span ${rows}` : void 0,
      marginBottom: variant === "masonry" ? gap : void 0,
      breakInside: variant === "masonry" ? "avoid" : void 0,
      ...style
    },
    ownerState,
    ...other,
    children: React$1g.Children.map(children, (child) => {
      if (!/* @__PURE__ */ React$1g.isValidElement(child)) {
        return null;
      }
      if (child.type === "img" || isMuiElement(child, ["Image"])) {
        return /* @__PURE__ */ React$1g.cloneElement(child, {
          className: clsx(classes.img, child.props.className)
        });
      }
      return child;
    })
  });
});

function getImageListItemBarUtilityClass(slot) {
  return generateUtilityClass('MuiImageListItemBar', slot);
}
const imageListItemBarClasses = generateUtilityClasses('MuiImageListItemBar', ['root', 'positionBottom', 'positionTop', 'positionBelow', 'actionPositionLeft', 'actionPositionRight', 'titleWrap', 'titleWrapBottom', 'titleWrapTop', 'titleWrapBelow', 'titleWrapActionPosLeft', 'titleWrapActionPosRight', 'title', 'subtitle', 'actionIcon', 'actionIconActionPosLeft', 'actionIconActionPosRight']);

const React$1f = await importShared('react');
const useUtilityClasses$X = (ownerState) => {
  const {
    classes,
    position,
    actionIcon,
    actionPosition
  } = ownerState;
  const slots = {
    root: ["root", `position${capitalize(position)}`, `actionPosition${capitalize(actionPosition)}`],
    titleWrap: ["titleWrap", `titleWrap${capitalize(position)}`, actionIcon && `titleWrapActionPos${capitalize(actionPosition)}`],
    title: ["title"],
    subtitle: ["subtitle"],
    actionIcon: ["actionIcon", `actionIconActionPos${capitalize(actionPosition)}`]
  };
  return composeClasses(slots, getImageListItemBarUtilityClass, classes);
};
const ImageListItemBarRoot = styled$2("div", {
  name: "MuiImageListItemBar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${capitalize(ownerState.position)}`]];
  }
})(memoTheme(({
  theme
}) => {
  return {
    position: "absolute",
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily,
    variants: [{
      props: {
        position: "bottom"
      },
      style: {
        bottom: 0
      }
    }, {
      props: {
        position: "top"
      },
      style: {
        top: 0
      }
    }, {
      props: {
        position: "below"
      },
      style: {
        position: "relative",
        background: "transparent",
        alignItems: "normal"
      }
    }]
  };
}));
const ImageListItemBarTitleWrap = styled$2("div", {
  name: "MuiImageListItemBar",
  slot: "TitleWrap",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.titleWrap, styles[`titleWrap${capitalize(ownerState.position)}`], ownerState.actionIcon && styles[`titleWrapActionPos${capitalize(ownerState.actionPosition)}`]];
  }
})(memoTheme(({
  theme
}) => {
  return {
    flexGrow: 1,
    padding: "12px 16px",
    color: (theme.vars || theme).palette.common.white,
    overflow: "hidden",
    variants: [{
      props: {
        position: "below"
      },
      style: {
        padding: "6px 0 12px",
        color: "inherit"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.actionIcon && ownerState.actionPosition === "left",
      style: {
        paddingLeft: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.actionIcon && ownerState.actionPosition === "right",
      style: {
        paddingRight: 0
      }
    }]
  };
}));
const ImageListItemBarTitle = styled$2("div", {
  name: "MuiImageListItemBar",
  slot: "Title",
  overridesResolver: (props, styles) => styles.title
})(memoTheme(({
  theme
}) => {
  return {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: "24px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  };
}));
const ImageListItemBarSubtitle = styled$2("div", {
  name: "MuiImageListItemBar",
  slot: "Subtitle",
  overridesResolver: (props, styles) => styles.subtitle
})(memoTheme(({
  theme
}) => {
  return {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  };
}));
const ImageListItemBarActionIcon = styled$2("div", {
  name: "MuiImageListItemBar",
  slot: "ActionIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.actionIcon, styles[`actionIconActionPos${capitalize(ownerState.actionPosition)}`]];
  }
})({
  variants: [{
    props: {
      actionPosition: "left"
    },
    style: {
      order: -1
    }
  }]
});
const ImageListItemBar = /* @__PURE__ */ React$1f.forwardRef(function ImageListItemBar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiImageListItemBar"
  });
  const {
    actionIcon,
    actionPosition = "right",
    className,
    subtitle,
    title,
    position = "bottom",
    ...other
  } = props;
  const ownerState = {
    ...props,
    position,
    actionPosition
  };
  const classes = useUtilityClasses$X(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ImageListItemBarRoot, {
    ownerState,
    className: clsx(classes.root, className),
    ref,
    ...other,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(ImageListItemBarTitleWrap, {
      ownerState,
      className: classes.titleWrap,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ImageListItemBarTitle, {
        className: classes.title,
        children: title
      }), subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx(ImageListItemBarSubtitle, {
        className: classes.subtitle,
        children: subtitle
      }) : null]
    }), actionIcon ? /* @__PURE__ */ jsxRuntimeExports.jsx(ImageListItemBarActionIcon, {
      ownerState,
      className: classes.actionIcon,
      children: actionIcon
    }) : null]
  });
});

const React$1e = await importShared('react');
const useUtilityClasses$W = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
const InputRoot = styled$2(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(memoTheme(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    position: "relative",
    variants: [{
      props: ({
        ownerState
      }) => ownerState.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${inputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${inputClasses.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${inputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color,
        disableUnderline: false
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    }))]
  };
}));
const InputInput = styled$2(InputBaseInput, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ React$1e.forwardRef(function Input2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline = false,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text",
    ...other
  } = props;
  const classes = useUtilityClasses$W(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(slotProps ?? componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = slots.root ?? components.Root ?? InputRoot;
  const InputSlot = slots.input ?? components.Input ?? InputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes
  });
});
Input.muiName = "Input";

function getInputAdornmentUtilityClass(slot) {
  return generateUtilityClass('MuiInputAdornment', slot);
}
const inputAdornmentClasses = generateUtilityClasses('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);

var _span$2;
const React$1d = await importShared('react');
const overridesResolver$4 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${capitalize(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};
const useUtilityClasses$V = (ownerState) => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
};
const InputAdornmentRoot = styled$2("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: overridesResolver$4
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (theme.vars || theme).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${inputAdornmentClasses.positionStart}&:not(.${inputAdornmentClasses.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: true
    },
    style: {
      pointerEvents: "none"
    }
  }]
})));
const InputAdornment = /* @__PURE__ */ React$1d.forwardRef(function InputAdornment2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInputAdornment"
  });
  const {
    children,
    className,
    component = "div",
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp,
    ...other
  } = props;
  const muiFormControl = useFormControl() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) ;
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = {
    ...props,
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  };
  const classes = useUtilityClasses$V(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
    value: null,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornmentRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children: typeof children === "string" && !disableTypography ? /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, {
        color: "textSecondary",
        children
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(React$1d.Fragment, {
        children: [position === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          _span$2 || (_span$2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "​"
          }))
        ) : null, children]
      })
    })
  });
});

function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass('MuiInputLabel', slot);
}
const inputLabelClasses = generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);

const React$1c = await importShared('react');
const useUtilityClasses$U = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "normal" && `size${capitalize(size)}`, variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...composedClasses
  };
};
const InputLabelRoot = styled$2(FormLabel, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses.asterisk}`]: styles.asterisk
    }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === "small" && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, ownerState.focused && styles.focused, styles[ownerState.variant]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableAnimation,
    style: {
      transition: theme.transitions.create(["color", "transform", "max-width"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === "filled" && ownerState.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant,
      ownerState,
      size
    }) => variant === "filled" && ownerState.shrink && size === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === "outlined" && ownerState.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
})));
const InputLabel = /* @__PURE__ */ React$1c.forwardRef(function InputLabel2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    margin,
    shrink: shrinkProp,
    variant,
    className,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  });
  const ownerState = {
    ...props,
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  };
  const classes = useUtilityClasses$U(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabelRoot, {
    "data-shrink": shrink,
    ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState,
    classes
  });
});

function getLinearProgressUtilityClass(slot) {
  return generateUtilityClass('MuiLinearProgress', slot);
}
const linearProgressClasses = generateUtilityClasses('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'bar1', 'bar2', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);

const React$1b = await importShared('react');
const TRANSITION_DURATION = 4;
const indeterminate1Keyframe = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;
const indeterminate1Animation = typeof indeterminate1Keyframe !== "string" ? css`
        animation: ${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null;
const indeterminate2Keyframe = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;
const indeterminate2Animation = typeof indeterminate2Keyframe !== "string" ? css`
        animation: ${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null;
const bufferKeyframe = keyframes`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`;
const bufferAnimation = typeof bufferKeyframe !== "string" ? css`
        animation: ${bufferKeyframe} 3s infinite linear;
      ` : null;
const useUtilityClasses$T = (ownerState) => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, variant],
    dashed: ["dashed", `dashedColor${capitalize(color)}`],
    bar1: ["bar", "bar1", `barColor${capitalize(color)}`, (variant === "indeterminate" || variant === "query") && "bar1Indeterminate", variant === "determinate" && "bar1Determinate", variant === "buffer" && "bar1Buffer"],
    bar2: ["bar", "bar2", variant !== "buffer" && `barColor${capitalize(color)}`, variant === "buffer" && `color${capitalize(color)}`, (variant === "indeterminate" || variant === "query") && "bar2Indeterminate", variant === "buffer" && "bar2Buffer"]
  };
  return composeClasses(slots, getLinearProgressUtilityClass, classes);
};
const getColorShade = (theme, color) => {
  if (theme.vars) {
    return theme.vars.palette.LinearProgress[`${color}Bg`];
  }
  return theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.5);
};
const LinearProgressRoot = styled$2("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${capitalize(ownerState.color)}`], styles[ownerState.variant]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  // Fix Safari's bug during composition of different paint.
  zIndex: 0,
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: getColorShade(theme, color)
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.color === "inherit" && ownerState.variant !== "buffer",
    style: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      backgroundColor: "transparent"
    }
  }, {
    props: {
      variant: "query"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
})));
const LinearProgressDashed = styled$2("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.dashed, styles[`dashedColor${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  marginTop: 0,
  height: "100%",
  width: "100%",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 -23px",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3,
      backgroundImage: `radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => {
    const backgroundColor = getColorShade(theme, color);
    return {
      props: {
        color
      },
      style: {
        backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`
      }
    };
  })]
})), bufferAnimation || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${bufferKeyframe} 3s infinite linear`
});
const LinearProgressBar1 = styled$2("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles.bar1, styles[`barColor${capitalize(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles.bar1Indeterminate, ownerState.variant === "determinate" && styles.bar1Determinate, ownerState.variant === "buffer" && styles.bar1Buffer];
  }
})(memoTheme(({
  theme
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      backgroundColor: "currentColor"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: (theme.vars || theme).palette[color].main
    }
  })), {
    props: {
      variant: "determinate"
    },
    style: {
      transition: `transform .${TRANSITION_DURATION}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${TRANSITION_DURATION}s linear`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: indeterminate1Animation || {
      animation: `${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
})));
const LinearProgressBar2 = styled$2("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles.bar2, styles[`barColor${capitalize(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles.bar2Indeterminate, ownerState.variant === "buffer" && styles.bar2Buffer];
  }
})(memoTheme(({
  theme
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--LinearProgressBar2-barColor": (theme.vars || theme).palette[color].main
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.variant !== "buffer" && ownerState.color !== "inherit",
    style: {
      backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant !== "buffer" && ownerState.color === "inherit",
    style: {
      backgroundColor: "currentColor"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      variant: "buffer"
    },
    style: {
      backgroundColor: getColorShade(theme, color),
      transition: `transform .${TRANSITION_DURATION}s linear`
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: indeterminate2Animation || {
      animation: `${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
})));
const LinearProgress = /* @__PURE__ */ React$1b.forwardRef(function LinearProgress2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiLinearProgress"
  });
  const {
    className,
    color = "primary",
    value,
    valueBuffer,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    variant
  };
  const classes = useUtilityClasses$T(ownerState);
  const isRtl = useRtl();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };
  if (variant === "determinate" || variant === "buffer") {
    if (value !== void 0) {
      rootProps["aria-valuenow"] = Math.round(value);
      rootProps["aria-valuemin"] = 0;
      rootProps["aria-valuemax"] = 100;
      let transform = value - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    }
  }
  if (variant === "buffer") {
    if (valueBuffer !== void 0) {
      let transform = (valueBuffer || 0) - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LinearProgressRoot, {
    className: clsx(classes.root, className),
    ownerState,
    role: "progressbar",
    ...rootProps,
    ref,
    ...other,
    children: [variant === "buffer" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgressDashed, {
      className: classes.dashed,
      ownerState
    }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgressBar1, {
      className: classes.bar1,
      ownerState,
      style: inlineStyles.bar1
    }), variant === "determinate" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(LinearProgressBar2, {
      className: classes.bar2,
      ownerState,
      style: inlineStyles.bar2
    })]
  });
});

function getLinkUtilityClass(slot) {
  return generateUtilityClass('MuiLink', slot);
}
const linkClasses = generateUtilityClasses('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);

const getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = ownerState.color;
  // check the `main` color first for a custom palette, then fallback to the color itself
  const color = getPath(theme, `palette.${transformedColor}.main`, false) || getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = getPath(theme, `palette.${transformedColor}.mainChannel`) || getPath(theme, `palette.${transformedColor}Channel`);
  if ('vars' in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }
  return alpha(color, 0.4);
};

const React$1a = await importShared('react');
const v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const useUtilityClasses$S = (ownerState) => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ["root", `underline${capitalize(underline)}`, component === "button" && "button", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};
const LinkRoot = styled$2(Typography, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${capitalize(ownerState.underline)}`], ownerState.component === "button" && styles.button];
  }
})(memoTheme(({
  theme
}) => {
  return {
    variants: [{
      props: {
        underline: "none"
      },
      style: {
        textDecoration: "none"
      }
    }, {
      props: {
        underline: "hover"
      },
      style: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }
    }, {
      props: {
        underline: "always"
      },
      style: {
        textDecoration: "underline",
        "&:hover": {
          textDecorationColor: "inherit"
        }
      }
    }, {
      props: ({
        underline,
        ownerState
      }) => underline === "always" && ownerState.color !== "inherit",
      style: {
        textDecorationColor: "var(--Link-underlineColor)"
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        underline: "always",
        color
      },
      style: {
        "--Link-underlineColor": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.4)` : alpha(theme.palette[color].main, 0.4)
      }
    })), {
      props: {
        underline: "always",
        color: "textPrimary"
      },
      style: {
        "--Link-underlineColor": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
      }
    }, {
      props: {
        underline: "always",
        color: "textSecondary"
      },
      style: {
        "--Link-underlineColor": theme.vars ? `rgba(${theme.vars.palette.text.secondaryChannel} / 0.4)` : alpha(theme.palette.text.secondary, 0.4)
      }
    }, {
      props: {
        underline: "always",
        color: "textDisabled"
      },
      style: {
        "--Link-underlineColor": (theme.vars || theme).palette.text.disabled
      }
    }, {
      props: {
        component: "button"
      },
      style: {
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        // Reset default value
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        border: 0,
        margin: 0,
        // Remove the margin in Safari
        borderRadius: 0,
        padding: 0,
        // Remove the padding in Firefox
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        // Reset
        WebkitAppearance: "none",
        // Reset
        "&::-moz-focus-inner": {
          borderStyle: "none"
          // Remove Firefox dotted outline.
        },
        [`&.${linkClasses.focusVisible}`]: {
          outline: "auto"
        }
      }
    }]
  };
}));
const Link = /* @__PURE__ */ React$1a.forwardRef(function Link2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiLink"
  });
  const theme = useTheme$3();
  const {
    className,
    color = "primary",
    component = "a",
    onBlur,
    onFocus,
    TypographyClasses,
    underline = "always",
    variant = "inherit",
    sx,
    ...other
  } = props;
  const [focusVisible, setFocusVisible] = React$1a.useState(false);
  const handleBlur = (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = {
    ...props,
    color,
    component,
    focusVisible,
    underline,
    variant
  };
  const classes = useUtilityClasses$S(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LinkRoot, {
    color,
    className: clsx(classes.root, className),
    classes: TypographyClasses,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref,
    ownerState,
    variant,
    ...other,
    sx: [...v6Colors[color] === void 0 ? [{
      color
    }] : [], ...Array.isArray(sx) ? sx : [sx]],
    style: {
      ...other.style,
      ...underline === "always" && color !== "inherit" && !v6Colors[color] && {
        "--Link-underlineColor": getTextDecoration({
          theme,
          ownerState
        })
      }
    }
  });
});

const React$19 = await importShared('react');

const ListContext = /* @__PURE__ */ React$19.createContext({});

function getListUtilityClass(slot) {
  return generateUtilityClass('MuiList', slot);
}
const listClasses = generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);

const React$18 = await importShared('react');
const useUtilityClasses$R = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled$2("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.subheader,
    style: {
      paddingTop: 0
    }
  }]
});
const List$1 = /* @__PURE__ */ React$18.forwardRef(function List2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader,
    ...other
  } = props;
  const context = React$18.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = {
    ...props,
    component,
    dense,
    disablePadding
  };
  const classes = useUtilityClasses$R(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState,
      ...other,
      children: [subheader, children]
    })
  });
});

function getListItemUtilityClass(slot) {
  return generateUtilityClass('MuiListItem', slot);
}
const listItemClasses = generateUtilityClasses('MuiListItem', ['root', 'container', 'dense', 'alignItemsFlexStart', 'divider', 'gutters', 'padding', 'secondaryAction']);

function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass('MuiListItemButton', slot);
}
const listItemButtonClasses = generateUtilityClasses('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);

const React$17 = await importShared('react');
const overridesResolver$3 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};
const useUtilityClasses$Q = (ownerState) => {
  const {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", divider && "divider", disabled && "disabled", alignItems === "flex-start" && "alignItemsFlexStart", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
const ListItemButtonRoot = styled$2(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: overridesResolver$3
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemButtonClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemButtonClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${listItemButtonClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemButtonClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }]
})));
const ListItemButton = /* @__PURE__ */ React$17.forwardRef(function ListItemButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemButton"
  });
  const {
    alignItems = "center",
    autoFocus = false,
    component = "div",
    children,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false,
    className,
    ...other
  } = props;
  const context = React$17.useContext(ListContext);
  const childContext = React$17.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React$17.useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  };
  const classes = useUtilityClasses$Q(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemButtonRoot, {
      ref: handleRef,
      href: other.href || other.to,
      component: (other.href || other.to) && component === "div" ? "button" : component,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ownerState,
      className: clsx(classes.root, className),
      ...other,
      classes,
      children
    })
  });
});

function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass('MuiListItemSecondaryAction', slot);
}
const listItemSecondaryActionClasses = generateUtilityClasses('MuiListItemSecondaryAction', ['root', 'disableGutters']);

const React$16 = await importShared('react');
const useUtilityClasses$P = (ownerState) => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
const ListItemSecondaryActionRoot = styled$2("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.disableGutters,
    style: {
      right: 0
    }
  }]
});
const ListItemSecondaryAction = /* @__PURE__ */ React$16.forwardRef(function ListItemSecondaryAction2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  });
  const {
    className,
    ...other
  } = props;
  const context = React$16.useContext(ListContext);
  const ownerState = {
    ...props,
    disableGutters: context.disableGutters
  };
  const classes = useUtilityClasses$P(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemSecondaryActionRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";

const React$15 = await importShared('react');
const overridesResolver$2 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.hasSecondaryAction && styles.secondaryAction];
};
const useUtilityClasses$O = (ownerState) => {
  const {
    alignItems,
    classes,
    dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", !disablePadding && "padding", divider && "divider", alignItems === "flex-start" && "alignItemsFlexStart", hasSecondaryAction && "secondaryAction"],
    container: ["container"]
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = styled$2("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: overridesResolver$2
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !!ownerState.secondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.secondaryAction,
    style: {
      [`& > .${listItemButtonClasses.root}`]: {
        paddingRight: 48
      }
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.button,
    style: {
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (theme.vars || theme).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hasSecondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }]
})));
const ListItemContainer = styled$2("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (props, styles) => styles.container
})({
  position: "relative"
});
const ListItem = /* @__PURE__ */ React$15.forwardRef(function ListItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItem"
  });
  const {
    alignItems = "center",
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = "li",
    ContainerProps: {
      className: ContainerClassName,
      ...ContainerProps
    } = {},
    dense = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    secondaryAction,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const context = React$15.useContext(ListContext);
  const childContext = React$15.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React$15.useRef(null);
  const children = React$15.Children.toArray(childrenProp);
  const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ["ListItemSecondaryAction"]);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  };
  const classes = useUtilityClasses$O(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = {
    className: clsx(classes.root, rootProps.className, className),
    ...other
  };
  let Component = componentProp || "li";
  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? "div" : Component;
    if (ContainerComponent === "li") {
      if (Component === "li") {
        Component = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
      value: childContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListItemContainer, {
        as: ContainerComponent,
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState,
        ...ContainerProps,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
          ...rootProps,
          ...!isHostComponent(Root) && {
            as: Component,
            ownerState: {
              ...ownerState,
              ...rootProps.ownerState
            }
          },
          ...componentProps,
          children
        }), children.pop()]
      })
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, {
      ...rootProps,
      as: Component,
      ref: handleRef,
      ...!isHostComponent(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      },
      ...componentProps,
      children: [children, secondaryAction && /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemSecondaryAction, {
        children: secondaryAction
      })]
    })
  });
});

function getListItemAvatarUtilityClass(slot) {
  return generateUtilityClass('MuiListItemAvatar', slot);
}
const listItemAvatarClasses = generateUtilityClasses('MuiListItemAvatar', ['root', 'alignItemsFlexStart']);

const React$14 = await importShared('react');
const useUtilityClasses$N = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemAvatarUtilityClass, classes);
};
const ListItemAvatarRoot = styled$2("div", {
  name: "MuiListItemAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart];
  }
})({
  minWidth: 56,
  flexShrink: 0,
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
});
const ListItemAvatar = /* @__PURE__ */ React$14.forwardRef(function ListItemAvatar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemAvatar"
  });
  const {
    className,
    ...other
  } = props;
  const context = React$14.useContext(ListContext);
  const ownerState = {
    ...props,
    alignItems: context.alignItems
  };
  const classes = useUtilityClasses$N(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemAvatarRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getListItemIconUtilityClass(slot) {
  return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);

const React$13 = await importShared('react');
const useUtilityClasses$M = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};
const ListItemIconRoot = styled$2("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart];
  }
})(memoTheme(({
  theme
}) => ({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
})));
const ListItemIcon = /* @__PURE__ */ React$13.forwardRef(function ListItemIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemIcon"
  });
  const {
    className,
    ...other
  } = props;
  const context = React$13.useContext(ListContext);
  const ownerState = {
    ...props,
    alignItems: context.alignItems
  };
  const classes = useUtilityClasses$M(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIconRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});

function getListItemTextUtilityClass(slot) {
  return generateUtilityClass('MuiListItemText', slot);
}
const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);

const React$12 = await importShared('react');
const useUtilityClasses$L = (ownerState) => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ["root", inset && "inset", dense && "dense", primary && secondary && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  };
  return composeClasses(slots, getListItemTextUtilityClass, classes);
};
const ListItemTextRoot = styled$2("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses.primary}`]: styles.primary
    }, {
      [`& .${listItemTextClasses.secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${typographyClasses.root}:where(& .${listItemTextClasses.primary})`]: {
    display: "block"
  },
  [`.${typographyClasses.root}:where(& .${listItemTextClasses.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.primary && ownerState.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.inset,
    style: {
      paddingLeft: 56
    }
  }]
});
const ListItemText = /* @__PURE__ */ React$12.forwardRef(function ListItemText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemText"
  });
  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    dense
  } = React$12.useContext(ListContext);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;
  const ownerState = {
    ...props,
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  };
  const classes = useUtilityClasses$L(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      primary: primaryTypographyProps,
      secondary: secondaryTypographyProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    className: clsx(classes.root, className),
    elementType: ListItemTextRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref
  });
  const [PrimarySlot, primarySlotProps] = useSlot("primary", {
    className: classes.primary,
    elementType: Typography,
    externalForwardedProps,
    ownerState
  });
  const [SecondarySlot, secondarySlotProps] = useSlot("secondary", {
    className: classes.secondary,
    elementType: Typography,
    externalForwardedProps,
    ownerState
  });
  if (primary != null && primary.type !== Typography && !disableTypography) {
    primary = /* @__PURE__ */ jsxRuntimeExports.jsx(PrimarySlot, {
      variant: dense ? "body2" : "body1",
      component: primarySlotProps?.variant ? void 0 : "span",
      ...primarySlotProps,
      children: primary
    });
  }
  if (secondary != null && secondary.type !== Typography && !disableTypography) {
    secondary = /* @__PURE__ */ jsxRuntimeExports.jsx(SecondarySlot, {
      variant: "body2",
      color: "textSecondary",
      ...secondarySlotProps,
      children: secondary
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [primary, secondary]
  });
});

const React$11 = await importShared('react');
function nextItem$1(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem$1(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.startsWith(textCriteria.keys.join(""));
}
function moveFocus$1(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ React$11.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu",
    ...other
  } = props;
  const listRef = React$11.useRef(null);
  const textCriteriaRef = React$11.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React$11.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, {
      direction
    }) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerWindow(containerElement))}px`;
        listRef.current.style[direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown = (event) => {
    const list = listRef.current;
    const key = event.key;
    const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
    if (isModifierKeyPressed) {
      if (onKeyDown) {
        onKeyDown(event);
      }
      return;
    }
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus$1(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem$1);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus$1(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem$1);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus$1(list, null, disableListWrap, disabledItemsFocusable, nextItem$1);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus$1(list, null, disableListWrap, disabledItemsFocusable, previousItem$1);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus$1(list, currentFocus, false, disabledItemsFocusable, nextItem$1, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  React$11.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ React$11.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = React$11.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ React$11.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, {
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1,
    ...other,
    children: items
  });
});

function getPopoverUtilityClass(slot) {
  return generateUtilityClass('MuiPopover', slot);
}
const popoverClasses = generateUtilityClasses('MuiPopover', ['root', 'paper']);

const React$10 = await importShared('react');
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n === "number" ? `${n}px` : n).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$K = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled$2(Modal, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
const PopoverPaper = styled$2(Paper, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /* @__PURE__ */ React$10.forwardRef(function Popover2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    // TODO: remove in v7
    slots = {},
    slotProps = {},
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent,
    // TODO: remove in v7
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps = {},
    // TODO: remove in v7
    disableScrollLock = false,
    ...other
  } = props;
  const paperRef = React$10.useRef();
  const ownerState = {
    ...props,
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  };
  const classes = useUtilityClasses$K(ownerState);
  const getAnchorOffset = React$10.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = React$10.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React$10.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React$10.useState(open);
  const setPositioningStyles = React$10.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.setProperty("top", positioning.top);
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  React$10.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = () => {
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React$10.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React$10.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React$10.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce$1(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      transition: TransitionProps,
      paper: PaperPropsProp,
      ...slotProps
    }
  };
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Grow,
    externalForwardedProps,
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onEntering: (element, isAppearing) => {
        handlers.onEntering?.(element, isAppearing);
        handleEntering();
      },
      onExited: (element) => {
        handlers.onExited?.(element);
        handleExited();
      }
    }),
    additionalProps: {
      appear: true,
      in: open
    }
  });
  if (transitionDurationProp === "auto" && !TransitionSlot.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  const [RootSlot, {
    slots: rootSlotsProp,
    slotProps: rootSlotPropsProp,
    ...rootProps
  }] = useSlot("root", {
    ref,
    elementType: PopoverRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    shouldForwardComponentProp: true,
    additionalProps: {
      slots: {
        backdrop: slots.backdrop
      },
      slotProps: {
        backdrop: mergeSlotProps(typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop, {
          invisible: true
        })
      },
      container,
      open
    },
    ownerState,
    className: clsx(classes.root, className)
  });
  const [PaperSlot, paperProps] = useSlot("paper", {
    ref: paperRef,
    className: classes.paper,
    elementType: PopoverPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: {
      elevation,
      style: isPositioned ? void 0 : {
        opacity: 0
      }
    },
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootProps,
    ...!isHostComponent(RootSlot) && {
      slots: rootSlotsProp,
      slotProps: rootSlotPropsProp,
      disableScrollLock
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      ...transitionSlotProps,
      timeout: transitionDuration,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, {
        ...paperProps,
        children
      })
    })
  });
});

function getMenuUtilityClass(slot) {
  return generateUtilityClass('MuiMenu', slot);
}
const menuClasses = generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);

const React$$ = await importShared('react');
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$J = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled$2(Popover, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
const MenuPaper = styled$2(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled$2(MenuList, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles) => styles.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /* @__PURE__ */ React$$.forwardRef(function Menu2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering,
      ...TransitionProps
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = {
    ...props,
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  };
  const classes = useUtilityClasses$J(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React$$.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, {
        direction: isRtl ? "rtl" : "ltr"
      });
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React$$.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ React$$.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const externalForwardedProps = {
    slots,
    slotProps: {
      list: MenuListProps,
      transition: TransitionProps,
      paper: PaperProps,
      ...slotProps
    }
  };
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    className: classes.paper,
    elementType: MenuPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    ownerState
  });
  const [ListSlot, listSlotProps] = useSlot("list", {
    className: clsx(classes.list, MenuListProps.className),
    elementType: MenuMenuList,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        handleListKeyDown(event);
        handlers.onKeyDown?.(event);
      }
    }),
    ownerState
  });
  const resolvedTransitionProps = typeof externalForwardedProps.slotProps.transition === "function" ? externalForwardedProps.slotProps.transition(ownerState) : externalForwardedProps.slotProps.transition;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRoot, {
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      root: slots.root,
      paper: PaperSlot,
      backdrop: slots.backdrop,
      ...slots.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: slots.transition
      }
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps,
      backdrop: typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop,
      transition: {
        ...resolvedTransitionProps,
        onEntering: (...args) => {
          handleEntering(...args);
          resolvedTransitionProps?.onEntering?.(...args);
        }
      }
    },
    open,
    ref,
    transitionDuration,
    ownerState,
    ...other,
    classes: PopoverClasses,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListSlot, {
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant,
      ...listSlotProps,
      children
    })
  });
});

function getMenuItemUtilityClass(slot) {
  return generateUtilityClass('MuiMenuItem', slot);
}
const menuItemClasses = generateUtilityClasses('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);

const React$_ = await importShared('react');
const overridesResolver$1 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};
const useUtilityClasses$I = (ownerState) => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
const MenuItemRoot = styled$2(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: overridesResolver$1
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${menuItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${menuItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${menuItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${menuItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${menuItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  [`& + .${dividerClasses.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.dense,
    style: {
      [theme.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...theme.typography.body2,
      [`& .${listItemIconClasses.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
})));
const MenuItem = /* @__PURE__ */ React$_.forwardRef(function MenuItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiMenuItem"
  });
  const {
    autoFocus = false,
    component = "li",
    dense = false,
    divider = false,
    disableGutters = false,
    focusVisibleClassName,
    role = "menuitem",
    tabIndex: tabIndexProp,
    className,
    ...other
  } = props;
  const context = React$_.useContext(ListContext);
  const childContext = React$_.useMemo(() => ({
    dense: dense || context.dense || false,
    disableGutters
  }), [context.dense, dense, disableGutters]);
  const menuItemRef = React$_.useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  const ownerState = {
    ...props,
    dense: childContext.dense,
    divider,
    disableGutters
  };
  const classes = useUtilityClasses$I(props);
  const handleRef = useForkRef(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemRoot, {
      ref: handleRef,
      role,
      tabIndex,
      component,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      className: clsx(classes.root, className),
      ...other,
      ownerState,
      classes
    })
  });
});

function getMobileStepperUtilityClass(slot) {
  return generateUtilityClass('MuiMobileStepper', slot);
}
const mobileStepperClasses = generateUtilityClasses('MuiMobileStepper', ['root', 'positionBottom', 'positionTop', 'positionStatic', 'dots', 'dot', 'dotActive', 'progress']);

const React$Z = await importShared('react');
const useUtilityClasses$H = (ownerState) => {
  const {
    classes,
    position
  } = ownerState;
  const slots = {
    root: ["root", `position${capitalize(position)}`],
    dots: ["dots"],
    dot: ["dot"],
    dotActive: ["dotActive"],
    progress: ["progress"]
  };
  return composeClasses(slots, getMobileStepperUtilityClass, classes);
};
const MobileStepperRoot = styled$2(Paper, {
  name: "MuiMobileStepper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${capitalize(ownerState.position)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: (theme.vars || theme).palette.background.default,
  padding: 8,
  variants: [{
    props: ({
      position
    }) => position === "top" || position === "bottom",
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      zIndex: (theme.vars || theme).zIndex.mobileStepper
    }
  }, {
    props: {
      position: "top"
    },
    style: {
      top: 0
    }
  }, {
    props: {
      position: "bottom"
    },
    style: {
      bottom: 0
    }
  }]
})));
const MobileStepperDots = styled$2("div", {
  name: "MuiMobileStepper",
  slot: "Dots",
  overridesResolver: (props, styles) => styles.dots
})({
  variants: [{
    props: {
      variant: "dots"
    },
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }]
});
const MobileStepperDot = styled$2("div", {
  name: "MuiMobileStepper",
  slot: "Dot",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "dotActive",
  overridesResolver: (props, styles) => {
    const {
      dotActive
    } = props;
    return [styles.dot, dotActive && styles.dotActive];
  }
})(memoTheme(({
  theme
}) => ({
  variants: [{
    props: {
      variant: "dots"
    },
    style: {
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: (theme.vars || theme).palette.action.disabled,
      borderRadius: "50%",
      width: 8,
      height: 8,
      margin: "0 2px"
    }
  }, {
    props: {
      variant: "dots",
      dotActive: true
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }]
})));
const MobileStepperProgress = styled$2(LinearProgress, {
  name: "MuiMobileStepper",
  slot: "Progress",
  overridesResolver: (props, styles) => styles.progress
})({
  variants: [{
    props: {
      variant: "progress"
    },
    style: {
      width: "50%"
    }
  }]
});
const MobileStepper = /* @__PURE__ */ React$Z.forwardRef(function MobileStepper2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiMobileStepper"
  });
  const {
    activeStep = 0,
    backButton,
    className,
    LinearProgressProps,
    nextButton,
    position = "bottom",
    steps,
    variant = "dots",
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    activeStep,
    position,
    variant
  };
  let value;
  if (variant === "progress") {
    if (steps === 1) {
      value = 100;
    } else {
      value = Math.ceil(activeStep / (steps - 1) * 100);
    }
  }
  const classes = useUtilityClasses$H(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      progress: LinearProgressProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: MobileStepperRoot,
    shouldForwardComponentProp: true,
    className: clsx(classes.root, className),
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      square: true,
      elevation: 0
    }
  });
  const [DotsSlot, dotsSlotProps] = useSlot("dots", {
    className: classes.dots,
    elementType: MobileStepperDots,
    externalForwardedProps,
    ownerState
  });
  const [DotSlot, dotSlotProps] = useSlot("dot", {
    elementType: MobileStepperDot,
    externalForwardedProps,
    ownerState
  });
  const [ProgressSlot, progressSlotProps] = useSlot("progress", {
    className: classes.progress,
    elementType: MobileStepperProgress,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      value,
      variant: "determinate"
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [backButton, variant === "text" && /* @__PURE__ */ jsxRuntimeExports.jsxs(React$Z.Fragment, {
      children: [activeStep + 1, " / ", steps]
    }), variant === "dots" && /* @__PURE__ */ jsxRuntimeExports.jsx(DotsSlot, {
      ...dotsSlotProps,
      children: [...new Array(steps)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(DotSlot, {
        ...dotSlotProps,
        className: clsx(classes.dot, dotSlotProps.className, index === activeStep && classes.dotActive),
        dotActive: index === activeStep
      }, index))
    }), variant === "progress" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressSlot, {
      ...progressSlotProps
    }), nextButton]
  });
});

function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass('MuiNativeSelect', slot);
}
const nativeSelectClasses = generateUtilityClasses('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);

const React$Y = await importShared('react');
const useUtilityClasses$G = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const StyledSelectSelect = styled$2("select", {
  name: "MuiNativeSelect"
})(({
  theme
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${nativeSelectClasses.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.variant !== "filled" && ownerState.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius,
      "&:focus": {
        borderRadius: (theme.vars || theme).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
}));
const NativeSelectSelect = styled$2(StyledSelectSelect, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.select, styles[ownerState.variant], ownerState.error && styles.error, {
      [`&.${nativeSelectClasses.multiple}`]: styles.multiple
    }];
  }
})({});
const StyledSelectIcon = styled$2("svg", {
  name: "MuiNativeSelect"
})(({
  theme
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
}));
const NativeSelectIcon = styled$2(StyledSelectIcon, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
  }
})({});
const NativeSelectInput = /* @__PURE__ */ React$Y.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard",
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    variant,
    error
  };
  const classes = useUtilityClasses$G(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$Y.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectSelect, {
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref,
      ...other
    }), props.multiple ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});

const React$X = await importShared('react');
const useUtilityClasses$F = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const defaultInput = /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {});
const NativeSelect = /* @__PURE__ */ React$X.forwardRef(function NativeSelect2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiNativeSelect",
    props: inProps
  });
  const {
    className,
    children,
    classes: classesProp = {},
    IconComponent = ArrowDropDownIcon,
    input = defaultInput,
    inputProps,
    variant,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  const ownerState = {
    ...props,
    classes: classesProp
  };
  const classes = useUtilityClasses$F(ownerState);
  const {
    root,
    ...otherClasses
  } = classesProp;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(React$X.Fragment, {
    children: /* @__PURE__ */ React$X.cloneElement(input, {
      // Most of the logic is implemented in `NativeSelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: NativeSelectInput,
      inputProps: {
        children,
        classes: otherClasses,
        IconComponent,
        variant: fcs.variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        ...inputProps,
        ...input ? input.props.inputProps : {}
      },
      ref,
      ...other,
      className: clsx(classes.root, input.props.className, className)
    })
  });
});
NativeSelect.muiName = "Select";

const React$W = await importShared('react');
function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React$W.useState(false);
  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React$W.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return mountedState ? children : fallback;
}

var _span$1;
await importShared('react');
const NotchedOutlineRoot$1 = styled$2("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled$2("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: rootShouldForwardProp
})(memoTheme(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.withLabel && ownerState.notched,
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function NotchedOutline(props) {
  const {
    children,
    classes,
    className,
    label,
    notched,
    ...other
  } = props;
  const withLabel = label != null && label !== "";
  const ownerState = {
    ...props,
    notched,
    withLabel
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot$1, {
    "aria-hidden": true,
    className,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span$1 || (_span$1 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      )
    })
  });
}

const React$V = await importShared('react');
const useUtilityClasses$E = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
const OutlinedInputRoot = styled$2(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(memoTheme(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.error.main
        },
        [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
}));
const NotchedOutlineRoot = styled$2(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles) => styles.notchedOutline
})(memoTheme(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
}));
const OutlinedInputInput = styled$2(InputBaseInput, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme(({
  theme
}) => ({
  padding: "16.5px 14px",
  ...!theme.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
      caretColor: theme.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...theme.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [theme.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
})));
const OutlinedInput = /* @__PURE__ */ React$V.forwardRef(function OutlinedInput2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    slotProps = {},
    type = "text",
    ...other
  } = props;
  const classes = useUtilityClasses$E(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  };
  const RootSlot = slots.root ?? components.Root ?? OutlinedInputRoot;
  const InputSlot = slots.input ?? components.Input ?? OutlinedInputInput;
  const [NotchedSlot, notchedProps] = useSlot("notchedOutline", {
    elementType: NotchedOutlineRoot,
    className: classes.notchedOutline,
    shouldForwardComponentProp: true,
    ownerState,
    externalForwardedProps: {
      slots,
      slotProps
    },
    additionalProps: {
      label: label != null && label !== "" && fcs.required ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React$V.Fragment, {
        children: [label, " ", "*"]
      }) : label
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps,
    renderSuffix: (state) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedSlot, {
      ...notchedProps,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes: {
      ...classes,
      notchedOutline: null
    }
  });
});
OutlinedInput.muiName = "Input";

function getPaginationUtilityClass(slot) {
  return generateUtilityClass('MuiPagination', slot);
}
const paginationClasses = generateUtilityClasses('MuiPagination', ['root', 'ul', 'outlined', 'text']);

function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    componentName = 'usePagination',
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;
  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  count - boundaryCount - 1);

  // Basic list of items to render
  // for example itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages,
  // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
  // Sibling pages
  ...range(siblingsStart, siblingsEnd),
  // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])];

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'page' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || !item.includes('ellipsis') && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return {
    items,
    ...other
  };
}

function getPaginationItemUtilityClass(slot) {
  return generateUtilityClass('MuiPaginationItem', slot);
}
const paginationItemClasses = generateUtilityClasses('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon', 'colorPrimary', 'colorSecondary']);

await importShared('react');
const FirstPageIconDefault = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage');

await importShared('react');
const LastPageIconDefault = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage');

await importShared('react');
const NavigateBeforeIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');

await importShared('react');
const NavigateNextIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

const React$U = await importShared('react');
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.variant === "text" && styles[`text${capitalize(ownerState.color)}`], ownerState.variant === "outlined" && styles[`outlined${capitalize(ownerState.color)}`], ownerState.shape === "rounded" && styles.rounded, ownerState.type === "page" && styles.page, (ownerState.type === "start-ellipsis" || ownerState.type === "end-ellipsis") && styles.ellipsis, (ownerState.type === "previous" || ownerState.type === "next") && styles.previousNext, (ownerState.type === "first" || ownerState.type === "last") && styles.firstLast];
};
const useUtilityClasses$D = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ["root", `size${capitalize(size)}`, variant, shape, color !== "standard" && `color${capitalize(color)}`, color !== "standard" && `${variant}${capitalize(color)}`, disabled && "disabled", selected && "selected", {
      page: "page",
      first: "firstLast",
      last: "firstLast",
      "start-ellipsis": "ellipsis",
      "end-ellipsis": "ellipsis",
      previous: "previousNext",
      next: "previousNext"
    }[type]],
    icon: ["icon"]
  };
  return composeClasses(slots, getPaginationItemUtilityClass, classes);
};
const PaginationItemEllipsis = styled$2("div", {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (theme.vars || theme).palette.text.primary,
  height: "auto",
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      minWidth: 26,
      borderRadius: 26 / 2,
      margin: "0 1px",
      padding: "0 4px"
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      minWidth: 40,
      borderRadius: 40 / 2,
      padding: "0 10px",
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
const PaginationItemPage = styled$2(ButtonBase, {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  height: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (theme.vars || theme).palette.text.primary,
  [`&.${paginationItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${paginationItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(["color", "background-color"], {
    duration: theme.transitions.duration.short
  }),
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${paginationItemClasses.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${paginationItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${paginationItemClasses.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: "0 1px",
      padding: "0 4px"
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: "0 10px",
      fontSize: theme.typography.pxToRem(15)
    }
  }, {
    props: {
      shape: "rounded"
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
      [`&.${paginationItemClasses.selected}`]: {
        [`&.${paginationItemClasses.disabled}`]: {
          borderColor: (theme.vars || theme).palette.action.disabledBackground,
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, {
    props: {
      variant: "text"
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        [`&.${paginationItemClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark", "contrastText"])).map(([color]) => ({
    props: {
      variant: "text",
      color
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].contrastText,
        backgroundColor: (theme.vars || theme).palette[color].main,
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette[color].dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: (theme.vars || theme).palette[color].main
          }
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        },
        [`&.${paginationItemClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
    props: {
      variant: "outlined",
      color
    },
    style: {
      [`&.${paginationItemClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5)}`,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity),
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${paginationItemClasses.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }
  }))]
})));
const PaginationItemPageIcon = styled$2("div", {
  name: "MuiPaginationItem",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon
})(memoTheme(({
  theme
}) => ({
  fontSize: theme.typography.pxToRem(20),
  margin: "0 -8px",
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: theme.typography.pxToRem(22)
    }
  }]
})));
const PaginationItem = /* @__PURE__ */ React$U.forwardRef(function PaginationItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPaginationItem"
  });
  const {
    className,
    color = "standard",
    component,
    components = {},
    disabled = false,
    page,
    selected = false,
    shape = "circular",
    size = "medium",
    slots = {},
    slotProps = {},
    type = "page",
    variant = "text",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  };
  const isRtl = useRtl();
  const classes = useUtilityClasses$D(ownerState);
  const externalForwardedProps = {
    slots: {
      previous: slots.previous ?? components.previous,
      next: slots.next ?? components.next,
      first: slots.first ?? components.first,
      last: slots.last ?? components.last
    },
    slotProps
  };
  const [PreviousSlot, previousSlotProps] = useSlot("previous", {
    elementType: NavigateBeforeIcon,
    externalForwardedProps,
    ownerState
  });
  const [NextSlot, nextSlotProps] = useSlot("next", {
    elementType: NavigateNextIcon,
    externalForwardedProps,
    ownerState
  });
  const [FirstSlot, firstSlotProps] = useSlot("first", {
    elementType: FirstPageIconDefault,
    externalForwardedProps,
    ownerState
  });
  const [LastSlot, lastSlotProps] = useSlot("last", {
    elementType: LastPageIconDefault,
    externalForwardedProps,
    ownerState
  });
  const rtlAwareType = isRtl ? {
    previous: "next",
    next: "previous",
    first: "last",
    last: "first"
  }[type] : type;
  const IconSlot = {
    previous: PreviousSlot,
    next: NextSlot,
    first: FirstSlot,
    last: LastSlot
  }[rtlAwareType];
  const iconSlotProps = {
    previous: previousSlotProps,
    next: nextSlotProps,
    first: firstSlotProps,
    last: lastSlotProps
  }[rtlAwareType];
  return type === "start-ellipsis" || type === "end-ellipsis" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItemEllipsis, {
    ref,
    ownerState,
    className: clsx(classes.root, className),
    children: "…"
  }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(PaginationItemPage, {
    ref,
    ownerState,
    component,
    disabled,
    className: clsx(classes.root, className),
    ...other,
    children: [type === "page" && page, IconSlot ? /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItemPageIcon, {
      ...iconSlotProps,
      className: classes.icon,
      as: IconSlot
    }) : null]
  });
});

const React$T = await importShared('react');
const useUtilityClasses$C = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant],
    ul: ["ul"]
  };
  return composeClasses(slots, getPaginationUtilityClass, classes);
};
const PaginationRoot = styled$2("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = styled$2("ul", {
  name: "MuiPagination",
  slot: "Ul",
  overridesResolver: (props, styles) => styles.ul
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
function defaultGetAriaLabel$1(type, page, selected) {
  if (type === "page") {
    return `${selected ? "" : "Go to "}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = /* @__PURE__ */ React$T.forwardRef(function Pagination2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPagination"
  });
  const {
    boundaryCount = 1,
    className,
    color = "standard",
    count = 1,
    defaultPage = 1,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel$1,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    page,
    renderItem = (item) => /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationItem, {
      ...item
    }),
    shape = "circular",
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    size = "medium",
    variant = "text",
    ...other
  } = props;
  const {
    items
  } = usePagination({
    ...props,
    componentName: "Pagination"
  });
  const ownerState = {
    ...props,
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  };
  const classes = useUtilityClasses$C(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationRoot, {
    "aria-label": "pagination navigation",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationUl, {
      className: classes.ul,
      ownerState,
      children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
        children: renderItem({
          ...item,
          color,
          "aria-label": getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        })
      }, index))
    })
  });
});

await importShared('react');
const RadioButtonUncheckedIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked');

await importShared('react');
const RadioButtonCheckedIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), 'RadioButtonChecked');

await importShared('react');
const RadioButtonIconRoot = styled$2("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: rootShouldForwardProp
})({
  position: "relative",
  display: "flex"
});
const RadioButtonIconBackground = styled$2(RadioButtonUncheckedIcon, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
});
const RadioButtonIconDot = styled$2(RadioButtonCheckedIcon, {
  name: "MuiRadioButtonIcon"
})(memoTheme(({
  theme
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: true
    },
    style: {
      transform: "scale(1)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest
      })
    }
  }]
})));
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = {
    ...props,
    checked
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioButtonIconRoot, {
    className: classes.root,
    ownerState,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIconBackground, {
      fontSize,
      className: classes.background,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIconDot, {
      fontSize,
      className: classes.dot,
      ownerState
    })]
  });
}

const React$S = await importShared('react');

const RadioGroupContext = /* @__PURE__ */ React$S.createContext(void 0);

const React$R = await importShared('react');
function useRadioGroup() {
  return React$R.useContext(RadioGroupContext);
}

function getRadioUtilityClass(slot) {
  return generateUtilityClass('MuiRadio', slot);
}
const radioClasses = generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary', 'sizeSmall']);

const React$Q = await importShared('react');
const useUtilityClasses$B = (ownerState) => {
  const {
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, size !== "medium" && `size${capitalize(size)}`]
  };
  return {
    ...classes,
    ...composeClasses(slots, getRadioUtilityClass, classes)
  };
};
const RadioRoot = styled$2(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size !== "medium" && styles[`size${capitalize(ownerState.size)}`], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${radioClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: false,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false
    },
    style: {
      [`&.${radioClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function areEqualValues$1(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
const defaultCheckedIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIcon, {
  checked: true
});
const defaultIcon$1 = /* @__PURE__ */ jsxRuntimeExports.jsx(RadioButtonIcon, {});
const Radio = /* @__PURE__ */ React$Q.forwardRef(function Radio2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiRadio"
  });
  const {
    checked: checkedProp,
    checkedIcon = defaultCheckedIcon,
    color = "primary",
    icon = defaultIcon$1,
    name: nameProp,
    onChange: onChangeProp,
    size = "medium",
    className,
    disabled: disabledProp,
    disableRipple = false,
    slots = {},
    slotProps = {},
    inputProps,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  disabled ??= false;
  const ownerState = {
    ...props,
    disabled,
    disableRipple,
    color,
    size
  };
  const classes = useUtilityClasses$B(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = areEqualValues$1(radioGroup.value, props.value);
    }
    if (typeof name === "undefined") {
      name = radioGroup.name;
    }
  }
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: RadioRoot,
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onChange: (event, ...args) => {
        handlers.onChange?.(event, ...args);
        onChange(event, ...args);
      }
    }),
    ownerState,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ React$Q.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /* @__PURE__ */ React$Q.cloneElement(checkedIcon, {
        fontSize: checkedIcon.props.fontSize ?? size
      }),
      disabled,
      name,
      checked,
      slots,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof externalInputProps === "function" ? externalInputProps(ownerState) : externalInputProps
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    classes
  });
});

function getRadioGroupUtilityClass(slot) {
  return generateUtilityClass('MuiRadioGroup', slot);
}
const radioGroupClasses = generateUtilityClasses('MuiRadioGroup', ['root', 'row', 'error']);

const React$P = await importShared('react');
const useUtilityClasses$A = (props) => {
  const {
    classes,
    row,
    error
  } = props;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getRadioGroupUtilityClass, classes);
};
const RadioGroup = /* @__PURE__ */ React$P.forwardRef(function RadioGroup2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    className,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp,
    ...other
  } = props;
  const rootRef = React$P.useRef(null);
  const classes = useUtilityClasses$A(props);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  React$P.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector("input:not(:disabled):checked");
      if (!input) {
        input = rootRef.current.querySelector("input:not(:disabled)");
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);
  const name = useId(nameProp);
  const contextValue = React$P.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, {
      role: "radiogroup",
      ref: handleRef,
      className: clsx(classes.root, className),
      ...other,
      children
    })
  });
});

await importShared('react');
const Star = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), 'Star');

await importShared('react');
const StarBorder = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), 'StarBorder');

function getRatingUtilityClass(slot) {
  return generateUtilityClass('MuiRating', slot);
}
const ratingClasses = generateUtilityClasses('MuiRating', ['root', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'readOnly', 'disabled', 'focusVisible', 'visuallyHidden', 'pristine', 'label', 'labelEmptyValueActive', 'icon', 'iconEmpty', 'iconFilled', 'iconHover', 'iconFocus', 'iconActive', 'decimal']);

const React$O = await importShared('react');
const {createElement:_createElement$1} = await importShared('react');

function getDecimalPrecision$1(num) {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }
  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision$1(precision)));
}
const useUtilityClasses$z = (ownerState) => {
  const {
    classes,
    size,
    readOnly,
    disabled,
    emptyValueFocused,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", `size${capitalize(size)}`, disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [emptyValueFocused && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return composeClasses(slots, getRatingUtilityClass, classes);
};
const RatingRoot = styled$2("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${ratingClasses.visuallyHidden}`]: styles.visuallyHidden
    }, styles.root, styles[`size${capitalize(ownerState.size)}`], ownerState.readOnly && styles.readOnly];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: theme.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${ratingClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${ratingClasses.focusVisible} .${ratingClasses.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${ratingClasses.visuallyHidden}`]: visuallyHidden,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: theme.typography.pxToRem(30)
    }
  }, {
    // TODO v6: use the .Mui-readOnly global state class
    props: ({
      ownerState
    }) => ownerState.readOnly,
    style: {
      pointerEvents: "none"
    }
  }]
})));
const RatingLabel = styled$2("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState
  }, styles) => [styles.label, ownerState.emptyValueFocused && styles.labelEmptyValueActive]
})({
  cursor: "inherit",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.emptyValueFocused,
    style: {
      top: 0,
      bottom: 0,
      position: "absolute",
      outline: "1px solid #999",
      width: "100%"
    }
  }]
});
const RatingIcon = styled$2("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.iconEmpty && styles.iconEmpty, ownerState.iconFilled && styles.iconFilled, ownerState.iconHover && styles.iconHover, ownerState.iconFocus && styles.iconFocus, ownerState.iconActive && styles.iconActive];
  }
})(memoTheme(({
  theme
}) => ({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.iconEmpty,
    style: {
      color: (theme.vars || theme).palette.action.disabled
    }
  }]
})));
const RatingDecimal = styled$2("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "iconActive",
  overridesResolver: (props, styles) => {
    const {
      iconActive
    } = props;
    return [styles.decimal, iconActive && styles.iconActive];
  }
})({
  position: "relative",
  variants: [{
    props: ({
      iconActive
    }) => iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }]
});
function IconContainer(props) {
  const {
    value,
    ...other
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    ...other
  });
}
function RatingItem(props) {
  const {
    classes,
    disabled,
    emptyIcon,
    focus,
    getLabelText,
    highlightSelectedOnly,
    hover,
    icon,
    IconContainerComponent,
    isActive,
    itemValue,
    labelProps,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    readOnly,
    ownerState,
    ratingValue,
    ratingValueRounded,
    slots = {},
    slotProps = {}
  } = props;
  const isFilled = highlightSelectedOnly ? itemValue === ratingValue : itemValue <= ratingValue;
  const isHovered = itemValue <= hover;
  const isFocused = itemValue <= focus;
  const isChecked = itemValue === ratingValueRounded;
  const id = `${name}-${useId()}`;
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [IconSlot, iconSlotProps] = useSlot("icon", {
    elementType: RatingIcon,
    className: clsx(classes.icon, isFilled ? classes.iconFilled : classes.iconEmpty, isHovered && classes.iconHover, isFocused && classes.iconFocus, isActive && classes.iconActive),
    externalForwardedProps,
    ownerState: {
      ...ownerState,
      iconEmpty: !isFilled,
      iconFilled: isFilled,
      iconHover: isHovered,
      iconFocus: isFocused,
      iconActive: isActive
    },
    additionalProps: {
      value: itemValue
    },
    internalForwardedProps: {
      // TODO: remove this in v7 because `IconContainerComponent` is deprecated
      // only forward if `slots.icon` is NOT provided
      as: IconContainerComponent
    }
  });
  const [LabelSlot, labelSlotProps] = useSlot("label", {
    elementType: RatingLabel,
    externalForwardedProps,
    ownerState: {
      ...ownerState,
      emptyValueFocused: void 0
    },
    additionalProps: {
      style: labelProps?.style,
      htmlFor: id
    }
  });
  const container = /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, {
    ...iconSlotProps,
    children: emptyIcon && !isFilled ? emptyIcon : icon
  });
  if (readOnly) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      ...labelProps,
      children: container
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$O.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(LabelSlot, {
      ...labelSlotProps,
      children: [container, /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: classes.visuallyHidden,
        children: getLabelText(itemValue)
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      className: classes.visuallyHidden,
      onFocus,
      onBlur,
      onChange,
      onClick,
      disabled,
      value: itemValue,
      id,
      type: "radio",
      name,
      checked: isChecked
    })]
  });
}
const defaultIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(Star, {
  fontSize: "inherit"
});
const defaultEmptyIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(StarBorder, {
  fontSize: "inherit"
});
function defaultLabelText(value) {
  return `${value || "0"} Star${value !== 1 ? "s" : ""}`;
}
const Rating = /* @__PURE__ */ React$O.forwardRef(function Rating2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiRating",
    props: inProps
  });
  const {
    component = "span",
    className,
    defaultValue = null,
    disabled = false,
    emptyIcon = defaultEmptyIcon,
    emptyLabelText = "Empty",
    getLabelText = defaultLabelText,
    highlightSelectedOnly = false,
    icon = defaultIcon,
    IconContainerComponent = IconContainer,
    max = 5,
    name: nameProp,
    onChange,
    onChangeActive,
    onMouseLeave,
    onMouseMove,
    precision = 1,
    readOnly = false,
    size = "medium",
    value: valueProp,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const name = useId(nameProp);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Rating"
  });
  const valueRounded = roundValueToPrecision(valueDerived, precision);
  const isRtl = useRtl();
  const [{
    hover,
    focus
  }, setState] = React$O.useState({
    hover: -1,
    focus: -1
  });
  let value = valueRounded;
  if (hover !== -1) {
    value = hover;
  }
  if (focus !== -1) {
    value = focus;
  }
  const [focusVisible, setFocusVisible] = React$O.useState(false);
  const rootRef = React$O.useRef();
  const handleRef = useForkRef(rootRef, ref);
  const handleMouseMove = (event) => {
    if (onMouseMove) {
      onMouseMove(event);
    }
    const rootNode = rootRef.current;
    const {
      right,
      left,
      width: containerWidth
    } = rootNode.getBoundingClientRect();
    let percent;
    if (isRtl) {
      percent = (right - event.clientX) / containerWidth;
    } else {
      percent = (event.clientX - left) / containerWidth;
    }
    let newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = clamp(newHover, precision, max);
    setState((prev) => prev.hover === newHover && prev.focus === newHover ? prev : {
      hover: newHover,
      focus: newHover
    });
    setFocusVisible(false);
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleMouseLeave = (event) => {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    const newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });
    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };
  const handleChange = (event) => {
    let newValue = event.target.value === "" ? null : parseFloat(event.target.value);
    if (hover !== -1) {
      newValue = hover;
    }
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };
  const handleClear = (event) => {
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }
    setState({
      hover: -1,
      focus: -1
    });
    setValueState(null);
    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };
  const handleFocus = (event) => {
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
    }
    const newFocus = parseFloat(event.target.value);
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const handleBlur = (event) => {
    if (hover !== -1) {
      return;
    }
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    const newFocus = -1;
    setState((prev) => ({
      hover: prev.hover,
      focus: newFocus
    }));
  };
  const [emptyValueFocused, setEmptyValueFocused] = React$O.useState(false);
  const ownerState = {
    ...props,
    component,
    defaultValue,
    disabled,
    emptyIcon,
    emptyLabelText,
    emptyValueFocused,
    focusVisible,
    getLabelText,
    icon,
    IconContainerComponent,
    max,
    precision,
    readOnly,
    size
  };
  const classes = useUtilityClasses$z(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref: handleRef,
    className: clsx(classes.root, className),
    elementType: RatingRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onMouseMove: (event) => {
        handleMouseMove(event);
        handlers.onMouseMove?.(event);
      },
      onMouseLeave: (event) => {
        handleMouseLeave(event);
        handlers.onMouseLeave?.(event);
      }
    }),
    ownerState,
    additionalProps: {
      role: readOnly ? "img" : null,
      "aria-label": readOnly ? getLabelText(value) : null
    }
  });
  const [LabelSlot, labelSlotProps] = useSlot("label", {
    className: clsx(classes.label, classes.labelEmptyValue),
    elementType: RatingLabel,
    externalForwardedProps,
    ownerState
  });
  const [DecimalSlot, decimalSlotProps] = useSlot("decimal", {
    className: classes.decimal,
    elementType: RatingDecimal,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [Array.from(new Array(max)).map((_, index) => {
      const itemValue = index + 1;
      const ratingItemProps = {
        classes,
        disabled,
        emptyIcon,
        focus,
        getLabelText,
        highlightSelectedOnly,
        hover,
        icon,
        IconContainerComponent,
        name,
        onBlur: handleBlur,
        onChange: handleChange,
        onClick: handleClear,
        onFocus: handleFocus,
        ratingValue: value,
        ratingValueRounded: valueRounded,
        readOnly,
        ownerState,
        slots,
        slotProps
      };
      const isActive = itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1);
      if (precision < 1) {
        const items = Array.from(new Array(1 / precision));
        return /* @__PURE__ */ _createElement$1(DecimalSlot, {
          ...decimalSlotProps,
          key: itemValue,
          className: clsx(decimalSlotProps.className, isActive && classes.iconActive),
          iconActive: isActive
        }, items.map(($, indexDecimal) => {
          const itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(RatingItem, {
            ...ratingItemProps,
            // The icon is already displayed as active
            isActive: false,
            itemValue: itemDecimalValue,
            labelProps: {
              style: items.length - 1 === indexDecimal ? {} : {
                width: itemDecimalValue === value ? `${(indexDecimal + 1) * precision * 100}%` : "0%",
                overflow: "hidden",
                position: "absolute"
              }
            }
          }, itemDecimalValue);
        }));
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(RatingItem, {
        ...ratingItemProps,
        isActive,
        itemValue
      }, itemValue);
    }), !readOnly && !disabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(LabelSlot, {
      ...labelSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("input", {
        className: classes.visuallyHidden,
        value: "",
        id: `${name}-empty`,
        type: "radio",
        name,
        checked: valueRounded == null,
        onFocus: () => setEmptyValueFocused(true),
        onBlur: () => setEmptyValueFocused(false),
        onChange: handleChange
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: classes.visuallyHidden,
        children: emptyLabelText
      })]
    })]
  });
});

function getScopedCssBaselineUtilityClass(slot) {
  return generateUtilityClass('MuiScopedCssBaseline', slot);
}
const scopedCssBaselineClasses = generateUtilityClasses('MuiScopedCssBaseline', ['root']);

const React$N = await importShared('react');
const useUtilityClasses$y = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getScopedCssBaselineUtilityClass, classes);
};
const ScopedCssBaselineRoot = styled$2("div", {
  name: "MuiScopedCssBaseline",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => {
  const colorSchemeStyles = {};
  if (theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      const selector = theme.getColorSchemeSelector(key);
      if (selector.startsWith("@")) {
        colorSchemeStyles[selector] = {
          colorScheme: scheme.palette?.mode
        };
      } else {
        colorSchemeStyles[`&${selector.replace(/\s*&/, "")}`] = {
          colorScheme: scheme.palette?.mode
        };
      }
    });
  }
  return {
    ...html(theme, false),
    ...body(theme),
    "& *, & *::before, & *::after": {
      boxSizing: "inherit"
    },
    "& strong, & b": {
      fontWeight: theme.typography.fontWeightBold
    },
    variants: [{
      props: {
        enableColorScheme: true
      },
      style: theme.vars ? colorSchemeStyles : {
        colorScheme: theme.palette.mode
      }
    }]
  };
}));
const ScopedCssBaseline = /* @__PURE__ */ React$N.forwardRef(function ScopedCssBaseline2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiScopedCssBaseline"
  });
  const {
    className,
    component = "div",
    enableColorScheme,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$y(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ScopedCssBaselineRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});

function getSelectUtilityClasses(slot) {
  return generateUtilityClass('MuiSelect', slot);
}
const selectClasses = generateUtilityClasses('MuiSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);

var _span;
const React$M = await importShared('react');
const SelectSelect = styled$2(StyledSelectSelect, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses.select}`]: styles.select
      },
      {
        [`&.${selectClasses.select}`]: styles[ownerState.variant]
      },
      {
        [`&.${selectClasses.error}`]: styles.error
      },
      {
        [`&.${selectClasses.multiple}`]: styles.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${selectClasses.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled$2(StyledSelectIcon, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
  }
})({});
const SelectNativeInput = styled$2("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles) => styles.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
const useUtilityClasses$x = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ React$M.forwardRef(function SelectInput2(props, ref) {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    required,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    // catching `type` from Input which makes no sense for SelectInput
    type,
    value: valueProp,
    variant = "standard",
    ...other
  } = props;
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = React$M.useRef(null);
  const displayRef = React$M.useRef(null);
  const [displayNode, setDisplayNode] = React$M.useState(null);
  const {
    current: isOpenControlled
  } = React$M.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = React$M.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = React$M.useCallback((node) => {
    displayRef.current = node;
    if (node) {
      setDisplayNode(node);
    }
  }, []);
  const anchorElement = displayNode?.parentNode;
  React$M.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  React$M.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  React$M.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  React$M.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = React$M.Children.toArray(children);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.includes(event.key)) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ React$M.isValidElement(child)) {
      return null;
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some((v) => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    return /* @__PURE__ */ React$M.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = {
    ...props,
    variant,
    value,
    open,
    error
  };
  const classes = useUtilityClasses$x(ownerState);
  const paperProps = {
    ...MenuProps.PaperProps,
    ...MenuProps.slotProps?.paper
  };
  const listboxId = useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$M.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SelectSelect, {
      as: "div",
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": open ? listboxId : void 0,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      "aria-required": required ? "true" : void 0,
      "aria-invalid": error ? "true" : void 0,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus,
      ...SelectDisplayProps,
      ownerState,
      className: clsx(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      ) : display
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectNativeInput, {
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      required,
      ...other,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...MenuProps,
      slotProps: {
        ...MenuProps.slotProps,
        list: {
          "aria-labelledby": labelId,
          role: "listbox",
          "aria-multiselectable": multiple ? "true" : void 0,
          disableListWrap: true,
          id: listboxId,
          ...MenuProps.MenuListProps
        },
        paper: {
          ...paperProps,
          style: {
            minWidth: menuMinWidth,
            ...paperProps != null ? paperProps.style : null
          }
        }
      },
      children: items
    })]
  });
});

const React$L = await importShared('react');
const useUtilityClasses$w = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getSelectUtilityClasses, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
const styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
const StyledInput = styled$2(Input, styledRootConfig)("");
const StyledOutlinedInput = styled$2(OutlinedInput, styledRootConfig)("");
const StyledFilledInput = styled$2(FilledInput, styledRootConfig)("");
const Select = /* @__PURE__ */ React$L.forwardRef(function Select2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined",
    ...other
  } = props;
  const inputComponent = native ? NativeSelectInput : SelectInput;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = {
    ...props,
    variant,
    classes: classesProp
  };
  const classes = useUtilityClasses$w(ownerState);
  const {
    root,
    ...restOfClasses
  } = classes;
  const InputComponent = input || {
    standard: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef(ref, getReactElementRef(InputComponent));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(React$L.Fragment, {
    children: /* @__PURE__ */ React$L.cloneElement(InputComponent, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: {
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple,
        ...native ? {
          id
        } : {
          autoWidth,
          defaultOpen,
          displayEmpty,
          labelId,
          MenuProps,
          onClose,
          onOpen,
          open,
          renderValue,
          SelectDisplayProps: {
            id,
            ...SelectDisplayProps
          }
        },
        ...inputProps,
        classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses,
        ...input ? input.props.inputProps : {}
      },
      ...(multiple && native || displayEmpty) && variant === "outlined" ? {
        notched: true
      } : {},
      ref: inputComponentRef,
      className: clsx(InputComponent.props.className, className, classes.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!input && {
        variant
      },
      ...other
    })
  });
});
Select.muiName = "Select";

function getSkeletonUtilityClass(slot) {
  return generateUtilityClass('MuiSkeleton', slot);
}
const skeletonClasses = generateUtilityClasses('MuiSkeleton', ['root', 'text', 'rectangular', 'rounded', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);

const React$K = await importShared('react');
const useUtilityClasses$v = (ownerState) => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width && "fitContent", hasChildren && !height && "heightAuto"]
  };
  return composeClasses(slots, getSkeletonUtilityClass, classes);
};
const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;
const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;
const pulseAnimation = typeof pulseKeyframe !== "string" ? css`
        animation: ${pulseKeyframe} 2s ease-in-out 0.5s infinite;
      ` : null;
const waveAnimation = typeof waveKeyframe !== "string" ? css`
        &::after {
          animation: ${waveKeyframe} 2s linear 0.5s infinite;
        }
      ` : null;
const SkeletonRoot = styled$2("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.animation !== false && styles[ownerState.animation], ownerState.hasChildren && styles.withChildren, ownerState.hasChildren && !ownerState.width && styles.fitContent, ownerState.hasChildren && !ownerState.height && styles.heightAuto];
  }
})(memoTheme(({
  theme
}) => {
  const radiusUnit = getUnit(theme.shape.borderRadius) || "px";
  const radiusValue = toUnitless(theme.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : alpha(theme.palette.text.primary, theme.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em",
    variants: [{
      props: {
        variant: "text"
      },
      style: {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }
    }, {
      props: {
        variant: "circular"
      },
      style: {
        borderRadius: "50%"
      }
    }, {
      props: {
        variant: "rounded"
      },
      style: {
        borderRadius: (theme.vars || theme).shape.borderRadius
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hasChildren && !ownerState.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hasChildren && !ownerState.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: pulseAnimation || {
        animation: `${pulseKeyframe} 2s ease-in-out 0.5s infinite`
      }
    }, {
      props: {
        animation: "wave"
      },
      style: {
        position: "relative",
        overflow: "hidden",
        /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        "&::after": {
          background: `linear-gradient(
                90deg,
                transparent,
                ${(theme.vars || theme).palette.action.hover},
                transparent
              )`,
          content: '""',
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      }
    }, {
      props: {
        animation: "wave"
      },
      style: waveAnimation || {
        "&::after": {
          animation: `${waveKeyframe} 2s linear 0.5s infinite`
        }
      }
    }]
  };
}));
const Skeleton = /* @__PURE__ */ React$K.forwardRef(function Skeleton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSkeleton"
  });
  const {
    animation = "pulse",
    className,
    component = "span",
    height,
    style,
    variant = "text",
    width,
    ...other
  } = props;
  const ownerState = {
    ...props,
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  };
  const classes = useUtilityClasses$v(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonRoot, {
    as: component,
    ref,
    className: clsx(classes.root, className),
    ownerState,
    ...other,
    style: {
      width,
      height,
      ...style
    }
  });
});

function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

const React$J = await importShared('react');
const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function getNewValue(currentValue, step, direction, min, max) {
  return direction === 1 ? Math.min(currentValue + step, max) : Math.max(currentValue - step, min);
}
function asc(a, b) {
  return a - b;
}
function findClosest(values, currentValue) {
  const {
    index: closestIndex
  } = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null) ?? {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  // The event is TouchEvent
  if (touchId.current !== undefined && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }

  // The event is MouseEvent
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  const doc = ownerDocument(sliderRef.current);
  if (!sliderRef.current?.contains(doc.activeElement) || Number(doc?.activeElement?.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current?.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === 'number' && typeof oldValue === 'number') {
    return newValue === oldValue;
  }
  if (typeof newValue === 'object' && typeof oldValue === 'object') {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
const axisProps = {
  horizontal: {
    offset: percent => ({
      left: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  'horizontal-reverse': {
    offset: percent => ({
      right: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: percent => ({
      bottom: `${percent}%`
    }),
    leap: percent => ({
      height: `${percent}%`
    })
  }
};
const Identity$1 = x => x;

// TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.
// Utilizing the CSS.supports method to check if touch-action is supported.
// Since CSS.supports is supported on all but Edge@12 and IE and touch-action
// is supported on both Edge@12 and IE if CSS.supports is not available that means that
// touch-action will be supported
let cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
/**
 *
 * Demos:
 *
 * - [Slider](https://mui.com/base-ui/react-slider/#hook)
 *
 * API:
 *
 * - [useSlider API](https://mui.com/base-ui/react-slider/hooks-api/#use-slider)
 */
function useSlider(parameters) {
  const {
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    rootRef: ref,
    scale = Identity$1,
    step = 1,
    shiftStep = 10,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React$J.useRef(undefined);
  // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.
  const [active, setActive] = React$J.useState(-1);
  const [open, setOpen] = React$J.useState(-1);
  const [dragging, setDragging] = React$J.useState(false);
  const moveCount = React$J.useRef(0);
  // lastChangedValue is updated whenever onChange is triggered.
  const lastChangedValue = React$J.useRef(null);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? min,
    name: 'Slider'
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    // Redefine target to allow name and value to be read.
    // This allows seamless integration with the most popular form libraries.
    // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
    // Clone the event to not override `target` of the original event.
    const nativeEvent = event.nativeEvent || event;
    // @ts-ignore The nativeEvent is function, not object
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: {
        value,
        name
      }
    });
    lastChangedValue.current = value;
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(value => value == null ? min : clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map(mark => mark.value);
  const [focusedThumbIndex, setFocusedThumbIndex] = React$J.useState(-1);
  const sliderRef = React$J.useRef(null);
  const handleRef = useForkRef(ref, sliderRef);
  const createHandleHiddenInputFocus = otherHandlers => event => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    if (isFocusVisible(event.target)) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers?.onFocus?.(event);
  };
  const createHandleHiddenInputBlur = otherHandlers => event => {
    if (!isFocusVisible(event.target)) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers?.onBlur?.(event);
  };
  const changeValue = (event, valueInput) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = valueInput;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue >= maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue <= marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp(newValue, min, max);
    if (range) {
      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;

      // Potentially swap the index if needed.
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, lastChangedValue.current ?? newValue);
    }
  };
  const createHandleHiddenInputKeyDown = otherHandlers => event => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const index = Number(event.currentTarget.getAttribute('data-index'));
      const value = values[index];
      let newValue = null;
      // Keys actions that change the value by more than the most granular `step`
      // value are only applied if the step not `null`.
      // When step is `null`, the `marks` prop is used instead to define valid values.
      if (step != null) {
        const stepSize = event.shiftKey ? shiftStep : step;
        switch (event.key) {
          case 'ArrowUp':
            newValue = getNewValue(value, stepSize, 1, min, max);
            break;
          case 'ArrowRight':
            newValue = getNewValue(value, stepSize, isRtl ? -1 : 1, min, max);
            break;
          case 'ArrowDown':
            newValue = getNewValue(value, stepSize, -1, min, max);
            break;
          case 'ArrowLeft':
            newValue = getNewValue(value, stepSize, isRtl ? 1 : -1, min, max);
            break;
          case 'PageUp':
            newValue = getNewValue(value, shiftStep, 1, min, max);
            break;
          case 'PageDown':
            newValue = getNewValue(value, shiftStep, -1, min, max);
            break;
          case 'Home':
            newValue = min;
            break;
          case 'End':
            newValue = max;
            break;
        }
      } else if (marks) {
        const maxMarksValue = marksValues[marksValues.length - 1];
        const currentMarkIndex = marksValues.indexOf(value);
        const decrementKeys = [isRtl ? 'ArrowRight' : 'ArrowLeft', 'ArrowDown', 'PageDown', 'Home'];
        const incrementKeys = [isRtl ? 'ArrowLeft' : 'ArrowRight', 'ArrowUp', 'PageUp', 'End'];
        if (decrementKeys.includes(event.key)) {
          if (currentMarkIndex === 0) {
            newValue = marksValues[0];
          } else {
            newValue = marksValues[currentMarkIndex - 1];
          }
        } else if (incrementKeys.includes(event.key)) {
          if (currentMarkIndex === marksValues.length - 1) {
            newValue = maxMarksValue;
          } else {
            newValue = marksValues[currentMarkIndex + 1];
          }
        }
      }
      if (newValue != null) {
        changeValue(event, newValue);
      }
    }
    otherHandlers?.onKeyDown?.(event);
  };
  useEnhancedEffect(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/p/sandbox/mui-pr-22247-forked-h151h?file=/src/App.js
      // @ts-ignore
      document.activeElement?.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = otherHandlers => event => {
    otherHandlers.onChange?.(event);
    // this handles value change by Pointer or Touch events
    // @ts-ignore
    changeValue(event, event.target.valueAsNumber);
  };
  const previousIndex = React$J.useRef(undefined);
  let axis = orientation;
  if (isRtl && orientation === 'horizontal') {
    axis += '-reverse';
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.startsWith('vertical')) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.includes('-reverse')) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });

      // Potentially swap the index if needed.
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;

    // Cancel move in case some other element consumed a mouseup event and it was not fired.
    // @ts-ignore buttons doesn't not exists on touch event
    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, lastChangedValue.current ?? newValue);
    }
    touchId.current = undefined;

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    stopListening();
  });
  const handleTouchStart = useEventCallback(nativeEvent => {
    if (disabled) {
      return;
    }
    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove, {
      passive: true
    });
    doc.addEventListener('touchend', handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = React$J.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React$J.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React$J.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = otherHandlers => event => {
    otherHandlers.onMouseDown?.(event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }

    // Only handle left clicks
    if (event.button !== 0) {
      return;
    }

    // Avoid text selection
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove, {
      passive: true
    });
    doc.addEventListener('mouseup', handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const getRootProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers(externalProps);
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(externalHandlers || {})
    };
    const mergedEventHandlers = {
      ...externalHandlers,
      ...ownEventHandlers
    };
    return {
      ...externalProps,
      ref: handleRef,
      ...mergedEventHandlers
    };
  };
  const createHandleMouseOver = otherHandlers => event => {
    otherHandlers.onMouseOver?.(event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  };
  const createHandleMouseLeave = otherHandlers => event => {
    otherHandlers.onMouseLeave?.(event);
    setOpen(-1);
  };
  const getThumbProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers(externalProps);
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(externalHandlers || {}),
      onMouseLeave: createHandleMouseLeave(externalHandlers || {})
    };
    return {
      ...externalProps,
      ...externalHandlers,
      ...ownEventHandlers
    };
  };
  const getThumbStyle = index => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index ? 'none' : undefined
    };
  };
  let cssWritingMode;
  if (orientation === 'vertical') {
    cssWritingMode = isRtl ? 'vertical-rl' : 'vertical-lr';
  }
  const getHiddenInputProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers(externalProps);
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(externalHandlers || {}),
      onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
      onBlur: createHandleHiddenInputBlur(externalHandlers || {}),
      onKeyDown: createHandleHiddenInputKeyDown(externalHandlers || {})
    };
    const mergedEventHandlers = {
      ...externalHandlers,
      ...ownEventHandlers
    };
    return {
      tabIndex,
      'aria-labelledby': ariaLabelledby,
      'aria-orientation': orientation,
      'aria-valuemax': scale(max),
      'aria-valuemin': scale(min),
      name,
      type: 'range',
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? 'any' : parameters.step ?? undefined,
      disabled,
      ...externalProps,
      ...mergedEventHandlers,
      style: {
        ...visuallyHidden,
        direction: isRtl ? 'rtl' : 'ltr',
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: '100%',
        height: '100%',
        writingMode: cssWritingMode
      }
    };
  };
  return {
    active,
    axis: axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks: marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
    getThumbStyle
  };
}

const shouldSpreadAdditionalProps = Slot => {
  return !Slot || !isHostComponent(Slot);
};

function getSliderUtilityClass(slot) {
  return generateUtilityClass('MuiSlider', slot);
}
const sliderClasses = generateUtilityClasses('MuiSlider', ['root', 'active', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'disabled', 'dragging', 'focusVisible', 'mark', 'markActive', 'marked', 'markLabel', 'markLabelActive', 'rail', 'sizeSmall', 'thumb', 'thumbColorPrimary', 'thumbColorSecondary', 'thumbColorError', 'thumbColorSuccess', 'thumbColorInfo', 'thumbColorWarning', 'track', 'trackInverted', 'trackFalse', 'thumbSizeSmall', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel', 'vertical']);

const React$I = await importShared('react');
const useValueLabelClasses = (props) => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: clsx(open && sliderClasses.valueLabelOpen),
    circle: sliderClasses.valueLabelCircle,
    label: sliderClasses.valueLabelLabel
  };
  return utilityClasses;
};
function SliderValueLabel$1(props) {
  const {
    children,
    className,
    value
  } = props;
  const classes = useValueLabelClasses(props);
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ React$I.cloneElement(children, {
    className: clsx(children.props.className)
  }, /* @__PURE__ */ jsxRuntimeExports.jsxs(React$I.Fragment, {
    children: [children.props.children, /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: clsx(classes.offset, className),
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: classes.circle,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}

const React$H = await importShared('react');
function Identity(x) {
  return x;
}
const SliderRoot = styled$2("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${capitalize(ownerState.color)}`], ownerState.size !== "medium" && styles[`size${capitalize(ownerState.size)}`], ownerState.marked && styles.marked, ownerState.orientation === "vertical" && styles.vertical, ownerState.track === "inverted" && styles.trackInverted, ownerState.track === false && styles.trackFalse];
  }
})(memoTheme(({
  theme
}) => ({
  borderRadius: 12,
  boxSizing: "content-box",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  touchAction: "none",
  WebkitTapHighlightColor: "transparent",
  "@media print": {
    colorAdjust: "exact"
  },
  [`&.${sliderClasses.disabled}`]: {
    pointerEvents: "none",
    cursor: "default",
    color: (theme.vars || theme).palette.grey[400]
  },
  [`&.${sliderClasses.dragging}`]: {
    [`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]: {
      transition: "none"
    }
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), {
    props: {
      orientation: "horizontal"
    },
    style: {
      height: 4,
      width: "100%",
      padding: "13px 0",
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "20px 0"
      }
    }
  }, {
    props: {
      orientation: "horizontal",
      size: "small"
    },
    style: {
      height: 2
    }
  }, {
    props: {
      orientation: "horizontal",
      marked: true
    },
    style: {
      marginBottom: 20
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: 4,
      padding: "0 13px",
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "0 20px"
      }
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      width: 2
    }
  }, {
    props: {
      orientation: "vertical",
      marked: true
    },
    style: {
      marginRight: 44
    }
  }]
})));
const SliderRail = styled$2("span", {
  name: "MuiSlider",
  slot: "Rail",
  overridesResolver: (props, styles) => styles.rail
})({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "100%",
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, {
    props: {
      track: "inverted"
    },
    style: {
      opacity: 1
    }
  }]
});
const SliderTrack = styled$2("span", {
  name: "MuiSlider",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(memoTheme(({
  theme
}) => {
  return {
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(["left", "width", "bottom", "height"], {
      duration: theme.transitions.duration.shortest
    }),
    variants: [{
      props: {
        size: "small"
      },
      style: {
        border: "none"
      }
    }, {
      props: {
        orientation: "horizontal"
      },
      style: {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)"
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)"
      }
    }, {
      props: {
        track: false
      },
      style: {
        display: "none"
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color,
        track: "inverted"
      },
      style: {
        ...theme.vars ? {
          backgroundColor: theme.vars.palette.Slider[`${color}Track`],
          borderColor: theme.vars.palette.Slider[`${color}Track`]
        } : {
          backgroundColor: lighten(theme.palette[color].main, 0.62),
          borderColor: lighten(theme.palette[color].main, 0.62),
          ...theme.applyStyles("dark", {
            backgroundColor: darken(theme.palette[color].main, 0.5)
          }),
          ...theme.applyStyles("dark", {
            borderColor: darken(theme.palette[color].main, 0.5)
          })
        }
      }
    }))]
  };
}));
const SliderThumb = styled$2("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.thumb, styles[`thumbColor${capitalize(ownerState.color)}`], ownerState.size !== "medium" && styles[`thumbSize${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  width: 20,
  height: 20,
  boxSizing: "border-box",
  borderRadius: "50%",
  outline: 0,
  backgroundColor: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["box-shadow", "left", "bottom"], {
    duration: theme.transitions.duration.shortest
  }),
  "&::before": {
    position: "absolute",
    content: '""',
    borderRadius: "inherit",
    width: "100%",
    height: "100%",
    boxShadow: (theme.vars || theme).shadows[2]
  },
  "&::after": {
    position: "absolute",
    content: '""',
    borderRadius: "50%",
    // 42px is the hit target
    width: 42,
    height: 42,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  [`&.${sliderClasses.disabled}`]: {
    "&:hover": {
      boxShadow: "none"
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      width: 12,
      height: 12,
      "&::before": {
        boxShadow: "none"
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-50%, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 50%)"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&:hover, &.${sliderClasses.focusVisible}`]: {
        ...theme.vars ? {
          boxShadow: `0px 0px 0px 8px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 8px ${alpha(theme.palette[color].main, 0.16)}`
        },
        "@media (hover: none)": {
          boxShadow: "none"
        }
      },
      [`&.${sliderClasses.active}`]: {
        ...theme.vars ? {
          boxShadow: `0px 0px 0px 14px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 14px ${alpha(theme.palette[color].main, 0.16)}`
        }
      }
    }
  }))]
})));
const SliderValueLabel = styled$2(SliderValueLabel$1, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (props, styles) => styles.valueLabel
})(memoTheme(({
  theme
}) => ({
  zIndex: 1,
  whiteSpace: "nowrap",
  ...theme.typography.body2,
  fontWeight: 500,
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest
  }),
  position: "absolute",
  backgroundColor: (theme.vars || theme).palette.grey[600],
  borderRadius: 2,
  color: (theme.vars || theme).palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      transform: "translateY(-100%) scale(0)",
      top: "-10px",
      transformOrigin: "bottom center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, 50%) rotate(45deg)",
        backgroundColor: "inherit",
        bottom: 0,
        left: "50%"
      },
      [`&.${sliderClasses.valueLabelOpen}`]: {
        transform: "translateY(-100%) scale(1)"
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      transform: "translateY(-50%) scale(0)",
      right: "30px",
      top: "50%",
      transformOrigin: "right center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, -50%) rotate(45deg)",
        backgroundColor: "inherit",
        right: -8,
        top: "50%"
      },
      [`&.${sliderClasses.valueLabelOpen}`]: {
        transform: "translateY(-50%) scale(1)"
      }
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(12),
      padding: "0.25rem 0.5rem"
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      right: "20px"
    }
  }]
})));
const SliderMark = styled$2("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "markActive",
  overridesResolver: (props, styles) => {
    const {
      markActive
    } = props;
    return [styles.mark, markActive && styles.markActive];
  }
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-1px, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 1px)"
    }
  }, {
    props: {
      markActive: true
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.background.paper,
      opacity: 0.8
    }
  }]
})));
const SliderMarkLabel = styled$2("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "markLabelActive",
  overridesResolver: (props, styles) => styles.markLabel
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: 30,
      transform: "translateX(-50%)",
      "@media (pointer: coarse)": {
        top: 40
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: 36,
      transform: "translateY(50%)",
      "@media (pointer: coarse)": {
        left: 44
      }
    }
  }, {
    props: {
      markLabelActive: true
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }]
})));
const useUtilityClasses$u = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse", color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled", size && `thumbSize${capitalize(size)}`, color && `thumbColor${capitalize(color)}`],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};
const Forward = ({
  children
}) => children;
const Slider = /* @__PURE__ */ React$H.forwardRef(function Slider2(inputProps, ref) {
  const props = useDefaultProps({
    props: inputProps,
    name: "MuiSlider"
  });
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    // eslint-disable-next-line react/prop-types
    component = "span",
    components = {},
    componentsProps = {},
    color = "primary",
    classes: classesProp,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    shiftStep = 10,
    size = "medium",
    step = 1,
    scale = Identity,
    slotProps,
    slots,
    tabIndex,
    track = "normal",
    value: valueProp,
    valueLabelDisplay = "off",
    valueLabelFormat = Identity,
    ...other
  } = props;
  const ownerState = {
    ...props,
    isRtl,
    max,
    min,
    classes: classesProp,
    disabled,
    disableSwap,
    orientation,
    marks: marksProp,
    color,
    size,
    step,
    shiftStep,
    scale,
    track,
    valueLabelDisplay,
    valueLabelFormat
  };
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider({
    ...ownerState,
    rootRef: ref
  });
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses$u(ownerState);
  const RootSlot = slots?.root ?? components.Root ?? SliderRoot;
  const RailSlot = slots?.rail ?? components.Rail ?? SliderRail;
  const TrackSlot = slots?.track ?? components.Track ?? SliderTrack;
  const ThumbSlot = slots?.thumb ?? components.Thumb ?? SliderThumb;
  const ValueLabelSlot = slots?.valueLabel ?? components.ValueLabel ?? SliderValueLabel;
  const MarkSlot = slots?.mark ?? components.Mark ?? SliderMark;
  const MarkLabelSlot = slots?.markLabel ?? components.MarkLabel ?? SliderMarkLabel;
  const InputSlot = slots?.input ?? components.Input ?? "input";
  const rootSlotProps = slotProps?.root ?? componentsProps.root;
  const railSlotProps = slotProps?.rail ?? componentsProps.rail;
  const trackSlotProps = slotProps?.track ?? componentsProps.track;
  const thumbSlotProps = slotProps?.thumb ?? componentsProps.thumb;
  const valueLabelSlotProps = slotProps?.valueLabel ?? componentsProps.valueLabel;
  const markSlotProps = slotProps?.mark ?? componentsProps.mark;
  const markLabelSlotProps = slotProps?.markLabel ?? componentsProps.markLabel;
  const inputSlotProps = slotProps?.input ?? componentsProps.input;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    getSlotProps: getRootProps,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: {
      ...shouldSpreadAdditionalProps(RootSlot) && {
        as: component
      }
    },
    ownerState: {
      ...ownerState,
      ...rootSlotProps?.ownerState
    },
    className: [classes.root, className]
  });
  const railProps = useSlotProps({
    elementType: RailSlot,
    externalSlotProps: railSlotProps,
    ownerState,
    className: classes.rail
  });
  const trackProps = useSlotProps({
    elementType: TrackSlot,
    externalSlotProps: trackSlotProps,
    additionalProps: {
      style: {
        ...axisProps[axis].offset(trackOffset),
        ...axisProps[axis].leap(trackLeap)
      }
    },
    ownerState: {
      ...ownerState,
      ...trackSlotProps?.ownerState
    },
    className: classes.track
  });
  const thumbProps = useSlotProps({
    elementType: ThumbSlot,
    getSlotProps: getThumbProps,
    externalSlotProps: thumbSlotProps,
    ownerState: {
      ...ownerState,
      ...thumbSlotProps?.ownerState
    },
    className: classes.thumb
  });
  const valueLabelProps = useSlotProps({
    elementType: ValueLabelSlot,
    externalSlotProps: valueLabelSlotProps,
    ownerState: {
      ...ownerState,
      ...valueLabelSlotProps?.ownerState
    },
    className: classes.valueLabel
  });
  const markProps = useSlotProps({
    elementType: MarkSlot,
    externalSlotProps: markSlotProps,
    ownerState,
    className: classes.mark
  });
  const markLabelProps = useSlotProps({
    elementType: MarkLabelSlot,
    externalSlotProps: markLabelSlotProps,
    ownerState,
    className: classes.markLabel
  });
  const inputSliderProps = useSlotProps({
    elementType: InputSlot,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: inputSlotProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(RailSlot, {
      ...railProps
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TrackSlot, {
      ...trackProps
    }), marks.filter((mark) => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.includes(mark.value);
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$H.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(MarkSlot, {
          "data-index": index,
          ...markProps,
          ...!isHostComponent(MarkSlot) && {
            markActive
          },
          style: {
            ...style,
            ...markProps.style
          },
          className: clsx(markProps.className, markActive && classes.markActive)
        }), mark.label != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(MarkLabelSlot, {
          "aria-hidden": true,
          "data-index": index,
          ...markLabelProps,
          ...!isHostComponent(MarkLabelSlot) && {
            markLabelActive: markActive
          },
          style: {
            ...style,
            ...markLabelProps.style
          },
          className: clsx(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        }) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === "off" ? Forward : ValueLabelSlot;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        /* @__PURE__ */ jsxRuntimeExports.jsx(ValueLabelComponent, {
          ...!isHostComponent(ValueLabelComponent) && {
            valueLabelFormat,
            valueLabelDisplay,
            value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
            index,
            open: open === index || active === index || valueLabelDisplay === "on",
            disabled
          },
          ...valueLabelProps,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbSlot, {
            "data-index": index,
            ...thumbProps,
            className: clsx(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: {
              ...style,
              ...getThumbStyle(index),
              ...thumbProps.style
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(InputSlot, {
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-labelledby": ariaLabelledby,
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index],
              ...inputSliderProps
            })
          })
        }, index)
      );
    })]
  });
});

const React$G = await importShared('react');
/**
 * The basic building block for creating custom snackbar.
 *
 * Demos:
 *
 * - [Snackbar](https://mui.com/base-ui/react-snackbar/#hook)
 *
 * API:
 *
 * - [useSnackbar API](https://mui.com/base-ui/react-snackbar/hooks-api/#use-snackbar)
 */
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = useTimeout();
  React$G.useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === 'Escape') {
          // not calling `preventDefault` since we don't know if people may ignore this event e.g. a permanently open snackbar
          onClose?.(nativeEvent, 'escapeKeyDown');
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback((event, reason) => {
    onClose?.(event, reason);
  });
  const setAutoHideTimer = useEventCallback(autoHideDurationParam => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    timerAutoHide.start(autoHideDurationParam, () => {
      handleClose(null, 'timeout');
    });
  });
  React$G.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return timerAutoHide.clear;
  }, [open, autoHideDuration, setAutoHideTimer, timerAutoHide]);
  const handleClickAway = event => {
    onClose?.(event, 'clickaway');
  };

  // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.
  const handlePause = timerAutoHide.clear;

  // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.
  const handleResume = React$G.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = otherHandlers => event => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback?.(event);
    handleResume();
  };
  const createHandleFocus = otherHandlers => event => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback?.(event);
    handlePause();
  };
  const createMouseEnter = otherHandlers => event => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback?.(event);
    handlePause();
  };
  const createMouseLeave = otherHandlers => event => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback?.(event);
    handleResume();
  };
  React$G.useEffect(() => {
    // TODO: window global should be refactored here
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return () => {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }
    return undefined;
  }, [disableWindowBlurListener, open, handleResume, handlePause]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = {
      ...extractEventHandlers(parameters),
      ...extractEventHandlers(externalProps)
    };
    return {
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: 'presentation',
      ...externalProps,
      ...externalEventHandlers,
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    };
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}

function getSnackbarContentUtilityClass(slot) {
  return generateUtilityClass('MuiSnackbarContent', slot);
}
const snackbarContentClasses = generateUtilityClasses('MuiSnackbarContent', ['root', 'message', 'action']);

const React$F = await importShared('react');
const useUtilityClasses$t = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    action: ["action"],
    message: ["message"]
  };
  return composeClasses(slots, getSnackbarContentUtilityClass, classes);
};
const SnackbarContentRoot = styled$2(Paper, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => {
  const emphasis = theme.palette.mode === "light" ? 0.8 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);
  return {
    ...theme.typography.body2,
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
}));
const SnackbarContentMessage = styled$2("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (props, styles) => styles.message
})({
  padding: "8px 0"
});
const SnackbarContentAction = styled$2("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
});
const SnackbarContent = /* @__PURE__ */ React$F.forwardRef(function SnackbarContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSnackbarContent"
  });
  const {
    action,
    className,
    message,
    role = "alert",
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$t(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SnackbarContentRoot, {
    role,
    square: true,
    elevation: 6,
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentMessage, {
      className: classes.message,
      ownerState,
      children: message
    }), action ? /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentAction, {
      className: classes.action,
      ownerState,
      children: action
    }) : null]
  });
});

function getSnackbarUtilityClass(slot) {
  return generateUtilityClass('MuiSnackbar', slot);
}
const snackbarClasses = generateUtilityClasses('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);

const React$E = await importShared('react');
const useUtilityClasses$s = (ownerState) => {
  const {
    classes,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ["root", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`]
  };
  return composeClasses(slots, getSnackbarUtilityClass, classes);
};
const SnackbarRoot = styled$2("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [theme.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [theme.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [theme.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [theme.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "center",
    style: {
      [theme.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
})));
const Snackbar = /* @__PURE__ */ React$E.forwardRef(function Snackbar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSnackbar"
  });
  const theme = useTheme$3();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    action,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration = null,
    children,
    className,
    ClickAwayListenerProps: ClickAwayListenerPropsProp,
    ContentProps: ContentPropsProp,
    disableWindowBlurListener = false,
    message,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    open,
    resumeHideDuration,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration = defaultTransitionDuration,
    TransitionProps: {
      onEnter,
      onExited,
      ...TransitionPropsProp
    } = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    anchorOrigin: {
      vertical,
      horizontal
    },
    autoHideDuration,
    disableWindowBlurListener,
    TransitionComponent: TransitionComponentProp,
    transitionDuration
  };
  const classes = useUtilityClasses$s(ownerState);
  const {
    getRootProps,
    onClickAway
  } = useSnackbar({
    ...ownerState
  });
  const [exited, setExited] = React$E.useState(true);
  const handleExited = (node) => {
    setExited(true);
    if (onExited) {
      onExited(node);
    }
  };
  const handleEnter = (node, isAppearing) => {
    setExited(false);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponentProp,
      ...slots
    },
    slotProps: {
      content: ContentPropsProp,
      clickAwayListener: ClickAwayListenerPropsProp,
      transition: TransitionPropsProp,
      ...slotProps
    }
  };
  const [Root, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, className],
    elementType: SnackbarRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState
  });
  const [ClickAwaySlot, {
    ownerState: clickAwayOwnerStateProp,
    ...clickAwayListenerProps
  }] = useSlot("clickAwayListener", {
    elementType: ClickAwayListener,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onClickAway: (...params) => {
        handlers.onClickAway?.(...params);
        onClickAway(...params);
      }
    }),
    ownerState
  });
  const [ContentSlot, contentSlotProps] = useSlot("content", {
    elementType: SnackbarContent,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    additionalProps: {
      message,
      action
    },
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Grow,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onEnter: (...params) => {
        handlers.onEnter?.(...params);
        handleEnter(...params);
      },
      onExited: (...params) => {
        handlers.onExited?.(...params);
        handleExited(...params);
      }
    }),
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      direction: vertical === "top" ? "down" : "up"
    },
    ownerState
  });
  if (!open && exited) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClickAwaySlot, {
    ...clickAwayListenerProps,
    ...slots.clickAwayListener && {
      ownerState: clickAwayOwnerStateProp
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
      ...rootProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
        ...transitionProps,
        children: children || /* @__PURE__ */ jsxRuntimeExports.jsx(ContentSlot, {
          ...contentSlotProps
        })
      })
    })
  });
});

const React$D = await importShared('react');
const styles$1 = {
  entering: {
    transform: "none"
  },
  entered: {
    transform: "none"
  }
};
const Zoom = /* @__PURE__ */ React$D.forwardRef(function Zoom2(props, ref) {
  const theme = useTheme$3();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const nodeRef = React$D.useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /* @__PURE__ */ React$D.cloneElement(children, {
        style: {
          transform: "scale(0)",
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles$1[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});

function getSpeedDialUtilityClass(slot) {
  return generateUtilityClass('MuiSpeedDial', slot);
}
const speedDialClasses = generateUtilityClasses('MuiSpeedDial', ['root', 'fab', 'directionUp', 'directionDown', 'directionLeft', 'directionRight', 'actions', 'actionsClosed']);

const React$C = await importShared('react');
const useUtilityClasses$r = (ownerState) => {
  const {
    classes,
    open,
    direction
  } = ownerState;
  const slots = {
    root: ["root", `direction${capitalize(direction)}`],
    fab: ["fab"],
    actions: ["actions", !open && "actionsClosed"]
  };
  return composeClasses(slots, getSpeedDialUtilityClass, classes);
};
function getOrientation(direction) {
  if (direction === "up" || direction === "down") {
    return "vertical";
  }
  if (direction === "right" || direction === "left") {
    return "horizontal";
  }
  return void 0;
}
const dialRadius = 32;
const spacingActions = 16;
const SpeedDialRoot = styled$2("div", {
  name: "MuiSpeedDial",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`direction${capitalize(ownerState.direction)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.speedDial,
  display: "flex",
  alignItems: "center",
  pointerEvents: "none",
  variants: [{
    props: {
      direction: "up"
    },
    style: {
      flexDirection: "column-reverse",
      [`& .${speedDialClasses.actions}`]: {
        flexDirection: "column-reverse",
        marginBottom: -dialRadius,
        paddingBottom: spacingActions + dialRadius
      }
    }
  }, {
    props: {
      direction: "down"
    },
    style: {
      flexDirection: "column",
      [`& .${speedDialClasses.actions}`]: {
        flexDirection: "column",
        marginTop: -dialRadius,
        paddingTop: spacingActions + dialRadius
      }
    }
  }, {
    props: {
      direction: "left"
    },
    style: {
      flexDirection: "row-reverse",
      [`& .${speedDialClasses.actions}`]: {
        flexDirection: "row-reverse",
        marginRight: -dialRadius,
        paddingRight: spacingActions + dialRadius
      }
    }
  }, {
    props: {
      direction: "right"
    },
    style: {
      flexDirection: "row",
      [`& .${speedDialClasses.actions}`]: {
        flexDirection: "row",
        marginLeft: -dialRadius,
        paddingLeft: spacingActions + dialRadius
      }
    }
  }]
})));
const SpeedDialFab = styled$2(Fab, {
  name: "MuiSpeedDial",
  slot: "Fab",
  overridesResolver: (props, styles) => styles.fab
})({
  pointerEvents: "auto"
});
const SpeedDialActions = styled$2("div", {
  name: "MuiSpeedDial",
  slot: "Actions",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.actions, !ownerState.open && styles.actionsClosed];
  }
})({
  display: "flex",
  pointerEvents: "auto",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open,
    style: {
      transition: "top 0s linear 0.2s",
      pointerEvents: "none"
    }
  }]
});
const SpeedDial = /* @__PURE__ */ React$C.forwardRef(function SpeedDial2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSpeedDial"
  });
  const theme = useTheme$3();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    ariaLabel,
    FabProps: {
      ref: origDialButtonRef,
      ...FabProps
    } = {},
    children: childrenProp,
    className,
    direction = "up",
    hidden = false,
    icon,
    onBlur,
    onClose,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    onOpen,
    open: openProp,
    openIcon,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    TransitionProps: TransitionPropsProp,
    transitionDuration = defaultTransitionDuration,
    ...other
  } = props;
  const [open, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: "SpeedDial",
    state: "open"
  });
  const ownerState = {
    ...props,
    open,
    direction
  };
  const classes = useUtilityClasses$r(ownerState);
  const eventTimer = useTimeout();
  const focusedAction = React$C.useRef(0);
  const nextItemArrowKey = React$C.useRef();
  const actions = React$C.useRef([]);
  actions.current = [actions.current[0]];
  const handleOwnFabRef = React$C.useCallback((fabFef) => {
    actions.current[0] = fabFef;
  }, []);
  const handleFabRef = useForkRef(origDialButtonRef, handleOwnFabRef);
  const createHandleSpeedDialActionButtonRef = (dialActionIndex, origButtonRef) => {
    return (buttonRef) => {
      actions.current[dialActionIndex + 1] = buttonRef;
      if (origButtonRef) {
        origButtonRef(buttonRef);
      }
    };
  };
  const handleKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    const key = event.key.replace("Arrow", "").toLowerCase();
    const {
      current: nextItemArrowKeyCurrent = key
    } = nextItemArrowKey;
    if (event.key === "Escape") {
      setOpenState(false);
      actions.current[0].focus();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
      return;
    }
    if (getOrientation(key) === getOrientation(nextItemArrowKeyCurrent) && getOrientation(key) !== void 0) {
      event.preventDefault();
      const actionStep = key === nextItemArrowKeyCurrent ? 1 : -1;
      const nextAction = clamp(focusedAction.current + actionStep, 0, actions.current.length - 1);
      actions.current[nextAction].focus();
      focusedAction.current = nextAction;
      nextItemArrowKey.current = nextItemArrowKeyCurrent;
    }
  };
  React$C.useEffect(() => {
    if (!open) {
      focusedAction.current = 0;
      nextItemArrowKey.current = void 0;
    }
  }, [open]);
  const handleClose = (event) => {
    if (event.type === "mouseleave" && onMouseLeave) {
      onMouseLeave(event);
    }
    if (event.type === "blur" && onBlur) {
      onBlur(event);
    }
    eventTimer.clear();
    if (event.type === "blur") {
      eventTimer.start(0, () => {
        setOpenState(false);
        if (onClose) {
          onClose(event, "blur");
        }
      });
    } else {
      setOpenState(false);
      if (onClose) {
        onClose(event, "mouseLeave");
      }
    }
  };
  const handleClick = (event) => {
    if (FabProps.onClick) {
      FabProps.onClick(event);
    }
    eventTimer.clear();
    if (open) {
      setOpenState(false);
      if (onClose) {
        onClose(event, "toggle");
      }
    } else {
      setOpenState(true);
      if (onOpen) {
        onOpen(event, "toggle");
      }
    }
  };
  const handleOpen = (event) => {
    if (event.type === "mouseenter" && onMouseEnter) {
      onMouseEnter(event);
    }
    if (event.type === "focus" && onFocus) {
      onFocus(event);
    }
    eventTimer.clear();
    if (!open) {
      eventTimer.start(0, () => {
        setOpenState(true);
        if (onOpen) {
          const eventMap = {
            focus: "focus",
            mouseenter: "mouseEnter"
          };
          onOpen(event, eventMap[event.type]);
        }
      });
    }
  };
  const id = ariaLabel.replace(/^[^a-z]+|[^\w:.-]+/gi, "");
  const allItems = React$C.Children.toArray(childrenProp).filter((child) => {
    return /* @__PURE__ */ React$C.isValidElement(child);
  });
  const children = allItems.map((child, index) => {
    const {
      FabProps: {
        ref: origButtonRef,
        ...ChildFabProps
      } = {},
      tooltipPlacement: tooltipPlacementProp
    } = child.props;
    const tooltipPlacement = tooltipPlacementProp || (getOrientation(direction) === "vertical" ? "left" : "top");
    return /* @__PURE__ */ React$C.cloneElement(child, {
      FabProps: {
        ...ChildFabProps,
        ref: createHandleSpeedDialActionButtonRef(index, origButtonRef)
      },
      delay: 30 * (open ? index : allItems.length - index),
      open,
      tooltipPlacement,
      id: `${id}-action-${index}`
    });
  });
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionPropsProp,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    elementType: SpeedDialRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref,
    className: clsx(classes.root, className),
    additionalProps: {
      role: "presentation"
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        handlers.onKeyDown?.(event);
        handleKeyDown(event);
      },
      onBlur: (event) => {
        handlers.onBlur?.(event);
        handleClose(event);
      },
      onFocus: (event) => {
        handlers.onFocus?.(event);
        handleOpen(event);
      },
      onMouseEnter: (event) => {
        handlers.onMouseEnter?.(event);
        handleOpen(event);
      },
      onMouseLeave: (event) => {
        handlers.onMouseLeave?.(event);
        handleClose(event);
      }
    })
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Zoom,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      in: !hidden,
      timeout: transitionDuration,
      unmountOnExit: true,
      ...transitionProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedDialFab, {
        color: "primary",
        "aria-label": ariaLabel,
        "aria-haspopup": "true",
        "aria-expanded": open,
        "aria-controls": `${id}-actions`,
        ...FabProps,
        onClick: handleClick,
        className: clsx(classes.fab, FabProps.className),
        ref: handleFabRef,
        ownerState,
        children: /* @__PURE__ */ React$C.isValidElement(icon) && isMuiElement(icon, ["SpeedDialIcon"]) ? /* @__PURE__ */ React$C.cloneElement(icon, {
          open
        }) : icon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(SpeedDialActions, {
      id: `${id}-actions`,
      role: "menu",
      "aria-orientation": getOrientation(direction),
      className: clsx(classes.actions, !open && classes.actionsClosed),
      ownerState,
      children
    })]
  });
});

function getTooltipUtilityClass(slot) {
  return generateUtilityClass('MuiTooltip', slot);
}
const tooltipClasses = generateUtilityClasses('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);

const React$B = await importShared('react');
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const useUtilityClasses$q = (ownerState) => {
  const {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ["popper", !disableInteractive && "popperInteractive", arrow && "popperArrow"],
    tooltip: ["tooltip", arrow && "tooltipArrow", touch && "touch", `tooltipPlacement${capitalize(placement.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return composeClasses(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = styled$2(Popper, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open
    }) => !open,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !!ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !!ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
})));
const TooltipTooltip = styled$2("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${capitalize(ownerState.placement.split("-")[0])}`]];
  }
})(memoTheme(({
  theme
}) => ({
  backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.92),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  color: (theme.vars || theme).palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: "4px 8px",
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: theme.typography.fontWeightMedium,
  [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      padding: "8px 16px",
      fontSize: theme.typography.pxToRem(14),
      lineHeight: `${round(16 / 14)}em`,
      fontWeight: theme.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.isRtl,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.isRtl && ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.isRtl,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.isRtl && ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
})));
const TooltipArrow = styled$2("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (props, styles) => styles.arrow
})(memoTheme(({
  theme
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let hystersisOpen = false;
const hystersisTimer = new Timeout();
let cursorPosition = {
  x: 0,
  y: 0
};
function composeEventHandler(handler, eventHandler) {
  return (event, ...params) => {
    if (eventHandler) {
      eventHandler(event, ...params);
    }
    handler(event, ...params);
  };
}
const Tooltip = /* @__PURE__ */ React$B.forwardRef(function Tooltip2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTooltip"
  });
  const {
    arrow = false,
    children: childrenProp,
    classes: classesProp,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = "bottom",
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp,
    TransitionProps,
    ...other
  } = props;
  const children = /* @__PURE__ */ React$B.isValidElement(childrenProp) ? childrenProp : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    children: childrenProp
  });
  const theme = useTheme$3();
  const isRtl = useRtl();
  const [childNode, setChildNode] = React$B.useState();
  const [arrowRef, setArrowRef] = React$B.useState(null);
  const ignoreNonTouchEvents = React$B.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = useTimeout();
  const enterTimer = useTimeout();
  const leaveTimer = useTimeout();
  const touchTimer = useTimeout();
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  });
  let open = openState;
  const id = useId(idProp);
  const prevUserSelect = React$B.useRef();
  const stopTouchInteraction = useEventCallback(() => {
    if (prevUserSelect.current !== void 0) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = void 0;
    }
    touchTimer.clear();
  });
  React$B.useEffect(() => stopTouchInteraction, [stopTouchInteraction]);
  const handleOpen = (event) => {
    hystersisTimer.clear();
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = useEventCallback(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (event) => {
      hystersisTimer.start(800 + leaveDelay, () => {
        hystersisOpen = false;
      });
      setOpenState(false);
      if (onClose && open) {
        onClose(event);
      }
      closeTimer.start(theme.transitions.duration.shortest, () => {
        ignoreNonTouchEvents.current = false;
      });
    }
  );
  const handleMouseOver = (event) => {
    if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
      return;
    }
    if (childNode) {
      childNode.removeAttribute("title");
    }
    enterTimer.clear();
    leaveTimer.clear();
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };
  const handleMouseLeave = (event) => {
    enterTimer.clear();
    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };
  const [, setChildIsFocusVisible] = React$B.useState(false);
  const handleBlur = (event) => {
    if (!isFocusVisible(event.target)) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };
  const handleFocus = (event) => {
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    if (isFocusVisible(event.target)) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };
  const detectTouchStart = (event) => {
    ignoreNonTouchEvents.current = true;
    const childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  const handleTouchStart = (event) => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    document.body.style.WebkitUserSelect = "none";
    touchTimer.start(enterTouchDelay, () => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };
  const handleTouchEnd = (event) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };
  React$B.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (nativeEvent.key === "Escape") {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, open]);
  const handleRef = useForkRef(getReactElementRef(children), setChildNode, ref);
  if (!title && title !== 0) {
    open = false;
  }
  const popperRef = React$B.useRef();
  const handleMouseMove = (event) => {
    const childrenProps2 = children.props;
    if (childrenProps2.onMouseMove) {
      childrenProps2.onMouseMove(event);
    }
    cursorPosition = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === "string";
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps["aria-describedby"] = open ? id : null;
  } else {
    nameOrDescProps["aria-label"] = titleIsString ? title : null;
    nameOrDescProps["aria-labelledby"] = open && !titleIsString ? id : null;
  }
  const childrenProps = {
    ...nameOrDescProps,
    ...other,
    ...children.props,
    className: clsx(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef,
    ...followCursor ? {
      onMouseMove: handleMouseMove
    } : {}
  };
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  const ownerState = {
    ...props,
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  };
  const resolvedPopperProps = typeof slotProps.popper === "function" ? slotProps.popper(ownerState) : slotProps.popper;
  const popperOptions = React$B.useMemo(() => {
    let tooltipModifiers = [{
      name: "arrow",
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    if (PopperProps.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }
    if (resolvedPopperProps?.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
    }
    return {
      ...PopperProps.popperOptions,
      ...resolvedPopperProps?.popperOptions,
      modifiers: tooltipModifiers
    };
  }, [arrowRef, PopperProps.popperOptions, resolvedPopperProps?.popperOptions]);
  const classes = useUtilityClasses$q(ownerState);
  const resolvedTransitionProps = typeof slotProps.transition === "function" ? slotProps.transition(ownerState) : slotProps.transition;
  const externalForwardedProps = {
    slots: {
      popper: components.Popper,
      transition: components.Transition ?? TransitionComponentProp,
      tooltip: components.Tooltip,
      arrow: components.Arrow,
      ...slots
    },
    slotProps: {
      arrow: slotProps.arrow ?? componentsProps.arrow,
      popper: {
        ...PopperProps,
        ...resolvedPopperProps ?? componentsProps.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: slotProps.tooltip ?? componentsProps.tooltip,
      transition: {
        ...TransitionProps,
        ...resolvedTransitionProps ?? componentsProps.transition
      }
    }
  };
  const [PopperSlot, popperSlotProps] = useSlot("popper", {
    elementType: TooltipPopper,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.popper, PopperProps?.className)
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Grow,
    externalForwardedProps,
    ownerState
  });
  const [TooltipSlot, tooltipSlotProps] = useSlot("tooltip", {
    elementType: TooltipTooltip,
    className: classes.tooltip,
    externalForwardedProps,
    ownerState
  });
  const [ArrowSlot, arrowSlotProps] = useSlot("arrow", {
    elementType: TooltipArrow,
    className: classes.arrow,
    externalForwardedProps,
    ownerState,
    ref: setArrowRef
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$B.Fragment, {
    children: [/* @__PURE__ */ React$B.cloneElement(children, childrenProps), /* @__PURE__ */ jsxRuntimeExports.jsx(PopperSlot, {
      as: PopperComponentProp ?? Popper,
      placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef,
      open: childNode ? open : false,
      id,
      transition: true,
      ...interactiveWrapperListeners,
      ...popperSlotProps,
      popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
        timeout: theme.transitions.duration.shorter,
        ...TransitionPropsInner,
        ...transitionSlotProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipSlot, {
          ...tooltipSlotProps,
          children: [title, arrow ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowSlot, {
            ...arrowSlotProps
          }) : null]
        })
      })
    })]
  });
});

function getSpeedDialActionUtilityClass(slot) {
  return generateUtilityClass('MuiSpeedDialAction', slot);
}
const speedDialActionClasses = generateUtilityClasses('MuiSpeedDialAction', ['fab', 'fabClosed', 'staticTooltip', 'staticTooltipClosed', 'staticTooltipLabel', 'tooltipPlacementLeft', 'tooltipPlacementRight']);

const React$A = await importShared('react');
const useUtilityClasses$p = (ownerState) => {
  const {
    open,
    tooltipPlacement,
    classes
  } = ownerState;
  const slots = {
    fab: ["fab", !open && "fabClosed"],
    staticTooltip: ["staticTooltip", `tooltipPlacement${capitalize(tooltipPlacement)}`, !open && "staticTooltipClosed"],
    staticTooltipLabel: ["staticTooltipLabel"]
  };
  return composeClasses(slots, getSpeedDialActionUtilityClass, classes);
};
const SpeedDialActionFab = styled$2(Fab, {
  name: "MuiSpeedDialAction",
  slot: "Fab",
  skipVariantsResolver: false,
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.fab, !ownerState.open && styles.fabClosed];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 8,
  color: (theme.vars || theme).palette.text.secondary,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: theme.vars ? theme.vars.palette.SpeedDialAction.fabHoverBg : emphasize(theme.palette.background.paper, 0.15)
  },
  transition: `${theme.transitions.create("transform", {
    duration: theme.transitions.duration.shorter
  })}, opacity 0.8s`,
  opacity: 1,
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open,
    style: {
      opacity: 0,
      transform: "scale(0)"
    }
  }]
})));
const SpeedDialActionStaticTooltip = styled$2("span", {
  name: "MuiSpeedDialAction",
  slot: "StaticTooltip",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.staticTooltip, !ownerState.open && styles.staticTooltipClosed, styles[`tooltipPlacement${capitalize(ownerState.tooltipPlacement)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  [`& .${speedDialActionClasses.staticTooltipLabel}`]: {
    transition: theme.transitions.create(["transform", "opacity"], {
      duration: theme.transitions.duration.shorter
    }),
    opacity: 1
  },
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open,
    style: {
      [`& .${speedDialActionClasses.staticTooltipLabel}`]: {
        opacity: 0,
        transform: "scale(0.5)"
      }
    }
  }, {
    props: {
      tooltipPlacement: "left"
    },
    style: {
      [`& .${speedDialActionClasses.staticTooltipLabel}`]: {
        transformOrigin: "100% 50%",
        right: "100%",
        marginRight: 8
      }
    }
  }, {
    props: {
      tooltipPlacement: "right"
    },
    style: {
      [`& .${speedDialActionClasses.staticTooltipLabel}`]: {
        transformOrigin: "0% 50%",
        left: "100%",
        marginLeft: 8
      }
    }
  }]
})));
const SpeedDialActionStaticTooltipLabel = styled$2("span", {
  name: "MuiSpeedDialAction",
  slot: "StaticTooltipLabel",
  overridesResolver: (props, styles) => styles.staticTooltipLabel
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  ...theme.typography.body1,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  boxShadow: (theme.vars || theme).shadows[1],
  color: (theme.vars || theme).palette.text.secondary,
  padding: "4px 16px",
  wordBreak: "keep-all"
})));
const SpeedDialAction = /* @__PURE__ */ React$A.forwardRef(function SpeedDialAction2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSpeedDialAction"
  });
  const {
    className,
    delay = 0,
    FabProps = {},
    icon,
    id,
    open,
    TooltipClasses,
    tooltipOpen: tooltipOpenProp = false,
    tooltipPlacement = "left",
    tooltipTitle,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    tooltipPlacement
  };
  const classes = useUtilityClasses$p(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      fab: FabProps,
      ...slotProps,
      tooltip: mergeSlotProps(typeof slotProps.tooltip === "function" ? slotProps.tooltip(ownerState) : slotProps.tooltip, {
        title: tooltipTitle,
        open: tooltipOpenProp,
        placement: tooltipPlacement,
        classes: TooltipClasses
      })
    }
  };
  const [tooltipOpen, setTooltipOpen] = React$A.useState(externalForwardedProps.slotProps.tooltip?.open);
  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };
  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };
  const transitionStyle = {
    transitionDelay: `${delay}ms`
  };
  const [FabSlot, fabSlotProps] = useSlot("fab", {
    elementType: SpeedDialActionFab,
    externalForwardedProps,
    ownerState,
    shouldForwardComponentProp: true,
    className: clsx(classes.fab, className),
    additionalProps: {
      style: transitionStyle,
      tabIndex: -1,
      role: "menuitem",
      size: "small"
    }
  });
  const [TooltipSlot, tooltipSlotProps] = useSlot("tooltip", {
    elementType: Tooltip,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    ref,
    additionalProps: {
      id
    },
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onClose: (event) => {
        handlers.onClose?.(event);
        handleTooltipClose();
      },
      onOpen: (event) => {
        handlers.onOpen?.(event);
        handleTooltipOpen();
      }
    })
  });
  const [StaticTooltipSlot, staticTooltipSlotProps] = useSlot("staticTooltip", {
    elementType: SpeedDialActionStaticTooltip,
    externalForwardedProps,
    ownerState,
    ref,
    className: classes.staticTooltip,
    additionalProps: {
      id
    }
  });
  const [StaticTooltipLabelSlot, staticTooltipLabelSlotProps] = useSlot("staticTooltipLabel", {
    elementType: SpeedDialActionStaticTooltipLabel,
    externalForwardedProps,
    ownerState,
    className: classes.staticTooltipLabel,
    additionalProps: {
      style: transitionStyle,
      id: `${id}-label`
    }
  });
  const fab = /* @__PURE__ */ jsxRuntimeExports.jsx(FabSlot, {
    ...fabSlotProps,
    children: icon
  });
  if (tooltipSlotProps.open) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StaticTooltipSlot, {
      ...staticTooltipSlotProps,
      ...other,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(StaticTooltipLabelSlot, {
        ...staticTooltipLabelSlotProps,
        children: tooltipSlotProps.title
      }), /* @__PURE__ */ React$A.cloneElement(fab, {
        "aria-labelledby": `${id}-label`
      })]
    });
  }
  if (!open && tooltipOpen) {
    setTooltipOpen(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipSlot, {
    ...tooltipSlotProps,
    title: tooltipSlotProps.title,
    open: open && tooltipOpen,
    placement: tooltipSlotProps.placement,
    classes: tooltipSlotProps.classes,
    ...other,
    children: fab
  });
});

await importShared('react');
const AddIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

function getSpeedDialIconUtilityClass(slot) {
  return generateUtilityClass('MuiSpeedDialIcon', slot);
}
const speedDialIconClasses = generateUtilityClasses('MuiSpeedDialIcon', ['root', 'icon', 'iconOpen', 'iconWithOpenIconOpen', 'openIcon', 'openIconOpen']);

const React$z = await importShared('react');
const useUtilityClasses$o = (ownerState) => {
  const {
    classes,
    open,
    openIcon
  } = ownerState;
  const slots = {
    root: ["root"],
    icon: ["icon", open && "iconOpen", openIcon && open && "iconWithOpenIconOpen"],
    openIcon: ["openIcon", open && "openIconOpen"]
  };
  return composeClasses(slots, getSpeedDialIconUtilityClass, classes);
};
const SpeedDialIconRoot = styled$2("span", {
  name: "MuiSpeedDialIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${speedDialIconClasses.icon}`]: styles.icon
    }, {
      [`& .${speedDialIconClasses.icon}`]: ownerState.open && styles.iconOpen
    }, {
      [`& .${speedDialIconClasses.icon}`]: ownerState.open && ownerState.openIcon && styles.iconWithOpenIconOpen
    }, {
      [`& .${speedDialIconClasses.openIcon}`]: styles.openIcon
    }, {
      [`& .${speedDialIconClasses.openIcon}`]: ownerState.open && styles.openIconOpen
    }, styles.root];
  }
})(memoTheme(({
  theme
}) => ({
  height: 24,
  [`& .${speedDialIconClasses.icon}`]: {
    transition: theme.transitions.create(["transform", "opacity"], {
      duration: theme.transitions.duration.short
    })
  },
  [`& .${speedDialIconClasses.openIcon}`]: {
    position: "absolute",
    transition: theme.transitions.create(["transform", "opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    transform: "rotate(-45deg)"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.open,
    style: {
      [`& .${speedDialIconClasses.icon}`]: {
        transform: "rotate(45deg)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.open && ownerState.openIcon,
    style: {
      [`& .${speedDialIconClasses.icon}`]: {
        opacity: 0
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.open,
    style: {
      [`& .${speedDialIconClasses.openIcon}`]: {
        transform: "rotate(0deg)",
        opacity: 1
      }
    }
  }]
})));
const SpeedDialIcon = /* @__PURE__ */ React$z.forwardRef(function SpeedDialIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSpeedDialIcon"
  });
  const {
    className,
    icon: iconProp,
    open,
    openIcon: openIconProp,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$o(ownerState);
  function formatIcon(icon, newClassName) {
    if (/* @__PURE__ */ React$z.isValidElement(icon)) {
      return /* @__PURE__ */ React$z.cloneElement(icon, {
        className: newClassName
      });
    }
    return icon;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SpeedDialIconRoot, {
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: [openIconProp ? formatIcon(openIconProp, classes.openIcon) : null, iconProp ? formatIcon(iconProp, classes.icon) : /* @__PURE__ */ jsxRuntimeExports.jsx(AddIcon, {
      className: classes.icon
    })]
  });
});
SpeedDialIcon.muiName = "SpeedDialIcon";

const Stack = createStack({
  createStyledComponent: styled$2("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiStack"
  })
});

const stackClasses = generateUtilityClasses('MuiStack', ['root']);

const React$y = await importShared('react');

const StepperContext = /* @__PURE__ */ React$y.createContext({});
function useStepperContext() {
  return React$y.useContext(StepperContext);
}

const React$x = await importShared('react');

const StepContext = /* @__PURE__ */ React$x.createContext({});
function useStepContext() {
  return React$x.useContext(StepContext);
}

function getStepUtilityClass(slot) {
  return generateUtilityClass('MuiStep', slot);
}
const stepClasses = generateUtilityClasses('MuiStep', ['root', 'horizontal', 'vertical', 'alternativeLabel', 'completed']);

const React$w = await importShared('react');
const useUtilityClasses$n = (ownerState) => {
  const {
    classes,
    orientation,
    alternativeLabel,
    completed
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel", completed && "completed"]
  };
  return composeClasses(slots, getStepUtilityClass, classes);
};
const StepRoot = styled$2("div", {
  name: "MuiStep",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})({
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      alternativeLabel: true
    },
    style: {
      flex: 1,
      position: "relative"
    }
  }]
});
const Step = /* @__PURE__ */ React$w.forwardRef(function Step2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStep"
  });
  const {
    active: activeProp,
    children,
    className,
    component = "div",
    completed: completedProp,
    disabled: disabledProp,
    expanded = false,
    index,
    last,
    ...other
  } = props;
  const {
    activeStep,
    connector,
    alternativeLabel,
    orientation,
    nonLinear
  } = React$w.useContext(StepperContext);
  let [active = false, completed = false, disabled = false] = [activeProp, completedProp, disabledProp];
  if (activeStep === index) {
    active = activeProp !== void 0 ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== void 0 ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== void 0 ? disabledProp : true;
  }
  const contextValue = React$w.useMemo(() => ({
    index,
    last,
    expanded,
    icon: index + 1,
    active,
    completed,
    disabled
  }), [index, last, expanded, active, completed, disabled]);
  const ownerState = {
    ...props,
    active,
    orientation,
    alternativeLabel,
    completed,
    disabled,
    expanded,
    component
  };
  const classes = useUtilityClasses$n(ownerState);
  const newChildren = /* @__PURE__ */ jsxRuntimeExports.jsxs(StepRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: [connector && alternativeLabel && index !== 0 ? connector : null, children]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepContext.Provider, {
    value: contextValue,
    children: connector && !alternativeLabel && index !== 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React$w.Fragment, {
      children: [connector, newChildren]
    }) : newChildren
  });
});

await importShared('react');
const CheckCircle = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), 'CheckCircle');

await importShared('react');
const Warning = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

function getStepIconUtilityClass(slot) {
  return generateUtilityClass('MuiStepIcon', slot);
}
const stepIconClasses = generateUtilityClasses('MuiStepIcon', ['root', 'active', 'completed', 'error', 'text']);

var _circle;
const React$v = await importShared('react');
const useUtilityClasses$m = (ownerState) => {
  const {
    classes,
    active,
    completed,
    error
  } = ownerState;
  const slots = {
    root: ["root", active && "active", completed && "completed", error && "error"],
    text: ["text"]
  };
  return composeClasses(slots, getStepIconUtilityClass, classes);
};
const StepIconRoot = styled$2(SvgIcon, {
  name: "MuiStepIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => ({
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  color: (theme.vars || theme).palette.text.disabled,
  [`&.${stepIconClasses.completed}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses.active}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const StepIconText = styled$2("text", {
  name: "MuiStepIcon",
  slot: "Text",
  overridesResolver: (props, styles) => styles.text
})(memoTheme(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontFamily: theme.typography.fontFamily
})));
const StepIcon = /* @__PURE__ */ React$v.forwardRef(function StepIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepIcon"
  });
  const {
    active = false,
    className: classNameProp,
    completed = false,
    error = false,
    icon,
    ...other
  } = props;
  const ownerState = {
    ...props,
    active,
    completed,
    error
  };
  const classes = useUtilityClasses$m(ownerState);
  if (typeof icon === "number" || typeof icon === "string") {
    const className = clsx(classNameProp, classes.root);
    if (error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconRoot, {
        as: Warning,
        className,
        ref,
        ownerState,
        ...other
      });
    }
    if (completed) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconRoot, {
        as: CheckCircle,
        className,
        ref,
        ownerState,
        ...other
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(StepIconRoot, {
      className,
      ref,
      ownerState,
      ...other,
      children: [_circle || (_circle = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      })), /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconText, {
        className: classes.text,
        x: "12",
        y: "12",
        textAnchor: "middle",
        dominantBaseline: "central",
        ownerState,
        children: icon
      })]
    });
  }
  return icon;
});

function getStepLabelUtilityClass(slot) {
  return generateUtilityClass('MuiStepLabel', slot);
}
const stepLabelClasses = generateUtilityClasses('MuiStepLabel', ['root', 'horizontal', 'vertical', 'label', 'active', 'completed', 'error', 'disabled', 'iconContainer', 'alternativeLabel', 'labelContainer']);

const React$u = await importShared('react');
const useUtilityClasses$l = (ownerState) => {
  const {
    classes,
    orientation,
    active,
    completed,
    error,
    disabled,
    alternativeLabel
  } = ownerState;
  const slots = {
    root: ["root", orientation, error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    label: ["label", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    iconContainer: ["iconContainer", active && "active", completed && "completed", error && "error", disabled && "disabled", alternativeLabel && "alternativeLabel"],
    labelContainer: ["labelContainer", alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepLabelUtilityClass, classes);
};
const StepLabelRoot = styled$2("span", {
  name: "MuiStepLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation]];
  }
})({
  display: "flex",
  alignItems: "center",
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    flexDirection: "column"
  },
  [`&.${stepLabelClasses.disabled}`]: {
    cursor: "default"
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      textAlign: "left",
      padding: "8px 0"
    }
  }]
});
const StepLabelLabel = styled$2("span", {
  name: "MuiStepLabel",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  display: "block",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${stepLabelClasses.active}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses.completed}`]: {
    color: (theme.vars || theme).palette.text.primary,
    fontWeight: 500
  },
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    marginTop: 16
  },
  [`&.${stepLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const StepLabelIconContainer = styled$2("span", {
  name: "MuiStepLabel",
  slot: "IconContainer",
  overridesResolver: (props, styles) => styles.iconContainer
})({
  flexShrink: 0,
  display: "flex",
  paddingRight: 8,
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    paddingRight: 0
  }
});
const StepLabelLabelContainer = styled$2("span", {
  name: "MuiStepLabel",
  slot: "LabelContainer",
  overridesResolver: (props, styles) => styles.labelContainer
})(memoTheme(({
  theme
}) => ({
  width: "100%",
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    textAlign: "center"
  }
})));
const StepLabel = /* @__PURE__ */ React$u.forwardRef(function StepLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepLabel"
  });
  const {
    children,
    className,
    componentsProps = {},
    error = false,
    icon: iconProp,
    optional,
    slots = {},
    slotProps = {},
    StepIconComponent: StepIconComponentProp,
    StepIconProps,
    ...other
  } = props;
  const {
    alternativeLabel,
    orientation
  } = React$u.useContext(StepperContext);
  const {
    active,
    disabled,
    completed,
    icon: iconContext
  } = React$u.useContext(StepContext);
  const icon = iconProp || iconContext;
  let StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon;
  }
  const ownerState = {
    ...props,
    active,
    alternativeLabel,
    completed,
    disabled,
    error,
    orientation
  };
  const classes = useUtilityClasses$l(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      stepIcon: StepIconProps,
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: StepLabelRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref,
    className: clsx(classes.root, className)
  });
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: StepLabelLabel,
    externalForwardedProps,
    ownerState
  });
  const [StepIconSlot, stepIconProps] = useSlot("stepIcon", {
    elementType: StepIconComponent,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [icon || StepIconSlot ? /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabelIconContainer, {
      className: classes.iconContainer,
      ownerState,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepIconSlot, {
        completed,
        active,
        error,
        icon,
        ...stepIconProps
      })
    }) : null, /* @__PURE__ */ jsxRuntimeExports.jsxs(StepLabelLabelContainer, {
      className: classes.labelContainer,
      ownerState,
      children: [children ? /* @__PURE__ */ jsxRuntimeExports.jsx(LabelSlot, {
        ...labelProps,
        className: clsx(classes.label, labelProps?.className),
        children
      }) : null, optional]
    })]
  });
});
StepLabel.muiName = "StepLabel";

function getStepButtonUtilityClass(slot) {
  return generateUtilityClass('MuiStepButton', slot);
}
const stepButtonClasses = generateUtilityClasses('MuiStepButton', ['root', 'horizontal', 'vertical', 'touchRipple']);

const React$t = await importShared('react');
const useUtilityClasses$k = (ownerState) => {
  const {
    classes,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation],
    touchRipple: ["touchRipple"]
  };
  return composeClasses(slots, getStepButtonUtilityClass, classes);
};
const StepButtonRoot = styled$2(ButtonBase, {
  name: "MuiStepButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${stepButtonClasses.touchRipple}`]: styles.touchRipple
    }, styles.root, styles[ownerState.orientation]];
  }
})({
  width: "100%",
  padding: "24px 16px",
  margin: "-24px -16px",
  boxSizing: "content-box",
  [`& .${stepButtonClasses.touchRipple}`]: {
    color: "rgba(0, 0, 0, 0.3)"
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      justifyContent: "flex-start",
      padding: "8px",
      margin: "-8px"
    }
  }]
});
const StepButton = /* @__PURE__ */ React$t.forwardRef(function StepButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepButton"
  });
  const {
    children,
    className,
    icon,
    optional,
    ...other
  } = props;
  const {
    disabled,
    active
  } = React$t.useContext(StepContext);
  const {
    orientation
  } = React$t.useContext(StepperContext);
  const ownerState = {
    ...props,
    orientation
  };
  const classes = useUtilityClasses$k(ownerState);
  const childProps = {
    icon,
    optional
  };
  const child = isMuiElement(children, ["StepLabel"]) ? /* @__PURE__ */ React$t.cloneElement(children, childProps) : /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, {
    ...childProps,
    children
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepButtonRoot, {
    focusRipple: true,
    disabled,
    TouchRippleProps: {
      className: classes.touchRipple
    },
    className: clsx(classes.root, className),
    ref,
    ownerState,
    "aria-current": active ? "step" : void 0,
    ...other,
    children: child
  });
});

function getStepConnectorUtilityClass(slot) {
  return generateUtilityClass('MuiStepConnector', slot);
}
const stepConnectorClasses = generateUtilityClasses('MuiStepConnector', ['root', 'horizontal', 'vertical', 'alternativeLabel', 'active', 'completed', 'disabled', 'line', 'lineHorizontal', 'lineVertical']);

const React$s = await importShared('react');
const useUtilityClasses$j = (ownerState) => {
  const {
    classes,
    orientation,
    alternativeLabel,
    active,
    completed,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, alternativeLabel && "alternativeLabel", active && "active", completed && "completed", disabled && "disabled"],
    line: ["line", `line${capitalize(orientation)}`]
  };
  return composeClasses(slots, getStepConnectorUtilityClass, classes);
};
const StepConnectorRoot = styled$2("div", {
  name: "MuiStepConnector",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.completed && styles.completed];
  }
})({
  flex: "1 1 auto",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      marginLeft: 12
      // half icon
    }
  }, {
    props: {
      alternativeLabel: true
    },
    style: {
      position: "absolute",
      top: 8 + 4,
      left: "calc(-50% + 20px)",
      right: "calc(50% + 20px)"
    }
  }]
});
const StepConnectorLine = styled$2("span", {
  name: "MuiStepConnector",
  slot: "Line",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.line, styles[`line${capitalize(ownerState.orientation)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600];
  return {
    display: "block",
    borderColor: theme.vars ? theme.vars.palette.StepConnector.border : borderColor,
    variants: [{
      props: {
        orientation: "horizontal"
      },
      style: {
        borderTopStyle: "solid",
        borderTopWidth: 1
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        borderLeftStyle: "solid",
        borderLeftWidth: 1,
        minHeight: 24
      }
    }]
  };
}));
const StepConnector = /* @__PURE__ */ React$s.forwardRef(function StepConnector2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepConnector"
  });
  const {
    className,
    ...other
  } = props;
  const {
    alternativeLabel,
    orientation = "horizontal"
  } = React$s.useContext(StepperContext);
  const {
    active,
    disabled,
    completed
  } = React$s.useContext(StepContext);
  const ownerState = {
    ...props,
    alternativeLabel,
    orientation,
    active,
    completed,
    disabled
  };
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepConnectorRoot, {
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepConnectorLine, {
      className: classes.line,
      ownerState
    })
  });
});

function getStepContentUtilityClass(slot) {
  return generateUtilityClass('MuiStepContent', slot);
}
const stepContentClasses = generateUtilityClasses('MuiStepContent', ['root', 'last', 'transition']);

const React$r = await importShared('react');
const useUtilityClasses$i = (ownerState) => {
  const {
    classes,
    last
  } = ownerState;
  const slots = {
    root: ["root", last && "last"],
    transition: ["transition"]
  };
  return composeClasses(slots, getStepContentUtilityClass, classes);
};
const StepContentRoot = styled$2("div", {
  name: "MuiStepContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.last && styles.last];
  }
})(memoTheme(({
  theme
}) => ({
  marginLeft: 12,
  // half icon
  paddingLeft: 8 + 12,
  // margin + half icon
  paddingRight: 8,
  borderLeft: theme.vars ? `1px solid ${theme.vars.palette.StepContent.border}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[600]}`,
  variants: [{
    props: {
      last: true
    },
    style: {
      borderLeft: "none"
    }
  }]
})));
const StepContentTransition = styled$2(Collapse, {
  name: "MuiStepContent",
  slot: "Transition",
  overridesResolver: (props, styles) => styles.transition
})({});
const StepContent = /* @__PURE__ */ React$r.forwardRef(function StepContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepContent"
  });
  const {
    children,
    className,
    TransitionComponent = Collapse,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    orientation
  } = React$r.useContext(StepperContext);
  const {
    active,
    last,
    expanded
  } = React$r.useContext(StepContext);
  const ownerState = {
    ...props,
    last
  };
  const classes = useUtilityClasses$i(ownerState);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const externalForwardedProps = {
    slots,
    slotProps: {
      transition: TransitionProps,
      ...slotProps
    }
  };
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: StepContentTransition,
    externalForwardedProps,
    ownerState,
    className: classes.transition,
    additionalProps: {
      in: active || expanded,
      timeout: transitionDuration,
      unmountOnExit: true
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepContentRoot, {
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      as: TransitionComponent,
      ...transitionProps,
      children
    })
  });
});

function getStepperUtilityClass(slot) {
  return generateUtilityClass('MuiStepper', slot);
}
const stepperClasses = generateUtilityClasses('MuiStepper', ['root', 'horizontal', 'vertical', 'nonLinear', 'alternativeLabel']);

const React$q = await importShared('react');
const useUtilityClasses$h = (ownerState) => {
  const {
    orientation,
    nonLinear,
    alternativeLabel,
    classes
  } = ownerState;
  const slots = {
    root: ["root", orientation, nonLinear && "nonLinear", alternativeLabel && "alternativeLabel"]
  };
  return composeClasses(slots, getStepperUtilityClass, classes);
};
const StepperRoot = styled$2("div", {
  name: "MuiStepper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel, ownerState.nonLinear && styles.nonLinear];
  }
})({
  display: "flex",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: {
      alternativeLabel: true
    },
    style: {
      alignItems: "flex-start"
    }
  }]
});
const defaultConnector = /* @__PURE__ */ jsxRuntimeExports.jsx(StepConnector, {});
const Stepper = /* @__PURE__ */ React$q.forwardRef(function Stepper2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiStepper"
  });
  const {
    activeStep = 0,
    alternativeLabel = false,
    children,
    className,
    component = "div",
    connector = defaultConnector,
    nonLinear = false,
    orientation = "horizontal",
    ...other
  } = props;
  const ownerState = {
    ...props,
    nonLinear,
    alternativeLabel,
    orientation,
    component
  };
  const classes = useUtilityClasses$h(ownerState);
  const childrenArray = React$q.Children.toArray(children).filter(Boolean);
  const steps = childrenArray.map((step, index) => {
    return /* @__PURE__ */ React$q.cloneElement(step, {
      index,
      last: index + 1 === childrenArray.length,
      ...step.props
    });
  });
  const contextValue = React$q.useMemo(() => ({
    activeStep,
    alternativeLabel,
    connector,
    nonLinear,
    orientation
  }), [activeStep, alternativeLabel, connector, nonLinear, orientation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StepperContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(StepperRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children: steps
    })
  });
});

const React$p = await importShared('react');
const SwipeAreaRoot = styled$2("div", {
  name: "MuiSwipeArea",
  shouldForwardProp: rootShouldForwardProp
})(memoTheme(({
  theme
}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: theme.zIndex.drawer - 1,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      right: "auto"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      left: "auto",
      right: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      bottom: "auto",
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      bottom: 0,
      right: 0
    }
  }]
})));
const SwipeArea = /* @__PURE__ */ React$p.forwardRef(function SwipeArea2(props, ref) {
  const {
    anchor,
    classes = {},
    className,
    width,
    style,
    ...other
  } = props;
  const ownerState = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SwipeAreaRoot, {
    className: clsx("PrivateSwipeArea-root", classes.root, classes[`anchor${capitalize(anchor)}`], className),
    ref,
    style: {
      [isHorizontal(anchor) ? "width" : "height"]: width,
      ...style
    },
    ownerState,
    ...other
  });
});

const React$o = await importShared('react');

const ReactDOM = await importShared('react-dom');
const UNCERTAINTY_THRESHOLD = 3;
const DRAG_STARTED_SIGNAL = 20;
let claimedSwipeInstance = null;
function calculateCurrentX(anchor, touches, doc) {
  return anchor === "right" ? doc.body.offsetWidth - touches[0].pageX : touches[0].pageX;
}
function calculateCurrentY(anchor, touches, containerWindow) {
  return anchor === "bottom" ? containerWindow.innerHeight - touches[0].clientY : touches[0].clientY;
}
function getMaxTranslate(horizontalSwipe, paperInstance) {
  return horizontalSwipe ? paperInstance.clientWidth : paperInstance.clientHeight;
}
function getTranslate(currentTranslate, startLocation, open, maxTranslate) {
  return Math.min(Math.max(open ? startLocation - currentTranslate : maxTranslate + startLocation - currentTranslate, 0), maxTranslate);
}
function getDomTreeShapes(element, rootNode) {
  const domTreeShapes = [];
  while (element && element !== rootNode.parentElement) {
    const style = ownerWindow(rootNode).getComputedStyle(element);
    if (
      // Ignore the scroll children if the element is absolute positioned.
      style.getPropertyValue("position") === "absolute" || // Ignore the scroll children if the element has an overflowX hidden
      style.getPropertyValue("overflow-x") === "hidden"
    ) ; else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      domTreeShapes.push(element);
    }
    element = element.parentElement;
  }
  return domTreeShapes;
}
function computeHasNativeHandler({
  domTreeShapes,
  start,
  current,
  anchor
}) {
  const axisProperties = {
    scrollPosition: {
      x: "scrollLeft",
      y: "scrollTop"
    },
    scrollLength: {
      x: "scrollWidth",
      y: "scrollHeight"
    },
    clientLength: {
      x: "clientWidth",
      y: "clientHeight"
    }
  };
  return domTreeShapes.some((shape) => {
    let goingForward = current >= start;
    if (anchor === "top" || anchor === "left") {
      goingForward = !goingForward;
    }
    const axis = anchor === "left" || anchor === "right" ? "x" : "y";
    const scrollPosition = Math.round(shape[axisProperties.scrollPosition[axis]]);
    const areNotAtStart = scrollPosition > 0;
    const areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];
    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      return true;
    }
    return false;
  });
}
const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
const SwipeableDrawer = /* @__PURE__ */ React$o.forwardRef(function SwipeableDrawer2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiSwipeableDrawer",
    props: inProps
  });
  const theme = useTheme$3();
  const transitionDurationDefault = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    anchor = "left",
    disableBackdropTransition = false,
    disableDiscovery = false,
    disableSwipeToOpen = iOS,
    hideBackdrop,
    hysteresis = 0.52,
    allowSwipeInChildren = false,
    minFlingVelocity = 450,
    ModalProps: {
      BackdropProps,
      ...ModalPropsProp
    } = {},
    onClose,
    onOpen,
    open = false,
    PaperProps = {},
    SwipeAreaProps,
    swipeAreaWidth = 20,
    transitionDuration = transitionDurationDefault,
    variant = "temporary",
    // Mobile first.
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [maybeSwiping, setMaybeSwiping] = React$o.useState(false);
  const swipeInstance = React$o.useRef({
    isSwiping: null
  });
  const swipeAreaRef = React$o.useRef();
  const backdropRef = React$o.useRef();
  const paperRef = React$o.useRef();
  const handleRef = useForkRef(PaperProps.ref, paperRef);
  const touchDetected = React$o.useRef(false);
  const calculatedDurationRef = React$o.useRef();
  useEnhancedEffect(() => {
    calculatedDurationRef.current = null;
  }, [open]);
  const setPosition = React$o.useCallback((translate, options = {}) => {
    const {
      mode = null,
      changeTransition = true
    } = options;
    const anchorRtl = getAnchor(theme, anchor);
    const rtlTranslateMultiplier = ["right", "bottom"].includes(anchorRtl) ? 1 : -1;
    const horizontalSwipe = isHorizontal(anchor);
    const transform = horizontalSwipe ? `translate(${rtlTranslateMultiplier * translate}px, 0)` : `translate(0, ${rtlTranslateMultiplier * translate}px)`;
    const drawerStyle = paperRef.current.style;
    drawerStyle.webkitTransform = transform;
    drawerStyle.transform = transform;
    let transition = "";
    if (mode) {
      transition = theme.transitions.create("all", getTransitionProps({
        easing: void 0,
        style: void 0,
        timeout: transitionDuration
      }, {
        mode
      }));
    }
    if (changeTransition) {
      drawerStyle.webkitTransition = transition;
      drawerStyle.transition = transition;
    }
    if (!disableBackdropTransition && !hideBackdrop) {
      const backdropStyle = backdropRef.current.style;
      backdropStyle.opacity = 1 - translate / getMaxTranslate(horizontalSwipe, paperRef.current);
      if (changeTransition) {
        backdropStyle.webkitTransition = transition;
        backdropStyle.transition = transition;
      }
    }
  }, [anchor, disableBackdropTransition, hideBackdrop, theme, transitionDuration]);
  const handleBodyTouchEnd = useEventCallback((nativeEvent) => {
    if (!touchDetected.current) {
      return;
    }
    claimedSwipeInstance = null;
    touchDetected.current = false;
    ReactDOM.flushSync(() => {
      setMaybeSwiping(false);
    });
    if (!swipeInstance.current.isSwiping) {
      swipeInstance.current.isSwiping = null;
      return;
    }
    swipeInstance.current.isSwiping = null;
    const anchorRtl = getAnchor(theme, anchor);
    const horizontal = isHorizontal(anchor);
    let current;
    if (horizontal) {
      current = calculateCurrentX(anchorRtl, nativeEvent.changedTouches, ownerDocument(nativeEvent.currentTarget));
    } else {
      current = calculateCurrentY(anchorRtl, nativeEvent.changedTouches, ownerWindow(nativeEvent.currentTarget));
    }
    const startLocation = horizontal ? swipeInstance.current.startX : swipeInstance.current.startY;
    const maxTranslate = getMaxTranslate(horizontal, paperRef.current);
    const currentTranslate = getTranslate(current, startLocation, open, maxTranslate);
    const translateRatio = currentTranslate / maxTranslate;
    if (Math.abs(swipeInstance.current.velocity) > minFlingVelocity) {
      calculatedDurationRef.current = Math.abs((maxTranslate - currentTranslate) / swipeInstance.current.velocity) * 1e3;
    }
    if (open) {
      if (swipeInstance.current.velocity > minFlingVelocity || translateRatio > hysteresis) {
        onClose();
      } else {
        setPosition(0, {
          mode: "exit"
        });
      }
      return;
    }
    if (swipeInstance.current.velocity < -minFlingVelocity || 1 - translateRatio > hysteresis) {
      onOpen();
    } else {
      setPosition(getMaxTranslate(horizontal, paperRef.current), {
        mode: "enter"
      });
    }
  });
  const startMaybeSwiping = (force = false) => {
    if (!maybeSwiping) {
      if (force || !(disableDiscovery && allowSwipeInChildren)) {
        ReactDOM.flushSync(() => {
          setMaybeSwiping(true);
        });
      }
      const horizontalSwipe = isHorizontal(anchor);
      if (!open && paperRef.current) {
        setPosition(getMaxTranslate(horizontalSwipe, paperRef.current) + (disableDiscovery ? 15 : -DRAG_STARTED_SIGNAL), {
          changeTransition: false
        });
      }
      swipeInstance.current.velocity = 0;
      swipeInstance.current.lastTime = null;
      swipeInstance.current.lastTranslate = null;
      swipeInstance.current.paperHit = false;
      touchDetected.current = true;
    }
  };
  const handleBodyTouchMove = useEventCallback((nativeEvent) => {
    if (!paperRef.current || !touchDetected.current) {
      return;
    }
    if (claimedSwipeInstance !== null && claimedSwipeInstance !== swipeInstance.current) {
      return;
    }
    startMaybeSwiping(true);
    const anchorRtl = getAnchor(theme, anchor);
    const horizontalSwipe = isHorizontal(anchor);
    const currentX = calculateCurrentX(anchorRtl, nativeEvent.touches, ownerDocument(nativeEvent.currentTarget));
    const currentY = calculateCurrentY(anchorRtl, nativeEvent.touches, ownerWindow(nativeEvent.currentTarget));
    if (open && paperRef.current.contains(nativeEvent.target) && claimedSwipeInstance === null) {
      const domTreeShapes = getDomTreeShapes(nativeEvent.target, paperRef.current);
      const hasNativeHandler = computeHasNativeHandler({
        domTreeShapes,
        start: horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY,
        current: horizontalSwipe ? currentX : currentY,
        anchor
      });
      if (hasNativeHandler) {
        claimedSwipeInstance = true;
        return;
      }
      claimedSwipeInstance = swipeInstance.current;
    }
    if (swipeInstance.current.isSwiping == null) {
      const dx = Math.abs(currentX - swipeInstance.current.startX);
      const dy = Math.abs(currentY - swipeInstance.current.startY);
      const definitelySwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;
      if (definitelySwiping && nativeEvent.cancelable) {
        nativeEvent.preventDefault();
      }
      if (definitelySwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
        swipeInstance.current.isSwiping = definitelySwiping;
        if (!definitelySwiping) {
          handleBodyTouchEnd(nativeEvent);
          return;
        }
        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY;
        if (!disableDiscovery && !open) {
          if (horizontalSwipe) {
            swipeInstance.current.startX -= DRAG_STARTED_SIGNAL;
          } else {
            swipeInstance.current.startY -= DRAG_STARTED_SIGNAL;
          }
        }
      }
    }
    if (!swipeInstance.current.isSwiping) {
      return;
    }
    const maxTranslate = getMaxTranslate(horizontalSwipe, paperRef.current);
    let startLocation = horizontalSwipe ? swipeInstance.current.startX : swipeInstance.current.startY;
    if (open && !swipeInstance.current.paperHit) {
      startLocation = Math.min(startLocation, maxTranslate);
    }
    const translate = getTranslate(horizontalSwipe ? currentX : currentY, startLocation, open, maxTranslate);
    if (open) {
      if (!swipeInstance.current.paperHit) {
        const paperHit = horizontalSwipe ? currentX < maxTranslate : currentY < maxTranslate;
        if (paperHit) {
          swipeInstance.current.paperHit = true;
          swipeInstance.current.startX = currentX;
          swipeInstance.current.startY = currentY;
        } else {
          return;
        }
      } else if (translate === 0) {
        swipeInstance.current.startX = currentX;
        swipeInstance.current.startY = currentY;
      }
    }
    if (swipeInstance.current.lastTranslate === null) {
      swipeInstance.current.lastTranslate = translate;
      swipeInstance.current.lastTime = performance.now() + 1;
    }
    const velocity = (translate - swipeInstance.current.lastTranslate) / (performance.now() - swipeInstance.current.lastTime) * 1e3;
    swipeInstance.current.velocity = swipeInstance.current.velocity * 0.4 + velocity * 0.6;
    swipeInstance.current.lastTranslate = translate;
    swipeInstance.current.lastTime = performance.now();
    if (nativeEvent.cancelable) {
      nativeEvent.preventDefault();
    }
    setPosition(translate);
  });
  const handleBodyTouchStart = useEventCallback((nativeEvent) => {
    if (nativeEvent.defaultPrevented) {
      return;
    }
    if (nativeEvent.defaultMuiPrevented) {
      return;
    }
    if (open && (hideBackdrop || !backdropRef.current.contains(nativeEvent.target)) && !paperRef.current.contains(nativeEvent.target)) {
      return;
    }
    const anchorRtl = getAnchor(theme, anchor);
    const horizontalSwipe = isHorizontal(anchor);
    const currentX = calculateCurrentX(anchorRtl, nativeEvent.touches, ownerDocument(nativeEvent.currentTarget));
    const currentY = calculateCurrentY(anchorRtl, nativeEvent.touches, ownerWindow(nativeEvent.currentTarget));
    if (!open) {
      if (disableSwipeToOpen || !(nativeEvent.target === swipeAreaRef.current || paperRef.current?.contains(nativeEvent.target) && (typeof allowSwipeInChildren === "function" ? allowSwipeInChildren(nativeEvent, swipeAreaRef.current, paperRef.current) : allowSwipeInChildren))) {
        return;
      }
      if (horizontalSwipe) {
        if (currentX > swipeAreaWidth) {
          return;
        }
      } else if (currentY > swipeAreaWidth) {
        return;
      }
    }
    nativeEvent.defaultMuiPrevented = true;
    claimedSwipeInstance = null;
    swipeInstance.current.startX = currentX;
    swipeInstance.current.startY = currentY;
    startMaybeSwiping();
  });
  React$o.useEffect(() => {
    if (variant === "temporary") {
      const doc = ownerDocument(paperRef.current);
      doc.addEventListener("touchstart", handleBodyTouchStart);
      doc.addEventListener("touchmove", handleBodyTouchMove, {
        passive: !open
      });
      doc.addEventListener("touchend", handleBodyTouchEnd);
      return () => {
        doc.removeEventListener("touchstart", handleBodyTouchStart);
        doc.removeEventListener("touchmove", handleBodyTouchMove, {
          passive: !open
        });
        doc.removeEventListener("touchend", handleBodyTouchEnd);
      };
    }
    return void 0;
  }, [variant, open, handleBodyTouchStart, handleBodyTouchMove, handleBodyTouchEnd]);
  React$o.useEffect(() => () => {
    if (claimedSwipeInstance === swipeInstance.current) {
      claimedSwipeInstance = null;
    }
  }, []);
  React$o.useEffect(() => {
    if (!open) {
      setMaybeSwiping(false);
    }
  }, [open]);
  const [SwipeAreaSlot, swipeAreaSlotProps] = useSlot("swipeArea", {
    ref: swipeAreaRef,
    elementType: SwipeArea,
    ownerState: props,
    externalForwardedProps: {
      slots,
      slotProps: {
        swipeArea: SwipeAreaProps,
        ...slotProps
      }
    },
    additionalProps: {
      width: swipeAreaWidth,
      anchor
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React$o.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, {
      open: variant === "temporary" && maybeSwiping ? true : open,
      variant,
      ModalProps: {
        BackdropProps: {
          ...BackdropProps,
          ref: backdropRef
        },
        // Ensures that paperRef.current will be defined inside the touch start event handler
        // See https://github.com/mui/material-ui/issues/30414 for more information
        ...variant === "temporary" && {
          keepMounted: true
        },
        ...ModalPropsProp
      },
      hideBackdrop,
      anchor,
      transitionDuration: calculatedDurationRef.current || transitionDuration,
      onClose,
      ref,
      slots,
      slotProps: {
        ...slotProps,
        backdrop: mergeSlotProps(slotProps.backdrop ?? BackdropProps, {
          ref: backdropRef
        }),
        paper: mergeSlotProps(slotProps.paper ?? PaperProps, {
          style: {
            pointerEvents: variant === "temporary" && !open && !allowSwipeInChildren ? "none" : ""
          },
          ref: handleRef
        })
      },
      ...other
    }), !disableSwipeToOpen && variant === "temporary" && /* @__PURE__ */ jsxRuntimeExports.jsx(NoSsr, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwipeAreaSlot, {
        ...swipeAreaSlotProps
      })
    })]
  });
});

function getSwitchUtilityClass(slot) {
  return generateUtilityClass('MuiSwitch', slot);
}
const switchClasses = generateUtilityClasses('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);

const React$n = await importShared('react');
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    switchBase: ["switchBase", `color${capitalize(color)}`, checked && "checked", disabled && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const SwitchRoot = styled$2("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${switchClasses.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${switchClasses.switchBase}`]: {
        padding: 4,
        [`&.${switchClasses.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
});
const SwitchSwitchBase = styled$2(SwitchBase, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${switchClasses.input}`]: styles.input
    }, ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(["left", "transform"], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${switchClasses.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${switchClasses.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
    opacity: 0.5
  },
  [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${switchClasses.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), memoTheme(({
  theme
}) => ({
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${switchClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main,
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${switchClasses.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.55)}`
        }
      },
      [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
        backgroundColor: (theme.vars || theme).palette[color].main
      }
    }
  }))]
})));
const SwitchTrack = styled$2("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(memoTheme(({
  theme
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(["opacity", "background-color"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? 0.38 : 0.3}`
})));
const SwitchThumb = styled$2("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (props, styles) => styles.thumb
})(memoTheme(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})));
const Switch = /* @__PURE__ */ React$n.forwardRef(function Switch2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSwitch"
  });
  const {
    className,
    color = "primary",
    edge = false,
    size = "medium",
    sx,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    edge,
    size
  };
  const classes = useUtilityClasses$g(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    className: clsx(classes.root, className),
    elementType: SwitchRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      sx
    }
  });
  const [ThumbSlot, thumbSlotProps] = useSlot("thumb", {
    className: classes.thumb,
    elementType: SwitchThumb,
    externalForwardedProps,
    ownerState
  });
  const icon = /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbSlot, {
    ...thumbSlotProps
  });
  const [TrackSlot, trackSlotProps] = useSlot("track", {
    className: classes.track,
    elementType: SwitchTrack,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchSwitchBase, {
      type: "checkbox",
      icon,
      checkedIcon: icon,
      ref,
      ownerState,
      ...other,
      classes: {
        ...classes,
        root: classes.switchBase
      },
      slots: {
        ...slots.switchBase && {
          root: slots.switchBase
        },
        ...slots.input && {
          input: slots.input
        }
      },
      slotProps: {
        ...slotProps.switchBase && {
          root: typeof slotProps.switchBase === "function" ? slotProps.switchBase(ownerState) : slotProps.switchBase
        },
        ...slotProps.input && {
          input: typeof slotProps.input === "function" ? slotProps.input(ownerState) : slotProps.input
        }
      }
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TrackSlot, {
      ...trackSlotProps
    })]
  });
});

function getTabUtilityClass(slot) {
  return generateUtilityClass('MuiTab', slot);
}
const tabClasses = generateUtilityClasses('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper', 'icon']);

const React$m = await importShared('react');
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return composeClasses(slots, getTabUtilityClass, classes);
};
const TabRoot = styled$2(ButtonBase, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped, {
      [`& .${tabClasses.iconWrapper}`]: styles.iconWrapper
    }, {
      [`& .${tabClasses.icon}`]: styles.icon
    }];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState
    }) => ownerState.label && (ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.label && ownerState.iconPosition !== "top" && ownerState.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.icon && ownerState.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "top",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "bottom",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "start",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginRight: theme.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "end",
    style: {
      [`& > .${tabClasses.icon}`]: {
        marginLeft: theme.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${tabClasses.selected}`]: {
        opacity: 1
      },
      [`&.${tabClasses.disabled}`]: {
        opacity: (theme.vars || theme).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses.selected}`]: {
        color: (theme.vars || theme).palette.primary.main
      },
      [`&.${tabClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses.selected}`]: {
        color: (theme.vars || theme).palette.secondary.main
      },
      [`&.${tabClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.wrapped,
    style: {
      fontSize: theme.typography.pxToRem(12)
    }
  }]
})));
const Tab = /* @__PURE__ */ React$m.forwardRef(function Tab2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTab"
  });
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = "top",
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = "inherit",
    value,
    wrapped = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  };
  const classes = useUtilityClasses$f(ownerState);
  const icon = iconProp && label && /* @__PURE__ */ React$m.isValidElement(iconProp) ? /* @__PURE__ */ React$m.cloneElement(iconProp, {
    className: clsx(classes.icon, iconProp.props.className)
  }) : iconProp;
  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabRoot, {
    focusRipple: !disableFocusRipple,
    className: clsx(classes.root, className),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState,
    tabIndex: selected ? 0 : -1,
    ...other,
    children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React$m.Fragment, {
      children: [icon, label]
    }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(React$m.Fragment, {
      children: [label, icon]
    }), indicator]
  });
});

const React$l = await importShared('react');

const TableContext = /* @__PURE__ */ React$l.createContext();

function getTableUtilityClass(slot) {
  return generateUtilityClass('MuiTable', slot);
}
const tableClasses = generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);

const React$k = await importShared('react');
const useUtilityClasses$e = (ownerState) => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", stickyHeader && "stickyHeader"]
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
const TableRoot = styled$2("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
})));
const defaultComponent$4 = "table";
const Table = /* @__PURE__ */ React$k.forwardRef(function Table2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTable"
  });
  const {
    className,
    component = defaultComponent$4,
    padding = "normal",
    size = "medium",
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses$e(ownerState);
  const table = React$k.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContext.Provider, {
    value: table,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRoot, {
      as: component,
      role: component === defaultComponent$4 ? null : "table",
      ref,
      className: clsx(classes.root, className),
      ownerState,
      ...other
    })
  });
});

const React$j = await importShared('react');

const Tablelvl2Context = /* @__PURE__ */ React$j.createContext();

function getTableBodyUtilityClass(slot) {
  return generateUtilityClass('MuiTableBody', slot);
}
const tableBodyClasses = generateUtilityClasses('MuiTableBody', ['root']);

const React$i = await importShared('react');
const useUtilityClasses$d = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
const TableBodyRoot = styled$2("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-row-group"
});
const tablelvl2$2 = {
  variant: "body"
};
const defaultComponent$3 = "tbody";
const TableBody = /* @__PURE__ */ React$i.forwardRef(function TableBody2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableBody"
  });
  const {
    className,
    component = defaultComponent$3,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$d(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
    value: tablelvl2$2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBodyRoot, {
      className: clsx(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent$3 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});

function getTableCellUtilityClass(slot) {
  return generateUtilityClass('MuiTableCell', slot);
}
const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);

const React$h = await importShared('react');
const useUtilityClasses$c = (ownerState) => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize(align)}`, padding !== "normal" && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};
const TableCellRoot = styled$2("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== "normal" && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== "inherit" && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${tableCellClasses.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (theme.vars || theme).palette.background.default
    }
  }]
})));
const TableCell = /* @__PURE__ */ React$h.forwardRef(function TableCell2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableCell"
  });
  const {
    align = "inherit",
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp,
    ...other
  } = props;
  const table = React$h.useContext(TableContext);
  const tablelvl2 = React$h.useContext(Tablelvl2Context);
  const isHeadCell = tablelvl2 && tablelvl2.variant === "head";
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? "th" : "td";
  }
  let scope = scopeProp;
  if (component === "td") {
    scope = void 0;
  } else if (!scope && isHeadCell) {
    scope = "col";
  }
  const variant = variantProp || tablelvl2 && tablelvl2.variant;
  const ownerState = {
    ...props,
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : "normal"),
    size: sizeProp || (table && table.size ? table.size : "medium"),
    sortDirection,
    stickyHeader: variant === "head" && table && table.stickyHeader,
    variant
  };
  const classes = useUtilityClasses$c(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCellRoot, {
    as: component,
    ref,
    className: clsx(classes.root, className),
    "aria-sort": ariaSort,
    scope,
    ownerState,
    ...other
  });
});

function getTableContainerUtilityClass(slot) {
  return generateUtilityClass('MuiTableContainer', slot);
}
const tableContainerClasses = generateUtilityClasses('MuiTableContainer', ['root']);

const React$g = await importShared('react');
const useUtilityClasses$b = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableContainerUtilityClass, classes);
};
const TableContainerRoot = styled$2("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  width: "100%",
  overflowX: "auto"
});
const TableContainer = /* @__PURE__ */ React$g.forwardRef(function TableContainer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableContainer"
  });
  const {
    className,
    component = "div",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$b(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainerRoot, {
    ref,
    as: component,
    className: clsx(classes.root, className),
    ownerState,
    ...other
  });
});

function getTableFooterUtilityClass(slot) {
  return generateUtilityClass('MuiTableFooter', slot);
}
const tableFooterClasses = generateUtilityClasses('MuiTableFooter', ['root']);

const React$f = await importShared('react');
const useUtilityClasses$a = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableFooterUtilityClass, classes);
};
const TableFooterRoot = styled$2("tfoot", {
  name: "MuiTableFooter",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-footer-group"
});
const tablelvl2$1 = {
  variant: "footer"
};
const defaultComponent$2 = "tfoot";
const TableFooter = /* @__PURE__ */ React$f.forwardRef(function TableFooter2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableFooter"
  });
  const {
    className,
    component = defaultComponent$2,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$a(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
    value: tablelvl2$1,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableFooterRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref,
      role: component === defaultComponent$2 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});

function getTableHeadUtilityClass(slot) {
  return generateUtilityClass('MuiTableHead', slot);
}
const tableHeadClasses = generateUtilityClasses('MuiTableHead', ['root']);

const React$e = await importShared('react');
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableHeadUtilityClass, classes);
};
const TableHeadRoot = styled$2("thead", {
  name: "MuiTableHead",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-header-group"
});
const tablelvl2 = {
  variant: "head"
};
const defaultComponent$1 = "thead";
const TableHead = /* @__PURE__ */ React$e.forwardRef(function TableHead2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableHead"
  });
  const {
    className,
    component = defaultComponent$1,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeadRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref,
      role: component === defaultComponent$1 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});

function getToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiToolbar', slot);
}
const toolbarClasses = generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);

const React$d = await importShared('react');
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ["root", !disableGutters && "gutters", variant]
  };
  return composeClasses(slots, getToolbarUtilityClass, classes);
};
const ToolbarRoot = styled$2("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: theme.mixins.toolbar
  }]
})));
const Toolbar = /* @__PURE__ */ React$d.forwardRef(function Toolbar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiToolbar"
  });
  const {
    className,
    component = "div",
    disableGutters = false,
    variant = "regular",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    disableGutters,
    variant
  };
  const classes = useUtilityClasses$8(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});

await importShared('react');
const KeyboardArrowLeft = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft');

await importShared('react');
const KeyboardArrowRight = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight');

const React$c = await importShared('react');
const TablePaginationActions = /* @__PURE__ */ React$c.forwardRef(function TablePaginationActions2(props, ref) {
  const {
    backIconButtonProps,
    count,
    disabled = false,
    getItemAriaLabel,
    nextIconButtonProps,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton,
    showLastButton,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const isRtl = useRtl();
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const FirstButton = slots.firstButton ?? IconButton;
  const LastButton = slots.lastButton ?? IconButton;
  const NextButton = slots.nextButton ?? IconButton;
  const PreviousButton = slots.previousButton ?? IconButton;
  const FirstButtonIcon = slots.firstButtonIcon ?? FirstPageIconDefault;
  const LastButtonIcon = slots.lastButtonIcon ?? LastPageIconDefault;
  const NextButtonIcon = slots.nextButtonIcon ?? KeyboardArrowRight;
  const PreviousButtonIcon = slots.previousButtonIcon ?? KeyboardArrowLeft;
  const FirstButtonSlot = isRtl ? LastButton : FirstButton;
  const PreviousButtonSlot = isRtl ? NextButton : PreviousButton;
  const NextButtonSlot = isRtl ? PreviousButton : NextButton;
  const LastButtonSlot = isRtl ? FirstButton : LastButton;
  const firstButtonSlotProps = isRtl ? slotProps.lastButton : slotProps.firstButton;
  const previousButtonSlotProps = isRtl ? slotProps.nextButton : slotProps.previousButton;
  const nextButtonSlotProps = isRtl ? slotProps.previousButton : slotProps.nextButton;
  const lastButtonSlotProps = isRtl ? slotProps.firstButton : slotProps.lastButton;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    ref,
    ...other,
    children: [showFirstButton && /* @__PURE__ */ jsxRuntimeExports.jsx(FirstButtonSlot, {
      onClick: handleFirstPageButtonClick,
      disabled: disabled || page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page),
      ...firstButtonSlotProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(LastButtonIcon, {
        ...slotProps.lastButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FirstButtonIcon, {
        ...slotProps.firstButtonIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(PreviousButtonSlot, {
      onClick: handleBackButtonClick,
      disabled: disabled || page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page),
      ...previousButtonSlotProps ?? backIconButtonProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(NextButtonIcon, {
        ...slotProps.nextButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PreviousButtonIcon, {
        ...slotProps.previousButtonIcon
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(NextButtonSlot, {
      onClick: handleNextButtonClick,
      disabled: disabled || (count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false),
      color: "inherit",
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page),
      ...nextButtonSlotProps ?? nextIconButtonProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(PreviousButtonIcon, {
        ...slotProps.previousButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(NextButtonIcon, {
        ...slotProps.nextButtonIcon
      })
    }), showLastButton && /* @__PURE__ */ jsxRuntimeExports.jsx(LastButtonSlot, {
      onClick: handleLastPageButtonClick,
      disabled: disabled || page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page),
      ...lastButtonSlotProps,
      children: isRtl ? /* @__PURE__ */ jsxRuntimeExports.jsx(FirstButtonIcon, {
        ...slotProps.firstButtonIcon
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LastButtonIcon, {
        ...slotProps.lastButtonIcon
      })
    })]
  });
});

function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass('MuiTablePagination', slot);
}
const tablePaginationClasses = generateUtilityClasses('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);

var _InputBase;
const React$b = await importShared('react');
const {createElement:_createElement} = await importShared('react');

const TablePaginationRoot = styled$2(TableCell, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(memoTheme(({
  theme
}) => ({
  overflow: "auto",
  color: (theme.vars || theme).palette.text.primary,
  fontSize: theme.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
})));
const TablePaginationToolbar = styled$2(Toolbar, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (props, styles) => ({
    [`& .${tablePaginationClasses.actions}`]: styles.actions,
    ...styles.toolbar
  })
})(memoTheme(({
  theme
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${tablePaginationClasses.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
})));
const TablePaginationSpacer = styled$2("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})({
  flex: "1 1 100%"
});
const TablePaginationSelectLabel = styled$2("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (props, styles) => styles.selectLabel
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  flexShrink: 0
})));
const TablePaginationSelect = styled$2(Select, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (props, styles) => ({
    [`& .${tablePaginationClasses.selectIcon}`]: styles.selectIcon,
    [`& .${tablePaginationClasses.select}`]: styles.select,
    ...styles.input,
    ...styles.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${tablePaginationClasses.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
});
const TablePaginationMenuItem = styled$2(MenuItem, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (props, styles) => styles.menuItem
})({});
const TablePaginationDisplayedRows = styled$2("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (props, styles) => styles.displayedRows
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  flexShrink: 0
})));
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, getTablePaginationUtilityClass, classes);
};
const TablePagination = /* @__PURE__ */ React$b.forwardRef(function TablePagination2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTablePagination"
  });
  const {
    ActionsComponent = TablePaginationActions,
    backIconButtonProps,
    colSpan: colSpanProp,
    component = TableCell,
    count,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = "Rows per page:",
    nextIconButtonProps,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    SelectProps = {},
    showFirstButton = false,
    showLastButton = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$7(ownerState);
  const selectProps = slotProps?.select ?? SelectProps;
  const MenuItemComponent = selectProps.native ? "option" : TablePaginationMenuItem;
  let colSpan;
  if (component === TableCell || component === "td") {
    colSpan = colSpanProp || 1e3;
  }
  const selectId = useId(selectProps.id);
  const labelId = useId(selectProps.labelId);
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: TablePaginationRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      component,
      ...other
    },
    ownerState,
    additionalProps: {
      colSpan
    }
  });
  const [ToolbarSlot, toolbarSlotProps] = useSlot("toolbar", {
    className: classes.toolbar,
    elementType: TablePaginationToolbar,
    externalForwardedProps,
    ownerState
  });
  const [SpacerSlot, spacerSlotProps] = useSlot("spacer", {
    className: classes.spacer,
    elementType: TablePaginationSpacer,
    externalForwardedProps,
    ownerState
  });
  const [SelectLabelSlot, selectLabelSlotProps] = useSlot("selectLabel", {
    className: classes.selectLabel,
    elementType: TablePaginationSelectLabel,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      id: labelId
    }
  });
  const [SelectSlot, selectSlotProps] = useSlot("select", {
    className: classes.select,
    elementType: TablePaginationSelect,
    externalForwardedProps,
    ownerState
  });
  const [MenuItemSlot, menuItemSlotProps] = useSlot("menuItem", {
    className: classes.menuItem,
    elementType: MenuItemComponent,
    externalForwardedProps,
    ownerState
  });
  const [DisplayedRows, displayedRowsProps] = useSlot("displayedRows", {
    className: classes.displayedRows,
    elementType: TablePaginationDisplayedRows,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
    ...rootSlotProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ToolbarSlot, {
      ...toolbarSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SpacerSlot, {
        ...spacerSlotProps
      }), rowsPerPageOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabelSlot, {
        ...selectLabelSlotProps,
        children: labelRowsPerPage
      }), rowsPerPageOptions.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectSlot, {
        variant: "standard",
        ...!selectProps.variant && {
          input: _InputBase || (_InputBase = /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {}))
        },
        value: rowsPerPage,
        onChange: onRowsPerPageChange,
        id: selectId,
        labelId,
        ...selectProps,
        classes: {
          ...selectProps.classes,
          // TODO v5 remove `classes.input`
          root: clsx(classes.input, classes.selectRoot, (selectProps.classes || {}).root),
          select: clsx(classes.select, (selectProps.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: clsx(classes.selectIcon, (selectProps.classes || {}).icon)
        },
        disabled,
        ...selectSlotProps,
        children: rowsPerPageOptions.map((rowsPerPageOption) => /* @__PURE__ */ _createElement(MenuItemSlot, {
          ...menuItemSlotProps,
          key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }, rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayedRows, {
        ...displayedRowsProps,
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps,
        count,
        nextIconButtonProps,
        onPageChange,
        page,
        rowsPerPage,
        showFirstButton,
        showLastButton,
        slotProps: slotProps.actions,
        slots: slots.actions,
        getItemAriaLabel,
        disabled
      })]
    })
  });
});

function getTableRowUtilityClass(slot) {
  return generateUtilityClass('MuiTableRow', slot);
}
const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);

const React$a = await importShared('react');
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
const TableRowRoot = styled$2("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
  }
})(memoTheme(({
  theme
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    }
  }
})));
const defaultComponent = "tr";
const TableRow = /* @__PURE__ */ React$a.forwardRef(function TableRow2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableRow"
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false,
    ...other
  } = props;
  const tablelvl2 = React$a.useContext(Tablelvl2Context);
  const ownerState = {
    ...props,
    component,
    hover,
    selected,
    head: tablelvl2 && tablelvl2.variant === "head",
    footer: tablelvl2 && tablelvl2.variant === "footer"
  };
  const classes = useUtilityClasses$6(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableRowRoot, {
    as: component,
    ref,
    className: clsx(classes.root, className),
    role: component === defaultComponent ? null : "row",
    ownerState,
    ...other
  });
});

await importShared('react');
const ArrowDownwardIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward');

function getTableSortLabelUtilityClass(slot) {
  return generateUtilityClass('MuiTableSortLabel', slot);
}
const tableSortLabelClasses = generateUtilityClasses('MuiTableSortLabel', ['root', 'active', 'icon', 'iconDirectionDesc', 'iconDirectionAsc', 'directionDesc', 'directionAsc']);

const React$9 = await importShared('react');
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes,
    direction,
    active
  } = ownerState;
  const slots = {
    root: ["root", active && "active", `direction${capitalize(direction)}`],
    icon: ["icon", `iconDirection${capitalize(direction)}`]
  };
  return composeClasses(slots, getTableSortLabelUtilityClass, classes);
};
const TableSortLabelRoot = styled$2(ButtonBase, {
  name: "MuiTableSortLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.active && styles.active];
  }
})(memoTheme(({
  theme
}) => ({
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "flex-start",
  flexDirection: "inherit",
  alignItems: "center",
  "&:focus": {
    color: (theme.vars || theme).palette.text.secondary
  },
  "&:hover": {
    color: (theme.vars || theme).palette.text.secondary,
    [`& .${tableSortLabelClasses.icon}`]: {
      opacity: 0.5
    }
  },
  [`&.${tableSortLabelClasses.active}`]: {
    color: (theme.vars || theme).palette.text.primary,
    [`& .${tableSortLabelClasses.icon}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.text.secondary
    }
  }
})));
const TableSortLabelIcon = styled$2("span", {
  name: "MuiTableSortLabel",
  slot: "Icon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, styles[`iconDirection${capitalize(ownerState.direction)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  fontSize: 18,
  marginRight: 4,
  marginLeft: 4,
  opacity: 0,
  transition: theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.shorter
  }),
  userSelect: "none",
  variants: [{
    props: {
      direction: "desc"
    },
    style: {
      transform: "rotate(0deg)"
    }
  }, {
    props: {
      direction: "asc"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
})));
const TableSortLabel = /* @__PURE__ */ React$9.forwardRef(function TableSortLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableSortLabel"
  });
  const {
    active = false,
    children,
    className,
    direction = "asc",
    hideSortIcon = false,
    IconComponent = ArrowDownwardIcon,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    active,
    direction,
    hideSortIcon,
    IconComponent
  };
  const classes = useUtilityClasses$5(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: TableSortLabelRoot,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.root, className),
    ref
  });
  const [IconSlot, iconProps] = useSlot("icon", {
    elementType: TableSortLabelIcon,
    externalForwardedProps,
    ownerState,
    className: classes.icon
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    disableRipple: true,
    component: "span",
    ...rootProps,
    ...other,
    children: [children, hideSortIcon && !active ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, {
      as: IconComponent,
      ...iconProps
    })]
  });
});

function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {}) {
  const {
    ease = easeInOutSin,
    duration = 300 // standard
  } = options;
  let start = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = timestamp => {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}

const React$8 = await importShared('react');
const styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  const {
    onChange,
    ...other
  } = props;
  const scrollbarHeight = React$8.useRef();
  const nodeRef = React$8.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  useEnhancedEffect(() => {
    const handleResize = debounce$1(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React$8.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    style: styles,
    ...other,
    ref: nodeRef
  });
}

function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass('MuiTabScrollButton', slot);
}
const tabScrollButtonClasses = generateUtilityClasses('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);

const React$7 = await importShared('react');
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled"]
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = styled$2(ButtonBase, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
});
const TabScrollButton = /* @__PURE__ */ React$7.forwardRef(function TabScrollButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTabScrollButton"
  });
  const {
    className,
    slots = {},
    slotProps = {},
    direction,
    orientation,
    disabled,
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = {
    isRtl,
    ...props
  };
  const classes = useUtilityClasses$4(ownerState);
  const StartButtonIcon = slots.StartScrollButtonIcon ?? KeyboardArrowLeft;
  const EndButtonIcon = slots.EndScrollButtonIcon ?? KeyboardArrowRight;
  const startButtonIconProps = useSlotProps({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  const endButtonIconProps = useSlotProps({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabScrollButtonRoot, {
    component: "div",
    className: clsx(classes.root, className),
    ref,
    role: null,
    ownerState,
    tabIndex: null,
    ...other,
    style: {
      ...other.style,
      ...orientation === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${isRtl ? -90 : 90}deg)`
      }
    },
    children: direction === "left" ? /* @__PURE__ */ jsxRuntimeExports.jsx(StartButtonIcon, {
      ...startButtonIconProps
    }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EndButtonIcon, {
      ...endButtonIconProps
    })
  });
});

function getTabsUtilityClass(slot) {
  return generateUtilityClass('MuiTabs', slot);
}
const tabsClasses = generateUtilityClasses('MuiTabs', ['root', 'vertical', 'list', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);

const React$6 = await importShared('react');
const nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
const previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
const useUtilityClasses$3 = (ownerState) => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ["root", vertical && "vertical"],
    scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
    list: ["list", "flexContainer", vertical && "flexContainerVertical", vertical && "vertical", centered && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
    scrollableX: [scrollableX && "scrollableX"],
    hideScrollbar: [hideScrollbar && "hideScrollbar"]
  };
  return composeClasses(slots, getTabsUtilityClass, classes);
};
const TabsRoot = styled$2("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${tabsClasses.scrollButtons}`]: styles.scrollButtons
    }, {
      [`& .${tabsClasses.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
    }, styles.root, ownerState.vertical && styles.vertical];
  }
})(memoTheme(({
  theme
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollButtonsHideMobile,
    style: {
      [`& .${tabsClasses.scrollButtons}`]: {
        [theme.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
})));
const TabsScroller = styled$2("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.scroller, ownerState.fixed && styles.fixed, ownerState.hideScrollbar && styles.hideScrollbar, ownerState.scrollableX && styles.scrollableX, ownerState.scrollableY && styles.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
});
const List = styled$2("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.list, styles.flexContainer, ownerState.vertical && styles.flexContainerVertical, ownerState.centered && styles.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.centered,
    style: {
      justifyContent: "center"
    }
  }]
});
const TabsIndicator = styled$2("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (props, styles) => styles.indicator
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: theme.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.secondary.main
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
})));
const TabsScrollbarSize = styled$2(ScrollbarSize)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
});
const defaultIndicatorStyle = {};
const Tabs = /* @__PURE__ */ React$6.forwardRef(function Tabs2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTabs"
  });
  const theme = useTheme$3();
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = "div",
    allowScrollButtonsMobile = false,
    indicatorColor = "primary",
    onChange,
    orientation = "horizontal",
    ScrollButtonComponent,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons = "auto",
    selectionFollowsFocus,
    slots = {},
    slotProps = {},
    TabIndicatorProps = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor = "primary",
    value,
    variant = "standard",
    visibleScrollbar = false,
    ...other
  } = props;
  const scrollable = variant === "scrollable";
  const vertical = orientation === "vertical";
  const scrollStart = vertical ? "scrollTop" : "scrollLeft";
  const start = vertical ? "top" : "left";
  const end = vertical ? "bottom" : "right";
  const clientSize = vertical ? "clientHeight" : "clientWidth";
  const size = vertical ? "height" : "width";
  const ownerState = {
    ...props,
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  };
  const classes = useUtilityClasses$3(ownerState);
  const startScrollButtonIconProps = useSlotProps({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = useSlotProps({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  const [mounted, setMounted] = React$6.useState(false);
  const [indicatorStyle, setIndicatorStyle] = React$6.useState(defaultIndicatorStyle);
  const [displayStartScroll, setDisplayStartScroll] = React$6.useState(false);
  const [displayEndScroll, setDisplayEndScroll] = React$6.useState(false);
  const [updateScrollObserver, setUpdateScrollObserver] = React$6.useState(false);
  const [scrollerStyle, setScrollerStyle] = React$6.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  });
  const valueToIndex = /* @__PURE__ */ new Map();
  const tabsRef = React$6.useRef(null);
  const tabListRef = React$6.useRef(null);
  const externalForwardedProps = {
    slots,
    slotProps: {
      indicator: TabIndicatorProps,
      scrollButton: TabScrollButtonProps,
      ...slotProps
    }
  };
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children2 = tabListRef.current.children;
      if (children2.length > 0) {
        const tab = children2[valueToIndex.get(value)];
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = useEventCallback(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = "top";
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? "right" : "left";
      if (tabMeta && tabsMeta) {
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + tabsMeta.scrollLeft);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };
    if (typeof indicatorStyle[startIndicator] !== "number" || typeof indicatorStyle[size] !== "number") {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children2 = Array.from(tabListRef.current.children);
    for (let i = 0; i < children2.length; i += 1) {
      const tab = children2[i];
      if (totalSize + tab[clientSize] > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };
  const [ScrollbarSlot, {
    onChange: scrollbarOnChange,
    ...scrollbarSlotProps
  }] = useSlot("scrollbar", {
    className: clsx(classes.scrollableX, classes.hideScrollbar),
    elementType: TabsScrollbarSize,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const handleScrollbarSizeChange = React$6.useCallback((scrollbarWidth) => {
    scrollbarOnChange?.(scrollbarWidth);
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, [scrollbarOnChange]);
  const [ScrollButtonsSlot, scrollButtonSlotProps] = useSlot("scrollButtons", {
    className: clsx(classes.scrollButtons, TabScrollButtonProps.className),
    elementType: TabScrollButton,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      orientation,
      slots: {
        StartScrollButtonIcon: slots.startScrollButtonIcon || slots.StartScrollButtonIcon,
        EndScrollButtonIcon: slots.endScrollButtonIcon || slots.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps,
        endScrollButtonIcon: endScrollButtonIconProps
      }
    }
  });
  const getConditionalElements = () => {
    const conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollbarSlot, {
      ...scrollbarSlotProps,
      onChange: handleScrollbarSizeChange
    }) : null;
    const scrollButtonsActive = displayStartScroll || displayEndScroll;
    const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
    conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonsSlot, {
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayStartScroll,
      ...scrollButtonSlotProps
    }) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollButtonsSlot, {
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayEndScroll,
      ...scrollButtonSlotProps
    }) : null;
    return conditionalElements2;
  };
  const scrollSelectedIntoView = useEventCallback((animation) => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end] > tabsMeta[end]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== false) {
      setUpdateScrollObserver(!updateScrollObserver);
    }
  });
  React$6.useEffect(() => {
    const handleResize = debounce$1(() => {
      if (tabsRef.current) {
        updateIndicatorState();
      }
    });
    let resizeObserver;
    const handleMutation = (records) => {
      records.forEach((record) => {
        record.removedNodes.forEach((item) => {
          resizeObserver?.unobserve(item);
        });
        record.addedNodes.forEach((item) => {
          resizeObserver?.observe(item);
        });
      });
      handleResize();
      updateScrollButtonState();
    };
    const win = ownerWindow(tabsRef.current);
    win.addEventListener("resize", handleResize);
    let mutationObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }
    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabListRef.current, {
        childList: true
      });
    }
    return () => {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
      mutationObserver?.disconnect();
      resizeObserver?.disconnect();
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  React$6.useEffect(() => {
    const tabListChildren = Array.from(tabListRef.current.children);
    const length = tabListChildren.length;
    if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
      const firstTab = tabListChildren[0];
      const lastTab = tabListChildren[length - 1];
      const observerOptions = {
        root: tabsRef.current,
        threshold: 0.99
      };
      const handleScrollButtonStart = (entries) => {
        setDisplayStartScroll(!entries[0].isIntersecting);
      };
      const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
      firstObserver.observe(firstTab);
      const handleScrollButtonEnd = (entries) => {
        setDisplayEndScroll(!entries[0].isIntersecting);
      };
      const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
      lastObserver.observe(lastTab);
      return () => {
        firstObserver.disconnect();
        lastObserver.disconnect();
      };
    }
    return void 0;
  }, [scrollable, scrollButtons, updateScrollObserver, childrenProp?.length]);
  React$6.useEffect(() => {
    setMounted(true);
  }, []);
  React$6.useEffect(() => {
    updateIndicatorState();
  });
  React$6.useEffect(() => {
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  React$6.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const [IndicatorSlot, indicatorSlotProps] = useSlot("indicator", {
    className: clsx(classes.indicator, TabIndicatorProps.className),
    elementType: TabsIndicator,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: indicatorStyle
    }
  });
  const indicator = /* @__PURE__ */ jsxRuntimeExports.jsx(IndicatorSlot, {
    ...indicatorSlotProps
  });
  let childIndex = 0;
  const children = React$6.Children.map(childrenProp, (child) => {
    if (!/* @__PURE__ */ React$6.isValidElement(child)) {
      return null;
    }
    const childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return /* @__PURE__ */ React$6.cloneElement(child, {
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue,
      ...childIndex === 1 && value === false && !child.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  });
  const handleKeyDown = (event) => {
    if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const list = tabListRef.current;
    const currentFocus = ownerDocument(list).activeElement;
    const role = currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    className: clsx(classes.root, className),
    elementType: TabsRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    ownerState
  });
  const [ScrollerSlot, scrollerSlotProps] = useSlot("scroller", {
    ref: tabsRef,
    className: classes.scroller,
    elementType: TabsScroller,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
      }
    }
  });
  const [ListSlot, listSlotProps] = useSlot("list", {
    ref: tabListRef,
    className: clsx(classes.list, classes.flexContainer),
    elementType: List,
    externalForwardedProps,
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        handleKeyDown(event);
        handlers.onKeyDown?.(event);
      }
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollerSlot, {
      ...scrollerSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ListSlot, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === "vertical" ? "vertical" : null,
        role: "tablist",
        ...listSlotProps,
        children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  });
});

function getTextFieldUtilityClass(slot) {
  return generateUtilityClass('MuiTextField', slot);
}
const textFieldClasses = generateUtilityClasses('MuiTextField', ['root']);

const React$5 = await importShared('react');
const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput
};
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = styled$2(FormControl, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
const TextField = /* @__PURE__ */ React$5.forwardRef(function TextField2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps: FormHelperTextPropsProp,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps: InputLabelPropsProp,
    inputProps: inputPropsProp,
    InputProps: InputPropsProp,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps: SelectPropsProp,
    slots = {},
    slotProps = {},
    type,
    value,
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  };
  const classes = useUtilityClasses$2(ownerState);
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: InputPropsProp,
      inputLabel: InputLabelPropsProp,
      htmlInput: inputPropsProp,
      formHelperText: FormHelperTextPropsProp,
      select: SelectPropsProp,
      ...slotProps
    }
  };
  const inputAdditionalProps = {};
  const inputLabelSlotProps = externalForwardedProps.slotProps.inputLabel;
  if (variant === "outlined") {
    if (inputLabelSlotProps && typeof inputLabelSlotProps.shrink !== "undefined") {
      inputAdditionalProps.notched = inputLabelSlotProps.shrink;
    }
    inputAdditionalProps.label = label;
  }
  if (select) {
    if (!SelectPropsProp || !SelectPropsProp.native) {
      inputAdditionalProps.id = void 0;
    }
    inputAdditionalProps["aria-describedby"] = void 0;
  }
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: TextFieldRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    className: clsx(classes.root, className),
    ref,
    additionalProps: {
      disabled,
      error,
      fullWidth,
      required,
      color,
      variant
    }
  });
  const [InputSlot, inputProps] = useSlot("input", {
    elementType: InputComponent,
    externalForwardedProps,
    additionalProps: inputAdditionalProps,
    ownerState
  });
  const [InputLabelSlot, inputLabelProps] = useSlot("inputLabel", {
    elementType: InputLabel,
    externalForwardedProps,
    ownerState
  });
  const [HtmlInputSlot, htmlInputProps] = useSlot("htmlInput", {
    elementType: "input",
    externalForwardedProps,
    ownerState
  });
  const [FormHelperTextSlot, formHelperTextProps] = useSlot("formHelperText", {
    elementType: FormHelperText,
    externalForwardedProps,
    ownerState
  });
  const [SelectSlot, selectProps] = useSlot("select", {
    elementType: Select,
    externalForwardedProps,
    ownerState
  });
  const InputElement = /* @__PURE__ */ jsxRuntimeExports.jsx(InputSlot, {
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps: htmlInputProps,
    slots: {
      input: slots.htmlInput ? HtmlInputSlot : void 0
    },
    ...inputProps
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
    ...rootProps,
    children: [label != null && label !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabelSlot, {
      htmlFor: id,
      id: inputLabelId,
      ...inputLabelProps,
      children: label
    }), select ? /* @__PURE__ */ jsxRuntimeExports.jsx(SelectSlot, {
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement,
      ...selectProps,
      children
    }) : InputElement, helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperTextSlot, {
      id: helperTextId,
      ...formHelperTextProps,
      children: helperText
    })]
  });
});

function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass('MuiToggleButton', slot);
}
const toggleButtonClasses = generateUtilityClasses('MuiToggleButton', ['root', 'disabled', 'selected', 'standard', 'primary', 'secondary', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'fullWidth']);

const React$4 = await importShared('react');

const ToggleButtonGroupContext = /* @__PURE__ */ React$4.createContext({});

const React$3 = await importShared('react');

const ToggleButtonGroupButtonContext = /* @__PURE__ */ React$3.createContext(void 0);

// Determine if the toggle button value matches, or is contained in, the
// candidate group value.
function isValueSelected(value, candidate) {
  if (candidate === undefined || value === undefined) {
    return false;
  }
  if (Array.isArray(candidate)) {
    return candidate.includes(value);
  }
  return value === candidate;
}

const React$2 = await importShared('react');
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    fullWidth,
    selected,
    disabled,
    size,
    color
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled", fullWidth && "fullWidth", `size${capitalize(size)}`, color]
  };
  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};
const ToggleButtonRoot = styled$2(ButtonBase, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.button,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  color: (theme.vars || theme).palette.action.active,
  [`&.${toggleButtonClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${toggleButtonClasses.selected}`]: {
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.text.primary, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${toggleButtonClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette[color].main, theme.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette[color].main, theme.palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: 7,
      fontSize: theme.typography.pxToRem(13)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 15,
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
const ToggleButton = /* @__PURE__ */ React$2.forwardRef(function ToggleButton2(inProps, ref) {
  const {
    value: contextValue,
    ...contextProps
  } = React$2.useContext(ToggleButtonGroupContext);
  const toggleButtonGroupButtonContextPositionClassName = React$2.useContext(ToggleButtonGroupButtonContext);
  const resolvedProps = resolveProps({
    ...contextProps,
    selected: isValueSelected(inProps.value, contextValue)
  }, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiToggleButton"
  });
  const {
    children,
    className,
    color = "standard",
    disabled = false,
    disableFocusRipple = false,
    fullWidth = false,
    onChange,
    onClick,
    selected,
    size = "medium",
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    size
  };
  const classes = useUtilityClasses$1(ownerState);
  const handleChange = (event) => {
    if (onClick) {
      onClick(event, value);
      if (event.defaultPrevented) {
        return;
      }
    }
    if (onChange) {
      onChange(event, value);
    }
  };
  const positionClassName = toggleButtonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonRoot, {
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    disabled,
    focusRipple: !disableFocusRipple,
    ref,
    onClick: handleChange,
    onChange,
    value,
    ownerState,
    "aria-pressed": selected,
    ...other,
    children
  });
});

function getToggleButtonGroupUtilityClass(slot) {
  return generateUtilityClass('MuiToggleButtonGroup', slot);
}
const toggleButtonGroupClasses = generateUtilityClasses('MuiToggleButtonGroup', ['root', 'selected', 'horizontal', 'vertical', 'disabled', 'grouped', 'groupedHorizontal', 'groupedVertical', 'fullWidth', 'firstButton', 'lastButton', 'middleButton']);

const React$1 = await importShared('react');
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    orientation,
    fullWidth,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, fullWidth && "fullWidth"],
    grouped: ["grouped", `grouped${capitalize(orientation)}`, disabled && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return composeClasses(slots, getToggleButtonGroupUtilityClass, classes);
};
const ToggleButtonGroupRoot = styled$2("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${toggleButtonGroupClasses.grouped}`]: styles.grouped
    }, {
      [`& .${toggleButtonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.orientation)}`]
    }, {
      [`& .${toggleButtonGroupClasses.firstButton}`]: styles.firstButton
    }, {
      [`& .${toggleButtonGroupClasses.lastButton}`]: styles.lastButton
    }, {
      [`& .${toggleButtonGroupClasses.middleButton}`]: styles.middleButton
    }, styles.root, ownerState.orientation === "vertical" && styles.vertical, ownerState.fullWidth && styles.fullWidth];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  borderRadius: (theme.vars || theme).shape.borderRadius,
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${toggleButtonGroupClasses.grouped}`]: {
        [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        marginTop: -1,
        borderTop: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled},& .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderTop: "1px solid transparent"
      }
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${toggleButtonGroupClasses.grouped}`]: {
        [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled},& .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderLeft: "1px solid transparent"
      }
    }
  }]
})));
const ToggleButtonGroup = /* @__PURE__ */ React$1.forwardRef(function ToggleButtonGroup2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiToggleButtonGroup"
  });
  const {
    children,
    className,
    color = "standard",
    disabled = false,
    exclusive = false,
    fullWidth = false,
    onChange,
    orientation = "horizontal",
    size = "medium",
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    fullWidth,
    orientation,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const handleChange = React$1.useCallback((event, buttonValue) => {
    if (!onChange) {
      return;
    }
    const index = value && value.indexOf(buttonValue);
    let newValue;
    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(buttonValue) : [buttonValue];
    }
    onChange(event, newValue);
  }, [onChange, value]);
  const handleExclusiveChange = React$1.useCallback((event, buttonValue) => {
    if (!onChange) {
      return;
    }
    onChange(event, value === buttonValue ? null : buttonValue);
  }, [onChange, value]);
  const context = React$1.useMemo(() => ({
    className: classes.grouped,
    onChange: exclusive ? handleExclusiveChange : handleChange,
    value,
    size,
    fullWidth,
    color,
    disabled
  }), [classes.grouped, exclusive, handleExclusiveChange, handleChange, value, size, fullWidth, color, disabled]);
  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;
  const getButtonPositionClassName = (index) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;
    if (isFirstButton && isLastButton) {
      return "";
    }
    if (isFirstButton) {
      return classes.firstButton;
    }
    if (isLastButton) {
      return classes.lastButton;
    }
    return classes.middleButton;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonGroupRoot, {
    role: "group",
    className: clsx(classes.root, className),
    ref,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonGroupContext.Provider, {
      value: context,
      children: validChildren.map((child, index) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButtonGroupButtonContext.Provider, {
          value: getButtonPositionClassName(index),
          children: child
        }, index);
      })
    })
  });
});

const React = await importShared('react');

function defaultTrigger(store, options) {
  const {
    disableHysteresis = false,
    threshold = 100,
    target
  } = options;
  const previous = store.current;
  if (target) {
    // Get vertical scroll
    store.current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
  }
  if (!disableHysteresis && previous !== undefined) {
    if (store.current < previous) {
      return false;
    }
  }
  return store.current > threshold;
}
const defaultTarget = typeof window !== 'undefined' ? window : null;
function useScrollTrigger(options = {}) {
  const {
    getTrigger = defaultTrigger,
    target = defaultTarget,
    ...other
  } = options;
  const store = React.useRef();
  const [trigger, setTrigger] = React.useState(() => getTrigger(store, other));
  React.useEffect(() => {
    if (target === null) {
      return setTrigger(false);
    }
    const handleScroll = () => {
      setTrigger(getTrigger(store, {
        target,
        ...other
      }));
    };
    handleScroll(); // Re-evaluate trigger when dependencies change
    target.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      target.removeEventListener('scroll', handleScroll, {
        passive: true
      });
    };
    // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, getTrigger, JSON.stringify(other)]);
  return trigger;
}

const version = "6.5.0";
const major = Number("6");
const minor = Number("5");
const patch = Number("0");
const prerelease = undefined;

export { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonBase, ButtonGroup, ButtonGroupButtonContext, ButtonGroupContext, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, CssVarsProvider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Experimental_CssVarsProvider, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, FormLabelRoot, GlobalStyles$1 as GlobalStyles, Grid, Grow, Hidden, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List$1 as List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, PopoverPaper, PopoverRoot, Popper, Portal, Radio, RadioGroup, Rating, ScopedCssBaseline, Select, Skeleton, Slide, Slider, SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepContext, StepIcon, StepLabel, Stepper, StepperContext, StyledEngineProvider, SvgIcon, SwipeableDrawer, Switch, THEME_ID, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, FocusTrap as Unstable_TrapFocus, Zoom, accordionActionsClasses, accordionClasses, accordionDetailsClasses, accordionSummaryClasses, adaptV4Theme, alertClasses, alertTitleClasses, alpha, appBarClasses, autocompleteClasses, avatarClasses, avatarGroupClasses, backdropClasses, badgeClasses, bottomNavigationActionClasses, bottomNavigationClasses, boxClasses, breadcrumbsClasses, buttonBaseClasses, buttonClasses, buttonGroupClasses, capitalize, cardActionAreaClasses, cardActionsClasses, cardClasses, cardContentClasses, cardHeaderClasses, cardMediaClasses, checkboxClasses, chipClasses, circularProgressClasses, collapseClasses, index as colors, containerClasses, createChainedFunction, createFilterOptions, createStyles, createSvgIcon, createTheme$1 as createTheme, css, darkScrollbar, darken, debounce$1 as debounce, deprecatedPropType, dialogActionsClasses, dialogClasses, dialogContentClasses, dialogContentTextClasses, dialogTitleClasses, dividerClasses, drawerClasses, duration, emphasize, styled$2 as experimentalStyled, deprecatedExtendTheme as experimental_extendTheme, experimental_sx, createThemeWithVars as extendTheme, fabClasses, filledInputClasses, formControlClasses, formControlLabelClasses, formGroupClasses, formHelperTextClasses, formLabelClasses, generateUtilityClass, generateUtilityClasses, getAccordionActionsUtilityClass, getAccordionDetailsUtilityClass, getAccordionSummaryUtilityClass, getAccordionUtilityClass, getAlertTitleUtilityClass, getAlertUtilityClass, getAppBarUtilityClass, getAutocompleteUtilityClass, getAvatarGroupUtilityClass, getAvatarUtilityClass, getBackdropUtilityClass, getBadgeUtilityClass, getBottomNavigationActionUtilityClass, getBottomNavigationUtilityClass, getBreadcrumbsUtilityClass, getButtonBaseUtilityClass, getButtonGroupUtilityClass, getButtonUtilityClass, getCardActionAreaUtilityClass, getCardActionsUtilityClass, getCardContentUtilityClass, getCardHeaderUtilityClass, getCardMediaUtilityClass, getCardUtilityClass, getCheckboxUtilityClass, getChipUtilityClass, getCircularProgressUtilityClass, getCollapseUtilityClass, getContainerUtilityClass, getDialogActionsUtilityClass, getDialogContentTextUtilityClass, getDialogContentUtilityClass, getDialogTitleUtilityClass, getDialogUtilityClass, getDividerUtilityClass, getDrawerUtilityClass, getFabUtilityClass, getFilledInputUtilityClass, getFormControlLabelUtilityClasses, getFormControlUtilityClasses, getFormGroupUtilityClass, getFormHelperTextUtilityClasses, getFormLabelUtilityClasses, getGrid2UtilityClass, getIconButtonUtilityClass, getIconUtilityClass, getImageListItemBarUtilityClass, getImageListItemUtilityClass, getImageListUtilityClass, getInitColorSchemeScript, getInputAdornmentUtilityClass, getInputBaseUtilityClass, getInputLabelUtilityClasses, getInputUtilityClass, getLinearProgressUtilityClass, getLinkUtilityClass, getListItemAvatarUtilityClass, getListItemButtonUtilityClass, getListItemIconUtilityClass, getListItemSecondaryActionClassesUtilityClass, getListItemTextUtilityClass, getListItemUtilityClass, getListSubheaderUtilityClass, getListUtilityClass, getMenuItemUtilityClass, getMenuUtilityClass, getMobileStepperUtilityClass, getModalUtilityClass, getNativeSelectUtilityClasses, getOffsetLeft, getOffsetTop, getOutlinedInputUtilityClass, getOverlayAlpha, getPaginationItemUtilityClass, getPaginationUtilityClass, getPaperUtilityClass, getPopoverUtilityClass, getPopperUtilityClass, getRadioGroupUtilityClass, getRadioUtilityClass, getRatingUtilityClass, getScopedCssBaselineUtilityClass, getSelectUtilityClasses, getSkeletonUtilityClass, getSliderUtilityClass, getSnackbarContentUtilityClass, getSnackbarUtilityClass, getSpeedDialActionUtilityClass, getSpeedDialIconUtilityClass, getSpeedDialUtilityClass, getStepButtonUtilityClass, getStepConnectorUtilityClass, getStepContentUtilityClass, getStepIconUtilityClass, getStepLabelUtilityClass, getStepUtilityClass, getStepperUtilityClass, getSwitchUtilityClass, getTabScrollButtonUtilityClass, getTabUtilityClass, getTableBodyUtilityClass, getTableCellUtilityClass, getTableContainerUtilityClass, getTableFooterUtilityClass, getTableHeadUtilityClass, getTablePaginationUtilityClass, getTableRowUtilityClass, getTableSortLabelUtilityClass, getTableUtilityClass, getTabsUtilityClass, getTextFieldUtilityClass, getToggleButtonGroupUtilityClass, getToggleButtonUtilityClass, getToolbarUtilityClass, getTooltipUtilityClass, getTouchRippleUtilityClass, getTypographyUtilityClass, grid2Classes, iconButtonClasses, iconClasses, imageListClasses, imageListItemBarClasses, imageListItemClasses, inputAdornmentClasses, inputBaseClasses, inputClasses, inputLabelClasses, isMuiElement, keyframes, lighten, linearProgressClasses, linkClasses, listClasses, listItemAvatarClasses, listItemButtonClasses, listItemClasses, listItemIconClasses, listItemSecondaryActionClasses, listItemTextClasses, listSubheaderClasses, major, makeStyles, menuClasses, menuItemClasses, mergeSlotProps, minor, mobileStepperClasses, modalClasses, nativeSelectClasses, outlinedInputClasses, ownerDocument, ownerWindow, paginationClasses, paginationItemClasses, paperClasses, patch, popoverClasses, prerelease, createTypography as private_createTypography, radioClasses, radioGroupClasses, ratingClasses, requirePropFactory, responsiveFontSizes, scopedCssBaselineClasses, selectClasses, setRef, skeletonClasses, sliderClasses, snackbarClasses, snackbarContentClasses, speedDialActionClasses, speedDialClasses, speedDialIconClasses, stackClasses, stepButtonClasses, stepClasses, stepConnectorClasses, stepContentClasses, stepIconClasses, stepLabelClasses, stepperClasses, styled$2 as styled, switchClasses, tabClasses, tabScrollButtonClasses, tableBodyClasses, tableCellClasses, tableClasses, tableContainerClasses, tableFooterClasses, tableHeadClasses, tablePaginationClasses, tableRowClasses, tableSortLabelClasses, tabsClasses, textFieldClasses, toggleButtonClasses, toggleButtonGroupClasses, toolbarClasses, tooltipClasses, touchRippleClasses, typographyClasses, unstable_ClassNameGenerator, composeClasses as unstable_composeClasses, createBreakpoints as unstable_createBreakpoints, createMuiStrictModeTheme as unstable_createMuiStrictModeTheme, getUnit as unstable_getUnit, memoTheme as unstable_memoTheme, toUnitless as unstable_toUnitless, useEnhancedEffect as unstable_useEnhancedEffect, useId as unstable_useId, unsupportedProp, useAutocomplete, useColorScheme, useControlled, useEventCallback, useForkRef, useFormControl, useMediaQuery, usePagination, useRadioGroup, useScrollTrigger, useStepContext, useStepperContext, useTheme$3 as useTheme, useThemeProps, version, withStyles, withTheme };
