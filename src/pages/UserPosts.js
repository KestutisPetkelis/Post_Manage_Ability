import React from 'react'
import {useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function UserPosts({userPosts, getOnePost}) {
    const divStyle = {
        width: "200px",
        // height: "300px",
        maxHeight: "620px",
        border: "1px solid blue",
        margin: "10px",
        // marginBottom: "10px",
        backgroundColor: "aliceblue",
        padding: "10px",
        overflow: "auto"
        
    };

    const {userName} = useParams() // paima reiksme is :userName, kuris pridetas i failo gala
    const navigation = useNavigate()
    console.log('userPosts ',userPosts)
    if(userPosts.length === 0){     // tikrinam ar yra userPost (kaip masyva)
        return (<div>nera userPosts</div>)
    }
    function nav(arg){
        navigation(`${arg}`)  // pridedam nauja kelia <UserPosts/> komponentui
                                    // per "arg" perduodam vartotojo varda (x.username)
                                    // todel gaunasi "/allposts/users/(arg)"
    }
    
    console.log("userName", {userName})
    //console.log("userPosts", userPosts, userPosts[0], userPosts[0].username)

    const getTime=(arg)=>{
        const date = new Date(arg)
        const month = date.getMonth()
        const day = date.getDate()
        const year = date.getFullYear()
        return (`${year}-${month+1}-${day}`)
    }



    return (
        <div>
           <h2 className='pt-20'>Čia yra vartotojo  "{userName}" postai</h2>
           <div className="d-flex f-wrap">
            
            {userPosts.map((x,index) =>
                <div className="pl-10"
                    style={divStyle} 
                    key={index} 
                >
                                   
                   <h3 className='userName'>{x.username}</h3>
                   <img className="userImg userImgPointer"
                   onClick={()=>{nav(x.id); getOnePost(x.id)}}
                    src={x.image} alt='paveiksliukas кирдык anyway...'/>
                   <h5>{x.title}</h5>
                   <h5>{x.id}</h5>
                   <h3>{getTime(x.timestamp)}</h3>
                </div>
             
            )}
            </div>


        </div>
    )
}

export default UserPosts
