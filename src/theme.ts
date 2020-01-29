const theme = {
  colors: {
    // primary
    accordBlue: '#1b76de',
    border: '#DEECFC',

    // standard
    white: '#ffffff',
    black: '#000000',
    blue: '#1E75D8',

    // text
    tx1: '#192533',
    tx2: '#324964',
    tx3: '#60789A',
    tx4: '#8299B6',

    // function
    positive: '#36B289',
    warning: '#E8B23C',
    negative: '#d15050',
    information: '#6201EA',
    error: '#d15050',

    // status
    onTrack: '#2b8f6d',
    atRisk: '#b8881e',
    stalled: '#d15050',

    // background
    bg1: '#d1e3f8',
    bg2: '#e8f1fb',
    bg3: '#f5f9ff'
  },

  fontWeights: {
    hb: 700,
    shm: 600,
    pr: 400
  },

  fontSizes: {
    sm: '10px',
    md: '12px',
    lg: '14px'
  },

  radii: {
    md: '4px'
  },

  shadows: {
    md:
      '0px 4px 12px rgba(107, 133, 163, 0.06), 0px 4px 16px rgba(50, 132, 225, 0.16)'
  }
}

export default theme

export type Theme = typeof theme
