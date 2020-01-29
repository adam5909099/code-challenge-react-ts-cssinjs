import styled from '../styled'

export default styled.div(({ theme }) => ({
  display: 'inline-block',
  height: 'fit-content',
  background: theme.colors.white,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radii.md,
  boxShadow: theme.shadows.md
}))
