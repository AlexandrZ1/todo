import {render,screen} from '@testing-library/react'
import Item from '../components/todo/Item'

describe('Item component',()=>{
    test('Start render Item',()=>{
        const data={text:"hello",done:false,id:11,date:121312}
        render(<Item todo={data}/>)
    expect(screen.getByText(data.text)).toBeInTheDocument();
    })
})