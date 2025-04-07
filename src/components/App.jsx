import css from './styles/App.module.css';
import { Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation.jsx"
import { Suspense, lazy } from 'react';
import MovieCast from "../components/MovieCast.jsx";
import MovieReviews from "../components/MovieReviews.jsx";
const HomePage = lazy(() =>  import("../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function App() {

  /* Остальной код */
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>Downloed...</div>}>
     <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
             <Route path="cast" element={<MovieCast />} />
             <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
     </Routes>
      </Suspense>
    
    </div>
  )
}

  