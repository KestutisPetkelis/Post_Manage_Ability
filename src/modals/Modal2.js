import React from 'react'

const Modal2 = ({inputs, closeModal, loginToServer}) => {
    const divStyle = {
        width: "300px", 
        // height: "100px",
        border: "1px solid blue",
        borderRadius: 5,
        // margin: "10px",
        // marginBottom: "10px",
        // marginLeft: "10px",
        padding: "20px",
        paddingTop: "5px",
        backgroundColor: "lightblue"
       
      };
    return (
        <div style={divStyle} className='modal-card'>
           
            <span className='closeModal' onClick={()=>closeModal()}>X</span>
            <h3>Login</h3>
            <label>Name:</label><br></br>
            <input type="text" ref={inputs.name}></input><br></br>
            <label>Password:</label><br></br>
            <input type="text" ref={inputs.password}></input><br></br>
            <button onClick={()=>loginToServer(inputs)}>Login</button>
            
        </div>
    )
}

export default Modal2
