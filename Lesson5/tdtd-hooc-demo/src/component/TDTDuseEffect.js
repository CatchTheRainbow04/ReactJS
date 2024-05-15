import React, { useEffect, useState } from 'react'

export default function TDTDuseEffect() {
    const [count , setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    //su dung useEffect co 1 tham so
    useEffect(()=>{
        document.title = `Doanh clicked ${count} times`;
        console.log(`Doanh clicked ${count} times`);
    });
    useEffect(()=>{
        console.log('Alo');
    },[]);
    useEffect(()=>{
        console.log('Alo');
    },[count]);
  return (
    <div>
        <h2>Use Effect</h2>
        <h3>You clicked {count} times</h3>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
