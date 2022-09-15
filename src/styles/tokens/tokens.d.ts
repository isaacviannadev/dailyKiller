export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  },
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "main": {
      100: DesignToken,
      200: DesignToken, 
      300: DesignToken,
      400: DesignToken,
      500: DesignToken,
      600: DesignToken,
      700: DesignToken,
      800: DesignToken,
      900: DesignToken,
    },
    "secondary": {
      200: DesignToken,
      500: DesignToken,
      700: DesignToken,
    },
    "background": {
      "light": DesignToken,
      "default": DesignToken,
      "dark": DesignToken,
    },
    "success": {
      "light": DesignToken,
      "default": DesignToken,
      "dark": DesignToken,
    },
    "error": {
      "light": DesignToken,
      "default": DesignToken,
      "dark": DesignToken,
    },
    "gradient": {
      'g-01': DesignToken,
      'g-02': DesignToken,
      'g-03': DesignToken,
      'g-04': DesignToken,
      'g-05': DesignToken,
      'g-06': DesignToken,
    },
  },
  "weight": {
    "bold": DesignToken,
    "semibold": DesignToken,
    "regular": DesignToken,
  },
  "fontsize": {
      'xs': DesignToken,
      's2': DesignToken,
      's1': DesignToken,
      'm': DesignToken,
      'l': DesignToken,
      'xl': DesignToken,
      '2xl': DesignToken,
      '3xl': DesignToken,
      '4xl': DesignToken,
      '5xl': DesignToken,
      '6xl': DesignToken,
    },
  "spacing": {
    "none":  DesignToken,
    "xxs":  DesignToken,
    "xs":  DesignToken,
    "sm":  DesignToken,
    "md":  DesignToken,
    "lg":  DesignToken,
    "xl":  DesignToken,
    "xxl":  DesignToken,
    "gt":  DesignToken,
    "xg":  DesignToken,
    "xxg":  DesignToken,
    "xxxg":  DesignToken,
  },
  'size': {
    "none":  DesignToken,
    "xxs":  DesignToken,
    "xs":  DesignToken,
    "sm":  DesignToken,
    "md":  DesignToken,
    "lg":  DesignToken,
    "xl":  DesignToken,
    "xxl":  DesignToken,
    "gt":  DesignToken,
    "xg":  DesignToken,
    "xxg":  DesignToken,
    "xxxg":  DesignToken,
  },
  'Radius': {
    "none":  DesignToken,
    "xxs":  DesignToken,
    "xs":  DesignToken,
    "sm":  DesignToken,
    "md":  DesignToken,
    "lg":  DesignToken,
    "xl":  DesignToken,
    "xxl":  DesignToken,
    "gt":  DesignToken,
    "xg":  DesignToken,
    "xxg":  DesignToken,
    "xxxg":  DesignToken,
  },
  'family': {
    'primary': DesignToken,
    'secondary': DesignToken,
  },
  'opacity': {
    "none":  DesignToken,
    'low': DesignToken,
    'medium': DesignToken,
    'high': DesignToken,
    'full': DesignToken,
  },
  'animation': {
    'duration': {
      'fast': DesignToken,
      'medium': DesignToken,
      'slow': DesignToken,
    },
    'curve': {
      'expressve': DesignToken,
      'productive': DesignToken,
    },
  },
};
