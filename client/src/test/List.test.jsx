import {render,screen} from '@testing-library/react'
import List from '../components/todo/List'

describe('List component',()=>{
    test('Start render List',()=>{
        render(<List todos={[]}
            currentPage={1}
            setTodos={()=>{}} />)
    expect(screen.getByTestId('todos')).toBeInTheDocument();
    expect(screen.queryAllByTestId('todo')).toStrictEqual([]);
    })
})