import "./App.css";
import { React, useState } from "react";
import TDTDListTask from "./component/TDTDListTask";
import TDTDAddEditAndDelete from "./component/TDTDAddEditAndDelete";
function App() {
  // Mock data
  const tdtd_listTasks = [
    {
      tdtd_taskId: 2210900096,
      tdtd_taskName: "Tạ Đình Thành Doanh",
      tdtd_level: "Small",
    },
    {
      tdtd_taskId: 1,
      tdtd_taskName: "Học lập trình frontend",
      tdtd_level: "Small",
    },
    {
      tdtd_taskId: 2,
      tdtd_taskName: "Học lập trình reactjs",
      tdtd_level: "Medium",
    },
    {
      tdtd_taskId: 3,
      tdtd_taskName: "Lập trình với Frontend - Reactjs",
      tdtd_level: "High",
    },
    {
      tdtd_taskId: 4,
      tdtd_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      tdtd_level: "Small",
    },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [tdtdListTasks, settdtdListTasks] = useState(tdtd_listTasks);

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
    let tdtdResult = tdtdListTasks.filter(x=>x.tdtd_taskId != param.tdtd_taskId);
    settdtdListTasks(tdtdResult);
  }
  return (
    <div className="container border">
      <h1>Tạ Đình Thành Doanh - K22CNT2</h1>
      <hr />
      <div>
        {/* Danh sách list task  */}
        <TDTDListTask
          rendertdtdListTasks={tdtdListTasks}
          ontdtdTaskEdit={tdtdHandleEdit}
          ontdtdTaskDelete = {tdtdHandleDelete}
        />
      </div>
      <div>
        <TDTDAddEditAndDelete 
            rendertdtdTask = {tdtdTask}
            rendertdtdIsAddOrEdit = {tdtdIsAddOrEdit}
            tdtdOnSubmit={tdtdHandleSubmit} />
      </div>
    </div>
  );
}

export default App;
