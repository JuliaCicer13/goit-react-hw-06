import { Link, useLocation } from 'react-router-dom';
import css from '../components/styles/MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div className={css.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={css.moveWrapper}>
          <Link to={`/movies/${movie.id}`} state={{ from: location}}>
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <img className={css.avatar} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          </Link>
        </div>
      ))}
    </div>
  );
};
