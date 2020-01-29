import styled from '../../styled'

export default styled.div(({ theme }) => ({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.colors.blue,
    color: theme.colors.white
  }
}))
