import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import { Result, Spin } from 'antd';

import PATH from './constants/path';

const HomePage = lazy(
  () => import('./views/HomePage') /* webpackChunkName: "home-page" */,
);
const MoviesPage = lazy(
  () => import('./views/MoviesPage') /* webpackChunkName: "movies-page" */,
);
const MovieDetailsPage = lazy(
  () =>
    import(
      './views/MovieDetailsPage'
    ) /* webpackChunkName: "MovieDetailsPage" */,
);

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Spin size="large" tip="Loading..." />}>
          <Switch>
            <Route exact path={PATH.HOME} component={HomePage} />
            <Route exact path={PATH.MOVIES} component={MoviesPage} />
            <Route
              path={`${PATH.MOVIES}/:movieId`}
              component={MovieDetailsPage}
            />

            <Route>
              <Result status="404" title="Sorry,Page not found" />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
