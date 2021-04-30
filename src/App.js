import React, { useState,useEffect } from 'react'
import Movie from './Movie'

const featured_api='https://api.themoviedb.org/3/discover/movie?sort_by=populatiry.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'

const search_api='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

function App() {
const [movies,setMovies]=useState([])
const [search,setSearch]=useState('')

const getMovies=(api)=>{
  fetch(api)
  .then(res=>res.json())
  .then(res=>setMovies(res.results))
 

}
useEffect(() => {
  getMovies(featured_api)
}, [])

const handleOnSubmit=(e)=>{
  e.preventDefault()
if(search){
  getMovies(search_api+search)
}
  setSearch('')
}
  return (
    <React.Fragment>
      <header>
        <form onSubmit={handleOnSubmit}>
           <input className='search' placeholder='Search....' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </form>
      </header>
      <div className='movie-container' >
        {movies.filter(movie => movie.poster_path)
          .map((movie, index) => <  Movie key={movie.id} {...movie} />)}
      </div>


    </React.Fragment>
  );
}

export default App;
