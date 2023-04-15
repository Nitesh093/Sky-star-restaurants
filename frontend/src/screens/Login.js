import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login(){
    let navigate=useNavigate();
    const [credentials,setcredentials]=useState({email:"",password:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const responce=await fetch("http://localhost:5000/api/loginuser",{
            method:"post",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:credentials.email,password:credentials.password
            })
        })
        const json=await responce.json();
        console.log(json);
        if(!json.success){
            alert("enter right credientional")
        }
        else{
            localStorage.setItem("authToken",json.authToken)
            localStorage.setItem("userEmail",json.email)
            console.log(localStorage.getItem("authToken"))
            navigate("/")
        }
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
    }
    return(
        <>
        <Navbar></Navbar>
        <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label for="email" className="form-label">E-mail</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"name="password" value={credentials.password} onChange={onChange}/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/signup'className='m-3 btn btn-danger'>Do have account</Link>
</form>
        </>
    )
}