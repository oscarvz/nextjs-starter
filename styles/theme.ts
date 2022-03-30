export const theme = {
  color: {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    copy: 'rgb(0, 0, 0)',
    copyAlt: 'rgb(74, 75, 79)',
    background: 'rgb(255, 255, 255)',
    backgroundAlt: 'rgb(245, 245, 245)',
    primary: 'rgb(29, 223, 205)',
    primaryAlt: 'rgb(4, 51, 47)',
  },
  font: {
    primary: `Georgia, 'Times New Roman', Times, serif`,
    secondary: 'Verdana, Geneva, Tahoma, sans-serif',
  },
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
  shadow: {
    sm: '0 0 0.5rem rgba(0, 0, 0, 0.15)',
    lg: '0 0 1rem rgba(0, 0, 0, 0.15)',
  },
} as const;
