import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Protected(props){
    const navigate=useNavigate()
    const {Component}=props;
    useEffect(()=>{
        let login=localStorage.getItem("userEmail")
        if(!login){
            navigate('/login')
        }
    })
    return <div>
        <Component/>
    </div>
}
export default Protected;