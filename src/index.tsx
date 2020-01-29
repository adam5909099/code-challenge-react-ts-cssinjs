import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyle from './globalStyle'
import theme from './theme'
import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle}></Global>
    <Menu>
      <MenuItem>My evaluations</MenuItem>
      <MenuItem>My steps</MenuItem>
    </Menu>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
