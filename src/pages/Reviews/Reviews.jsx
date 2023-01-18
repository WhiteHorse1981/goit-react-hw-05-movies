import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';
import { nanoid } from 'nanoid';

function ReviewsPage() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        const data = await movieAPI.getReviewsMovies(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return <Loader />;
  }
  return (
    <>
      {error && <p>Server request failed. Try again.</p>}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            return (
              <li key={nanoid()} className={css.ReviewItem}>
                <p className={css.ReviewAuthor}>Author: {review.author}</p>
                <p className={css.ReviewContent}>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don`t have any rewiews for this movie.</p>
        )}
      </ul>
    </>
  );
}
export default ReviewsPage;
