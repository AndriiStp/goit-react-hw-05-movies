import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchDetails } from 'Service/Api.js';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchDetails(movieId).then(resp => setMovieDetails(resp));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Please wait...</div>;
  }

  const { title, release_date, poster_path, overview, genres, vote_average } =
    movieDetails;
  const votePercent = (vote_average * 10).toFixed(0);

  return (
    <>
      <div>
        <Link to={backLinkLocationRef.current}>Back</Link>
        <img
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w300' + poster_path
              : 'https://via.placeholder.com/200x200'
          }
          alt={title}
        />
        <h1>
          {title}({release_date.substring(0, 4)})
        </h1>
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
