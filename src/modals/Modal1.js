import React from 'react'

const Modal1 = ({regToServer, closeModal, inputs, showModal}) => {
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
            {/* <div className='d-flex just-end' ><span className='closeModal' onClick={()=>regToServer()}>X</span></div> */}
            <span className='closeModal' onClick={()=>closeModal()}>X</span>
            <h3>Create New User</h3>
            <h4>(register)</h4>
            <label>Name:</label><br></br>
            <input type="text" ref={inputs.name}></input><br></br>
            <label>Password:</label><br></br>
            <input type="text" ref={inputs.password}></input><br></br>
            <label>Repeat password:</label><br></br>
            <input type="text" ref={inputs.password2}></input><br></br>

            <button onClick={()=>regToServer(inputs)}>Register</button>
        </div>
    )
}

export default Modal1
