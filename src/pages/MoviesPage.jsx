import { useEffect, useState } from 'react';
import { useDebounce } from "@uidotdev/usehooks";
import MovieList from '../components/MovieList';
import axios from 'axios';
import { useSearchParams, } from 'react-router-dom';
import css from '../components/styles/MoviesPage.module.css';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get("query") ?? "";
  const debounceQuery = useDebounce(query, 300);

  

  // Обробатываю инпут
  const changeSearchParams = (event) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('query', event.target.value);
    setSearchParams(nextParams);
  };

  // Здесь создаю для формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.query.value.trim();

    if (searchValue) {
      setSearchParams({ query: searchValue });
    } else {
      setSearchParams({});
      setMovies([]);
      setLoading(false);
      setError(true);
      console.error("Error searching the images of movie", error);
    }
    form.reset();
  };

  // Тут уже данные от бекенда

  useEffect(() => {
    if (!debounceQuery) return;
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
        const options = {
          headers: {
            // Замість api_read_access_token вставте свій токен
            Authorization: `Bearer ${API_TOKEN}`
          }
        };
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch {
        setError(true);
        console.error("Error searching movies:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [debounceQuery]);
  
  return (
    <main>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query" value={query} onChange={changeSearchParams} placeholder="Search movies..." />
        <button className={css.buttonSearch} type="submit">Search</button>
      </form>
      {loading && <p>Loading movies...</p>}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
}