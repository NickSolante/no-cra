import { Header } from 'components'
import { render, screen } from 'test-utils'

describe('Header', () => {
  it('should display Nick', () => {
    render(<Header />)
    screen.getByText(/Nick/)
  })
})
