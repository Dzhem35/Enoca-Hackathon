import React from "react";
import axios from 'axios';
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import './Search.css'


 

function Search() {
    
const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "3c4a75c60ab27c385698962f1c76f654"
const [movies, setMovies] = useState([])
const [searchKey, setSearchKey] = useState("")

  const fetchMovies = async (searchKey) => {
      const type = searchKey ? "search" : "discover"
      const {data : {results}} = await axios.get(`${API_URL}/${type}/movie`, {
          params: {
              api_key: API_KEY,
              query: searchKey
          }
      })

      setMovies(results)
  }

  useEffect (() => {
      fetchMovies()
  }, [])

  const renderMovies = () => (
      movies.map(movie => (
          <MovieCard
              key={movie.id}
              movie={movie}
          />
      ))
  )

  const searchMovie = (e) => {
        e.preventDefault()
        fetchMovies(searchKey)
  } 
  
  return (
    <div className="searchInputs">
        <header>
            <form onSubmit={searchMovie}>
                <input type='text' onChange={(e) => setSearchKey(e.target.value)} placeholder="Search"/>
            </form>
        </header>

        <div className="container">
            {renderMovies()}
        </div>
        
    </div>
  );
  }


export default Search;
