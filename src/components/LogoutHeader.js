import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const LogoutHeader = ({logout, currentUser}) => {
    const navigation = useNavigate()

    const gotoCreatePost =()=>{
        navigation("/createpost")
    }


    return (
        <div>
            <div className='d-flex ali-center just-evenly'>
                <h4>User: {currentUser}</h4>
                <button onClick={()=>{ gotoCreatePost()}}>Create Post</button> 
                <button onClick={()=>logout()}>LOGOUT</button>
                <h4><Link to="allposts"> All Posts </Link></h4> 
                {/* <h4><Link to="userposts"> User Posts </Link></h4> */}
            </div>
        </div>
    )
}

export default LogoutHeader
