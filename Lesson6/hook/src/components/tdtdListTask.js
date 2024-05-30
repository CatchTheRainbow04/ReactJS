import React from 'react'

export default function TDTDListTask({renderTDTDListTask}) {
    console.log(renderTDTDListTask);
    //render data
    let TDTDElement = renderTDTDListTask.map((task,index) =>{
        return (
            <>
                <tr key={index} className='text-center'>
                    <td>{task.tdtd_taskId}</td>
                    <td>{task.tdtd_taskName}</td>
                    <td>{task.tdtd_level}</td>
                    <td>
                        <button className='btn btn-outline-success'>Edit</button>
                        <button className='btn btn-outline-danger m-3'>Remove</button>
                    </td>
                </tr>
            </>
        )
    })
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr className='text-center'>
                    <th>Task ID</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {TDTDElement}
            </tbody>
        </table>
    </div>
  )
}
