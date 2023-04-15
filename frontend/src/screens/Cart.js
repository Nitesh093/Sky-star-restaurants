import React from "react";

import {useCart,useDispatchCart} from "../components/ContextReducer";
import { json } from "react-router-dom";

export default function Cart(){
    let data=useCart();
    let dispatch=useDispatchCart();
    if(data.length===0){
        return (<div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
            <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
        </div>)
    }
    let total_price=data.reduce((total,food)=>total+food.price,0)

    const confirmOrder=async ()=>{
      let userEmail=localStorage.getItem("userEmail")
      console.log("yo h mera data ")
      console.log(data)
      let responce=await fetch("http://localhost:5000/api/OrderData",{
        method:"post",
        headers:{
          'Content-type':'application/json'
      },
        body:JSON.stringify({
          order_data:data,
          email:userEmail,
          order_date:new Date()
        })
      })
      console.log(await responce)
      if(responce.status===200){
        dispatch({type:"DROP"})
      }

    }
    return <div>
    <table className="table caption-top text-white">
    <caption>List of users</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Option</th>
        <th scope="col">Amount</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {  data.map((food,index)=>{
            return <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{food.name}</td>
                    <td>{food.qty}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td><button type="button" className="btn btn-link" onClick={()=>dispatch({type:"REMOVE",index:index})}><span id="boot-icon" className="bi bi-trash" style={{"fontSize":"20px", "color": "rgb(84, 84, 84)"}}></span></button></td>
        
            </tr>
        })
      
   }
   
    </tbody>
  </table>
  <h2>Total price is {total_price}</h2>
  <div style={{"textAlign":"center"}}>
  <button type="button" className="btn btn-secondary" onClick={confirmOrder}>confirm your order</button>
  </div>
  </div>
    

}