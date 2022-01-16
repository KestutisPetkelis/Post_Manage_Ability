import React from 'react'
import { useState } from 'react';

const Micromodal = ({ microInfo}) => {
    const divStyle = {
        minWidth: "20px",
        // maxWidth: "60px",
        minHeight: "20px",
        // maxHeight: "300px",
        border: "1px solid blue",
        margin: "10px",
        borderRadius: "5px",
        // marginBottom: "10px",
        backgroundColor: "white",
        padding: "5px 10px",
        overflow: "auto", 
        color: "blue", 
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1"
        
    };

    return (
        <div style={divStyle} className='micro'>
            <h5>{microInfo}</h5>
        </div>
    )
}

export default Micromodal
