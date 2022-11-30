import styled from '@emotion/styled'

export const HeaderStyles = styled('div')`
  color: white;
  font-size: 2rem;
  padding: 1rem;
  height: 4rem;
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

  @font-face {
    font-family: 'OxygenMono';
    src: local('OxygenMono'),
      url('../../public/assets/OxygenMono-Regular.ttf') format('truetype');
  }
`

const headerItems = ['Nick Solante', 'LinkedIn', 'GitHub', 'Resume']

export const Header = () => {
  return (
    <HeaderStyles>
      <StyledUl>
        {headerItems.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </StyledUl>
    </HeaderStyles>
  )
}
