import { useEffect, useState } from 'react';
import './App.css';
import axios from './api/TdtdApi';
import TdtdSinhVienList from './component/TdtdSinhVienList'
import TdtdSinhVienAddOrEdit from './component/TdtdSinhVienAddOrEdit';

function TdtdApp() {
  //---
  const [sinhVienList , setSinhVienList] = useState([]);
  const getList = async () => {
    const respond = await axios.get("TdtdSinhVien");
    setSinhVienList(respond.data);
    console.log(respond.data);
  }
  useEffect(()=>{
    getList();
  },[])
  //---
  const [showForm,setShowForm] = useState(false);
  const toggle = () => {
      setShowForm(!showForm);
  }
  //---
  const defaultDataForm = {
    MaSV : "",
    HoSV : "",
    TenSV : "",
    Phai : true,
    NgaySinh : "",
    NoiSinh : "",
    MaKH : "",
    HocBong : true,
    DiemTrungBinh : ""
  }
  //---
  const handleSubmit = () =>{
    getList();
    setShowForm(false);
  }
  //---
  return (
    <div className="container border mt-2">
      <h1>Bài Kiểm Tra Giữa Kì</h1>
      <TdtdSinhVienList renderList = {sinhVienList} submit = {handleSubmit}/>
      <button onClick={toggle} className='btn btn btn-outline-dark mb-3'>{showForm ? "Đóng form thêm mới" : "Thêm mới"}</button>
      {showForm && <TdtdSinhVienAddOrEdit addSinhVien = {defaultDataForm} submit = {handleSubmit}/>}
    </div>
  );
}

export default TdtdApp;
