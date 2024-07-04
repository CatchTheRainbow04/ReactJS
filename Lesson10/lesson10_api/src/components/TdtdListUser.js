import React from 'react'
import axios from '../api/TdtdApi';

export default function TdtdListUser({render,submit}) {
    //hine thi du lieu
    let tdtdUserElement = render.map((tdtdUser,index)=>{
        return(
                <tr key={index}>
                    <td>{tdtdUser.id}</td>
                    <td>{tdtdUser.Username}</td>
                    <td>{tdtdUser.Password}</td>
                    <td>{tdtdUser.Email}</td>
                    <td>{tdtdUser.Phone}</td>
                    <td>
                        <button className='btn btn-outline-danger' onClick={()=>handleDelete(tdtdUser)}>Delete</button>
                    </td>
                </tr>
        )
    })
    const handleDelete = async (param) => {
        if(window.confirm("Delete ?")){
            const tdtdRespond = await axios.delete("tdtdUser/" + param.id);
        }
        submit(false);
    }
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tdtdUserElement}
            </tbody>
        </table>
    </div>
  )
}
