import { globalCss } from "./stitches.config";


export const GlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0
  },

  'html, body': {
    maxWidth: '100vw',
    backgroundColor: '$gray800',
    color: '$white'
  },

  'a': {
    textDecoration: 'none'
  }  
})
