import React, { Component } from 'react';
import TDTD_EventForm1 from './components/TDTD_EventForm1';
import TDTD_EventForm2 from './components/TDTD_EventForm2';
import TDTD_EventForm3 from './components/TDTD_EventForm3';
import TDTD_EventForm4 from './components/TDTD_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <TDTD_EventForm1 />
        <TDTD_EventForm2 />
        <TDTD_EventForm3 />
        <TDTD_EventForm4 name = "Draven" />
      </div>
    );
  }
}

export default App;