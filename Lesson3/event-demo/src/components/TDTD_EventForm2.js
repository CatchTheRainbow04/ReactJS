import React from 'react'

export default function TDTD_EventForm2() {

    //Định nghĩa các hàm xử lý
    const eventHandleClick1 = (content) =>{
        console.log('=====================');
        console.log(content);
        console.log('=====================')
    }


  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Function Component</h2>
        <button className='btn btn-success' onClick = {eventHandleClick1("Tạ Đình Thành Doanh")}>Gọi khi render</button>
        <button className='btn btn-success' onClick = {() => eventHandleClick1("K22CNT2 - ReactJS")}>Gọi khi click</button>
    </div>
  )
}
