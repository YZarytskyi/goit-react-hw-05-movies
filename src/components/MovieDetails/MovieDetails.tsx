import { Suspense, useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieById } from '../../api/api';
import { IMovie } from '../../types/types';
import { handleImageError } from '../../utils/imageErrorHandler';
import { IMAGE_BASE_URL } from '../Home/Home';
import { Spinner } from '../Spinner/Spinner';
import s from './MovieDetails.module.scss';

const MovieDetails = (): JSX.Element => {
  const { movieId } = useParams();

  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    if (!selectedMovie) {
      const fetchMovie = async () => {
        const data = await getMovieById(Number(movieId));
        setSelectedMovie(data);
      };
      fetchMovie();
    }
    // eslint-disable-next-line
  }, [movieId]);

  if (!selectedMovie) {
    return <Spinner />;
  }

  const genres = selectedMovie.genres.map(genre => genre.name).join(', ');

  return (
    <>
      <div className={`container ${s.movieContainer}`}>
        <div className={s.movieImgContainer}>
          <img
            src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            onError={handleImageError}
          />
        </div>
        <div className={s.overviewContainer}>
          <p className={s.title}>
            {selectedMovie.title} 🔥{' '}
            <span>{selectedMovie.release_date.substring(0, 4)}</span>
          </p>
          <p className={s.rating}>
            Rating: <span>{selectedMovie.vote_average}</span>
          </p>

          <p className={s.rating}>
            Budget: <span>{selectedMovie.budget.toLocaleString()} $</span>
          </p>

          <p className={s.rating}>
            Revenue: <span>{selectedMovie.revenue.toLocaleString()} $</span>
          </p>

          <p className={s.genres}>
            Genres: <span>{genres}.</span>
          </p>

          <p className={s.overviewHeader}>Overview</p>
          <p className={s.overview}>{selectedMovie.overview}</p>
        </div>
        <div className={s.additionalInfoContainer}>
          <p className={s.additionalInfo}>Additional information:</p>
          <ul className={s.linksList}>
            <li>
              <NavLink
                to="cast"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <Outlet context={{ movieId }} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
