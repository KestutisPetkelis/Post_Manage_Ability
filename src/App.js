import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import AllPosts from './pages/AllPosts';
import UserPosts from './pages/UserPosts';
import SinglePost from './pages/SinglePost';



function App() {

  const divStyle = {
    width: "100%", 
    height: "100vh",
    // border: "1px solid blue",
    marginTop: "0px",
    marginBottom: "10px",
    marginLeft: "10px",
    paddingRight: "21px",
    backgroundColor: "aliceblue"
   
  };
  
  
  const [allPost, setAllPost] = useState([])          // kintamasis postams
  const [oneUserPosts, setOneUserPosts] = useState([])  // kintamasis vieno vartotojo postams
  const [postOne, setPostOne] = useState([])

  const getUserPosts = (arg)=>{     // f-ja vieno vartotojo postams sudeti i masyva
    // const arrayOne = [...allPost]
    // const result = arrayOne.filter(x => x.username===arg)
    const result = allPost.filter(x => x.username===arg)
    console.log("result 000 ", result, "arg", arg)
    setOneUserPosts(result)
  }

  const getOnePost = (arg)=>{     // f-ja vienam postui sudeti i masyva
    // const arrayOne = [...allPost]
    // const result = arrayOne.filter(x => x.id===arg)
    const result = allPost.filter(x => x.id===arg)

    //const result = arrayOne.find(x => x.id===arg) // grazins ne masyva, galima naudoti nes kintamasis "id" yra unikalus
    console.log("result", result, "arg", arg)
    setPostOne(result)
  }




  useEffect(() => {                   // viena karta imam duomenis is serverio
    fetch(`http://167.99.138.67:1111/getallposts`)
             .then(res => res.json())
             .then(data => {
              console.log("Duomenys",data.data);
 
             setAllPost(data.data)
             
             }) ;
            
   // WILL BE CALLED ONE TIME WHEN COMPONENT IS RENDERED
 }, [])

  return (
    <div style={divStyle} className="App " >
     
      <BrowserRouter>
        <div className="sticky pv-20"> 
          <h4><Link to="allposts"> All Posts </Link></h4> 
          {/* <h4><Link to="userposts"> User Posts </Link></h4> */}
        </div>
        <Routes>
          <Route path="/allposts" element={<AllPosts allposts={allPost} getUserPosts={getUserPosts}/>}></Route>
          <Route path="/allposts/:userName" element={<UserPosts userPosts={oneUserPosts} getOnePost={getOnePost}/>} ></Route>
          <Route path="/allposts/:userName/:postId" element={<SinglePost allposts={allPost} postone={postOne}/>} ></Route>
        </Routes>
     
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
