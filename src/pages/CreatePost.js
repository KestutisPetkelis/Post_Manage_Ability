import React from 'react'

const CreatePost = ({createPost, postInputs}) => {
    const divStyle = {
        width: "90%", 
        height: "100vh",
        border: "1px solid blue",
        marginTop: "0px",
        marginBottom: "10px",
        marginLeft: "10px",
        paddingRight: "21px",
        backgroundColor: "aliceblue"
       
      };

    return (
        <div style={divStyle}>
            <h1>Create Post</h1> 
            <label>Title:</label><br></br>
            <input type="text" size="100" ref={postInputs.title}></input><br></br>
            <label>Image address:</label><br></br>
            <input type="text" size="100" ref={postInputs.image}></input><br></br>
            <label>Description:</label><br></br>
            <textarea cols="76" rows="20" ref={postInputs.description}></textarea><br></br>
            <br></br>
            <button onClick={()=>createPost(postInputs)}>Create Post on click</button>

        </div>
    )
}

export default CreatePost
