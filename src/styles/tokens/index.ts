export default {
  color: {
    main: {
      100: '#DEF7F9',
      200: '#CBEEF1',
      300: '#B6E6EA',
      400: '#A0D6DA',
      500: '#84bfc3',
      600: '#5EAEB4',
      700: '#41989E',
      800: '#18828A',
      900: '#07636A',
    },
    secondary: {
      200: '#F5F5F5',
      500: '#384252',
      700: '#242E3F',
    },
    background: {
      light: '#FFFFF6',
      default: '#ffffdd',
      dark: '#e9d6af',
      darkest: '#D3BB88',
    },
    success: {
      light: '#E4FCED',
      default: '#C0EFD2',
      dark: '#7DCE9C',
    },
    error: {
      light: '#ff7f7f',
      default: '#e03535',
      dark: '#8c162a',
    },
    gradient: {
      'g-01': 'linear-gradient(114deg, #fe382c 0%, #e51b15 100%)',
      'g-02': 'linear-gradient(114deg, #ff2d81 0%, #fe382c 100%)',
      'g-03': 'linear-gradient(114deg, #f6f6f6 0%, #dde2e7 100%)',
      'g-04': 'linear-gradient(114deg, #9fdc83 0%, #25ab52 100%)',
      'g-05': 'linear-gradient(114deg, #3bb7ea 0%, #0b6387 100%)',
      'g-06': 'linear-gradient(114deg, #f79d5e 0%, #ea6852 100%)',
    },
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  weight: {
    bold: '700',
    semibold: '600',
    regular: '400',
  },
  fontsize: {
    xs: '1.1rem',
    s2: '1.2rem',
    s1: '1.2rem',
    m: '1.4rem',
    l: '1.6rem',
    xl: '1.8rem',
    '2xl': '2rem',
    '3xl': '2.2rem',
    '4xl': '2.8rem',
    '5xl': '3.4rem',
    '6xl': '4.4rem',
  },
  spacing: {
    none: '0',
    xxs: '0.8rem',
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4rem',
    xl: '4.8rem',
    xxl: '5.6rem',
    gt: '6.4rem',
    xg: '7.2rem',
    xxg: '8rem',
    xxxg: '12rem',
  },
  size: {
    none: '0',
    xxs: '0.8rem',
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4rem',
    xl: '4.8rem',
    xxl: '5.6rem',
    gt: '6.4rem',
    xg: '7.2rem',
    xxg: '8rem',
    xxxg: '12rem',
  },
  Radius: {
    none: '0',
    xxs: '0.8rem',
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4rem',
    xl: '4.8rem',
    xxl: '5.6rem',
    gt: '6.4rem',
    xg: '7.2rem',
    xxg: '8rem',
    xxxg: '12rem',
  },
  family: {
    primary: 'Miriam Libre',
    secondary: 'Quicksand',
  },
  opacity: {
    none: '0.0',
    low: '0.2',
    medium: '0.5',
    high: '0.8',
    full: '1',
  },
  animation: {
    duration: {
      fast: '75',
      medium: '150',
      slow: '300',
    },
    curve: {
      expressve: '(0.4, 0.2, 0.3, 1)',
      productive: '(0.2, 0, 0.4, 0.9)',
    },
  },
} as const;
