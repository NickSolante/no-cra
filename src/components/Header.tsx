import styled from '@emotion/styled'

export const HeaderStyles = styled('div')`
  color: red;
  background-color: blue;
  font-size: 2rem;
  padding: 0 1rem;
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
