import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchDetails } from 'Service/Api.js';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchDetails(movieId).then(resp => setMovieDetails(resp));
  }, [movieId]);
  // console.log(movieDetails);

  if (!movieDetails) {
    return <div>Please wait...</div>;
  }

  const { title, release_date, poster_path, overview, genres, vote_average } =
    movieDetails;
  const votePercent = (vote_average * 10).toFixed(0);

  return (
    <>
      <div>
        <img
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w300' + poster_path
              : 'https://via.placeholder.com/200x200'
          }
          alt={title}
        />
        <h1>{title}</h1>
        <p>User Score: {votePercent}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
