import React from 'react'

export default function TdtdListTableName({renderTdtdListTableName , onTdtdDelete , onTdtdEdit}) {
    // Hiển thị dữ liệu
    const element = renderTdtdListTableName.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.tdtdId}</td>
                <td>{item.tdtdTbName}</td>
                <td>{item.tdtdTbEmail}</td>
                <td>{item.tdtdTbPhone}</td>
                <td>{item.tdtdTbStatus ? "Active" : "Non-Active"}</td>
                <td>
                    <button className='btn btn-outline-warning me-1' onClick={()=>tdtdHandleEdit(item)}>Edit</button>
                    <button className='btn btn-outline-danger' onClick={()=>tdtdHandleDelete(item.tdtdId)}>Delete</button>
                </td>
            </tr>
        );
    })

    //Sự kiện xóa
    const tdtdHandleDelete = (tdtdId) =>{
        if(window.confirm("Do you want to delete user " + tdtdId + "?")){
            onTdtdDelete(tdtdId);
        }
    }
    // Sửa
    const tdtdHandleEdit = (obj) => {
        onTdtdEdit(obj);
    }
  return (
    <div>
        <h2>Danh sách thông tin ...</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>TdtdId</th>
                    <th>TdtdTbName</th>
                    <th>TdtdTbEmail</th>
                    <th>TdtdTbPhone</th>
                    <th>TdtdTbStatus</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {element}
            </tbody>
        </table>
    </div>
  )
}
