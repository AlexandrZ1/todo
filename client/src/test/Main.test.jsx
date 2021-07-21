import { render, screen } from '@testing-library/react'

import Main from '../components/Main'

describe('Main component', () => {
  test('Render component Main', () => {
    render(<Main />)
    expect(screen.queryAllByTestId('main-child')).not.toBeNull()
  })
})
