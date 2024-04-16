import React, { Component } from 'react';

class TDTD_EventForm1 extends Component {

    //Hàm xử lý sự kiện
    eventHandleClick1 = () =>{
        alert ("event handle click 1");
    }

    eventHandleClick2(){
        alert ("event handle click 2");
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Event Handle</h2>
                {/* gọi hàm xử lý xự kiện khi render */}
                {/* <button className='btn btn-primary' onClick={this.eventHandleClick1()}>Click 1</button> */}
                {/* gọi hàm xử lý khi click */}
                <button className='btn btn-success' onClick={this.eventHandleClick2}>Click 2</button>
            </div>
        );
    }
}

export default TDTD_EventForm1;