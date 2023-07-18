import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'Service/Api';
import css from './Movies.module.css';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      alert('Please enter a valid query');
      return;
    }
    setSearchParams({ query: movieName });
    setMovieName('');
  };

  const handleChange = ({ target }) => {
    setMovieName(target.value);
  };

  useEffect(() => {
    if (!searchQuery) return;

    fetchSearchMovies(searchQuery).then(resp => setSearchResult(resp));
  }, [searchQuery]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Enter your query"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={movieName}
        />
        <button className={css.button_submit} type="submit">
          Search
        </button>
      </form>
      {searchResult.map(movie => (
        <ul className={css.list} key={movie.id}>
          <li>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Movies;
