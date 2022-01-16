import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import Micromodal from '../modals/Micromodal';

function AllPosts({allposts, getUserPosts, currentUser, getAllPosts}) {
    const divStyle = {
        width: "200px",
        // height: "300px",
        // maxHeight: "300px",
        border: "1px solid blue",
        margin: "10px",
        // marginBottom: "10px",
        backgroundColor: "aliceblue",
        padding: "10px",
        // overflow: "auto"
        
    };

    const navigation = useNavigate()

    const [microIndex, setMicroIndex] = useState(null) // kintamasis, kad rodytu mikro modala po 1
    const [microInfo, setMicroInfo] = useState("")

    function nav(arg){
        navigation(`${arg}`)  // pridedam nauja kelia <UserPosts/> komponentui
                                    // per "arg" perduodam vartotojo varda (x.username)
                                    // todel gaunasi "/allposts/users/(arg)"
    }
    
    const gotoEdit = (arg)=>{
        navigation(`/editpost/${arg}`)
    }

    const getMicroInfo =(arg)=>{
        const a = allposts.find(x => x.id===arg)
        setMicroInfo(a.id)
        console.log(arg,"a",a.id)
    }



    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        
        <div  >
            <h1 className='pt-20'>All Posts</h1>
            <div className="d-flex f-wrap">
            
                {allposts.map((x,index) =>
                    <div className="pl-10 singlepost2"
                        style={divStyle} 
                        key={index} 
                    >
                        {/* onClick iskviecia 2 f-jas: 1 (nav) - per useNavigate pakrauna dinamini puslapi, kuris atitinka vartotojo varda */}
                        {/* 2 (getUserPosts)- perduoda vartotojo varda i funkcija, kuri is masyvo isfiltruoja vartotojo postus */}
                    <h3 className='userName'onClick={()=>{nav(x.username); getUserPosts(x.username)}}>{x.username}</h3> 
                    <img className="userImg" src={x.image} alt='paveiksliukas кирдык'/>
                    <h5>{x.title}</h5>
                    <div className='singlepost'>
                        <h5 onMouseOver={()=>{setMicroIndex(index); getMicroInfo(x.id)}} onMouseOut={()=>setMicroIndex(null)}>{x.id}</h5> 
                        {microIndex===index ? <Micromodal microInfo={microInfo}/> : null}
                    </div>
                    
                    {currentUser===x.username ? <button onClick={()=>{gotoEdit(x.id)}}>Edit Post</button> : null}
                    </div>
                    
                )}
            </div>
        
        </div>
    )
}

export default AllPosts
