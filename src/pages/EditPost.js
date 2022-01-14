import React from 'react'
import { useParams } from 'react-router-dom';

const EditPost = ({editPost, postInputs, allposts}) => {
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
    const {postId} = useParams() // paima reiksme is :id, kuris pridetas i failo gala

    console.log("Edit post with ID ", {postId}, postId)
    const postForEdit = allposts.find(x => x.id===postId)

    return (
        <div style={divStyle}>
            <h1>Edit Post</h1>
            <label>Title:</label><br></br>
            <input type="text" size="100" ref={postInputs.title} defaultValue={ postForEdit.title}></input><br></br>
            <label>Image address:</label><br></br>
            <input type="text" size="100" ref={postInputs.image} defaultValue={ postForEdit.image}></input><br></br>
            <label>Description:</label><br></br>
            <textarea cols="76" rows="20" ref={postInputs.description} defaultValue={ postForEdit.description}></textarea><br></br>
            <br></br>
            <button onClick={()=>editPost(postInputs, postId) }>Send Edited Post on click</button>
        </div>
    )
}

export default EditPost
