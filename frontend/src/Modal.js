import React from "react";

import ReactDom from 'react-dom'

const MODAL_STYLE={
    position:"fixed",
    top:"50%",
    left:"50%",
    backgroundColor:"rgb(34,34,34)",
    transform:'translate(-50%,-50%)',
    zIndex:1000,
    height:"90%",
    width :"90%"
}
const OVERLAY_STYLE={
    postion:"fixed",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000
}
export default function Model({children,onclose}){
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLE}>
            <div style={MODAL_STYLE}>
            <button className="btn bg-danger fs-4" style={{marginLeft:"90%",marginTop:"-35%"}} onClick={onclose}>X</button>
            <button type="button" className="btn-close bg-danger btn-close" style={{marginLeft:"97%",marginTop:"-25%"}} aria-label="Close" onClick={onclose}></button>
                {children}
            </div>
        </div>
        </>,document.getElementById("cart-root")
    )
}