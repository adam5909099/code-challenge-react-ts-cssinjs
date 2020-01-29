import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'

import globalStyle from './global-style'

const App = () => (
  <>
    <Global styles={globalStyle}></Global>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
