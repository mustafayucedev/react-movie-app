import style from './style.module.css';

function MovieCard( {data} ) {

  const API_IMG ="https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <div className={style.item}>
        <div className={style.top}>
            <div className={style.poster}>
              <img src={API_IMG + data.poster_path} alt={data.title} />
            </div>
            <div className={style.average}> {data.vote_average} </div>
            <div className={style.overview}>
              <p> {data.overview} </p>  
            </div>
          </div>
          <div className={style.text}>
            <div className={style.title}> {data.title} </div>
            <div className={style.popularity}> İzlenme Sayısı : {data.popularity} </div>
            <div className={style.date}> Yayınlanma Tarihi : {data.release_date} </div>
          </div>
      </div>
    </>
  )
}

export default MovieCard