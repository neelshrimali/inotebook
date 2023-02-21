import React,{ useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const host = "http://localhost:5000";
  let navigate  = useNavigate();
  const [credential,setcredential] =useState({name : "", email:"",password:"",cpassword:""})
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password} = credential;
    //api call
    const url = `${host}/api/auth/createuser`;
    const response = await fetch(url, {      
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify({ name,email,password })
    });
    const json = await response.json();  
    if (json.success){
      localStorage.setItem('token',json.authtoken);
      navigate('/');
      props.showAlert("Account created successfully!","success")
    }
    else{
      props.showAlert("Invalid Credentials!","danger")
    }
    
  };
  return (
    <div className="container mt-5 my-2">
      <h2>Create your account to continue MyNotebook</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}  required             
            />
          </div>
        </div>
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
              onChange={onChange} required              
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="password"
              name="password"              
              onChange={onChange}
              className="form-control" required minLength={5}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="cpassword"
              name="cpassword"              
              onChange={onChange}
              className="form-control" required minLength={5}
            />
          </div>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"            
          >
            Sing Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
