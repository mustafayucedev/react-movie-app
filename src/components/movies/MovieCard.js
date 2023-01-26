import style from './style.module.css';

function MovieCard( {data} ) {

  const API_IMG ="https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <div className={style.item}>
        <div className={style.top}>
            <div className={style.poster}>
              <img 
                src={data.poster_path ? API_IMG + data.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} 
                alt={data.title} 
              />
            </div>
            <div className={style.average}> {data.vote_average} </div>
            <div className={style.overview}>
              <p> {data.overview ? data.overview : "Açıklama Bulunamadı.."} </p>  
            </div>
          </div>
          <div className={style.text}>
            <div className={style.title}> {data.title} </div>
            <div className={style.language}> Orjinal Dil: {data.original_language} </div>
            <div className={style.popularity}> İzlenme Sayısı : {data.popularity} </div>
            <div className={style.date}> Yayınlanma Tarihi : {data.release_date} </div>
          </div>
      </div>
    </>
  )
}

export default MovieCard