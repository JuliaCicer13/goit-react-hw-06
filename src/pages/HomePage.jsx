import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import css from '../components/styles/HomePage.module.css'
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
     const options = {
      headers: {
        // Замість api_read_access_token вставте свій токен
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(url, options)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <main className={css.list}>
      <MovieList movies={movies} />
    </main>
  );
 }
 
