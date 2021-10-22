import React from 'react';
import css from '../MovieDetails.module.css';
import { Tag } from 'antd';

export default function MovieDetails({ movie }) {
  return (
    <div className={css.card}>
      <img
        src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
        width="400"
        alt={movie.title}
      />
      <div className={css.cardBody}>
        <p>{`Vote average: ${movie.vote_average}`}</p>
        <p>
          <span className={css.bold}>Overview:</span>
        </p>
        <p>{movie.overview}</p>
        <p>
          <span className={css.bold}>Genres:</span>
        </p>
        <p>
          {movie.genres?.map(({ name }) => (
            <Tag key={name} color="orange">
              {name}
            </Tag>
          ))}
        </p>
      </div>
    </div>
  );
}
