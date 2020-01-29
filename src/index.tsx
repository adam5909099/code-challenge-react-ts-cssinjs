import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyle from './globalStyle'
import theme from './theme'
import Menu from './components/Menu'
import OwnerMenu from './components/OwnerMenu'

import RossRich from './assets/ross-rich.png'
import HarryAvery from './assets/harry-avery.png'
import AmitPatel from './assets/amit-patel.png'
import SuzyAnderson from './assets/suzy-anderson.png'

const owners = [
  {
    img: RossRich,
    name: 'Ross Rich',
    title: 'Manager'
  },
  { img: HarryAvery, name: 'Harry Avery', title: 'Associate' },
  { img: AmitPatel, name: 'Amit Patel', title: 'Associate' },
  { img: SuzyAnderson, name: 'Suzy Anderson', title: 'Associate' }
]

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle}></Global>
    <Menu items={['My evaluations', 'My steps']}></Menu>
    <OwnerMenu owners={owners}></OwnerMenu>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
