import { render, screen } from 'test-utils'
import { Header } from './Header'

describe('Header', () => {
  it('should display Nick', () => {
    render(<Header />)
    screen.getByText(/Nick/)
  })
})
