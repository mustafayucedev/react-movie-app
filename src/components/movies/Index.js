import MovieCard from './MovieCard';
import style from './style.module.css';

function Index( {movies} ) {
  return (
    <div className={style.card}>
      {movies.map((movie) => 
        <MovieCard data={movie} key={movie.id} />
      )}
    </div>
  )
}

export default Index