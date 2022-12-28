import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/api';
import { IMovie } from '../../types/types';
import { Link } from 'react-router-dom';
import s from './Home.module.scss';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
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
            <Link to={`/movies/${movie.id}`} className={s.link}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className={s.movieImg}
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
