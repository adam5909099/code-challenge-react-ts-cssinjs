import theme from './theme'
import { css } from '@emotion/core'

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-style: normal;
  }

  body,
  input,
  ::placeholder {
    font-family: proxima-nova, sans-serif;
    font-weight: ${theme.fontWeights.pr};
    font-size: ${theme.fontSizes.lg};
    line-height: 1.4rem;
    color: ${theme.colors.tx1};
  }

  svg,
  img {
    display: block;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    background: ${theme.colors.bg1};
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`
