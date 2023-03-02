import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router  , Routes , Route } from "react-router-dom" ; 
import Container from './components/container';
import Home from './components/home';
import {auth , provider } from  "./firebase-app" ; 
import db from "./firebase-app"

const App =  ()  => {
 const [user , setUser] = React.useState("")


 React.useEffect(()=> {
  if(user) {
    window.localStorage.setItem("user" , user) 
  }
  setUser(window.localStorage.getItem("user"))
 
} , [user])
const handleChange = () => {
  auth.signInWithPopup(provider)
 .then((response) => setUser(response.user.photoURL))
 .catch((err) => console.log(err.message))
}


let [recommend , setRecommend ] = React.useState([])
let [trending , setTrending] = React.useState([])
let [original , setOriginal ] = React.useState([])
let [newdisney , setNewdisney ] = React.useState([])

React.useEffect(() => {

    db.collection("disney-movies").onSnapshot((snapshot) => {
     snapshot.docs.map((doc) => {
      switch (doc.data().type) {
       case "recommend" :
          setRecommend ( (recommend) => { 
            return [ ...recommend , {id : doc.id , ...doc.data()} ]  })
       break  
       case "trending" : 
        setTrending ((trending) => {
           return [ ...trending , {id : doc.id , ...doc.data()} ]  })
        break 
        case "original" : 
        setOriginal ( (original) => {
            return [ ...original , {id : doc.id , ...doc.data()}] })
        break 
        case "new" : 
        setNewdisney ((newdisney) => {
            return [...newdisney , {id : doc.id , ...doc.data()}] })
      }
     })
    })
   } , [user])

  return (
    <>
    <Router> 
      <Navbar user = {user} handleChange  = {handleChange}/>
      <Routes>
     <Route exact path='/explore' element = { 
     <Container
      recommend = {recommend} trending = {trending} 
      newdisney = {newdisney} original = {original}
     /> } >
     </Route>
     <Route exact path='/' element = {<Home />} >
      </Route>
     </Routes>
    </Router>

    </>
  )
}

export default App;
