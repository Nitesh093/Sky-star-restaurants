import React, { useState,useRef,useEffect } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";


export default function Card(props){
let dispatch=useDispatchCart()
    const PriceRef=useRef();
    let option=props.options;
    let data=useCart();
    let priceOptions=Object.keys(option);
    const [qty,setQty]=useState(1)
    const [size,setSize]=useState("")
    const handleAddToCart=async()=>{
        console.log(data)
        let food=[]  
        for(const item of data){
            if(item.id === props.foodItem._id){
                // console.log("match  start")
                // console.log(data)
                // console.log(item.id)
                // console.log(props.foodItem._id)
                food=item
                break;
            }
        }
        if(food!==  []){
            if(food.size === size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
                // console.log(food)
                // console.log("===")
                return 
            }
            else if(food.size !== size){
                await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
                // console.log(food)
                // console.log(food.size)
                // console.log(size)
                // console.log("!==")

                return 
            }
            return
        }
            await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
            
    }
    let finalPrice=qty*parseInt(option[size]);
    useEffect(()=>{
        setSize(PriceRef.current.value)
    },[])


    return  <div>
    <div className="card mt-3" style={{"width":"20rem","maxHeight":"500px"}}>
  <img className="card-img-top" src={props.foodItem.img} alt="..." style={{height:"200px" ,objectFit:"fill"}}/>
  <div className="card-body bg-dark">
    <h5 className="card-title">{props.foodItem.name}</h5>
    <p className="card-text">This is Some important Text</p>
    <div className="container w-100">
        <select className="m-2 h-100  bg-success rounded" onChange={(e)=>{setQty(e.target.value)}}>
            {Array.from(Array(6),(e,i)=>{
                return ( <option key={i}  value={i+1} > {i+1} </option> )
            })}
        </select>
        <select className="m-2 h-100  bg-success rounded" ref={PriceRef} onChange={(e)=>{setSize(e.target.value)}}>
            {priceOptions.map((data)=>{
                return <option key={data+1} value={data} >{data}</option>  
            })}
            
             
        </select>
        <div className="d-inline h-100 fl-5" >₹{finalPrice}/-</div>
        <hr></hr>
        <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart} >Add to cart </button>
    </div>
  </div>
  </div>
</div>
}