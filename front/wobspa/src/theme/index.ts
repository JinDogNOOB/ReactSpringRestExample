import { black, green, backColor, textColor, green2, grey, red, white } from './colors'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  color: {
    black,
    grey,
    green,
    textColor,
    backColor,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: green2[500],
    },
    white,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72
}

export default theme