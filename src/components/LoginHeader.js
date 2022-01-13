import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const LoginHeader = ({login, register}) => {
    return (
        <div >
            <div className='d-flex ali-center just-evenly'>
                <button onClick={()=>login()}>LOGIN</button> 
                <button onClick={()=>register()}>REGISTER</button>
            <h4><Link to="allposts"> All Posts </Link></h4> 
          {/* <h4><Link to="userposts"> User Posts </Link></h4> */}
        </div>
            
        </div>
    )
}

export default LoginHeader
