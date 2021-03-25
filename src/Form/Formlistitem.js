import React from 'react'
import FlipMove from 'react-flip-move';


function Formlistitem(props) {
    const items = props.items;
    const listitems = items.map(item =>
        {return(
    <div key={item.key}>
        <p>
            <input type='text' id={item.key} value={item.text} onChange={(e)=>{props.setupdate(e.target.value,item.key)}} />
            <span>
       
       <button  onClick={() => {
           props.delete(item.key)
       }} icon="trash">Delete</button>
       </span>
        </p>
    </div>
        )})
    return (
        <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listitems}
        </FlipMove>
        </div>
    )
}

export default Formlistitem

