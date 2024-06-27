import React from 'react'

export default function TdtdListUser({render}) {
    //hine thi du lieu
    let tdtdUserElement = render.map((tdtdUser,index)=>{
        return(
            <>
                <tr>
                    <td>{tdtdUser.id}</td>
                    <td>{tdtdUser.Username}</td>
                    <td>{tdtdUser.Password}</td>
                    <td>{tdtdUser.Email}</td>
                    <td>{tdtdUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
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
