import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchSearchMovies } from 'Service/Api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Movies;
