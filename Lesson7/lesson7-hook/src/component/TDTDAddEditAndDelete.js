import React, { useEffect, useState } from 'react'

export default function TDTDAddEditAndDelete({rendertdtdTask, rendertdtdIsAddOrEdit,tdtdOnSubmit}) {
    // // Đối tượng task
    // const tdtdTaksObj = {
    //     tdtd_taskId:0, 
    //     tdtd_taskName:"",
    //     tdtd_level:""
    // }
    const [tdtdTask, settdtdTask] = useState(rendertdtdTask);
    useEffect(()=>{
        settdtdTask(rendertdtdTask)
    },[rendertdtdTask])

    // tạo tiêu đề form
    const tdtdTieuDe = rendertdtdIsAddOrEdit == true?"Thêm mới task":"Sửa thông tin task";
    // Hàm xử lý sự kiện thay đổi trên điều khiển
    const tdtdHandleChange = (tdtdEvent)=>{
        let name = tdtdEvent.target.name;
        let value = tdtdEvent.target.value;

        settdtdTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    
    const tdtdHandleSubmit = (tdtdEvent)=>{
        tdtdEvent.preventDefault();
        tdtdOnSubmit(tdtdTask);
    }
  return (
    <div>
        <h2>{tdtdTieuDe}</h2>
        <form >
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                    name='tdtd_taskId' value={tdtdTask.tdtd_taskId} onChange={tdtdHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID</span>
                <input type="text" 
                    name='tdtd_taskName' value={tdtdTask.tdtd_taskName} onChange={tdtdHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
    
                <select name='tdtd_level' value={tdtdTask.tdtd_level} onChange={tdtdHandleChange}  className="form-control" 
                    aria-describedby="basic-addon"> 
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={tdtdHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}
