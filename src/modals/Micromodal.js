import React from 'react'

const Micromodal = () => {
    const divStyle = {
        minWidth: "20px",
        maxWidth: "60px",
        minHeight: "20px",
        // maxHeight: "300px",
        border: "1px solid blue",
        margin: "10px",
        borderRadius: "5px",
        // marginBottom: "10px",
        backgroundColor: "blue",
        padding: "10px",
        overflow: "auto", 
        color: "white", 
        // position: "relative",
        // top: "10px",
        // left: "10px"
        zIndex: "1"
        
    };


    return (
        <div style={divStyle} className='micro'>
            Micro
        </div>
    )
}

export default Micromodal
