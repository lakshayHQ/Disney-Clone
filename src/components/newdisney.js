import React from "react"


export default function NewDisney (props) {
    const [newMovies , setNewMovies] = React.useState(props.movies)
    return (
        <>
        <h1 className="movies-header">  New to Disney </h1>
        <div className="movies-div">
        <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="movie-poster" className="movie"/>
        <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="movie-poster" className="movie"/>
        <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="movie-poster" className="movie"/>
        <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals" alt="movie-poster" className="movie"/>

        </div>
        </>
    )
}