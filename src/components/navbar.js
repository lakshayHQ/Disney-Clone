import React from "react"
import { Link } from "react-router-dom"  ; 


export default function Navbar (props) {
       







    return (
      <div>
      <nav className="nav-bar">
       
        <img src = "https://hotstar-88d5e.web.app/static/media/logo.8205aae8.svg"  alt = "Disney-Logo" className="Disney-Logo"/>
        <ul className="nav-bar-menu"> 
          <li> <img  src="images/home-icon.svg" alt = "nav-icon" className="nav-icon"/> <Link to = "#">Home</Link> </li>
          <li> <img  src="images/search-icon.svg" alt = "nav-icon" className="nav-icon"/><Link to = "#">Search</Link> </li>
          <li><img  src="images/movie-icon.svg" alt = "nav-icon" className="nav-icon"/> <Link to = "#">Movies</Link> </li>
          <li><img  src="images/series-icon.svg" alt = "nav-icon" className="nav-icon"/> <Link to = "#">Series</Link> </li>
          <li><img  src="images/watchlist-icon.svg" alt = "nav-icon" className="nav-icon"/> <Link to = "#">WatchList</Link> </li>
        </ul>
      
           
         <a 
         onClick={ props.handleChange} 
          >
         { !props.user ? <p className="login-button" >Login</p> :
          <div className="profile">    <img src={props.user} className = "profile-img"/> </div>}
         </a>
        
      </nav>
    </div>
   
    )


}



