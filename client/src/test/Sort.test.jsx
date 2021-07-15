import {render,screen} from '@testing-library/react'
import Sort from '../components/sort/Sort'

describe('Sort component',()=>{
    test('Start render Sort',()=>{
        render(<Sort />)
    expect(screen.getByText(/by/)).toBeInTheDocument();
    })
})