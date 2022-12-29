import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { IMovie } from '../../types/types';
import { Link, useLocation } from 'react-router-dom';
import s from './Home.module.scss';
import { handleImageError } from '../../utils/imageErrorHandler';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h1 className={s.header}>Trending today</h1>
      <ul className={s.moviesList}>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={s.link}
            >
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className={s.movieImg}
                onError={handleImageError}
              />
              <p className={s.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
