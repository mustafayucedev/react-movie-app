import style from './style.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from '../movies/Index';

function Index() {

  const [movies,setMovies] = useState([]);
  const [input,setInput] = useState("");
  
  const API_KEY = "bcae5a630b62171707164ce935b4dd9a";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const API_SEARCH =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;


  const getMovies = async () => {
    try {
      const response = await axios.get(API_URL);
      setMovies(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(API_SEARCH);
      setMovies(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  },[])

  console.log(movies)

  

  return (
    <>
    <header className={style.header}>
      <div className={style.flex}>
        <div>
          <a href="/">
            <h1 className={style.title}>APPFLIX</h1>
          </a>
        </div>
        <div className={style.column}>
          <form className={style.form} onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Film Ara.." 
              className={style.input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit"className={style.button}>Film Ara.. </button>
          </form>
        </div>
      </div>
    </header>
    <main>
      <section>
        <Movies movies={movies} />
      </section>
    </main>
    </>
  )
}

export default Index;