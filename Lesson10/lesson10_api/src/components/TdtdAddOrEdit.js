import React from 'react'
import { useState , useEffect } from 'react';
import axios from '../api/TdtdApi';

export default function TdtdAddOrEdit({addUser,submit}) {
    const [tdtdId,setTdtdId] = useState("");
    const [tdtdUsername,setTdtdUsername] = useState("");
    const [tdtdPassword,setTdtdPassword] = useState("");
    const [tdtdEmail,setTdtdEmail] = useState("");
    const [tdtdPhone,setTdtdPhone] = useState("");

    useEffect(()=>{
        setTdtdUsername(addUser.Username);
        setTdtdPassword(addUser.Password);
        setTdtdEmail(addUser.Email);
        setTdtdPhone(addUser.Phone);
    },[addUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            Username : tdtdUsername,
            Password : tdtdPassword,
            Email : tdtdEmail,
            Phone : tdtdPhone
        }
        const tdtdRespond = await axios.post("tdtdUser",obj);
        submit(false);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="Username">
                Username
                </span>
                <input
                    name="username"
                    type="text"
                    value={tdtdUsername}
                    onChange={(e)=>{setTdtdUsername(e.target.value)}}
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="Password">
                Password
                </span>
                <input
                    name="password"
                    type="password"
                    value={tdtdPassword}
                    onChange={(e)=>{setTdtdPassword(e.target.value)}}
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="Email">
                Email
                </span>
                <input
                    type="email"
                    name="email"
                    value={tdtdEmail}
                    onChange={(e)=>{setTdtdEmail(e.target.value)}}
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="Phone">
                Phone
                </span>
                <input
                    type="number"
                    name="phone"
                    value={tdtdPhone}
                    onChange={(e)=>{setTdtdPhone(e.target.value)}}
                    className="form-control"
                    placeholder="Phone"
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                />
            </div>
            <button type="submit" className='btn btn-outline-dark mb-4'>Add</button>
        </form>
    </div>
  )
}
