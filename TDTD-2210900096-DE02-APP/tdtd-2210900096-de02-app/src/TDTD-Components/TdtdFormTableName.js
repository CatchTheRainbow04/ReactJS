import axios from '../TDTD-Api/tdtd-2210900096';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function TdtdFormTableName({loadDataAdd,renderTableData}) {
    //
    const [tdtdId,setTdtdId] = useState(renderTableData.tdtdId);
    const [tdtdTbName,setTdtdTbName] = useState(renderTableData.tdtdTbName);
    const [tdtdTbEmail,setTdtdTbEmail] = useState(renderTableData.tdtdTbEmail);
    const [tdtdTbPhone,setTdtdTbPhone] = useState(renderTableData.tdtdTbPhone);
    const [tdtdTbStatus,setTdtdTbStatus] = useState(renderTableData.tdtdTbStatus);
    //
    useEffect(()=>{
        setTdtdId(renderTableData.tdtdId);
        setTdtdTbName(renderTableData.tdtdTbName);
        setTdtdTbEmail(renderTableData.tdtdTbEmail);
        setTdtdTbPhone(renderTableData.tdtdTbPhone);
        setTdtdTbStatus(renderTableData.tdtdTbStatus);
    },[renderTableData])
    // Thêm mới
    const tdtdHandleSubmit = async (ev) =>{
        ev.preventDefault();
        const tdtdObjTableName = {
            "tdtdId" : tdtdId,
            "tdtdTbName" : tdtdTbName,
            "tdtdTbEmail" : tdtdTbEmail,
            "tdtdTbPhone" : tdtdTbPhone,
            "tdtdTbStatus" : tdtdTbStatus
          };
          console.log(tdtdObjTableName);
          await axios.post("tdtdTableName",tdtdObjTableName);
          loadDataAdd();
    }
    const tdtdHandleEdit = async (ev) =>{
        ev.preventDefault();
        const tdtdObjTableName = {
            "tdtdId" : tdtdId,
            "tdtdTbName" : tdtdTbName,
            "tdtdTbEmail" : tdtdTbEmail,
            "tdtdTbPhone" : tdtdTbPhone,
            "tdtdTbStatus" : tdtdTbStatus
          };
          await axios.put("tdtdTableName/" + tdtdObjTableName.tdtdId,tdtdObjTableName);
          loadDataAdd();
    }

  return (
    <div>
        <h2>Form xử lý dữ liệu thêm mới</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tdtdId">
                    ID
                </span>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your id"
                    aria-label="tdtdId"
                    aria-describedby="tdtdId"
                    value={tdtdId}
                    onChange={(ev)=>{setTdtdId(ev.target.value)}}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tdtdTbName">
                Name
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    aria-label="tdtdTbName"
                    aria-describedby="tdtdTbName"
                    value={tdtdTbName}
                    onChange={(ev)=>{setTdtdTbName(ev.target.value)}}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tdtdTbEmail">
                Email
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="tdtdTbEmail"
                    aria-describedby="tdtdTbEmail"
                    value={tdtdTbEmail}
                    onChange={(ev)=>{setTdtdTbEmail(ev.target.value)}}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="tdtdTbPhone">
                Phone
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Phone"
                    aria-label="tdtdTbPhone"
                    aria-describedby="tdtdTbPhone"
                    value={tdtdTbPhone}
                    onChange={(ev)=>{setTdtdTbPhone(ev.target.value)}}
                />
            </div>
            <div className='input-group mb-3'>
            <span className="input-group-text" id="tdtdTbName">
                Status
                </span>
            <select className="form-select" value={tdtdTbStatus} onChange={(ev)=>{setTdtdTbStatus(ev.target.value)}}>
                <option value={true}>Active</option>
                <option value={false}>Non-Active</option>
            </select>
            </div>           
            <button className='btn btn-outline-success mt-2' onClick={tdtdHandleSubmit}>Thêm mới</button>
            <button className='btn btn-outline-warning mt-2 ms-2' onClick={tdtdHandleEdit}>Sửa đổi</button>
        </form>
    </div>
  )
}
