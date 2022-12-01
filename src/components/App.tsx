import { Header } from './Header'
import styled from '@emotion/styled'

const AppStyles = styled('div')`
  padding: 0;
  margin: 0;
  background-color: #171321;
  max-height: 100vh;
  overflow: auto;
  height: 100vh;
  /* Light mode */
  @media (prefers-color-scheme: light) {
    background-color: white;
    color: black;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    background-color: #171321;
    color: white;
  }
`

export const App = () => {
  return (
    <AppStyles>
      <Header />
    </AppStyles>
  )
}
