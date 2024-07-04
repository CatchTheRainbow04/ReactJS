import TdtdListUser from './components/TdtdListUser';
import { useEffect, useState } from 'react';
import axios from './api/TdtdApi';
import TdtdAddOrEdit from './components/TdtdAddOrEdit';

function App() {
  const [showForm,setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

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

  const tdtdInitUser = {
    id : "3",
    Username :"doanh",
    Password : "doanh",
    Email:"doanh@gmail.com",
    Phone:"0123456789"
  }
  const [tdtdUser,setTdtdUser] = useState(tdtdInitUser);
  const handleSubmit =(param)=> {
    tdtdGetAllUser();
    setShowForm(false);
  }

  return (
    <div className="container border mt-2">
      <h1>Lam viec voi MockAPI</h1>
      <TdtdListUser render = {tdtdListUser} submit={handleSubmit}/>
      <hr/>
      <button onClick={toggleForm} className='btn btn-outline-dark mb-4'>{showForm ? "Đóng" : "Thêm mới"}</button>
      {showForm && <TdtdAddOrEdit addUser = {tdtdUser} submit={handleSubmit}/>}
    </div>
  );
}

export default App;
