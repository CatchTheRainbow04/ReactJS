import React from 'react'

export default function TDTDListTask({rendertdtdListTasks, ontdtdTaskEdit, ontdtdTaskDelete}) {
    console.log(rendertdtdListTasks);
    // Hàm xử lý khi sửa
    const tdtdHandleEdit = (param)=>{
        console.log("Click edit:", param);
        ontdtdTaskEdit(param) //Đẩy lên App thông qua props (ontdtdTaskEdit)
    }
    // Hàm xử lý khi xóa
    const tdtdHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            ontdtdTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    // render data
    let tdtdElementTask = rendertdtdListTasks.map((task, index)=>{
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.tdtd_taskId}</td>
                <td>{task.tdtd_taskName}</td>
                <td>{task.tdtd_level}</td>
                <td>
                    <button className='btn btn-success'
                        onClick={()=>tdtdHandleEdit(task)}
                        >Edit</button>    
                    <button className='btn btn-danger'
                    onClick={()=>tdtdHandleDelete(task)} >
                        Remove</button>    
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tdtdElementTask}
            </tbody>
        </table>
    </div>
  )
}
