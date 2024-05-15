import React, { useState } from 'react'

export default function TDTDuseState() {
    const [count , setCount] = useState(0);

    const [list , setList ] = useState([1,5]);

    const tdtdHandleList = () => {
        let num = parseInt(Math.random() * 100);
        setList([
            ...list,
            num
        ])
    }
  return (
    <div>
        <h3>You clicked {count} times</h3>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <hr/>
        <h3>Your list : {list.toString()}</h3>
        <button onClick={tdtdHandleList}>Add Random</button>
    </div>
  )
}
