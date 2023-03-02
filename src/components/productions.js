import React from "react";

export default function Production () {
    return (
        <div className="productions">
          <div className="Pixar-div">
            <img src = "images/viewers-pixar.png" alt="Pixar" className="viewer-img" />
            <video autoPlay  = {true}  loop = {true} muted playsInline = {true} > 
                <source src= "videos/1564676714-pixar.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="Starwars-div">
            <img src = "images/viewers-starwars.png"alt="Starwars"className="viewer-img"/>
            <video autoPlay  = {true}  loop = {true} muted playsInline = {true} > 
                <source src= "videos/1608229455-star-wars.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="Marvels-div">
            <img src = "images/viewers-marvel.png" alt="Marvels" className="viewer-img" />
            <video autoPlay  = {true}  loop = {true} muted playsInline = {true} > 
                <source src= "videos/1564676115-marvel.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="Disney-div">
            <img src = "images/viewers-disney.png" alt="Disney" className="viewer-img"/>
            <video autoPlay  = {true}  loop = {true} muted playsInline = {true} > 
                <source src= "videos/1564674844-disney.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="N-Geo-Div">
            <img src = "images/viewers-national.png" alt="N-Geography" className="viewer-img"/>
            <video autoPlay  = {true}  loop = {true} muted playsInline = {true} > 
                <source src= "videos/1564676296-national-geographic.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
    )
}



