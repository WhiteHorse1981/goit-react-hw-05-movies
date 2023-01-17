import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout/Layout';

import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import CastPage from 'pages/Cast/Cast';
import ReviewsPage from 'pages/Reviews/Reviews';
import PageNotFound404 from 'pages/PageNotFound404/PageNotFound404';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </Layout>
  );
};
