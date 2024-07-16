import { useEffect, useState } from 'react';
import axios from './TDTD-Api/tdtd-2210900096'
import './App.css';
import TdtdListTableName from './TDTD-Components/TdtdListTableName';
import TdtdFormTableName from './TDTD-Components/TdtdFormTableName';

function TdtdApp() {
  //
  const [list,setList] = useState();
  const getList = async () =>{
    const respond = await axios.get('tdtdTableName');
    setList(respond.data);
  }
  useEffect(()=>{
    getList();
  },[])
  const tdtdHandleDelete = async (tdtdId) =>{
    await axios.delete("tdtdTableName/" + tdtdId);
    getList();
  }
  //Bật tắt form
  const [showForm,setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  //
  const tdtdObjTableName = {
    "tdtdId" : 10,
    "tdtdTbName" : "Doanh",
    "tdtdTbEmail" : "Doe@gmail.com",
    "tdtdTbPhone" : "0123456789",
    "tdtdTbStatus" : true
  }

  const [tdtdDataTable,setTdtdDataTable] = useState(tdtdObjTableName);
  //
  const dataAdd = () =>{
    getList();
  }
  //
  const tdtdHandleEdit = (obj) =>{
    setTdtdDataTable(obj);
  }

  return (
    <div className='container bordered'>
      <h1 style={{textAlign : 'center'}}>Bài đánh giá hết học phần - Tạ Đình Thành Doanh : 2210900096</h1>
      <hr/>
      <TdtdListTableName renderTdtdListTableName = {list} onTdtdDelete = {tdtdHandleDelete} onTdtdEdit = {tdtdHandleEdit}/>
      <hr/>
      <button className='btn btn-outline-success' onClick={toggleForm}>{showForm ? " Đóng thêm mới" : "Thêm mới"}</button>
      {showForm && <TdtdFormTableName renderTableData = {tdtdDataTable} loadDataAdd = {dataAdd} />}
    </div>
  );
}

export default TdtdApp;
