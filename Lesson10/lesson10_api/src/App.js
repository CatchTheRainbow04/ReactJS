import TdtdListUser from './components/TdtdListUser';
import { useEffect, useState } from 'react';
import axios from './api/TdtdApi';

function App() {
  const [tdtdListUser,settdtdListUser] = useState([]);
  //doc du lieu tu api
  const tdtdGetAllUser = async () => {
    const tdtdRespond = await axios.get("tdtdUser");
    console.log(tdtdRespond.data);
    settdtdListUser(tdtdRespond.data)
  }
  useEffect(()=>{
    tdtdGetAllUser();
  },[]);

  return (
    <div className="container border mt-2">
      <h1>Lam viec voi MockAPI</h1>
      <TdtdListUser render = {tdtdListUser}/>
    </div>
  );
}

export default App;
