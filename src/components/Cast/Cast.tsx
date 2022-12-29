import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getCastById } from '../../api/api';
import { Actor, OutletContext } from '../../types/types';
import { handleImageError } from '../../utils/imageErrorHandler';
import { IMAGE_BASE_URL } from '../Home/Home';
import { Spinner } from '../Spinner/Spinner';
import s from './Cast.module.scss';

const Cast = () => {
  const { movieId } = useOutletContext<OutletContext>();

  const [cast, setCast] = useState<Actor[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      const data = await getCastById(Number(movieId));
      setCast(data);
    };
    fetchCast();
    // eslint-disable-next-line
  }, []);

  if (!cast.length) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <ul className={s.list}>
        {cast.map(el => (
          <li className={s.item} key={el.id}>
            <img
              src={`${IMAGE_BASE_URL}/${el.profile_path}`}
              alt="Actor"
              className={s.image}
              onError={handleImageError}
            />
            <p className={s.name}>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
