import Shevy from 'shevyjs'
import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

const shevy = new Shevy()
const { body, h2, h3, h4, content, lineHeightSpacing, baseSpacing } = shevy

const COLORS = {
  electromagnetic: '#2f3640',
  lynxWhite: '#f5f6fa'
}
const Theme: DefaultTheme = {
  colors: {
    primary: COLORS.electromagnetic,
    secondary: COLORS.lynxWhite
  },
  background: {
    light: COLORS.lynxWhite,
    dark: COLORS.electromagnetic
  },
  fontFamily:
    '-apple-system, BlinkMacSystemFont,  BlinkMacSystemFont,  BlinkMacSystemFont,  BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  typography: {
    body,
    h2,
    h3,
    h4,
    content,
    lineHeightSpacing,
    baseSpacing
  }
}

export const GlobalStyle = createGlobalStyle`${css`
  body,
  html {
    font-family: ${(props) => props.theme.fontFamily};
    background: ${(props) => props.theme.background.light};
  }
  body {
    font-size: ${(props) => props.theme.typography.body.fontSize};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }
`}
`

export default Theme
