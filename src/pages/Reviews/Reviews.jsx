import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';
// import css from './Cast.module.css';

function ReviewsPage() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await movieAPI.getReviewsMovies(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);
  return (
    <>
      {reviews && (
        <ul>
          {reviews && (
            <ul>
              {reviews.map(review => {
                return (
                  <li key={review.id}>
                    <p> {review.author}</p>
                    <p> {review.content}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  );
}
export default ReviewsPage;
