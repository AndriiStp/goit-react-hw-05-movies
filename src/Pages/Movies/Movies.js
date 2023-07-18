import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'Service/Api';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      alert('Please enter a valid query');
      return;
    }
    fetchSearchMovies(movieName).then(resp => setSearchResult(resp));
    setMovieName('');
  };

  const handleChange = ({ target }) => {
    setMovieName(target.value);
  };

  useEffect(() => {
    if (movieName.trim() === '') {
      setSearchResult([]);
      return;
    }

    fetchSearchMovies(movieName).then(resp => setSearchResult(resp));
  }, [movieName]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={movieName}
        />
        <button type="submit">Search</button>
      </form>
      {searchResult.map(movie => (
        <ul key={movie.id}>
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
