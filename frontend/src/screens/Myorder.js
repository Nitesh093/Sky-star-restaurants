import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function Myorder(){



    let [order_Data,setOrder_data]=useState("");


    const itemToForm = () => {
        if(order_Data === "") {return}
               
        // The rest of the code
      }
    const fetchMyOrder=async ()=>{
        await fetch("http://localhost:5000/api//myorder",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:localStorage.getItem("userEmail")
            })
            
        }).then(async (res)=>{
            let responce= await res.json();
            await setOrder_data(responce)
            
        })
        
        console.log(order_Data)
        
        

    }
    useEffect(()=>{
        fetchMyOrder();
    },[])
      
   
    return <div>
           <div><Navbar></Navbar></div>
           <div>MY orders</div>
           {/* {console.log(order_Data.order_detail[0])
           
           
           } */}{
            itemToForm()
           }
           
           
            {
                order_Data ? 
                
                order_Data.order_detail!==[]?
                order_Data.order_detail[0].order_data.map((data,index)=>{
                    return ( <div>
                            {data.map((item,index)=>{
                                return index===0 ? <h1>{item.order_date}</h1> :
                                <>Name :{item.name} qty:{item.qty} price:{item.price}
                                <br></br>
                                
                                </>
                            })}
                            
                    </div> )
                })
                :""
                :"No items"
            }

           <div><Footer></Footer></div>
           </div>
    

}


