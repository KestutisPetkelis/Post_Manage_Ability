import React from 'react'
import {useParams} from "react-router-dom"


function SinglePost({ postone}) {
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

    const {postId} = useParams()
    console.log("Vienas postas", postone, postId)

    if(!postone|| postone.length === 0){
        return (<div>nera postone</div>)
    }
    //console.log("Vienas postas", postone, postone[0], postone[0].username )

    return (
        <div style={divStyle}>
           
            {/* {postId} */}
            <div className="pl-10" >
                    
                   <h3 className="pt-20">Vartotojas {postone[0].username}</h3>
                   <img className="userImg imgOneUser" src={postone[0].image} alt='paveiksliukas кирдык anyway...'/>
                   <h5>{postone[0].title}</h5>
                   <h5>{postone[0].description}</h5>
                   <h5> #Id: {postone[0].id}</h5>
                </div>

        </div>
    )
}

export default SinglePost
