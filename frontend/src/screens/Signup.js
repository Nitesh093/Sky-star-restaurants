import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup(){
  let navigate=useNavigate();
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""});
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const responce=await fetch("http://localhost:5000/api/createuser",{
            method:"post",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation
            })
        })
        const json=await responce.json();
        console.log(json);
        if(!json.success){
            alert("enter right credientional")
        }
        else{
          navigate('/')
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
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={credentials.name} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">E-mail</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"name="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label for="Address" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="geolocation" value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/login'className='m-3 btn btn-danger'>Already a user</Link>
</form>
        </>
    )
}