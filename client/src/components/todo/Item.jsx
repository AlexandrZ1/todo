const Item = (props) => {
    return (<div className='Item'>
        <div className='btn_done'>+</div>
        <div className='text'>{props.text}</div>
        <div className='date'>{props.date}</div>
        <div className='btn_delete'>-</div>
    </div>)
}

export default Item