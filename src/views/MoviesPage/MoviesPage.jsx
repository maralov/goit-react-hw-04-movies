import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Input, Spin } from 'antd';
import { fetchMovie } from '../../servises/movieApi';
import PageHeading from '../../components/PageHeading/PageHeading';
import PATH from '../../constants/path';

export default function MoviesPage({ history, location }) {
  const [movies, setMovies] = useState(null);
  const query = queryString.parse(location.search).query;

  const handleSubmit = value => {
    !value && setMovies(null);

    history.push({
      pathname: location.pathname,
      search: value ? `query=${value}` : null,
    });
  };

  useEffect(() => {
    query && fetchMovie.search(query).then(({ results }) => setMovies(results));
  }, [query]);

  const renderContent = () => {
    switch (true) {
      case movies.length > 0:
        return (
          <ul>
            {movies.map(({ id, title }) => {
              return (
                <li key={id}>
                  <Link
                    to={{
                      pathname: `${PATH.MOVIES}/${id}`,
                      state: { from: location },
                    }}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      case movies.length === 0:
        return 'Opp not find, maybe change query';
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeading title="Search Movie" />
      <Input.Search
        style={{ width: 300 }}
        placeholder="input search movie"
        allowClear
        size="large"
        onSearch={handleSubmit}
      />
      {movies && renderContent()}
    </>
  );
}
