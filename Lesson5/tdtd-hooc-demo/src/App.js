import React, { Component } from 'react';
import TDTDuseState from './component/TDTDuseState';
import TDTDuseEffect from './component/TDTDuseEffect';
import TDTDuseContaxt from './component/TDTDuseContaxt';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center'>Tạ Đình Thành Doanh - Hook</h1>
        <hr/>
        <TDTDuseState />
        <hr/>
        <TDTDuseEffect />
        <hr/>
        <TDTDuseContaxt/>
      </div>
    );
  }
}

export default App;