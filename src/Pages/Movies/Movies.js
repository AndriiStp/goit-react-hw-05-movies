import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'Service/Api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get('query');
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [location.search]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please Enter a valid query');
      return;
    }
    setSearchParams({ query });
    fetchSearchMovies(query).then(resp => setSearchResult(resp));
    setQuery('');
  };

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={query}
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
