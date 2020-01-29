import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyle from './globalStyle'
import theme from './theme'
import Menu from './components/Menu'

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle}></Global>
    <Menu items={['My evaluations', 'My steps']}></Menu>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
