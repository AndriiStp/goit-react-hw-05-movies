import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout.js';
// import HomePage from 'Pages/HomePage/HomePage';
// import Movies from 'Pages/Movies/Movies';
// import MovieDetails from 'Pages/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast.js';
// import Reviews from './Reviews/Reviews.js';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage.js'));
const Movies = lazy(() => import('../Pages/Movies/Movies.js'));
const MovieDetails = lazy(() =>
  import('../Pages/MovieDetails/MovieDetails.js')
);
const Cast = lazy(() => import('../components/Cast/Cast.js'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.js'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
