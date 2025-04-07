import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import css from './styles/MovieReviews.module.css'
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzdiMjJkY2EyM2E0NGVlYzNmMDM4YTgwZTk4MzZmMyIsIm5iZiI6MTc0MzkzNzAxMi42NTYsInN1YiI6IjY3ZjI1ZGY0ZTFkNWMyM2M2ZWQ5NGZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNYyr113GyKgFHFKTn5sIyaKHradz_3S9_FZd4LiC1c';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? "/")

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;

    const options = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    };

    axios.get(url, options)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <section className={css.sectionReviews}>
      <h2 className={css.titleReviews}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={css.listReviews}>
          {reviews.map(review => (
            <li key={review.id}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет отзывов для этого фильма.</p>
      )}
       <Link className={css.backButton} to={backLinkRef.current}>Go back</Link>
    </section>
  );
}