import './App.css';
import { React,useState,useEffect } from 'react';
import List from './components/List';
import CRUD from './components/CRUD';

function App() {

  const tdtdListStudent = [
    {tdtdId : 2210900096 , tdtdName : "Doanh", tdtdAge : "20" , tdtdPhone : "0123456789", tdtdStatus : false},
    {tdtdId : 2210900096 , tdtdName : "Doanh", tdtdAge : "20" , tdtdPhone : "0123456789", tdtdStatus : true},
    {tdtdId : 2210900096 , tdtdName : "Doanh", tdtdAge : "20" , tdtdPhone : "0123456789", tdtdStatus : false},
   ];
  
  const [students,setStudents] = useState(tdtdListStudent);
  
  let data = JSON.parse(localStorage.getItem("hehe"));
  if(data === null || data.length === 0){
    data = tdtdListStudent;
    localStorage.getItem("hehe",JSON.stringify(data));
  }
  const [tdtdListTaskAdd,setTdtdListTaskAdd] = useState(data)
  useEffect(()=>{
    localStorage.setItem("hehe",JSON.stringify(tdtdListTaskAdd))
  },[tdtdListTaskAdd]);
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [tdtdListTasks, settdtdListTasks] = useState(tdtdListStudent);

  // tạo state dữ liệu cho form (add, edit)
  // Đối tượng task
  const tdtdTaksObj = {
    tdtd_taskId: 0,
    tdtd_taskName: "NTU",
    tdtd_level: "Medium",
  };
  // Tạo state
  const [tdtdTask, settdtdTask] = useState(tdtdTaksObj); // dữ liệu trên form
  // state đê phân biệt trạng thái là thêm mới hay sửa
  const [tdtdIsAddOrEdit, settdtdIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

  // Nhận dữ liệu khi sửa
  const tdtdHandleEdit = (param) => {
    console.log("App - Edit:", param);
    // Cập nhật lại tdtdTask
    settdtdTask(param);
    // Cập nhật trạng thái form là sửa
    settdtdIsAddOrEdit(false);
  };

  const tdtdHandleSubmit = (tdtdParam) => {
    console.log("App:", tdtdParam);
    if(tdtdIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
      settdtdListTasks((prev) => {
        return [...prev, tdtdParam];
      });
    }else{ // Trường hợp sử dữ liệu
      for (let i = 0; i < tdtdListTasks.length; i++) {
          if(tdtdListTasks[i].tdtd_taskId == tdtdParam.tdtd_taskId){
            tdtdListTasks[i] = tdtdParam;
            break;
          }
      }
      // Cập nhật lại state (tdtdListTasks)
      settdtdListTasks((prev) => {
        return [...prev];
      });
    }
  };

  // Hàm xóa
  const tdtdHandleDelete = (param)=>{
    let tdtdResult = tdtdListTasks.filter(x=>x.tdtd_taskId !== param.tdtd_taskId);
    settdtdListTasks(tdtdResult);
  }

  const handleAdd = ()=>{
    settdtdTask(tdtdTaksObj);
    settdtdIsAddOrEdit(true);
  }
  return (
    <div className="container border">
      <h1>Doanh</h1>
      <hr/>
      <div><List renderStudentList = {students}
        ontdtdTaskEdit={tdtdHandleEdit}
        ontdtdTaskDelete = {tdtdHandleDelete} /></div>
      <button onClick={handleAdd}> Thêm mới </button>
      <div><CRUD rendertdtdTask = {tdtdTask}
            rendertdtdIsAddOrEdit = {tdtdIsAddOrEdit}
            tdtdOnSubmit={tdtdHandleSubmit}/></div>
    </div>
  );
}

export default App;
