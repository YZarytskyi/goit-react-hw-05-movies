import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getReviewsById } from '../../api/api';
import { OutletContext, Review } from '../../types/types';
import { Spinner } from '../Spinner/Spinner';
import s from './Reviews.module.scss';

const Reviews = () => {
  const { movieId } = useOutletContext<OutletContext>();

  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviewsById(Number(movieId));
      setReviews(data);
    };
    fetchReviews();
    // eslint-disable-next-line
  }, []);

  if (!reviews) {
    return <Spinner />;
  }

  if (!reviews.length) {
    return <p className={`${s.notFound} container`}>Reviews not found</p>;
  }

  return (
    <div className="container">
      <ul>
        {reviews.map(el => (
          <li key={el.id}>
            <p className={s.author}>
              {el.author} <span>{el.created_at.slice(0, 10)}</span>
            </p>
            <p className={s.content}>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
