import { useState } from 'react';
import './App.css';
import TDTDListTask from './components/tdtdListTask';
import TDTDTaskAddOrEdit from './components/TDTDTaskAddOrEdit';
function App(){
    //Mock data
    const tdtd_listTasks  = [
      { tdtd_taskId:1, tdtd_taskName:"Học lập trình frontend", tdtd_level:"Small" },
      { tdtd_taskId:2, tdtd_taskName:"Học lập trình reactjs",tdtd_level:"Medium"},
      { tdtd_taskId:3, tdtd_taskName:"Lập trình với Frontend - Reactjs",tdtd_level:"High"},
      { tdtd_taskId:4, tdtd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",tdtd_level:"Small"},
     ];
     const [tdtdListTask , setListTask] = useState(tdtd_listTasks);

     const tdtdHandleSubmit = (tdtdParam) =>{
        setListTask(prev => {
          return [
            ...prev,
            tdtdParam
          ]
        })
     }

     const tdtdHandleEdit = (param) =>{

     }
  return (
    <div className='container bordered'>
      <h1>Ta Dinh Thanh Doanh - K22CNT2</h1>
      <hr/>
      <div>
        {/* danh sach list task */}
        <TDTDListTask renderTDTDListTask = {tdtdListTask}/>
      </div>
      <div>
        <TDTDTaskAddOrEdit tdtdOnSubmit = {tdtdHandleSubmit}/>
      </div>
    </div>
  );
}
export default App;