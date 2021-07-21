import { render, screen } from '@testing-library/react'
import Button from '../components/sort/Button'

describe('Button component', () => {
  test('Start render Button', () => {
    const data = 'hi'
    render(<Button text={data} />)
    expect(screen.getByText(data)).toBeInTheDocument()
  })
})
