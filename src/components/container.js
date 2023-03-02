import React from "react" ; 
import Slides from "./slides"
import Production from "./productions"
import Recommended from "./recommended"
import Original from "./original"
import Trendings from "./trending"
import NewDisney from "./newdisney"

export default function Container (props) {
    

    return (
        <main className="container"> 
       <section >
        <Slides />
       </section>
       <section>
        <Production  />
       </section>
       <section className="movies-bar">
       {/* <Recommended movies = {props.recommend}/> */}
       {/* <Original  /> 
       <NewDisney />
       <Trendings  /> */}
       </section>
        </main>
    )
}