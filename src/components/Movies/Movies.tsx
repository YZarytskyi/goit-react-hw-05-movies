import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesByQuery } from '../../api/api';
import { IMovie } from '../../types/types';
import { handleImageError } from '../../utils/imageErrorHandler';
import { IMAGE_BASE_URL } from '../Home/Home';
import s from './Movies.module.scss';

const Movies = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setQuery(e.target.value);
  };

  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    if (!query) {
      return;
    }
    const data = await getMoviesByQuery(query);
    setMovies(data);
  };

  return (
    <div className="container">
      <form className={s.searchForm} onSubmit={onSubmitForm}>
        <div className={s.searchContainer}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search movies..."
            value={query}
            onChange={onChangeInput}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
      {movies.length ? (
        <ul className={s.moviesList}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={s.link}>
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
      ) : (
        ''
      )}
    </div>
  );
};

export default Movies;
