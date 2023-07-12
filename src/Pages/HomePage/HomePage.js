import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'Service/Api.js';
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(resp => setMovies(resp));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <Link to={`/movies/${id}`} key={id}>
            <li key={id}>{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
