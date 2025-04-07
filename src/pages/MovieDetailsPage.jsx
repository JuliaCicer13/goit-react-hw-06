import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import css from '../components/styles/MovieDetails.module.css';
import {useParams, Link, useLocation, Outlet } from 'react-router-dom';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

    const options = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(url, options)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => console.error(error));
  }, [movieId]);

  if (!movieDetails) {
    return <p>Загрузка...</p>;
  }

  return (
    <main className={css.page}>
      <Link className={css.backButton} to={backLinkRef.current}>Go back</Link>
      <h1 className={css.titlePage}>{movieDetails.title}</h1>
      <img className={css.image} src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p className={css.discribe}>{movieDetails.overview}</p>
      <section>
         <h2 className={css.extraTitle}>Extra details</h2>
      <ul className={css.extraList}>
        <li className={css.littleWrap}>
          <Link to="cast" state={{from: backLinkRef.current}}>Cast</Link>
        </li>
        <li className={css.littleWrap}>
          <Link to="reviews" state={{from: backLinkRef.current}}>Reviews</Link>
        </li>
      </ul>
      <Outlet/>
      </section>
     
    </main>
  );
}