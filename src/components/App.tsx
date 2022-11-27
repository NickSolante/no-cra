import { Header } from './Header'
import styled from '@emotion/styled'

const AppStyles = styled('div')`
  padding: 0;
  margin: 0;
`

export const App = () => {
  return (
    <AppStyles>
      <Header />
      <h1>NS Dev</h1>
      <h1>Vercel weee</h1>
    </AppStyles>
  )
}
