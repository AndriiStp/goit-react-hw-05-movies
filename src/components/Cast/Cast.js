import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'Service/Api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(resp => setCast(resp));
  }, [movieId]);

  if (!cast) return <p>Sorry, have no any cast data for this movie</p>;

  return (
    <ul>
      {cast.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
          />
          <h2>{name}</h2>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
