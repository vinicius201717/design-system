import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@gaindev-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  getCssText,
  createTheme,
  globalCss,
  keyframes,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'spaces',
    width: 'spaces',
  },
  theme: {
    fonts,
    colors,
    fontWeights,
    fontSizes,
    lineHeights,
    radii,
    space,
  },
})
