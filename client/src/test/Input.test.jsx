import { render, screen } from '@testing-library/react'

import Input from '../components/Input'

describe('Input component', () => {
  test('Start render component', () => {
    render(<Input />)
    expect(screen.getByPlaceholderText(/wont/)).toBeInTheDocument()
  })
})
