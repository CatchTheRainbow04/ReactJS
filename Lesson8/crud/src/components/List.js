import React from 'react'

export default function List({renderStudentList, ontdtdTaskEdit, ontdtdTaskDelete}) {
    const tdtdHandleEdit = (param)=>{
        ontdtdTaskEdit(param)
    }
    const tdtdHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            ontdtdTaskDelete(param)
        }
    }
    let studentList = renderStudentList.map((e,index)=>{
        return(
            <tr key={index}>
            <th>{e.tdtdId}</th>
            <th>{e.tdtdName}</th>
            <th>{e.tdtdAge}</th>
            <th>{e.tdtdPhone}</th>
            <th>{e.tdtdStatus}</th>
            <td>
                    <button className='btn btn-success'
                        onClick={()=>tdtdHandleEdit(e)}
                        >Edit</button>    
                    <button className='btn btn-danger'
                    onClick={()=>tdtdHandleDelete(e)} >
                        Remove</button>    
            </td>
        </tr>
        )
    })
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {studentList}
            </tbody>
        </table>
    </div>
  )
}
