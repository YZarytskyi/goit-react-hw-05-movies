import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Header = lazy(() => import('./Header/Header'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            {/* <Route path="cast" element={<Cast />}></Route> */}
            {/* <Route path="reviews" element={<Reviews />}></Route> */}
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
