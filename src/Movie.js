import React, { useState } from 'react'


const image_api='https://image.tmdb.org/t/p/w1280'
export default function Movie({title,overview,poster_path,vote_average}) {
    const [toggle,setToggle]=useState(false)
    const setVoteClass=(vote)=>{
        return vote>=8?'orange':'red'
    }
    return (
        <div className="movie">
            <img src={image_api+poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)} ` } >{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
           
        </div>
    )
}
