import { Routes, Route } from 'react-router-dom';
import React from 'react';

import HomePage from 'Pages/HomePage/HomePage';
import Movies from 'Pages/Movies/Movies';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast.js';
import Reviews from './Reviews/Reviews.js';
import { Layout } from './Layout.js';

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
