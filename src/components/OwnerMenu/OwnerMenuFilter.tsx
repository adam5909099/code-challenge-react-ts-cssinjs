import styled from '../../styled'

export default styled.input(({ theme }) => ({
  outline: 'none',
  paddingLeft: 21,
  paddingRight: 21,
  paddingTop: 16,
  paddingBottom: 16,
  width: '100%',
  borderBottom: `1px solid ${theme.colors.border}`,
  marginBottom: 10,

  '::placeholder': {
    color: theme.colors.tx4
  }
}))
