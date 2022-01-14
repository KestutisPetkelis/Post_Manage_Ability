import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import LoginHeader from './components/LoginHeader';
import LogoutHeader from './components/LogoutHeader';

import AllPosts from './pages/AllPosts';
import UserPosts from './pages/UserPosts';
import SinglePost from './pages/SinglePost';

import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

import Modal1 from './modals/Modal1';
import Modal2 from './modals/Modal2';

function App() {

  const divStyle = {
    width: "100%", 
    // height: "100vh",
    // border: "1px solid blue",
    marginTop: "0px",
    marginBottom: "10px",
    marginLeft: "10px",
    paddingRight: "21px",
    backgroundColor: "aliceblue"
   
  };
  
  
  const [allPost, setAllPost] = useState([])          // kintamasis postams
  const [oneUserPosts, setOneUserPosts] = useState([])  // kintamasis vieno vartotojo postams
  const [postOne, setPostOne] = useState([])      // kintamasis vienam postui
  const [secretKey, setSecretKey] = useState("")    // kintamasis "secretKey" vartotojo identifikavimui gaunamas is serverio
  const [currentUser, setCurrentUser] = useState("")  // kintamasis esancio vartotojo identifikavimui
  const [showModal, setShowModal] =useState({
                                              modal1: false,
                                              modal2: false
  }) // kintamasis darbui su modalais

  const inputs = {
    name: useRef(),
    password:useRef(),
    password2:useRef()
  }
  const user = {      // kintamasis darbui su vartotojo sukurimu ir registracija
    name: "",
    passwordOne:"",
    passwordTwo:""
  }

  const postInputs ={
    title:useRef(),
    image:useRef(),
    description:useRef()
  }

  const postCreateEdit={ // kintamasis darbui su postu sukurimu ir redagavimu
    title:"",
    image:"",
    description:""

  }

  const login=()=>{     // login modalo uzkrovimo funkcija
    setShowModal({...showModal, modal2: true})
    console.log("login")
  }

  const loginToServer=()=>{         // prisijungimo prie serverio funkcija
    const user1 = {
    name: inputs.name.current.value,
    password: inputs.password.current.value
    }
    const options = {                           // POST standartine dalis
      method: "POST",
      headers: {
          "content-type":"application/json"
      },
      body: JSON.stringify(user1)              // per cia perduodam duomenis
    }
  
    fetch("http://167.99.138.67:1111/login", options)       // fetch POST
      .then(res => res.json())
      .then(data => {
          console.log(data, data.secretKey)
          if(!data.success){
            alert(data.message)
            inputs.name.current.value=""
            inputs.password.current.value=""
          } else{
            setSecretKey(data.secretKey)
            setCurrentUser(user1.name)
            alert(data.message)
            closeModal()
          }
          

      })

    console.log("Login", user1.name)
  }

  const register =()=>{   // regidtracijos modalo uzkrovimo funkcija
    setShowModal({...showModal, modal1: true})
    console.log ("Register")
  }

  const closeModal =()=>{       // modalu uzdarymo funcija
    setShowModal({...showModal, modal1: false, modal2:false})
    console.log("Close modal")
  }


  const regToServer =(inputs)=>{          // registracijos i serveri funkcija
    user.name=inputs.name.current.value
    user.passwordOne=inputs.password.current.value
    user.passwordTwo=inputs.password2.current.value

    const options = {                           // POST standartine dalis
      method: "POST",
      headers: {
          "content-type":"application/json"
      },
      body: JSON.stringify(user)              // per cia perduodam duomenis
    }
    
    fetch("http://167.99.138.67:1111/createaccount", options)       // fetch POST
    .then(res => res.json())
    .then(data => {
    console.log(data, data.success)
      if(!data.success){
        alert(data.message)
        inputs.name.current.value=""
        inputs.password.current.value=""
        inputs.password2.current.value=""
      }else{
        alert(data.message)
        closeModal()
      }


    })
    console.log("inputs", user)
    console.log("It just has tried to register")
  }
 
  const logout =()=>{   // Logout funkcija
    setSecretKey("")
    setCurrentUser("")
  }
  





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


  const createPost = (postInputs) =>{   // posto sukurimo funkcija
    console.log("createPost", postInputs, secretKey)
    const post={
      secretKey: secretKey,
      title: postInputs.title.current.value,
      image: postInputs.image.current.value,
      description: postInputs.description.current.value
    }

    const options = {                           // POST standartine dalis
      method: "POST",
      headers: {
          "content-type":"application/json"
      },
      body: JSON.stringify(post)              // per cia perduodam duomenis
    }
    
    fetch("http://167.99.138.67:1111/createpost", options)       // fetch POST
    .then(res => res.json())
    .then(data => {
    console.log(data, data.success)
      if(data.success){
        alert(data.message)
        postInputs.title.current.value=""
        postInputs.image.current.value=""
        postInputs.description.current.value=""
      }else{
        alert(data.message)
       
      }
      getAllPosts()
    })

  }



  const editPost = (postInputs, postId) =>{   // posto redagavimo
    
    const post={
      secretKey: secretKey,
      title: postInputs.title.current.value,
      image: postInputs.image.current.value,
      description: postInputs.description.current.value,
      id: postId
    }

    const options = {                           // POST standartine dalis
      method: "POST",
      headers: {
          "content-type":"application/json"
      },
      body: JSON.stringify(post)              // per cia perduodam duomenis
    }
    
    fetch("http://167.99.138.67:1111/updatepost", options)       // fetch POST
    .then(res => res.json())
    .then(data => {
    console.log(data, data.success)
      if(data.success){
        alert(data.message)
        // postInputs.title.current.value=""
        // postInputs.image.current.value=""
        // postInputs.description.current.value=""
      }else{
        alert(data.message)
       
      }
      getAllPosts()
      console.log("naujai atsisiuntem postu Masyva")
    })
    
    
    
    
    
    
    
    
    
    console.log("Edit post", postInputs, postId)
  }

  const getAllPosts = ()=>{
    fetch(`http://167.99.138.67:1111/getallposts`)
             .then(res => res.json())
             .then(data => {
              console.log("Duomenys",data.data);
 
             setAllPost(data.data)
             console.log ("All correct")
             }) ;
 
  }








  useEffect(() => {                   // viena karta imam duomenis is serverio
    getAllPosts()
    
    // fetch(`http://167.99.138.67:1111/getallposts`)
    //          .then(res => res.json())
    //          .then(data => {
    //           console.log("Duomenys",data.data);
 
    //          setAllPost(data.data)
             
    //          }) ;
            
   // WILL BE CALLED ONE TIME WHEN COMPONENT IS RENDERED
 }, [])





  return (
    <div style={divStyle} className="App " >
     
      <BrowserRouter>
        
        <div className="sticky pv-20"> 
            {secretKey==="" ? 
            <LoginHeader login={login} register={register} showModal={showModal}/>: 
            <LogoutHeader logout={logout} currentUser={currentUser} />}
        </div>
        {showModal.modal1 ? <Modal1 regToServer={regToServer} closeModal={closeModal} inputs={inputs} showModal={showModal}/> : null}
        {showModal.modal2 ? <Modal2  loginToServer={loginToServer} closeModal={closeModal} inputs={inputs} showModal={showModal}/> : null}
        <Routes>
          <Route path="/allposts" element={<AllPosts allposts={allPost} getUserPosts={getUserPosts} currentUser={currentUser} editPost={editPost} getAllPosts={getAllPosts}/> }></Route>
          <Route path="/allposts/:userName" element={<UserPosts userPosts={oneUserPosts} getOnePost={getOnePost}/>} ></Route>
          <Route path="/allposts/:userName/:postId" element={<SinglePost allposts={allPost} postone={postOne}/>} ></Route>
          <Route path="/createpost" element={<CreatePost createPost={createPost} postInputs={postInputs}/>}></Route>
          <Route path="/editpost/:postId" element={<EditPost editPost={editPost} postInputs={postInputs} allposts={allPost}/>}></Route>
        </Routes>
     
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
