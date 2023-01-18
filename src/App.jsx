import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout/Layout';
import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('pages/Cast/Cast'));
const ReviewsPage = lazy(() => import('pages/Reviews/Reviews'));
const PageNotFound404 = lazy(() =>
  import('pages/PageNotFound404/PageNotFound404')
);

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
