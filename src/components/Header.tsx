import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export const HeaderStyles = styled('div')`
  color: white;
  font-size: 2rem;
  padding: 1rem;
  height: 9rem;

  /* Light mode */
  @media (prefers-color-scheme: light) {
    color: black;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`

const StyledUl = styled('ul')`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  font-family: 'Oxygen mono', monospace;

  li:first-child {
    flex-basis: 100%;
    text-align: center;
  }

  li a {
    text-decoration: none;
    color: white;
  }
  li a:hover {
    text-decoration: none;
    color: white;
  }

  @font-face {
    font-family: 'OxygenMono';
    src: local('OxygenMono'),
      url('../../public/assets/OxygenMono-Regular.ttf') format('truetype');
  }
`

export const Header = () => {
  return (
    <HeaderStyles>
      <StyledUl>
        <li>Nick Solante</li>
        <li>
          <a href="https://www.linkedin.com/in/nsolante/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/NickSolante">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </StyledUl>
    </HeaderStyles>
  )
}
