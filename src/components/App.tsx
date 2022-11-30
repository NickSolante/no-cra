import { Header } from './Header'
import styled from '@emotion/styled'

const AppStyles = styled('div')`
  padding: 0;
  margin: 0;
  background-color: #171321;
  max-height: 100%;
`

export const App = () => {
  return (
    <AppStyles>
      <Header />
    </AppStyles>
  )
}
