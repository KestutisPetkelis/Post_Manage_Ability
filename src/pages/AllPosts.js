import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AllPosts({allposts, getUserPosts, currentUser, getAllPosts }) {
    const divStyle = {
        width: "200px",
        // height: "300px",
        // maxHeight: "300px",
        border: "1px solid blue",
        margin: "10px",
        // marginBottom: "10px",
        backgroundColor: "aliceblue",
        padding: "10px",
        overflow: "auto"
        
    };

    const navigation = useNavigate()

    function nav(arg){
        navigation(`${arg}`)  // pridedam nauja kelia <UserPosts/> komponentui
                                    // per "arg" perduodam vartotojo varda (x.username)
                                    // todel gaunasi "/allposts/users/(arg)"
    }
    
    const gotoEdit = (arg)=>{
        navigation(`/editpost/${arg}`)
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        
         <div  >
            <h1 className='pt-20'>All Posts</h1>
            <div className="d-flex f-wrap">
            
            {allposts.map((x,index) =>
                <div className="pl-10"
                    style={divStyle} 
                    key={index} 
                >
                    {/* onClick iskviecia 2 f-jas: 1 (nav) - per useNavigate pakrauna dinamini puslapi, kuris atitinka vartotojo varda */}
                    {/* 2 (getUserPosts)- perduoda vartotojo varda i funkcija, kuri is masyvo isfiltruoja vartotojo postus */}
                   <h3 className='userName'onClick={()=>{nav(x.username); getUserPosts(x.username)}}>{x.username}</h3> 
                   <img className="userImg" src={x.image} alt='paveiksliukas кирдык'/>
                   <h5>{x.title}</h5>
                   <h5>{x.id}</h5>
                   {currentUser===x.username ? <button onClick={()=>{gotoEdit(x.id)}}>Edit Post</button> : null}
                </div>
             
            )}
            </div>
        
        </div>
    )
}

export default AllPosts
