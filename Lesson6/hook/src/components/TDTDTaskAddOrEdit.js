import React, { useState } from 'react'

export default function TDTDTaskAddOrEdit({tdtdOnSubmit}) {
    //doi tuong task
    const taskObj = {
        tdtd_taskId:0,
        tdtd_taskName:"",
        tdtd_level:""
    }
    const [tdtdTask,setTdtdTask] = useState(taskObj);
    //ham xu li su kien thay doi tren dieu kien
    const tdtdHandleChange = (tdtdEvent) => {
        let name = tdtdEvent.target.name;
        let value = tdtdEvent.target.value;

        setTdtdTask( prev => {
            return {
                ...prev,
                [name] : value
            }
        })
        console.log(tdtdTask);
    }
    const tdtdHandleSubmit = (tdtdEvent) =>{
        tdtdEvent.preventDefault();
        tdtdOnSubmit(tdtdTask);
    }
  return (
    <div>
        <h2>Add new task</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input className="form-control" name='tdtd_taskId' value={tdtdTask.tdtd_taskId} onChange={tdtdHandleChange}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task Name</span>
                <input className="form-control" name='tdtd_taskName' value={tdtdTask.tdtd_taskName} onChange={tdtdHandleChange}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Task Level</span>
                <select className="form-control" name='tdtd_level' value={tdtdTask.tdtd_level} onChange={tdtdHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button className='btn btn-outline-success mb-5' onClick={tdtdHandleSubmit}>Add</button>
        </form>
    </div>
  )
}
