import React from "react"
import { Link } from "react-router-dom"
export default function Home () {
return (
  <main className="main-background"> 
    <section>
     <div className="home">
     <img src= "/images/cta-logo-one.svg" alt="cta-logo" className="home-first-img" />
     <Link to = "/explore" className="explore-button">Explore Now</Link>
     <img src= "/images/cta-logo-two.png" alt="cta-logo-two" className="home-second-img" />

     </div>
    </section>
  </main>
)
}