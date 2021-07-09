import Button from './Button'

const Sort = () => {
    return (<div className='container'>
        <div className='buttons'>
            <Button text='All' />
            <Button text='Done' />
            <Button text='Undone' />
        </div>
        <div className='sorting_order'>
            <p>Sort by Date</p>
            <div className='btn up'>1</div>
            <div className='btn down'>2</div>
        </div>
    </div>)
}

export default Sort