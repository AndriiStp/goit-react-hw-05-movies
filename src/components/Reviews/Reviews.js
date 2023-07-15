import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Service/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(resp => setReviews(resp));
  }, [movieId]);

  if (!reviews) return <p>Sorry, have no any reviews data for this movie</p>;

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
