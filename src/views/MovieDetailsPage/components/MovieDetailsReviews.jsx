import React, { useEffect, useState } from 'react';
import { Card, Result, Skeleton } from 'antd';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovie } from '../../../servises/movieApi';

export default function MovieDetailsReviews() {
  const [isFetching, setIsFetching] = useState(true);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    fetchMovie.reviews(movieId).then(({ results }) => {
      setReviews(results);
      setIsFetching(false);
    });
  }, [movieId]);
  console.log('MovieDetailsReviews', location);
  const renderContent = () => {
    if (reviews.length) {
      return reviews.map(({ id, content, author }) => (
        <Card key={id}>
          <Card.Meta title={author} description={content} />
        </Card>
      ));
    }

    if (reviews.length === 0) {
      return (
        <Result
          status="404"
          title="Reviews not found"
          subTitle="Sorry, We don`t have any reviews for this movie :("
        />
      );
    }
  };

  return isFetching ? <Skeleton /> : renderContent();
}
