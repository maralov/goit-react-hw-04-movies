import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../../components/PageHeading/PageHeading';
import { fetchMovie } from '../../servises/movieApi';
import PATH from '../../constants/path';

export default function HomePage(props) {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchMovie.dayTrending().then(({ results }) => setTrendMovies(results));
  }, []);
  return (
    <>
      <PageHeading title="Trending today" />
      <ul>
        {trendMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `${PATH.MOVIES}/${id}`,
                  state: { from: PATH.HOME },
                }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
