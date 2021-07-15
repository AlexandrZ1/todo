import {render,screen} from '@testing-library/react'

import Pagination from '../components/Pagination'

describe('Main component',()=>{
    test('Start render Pagination',()=>{
        render(<Pagination pages={[]}
            currentPage={1}
            setCurrentPage={()=>{}} />)
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.queryAllByTestId('page')).toStrictEqual([]);
    })
})