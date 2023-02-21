import React, { useState } from "react";
import {useNavigate } from 'react-router-dom'

const Login = () => {
  const host = "http://localhost:5000";
  const [credential,setcredential] =useState({email:"",password:""})
  let navigate  = useNavigate();
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //api call
    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });
    const json = await response.json();    
    if (json.success){
        localStorage.setItem('token',json.authtoken);
        navigate('/');
    }
    else{
        alert("Invalid credentials")
    }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">
            Email Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              value={credential.email}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              id="password"
              name="password"
              value={credential.password}
              onChange={onChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
