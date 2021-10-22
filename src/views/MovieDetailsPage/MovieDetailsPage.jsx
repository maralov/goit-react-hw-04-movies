import React, { useEffect, useState } from 'react';
import {
  useParams,
  useRouteMatch,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Spin, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PageHeading from '../../components/PageHeading/PageHeading';
import MovieDetailsCast from './components/MovieDetailsCast';
import MovieDetailsReviews from './components/MovieDetailsReviews';
import MovieDetailsNavigate from './components/MovieDetailsNavigate';
import MovieDetails from './components/MovieDetails';
import { fetchMovie } from '../../servises/movieApi';
import { prepareMovieTitle } from '../../utils';
import PATH from '../../constants/path';
import css from './MovieDetails.module.css';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovie.byId(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBackClick = () => {
    history.push(location?.state?.from ?? PATH.HOME);
  };

  return movie ? (
    <>
      <div className={css.btnContainer}>
        <Button onClick={handleGoBackClick} icon={<ArrowLeftOutlined />}>
          Go back
        </Button>
      </div>
      <PageHeading title={prepareMovieTitle(movie)} />
      <MovieDetails movie={movie} />
      <MovieDetailsNavigate currentUrl={url} />

      <Switch>
        <Route exact path={`${path}/cast`}>
          <MovieDetailsCast />
        </Route>
        <Route exact path={`${path}/reviews`}>
          <MovieDetailsReviews />
        </Route>
      </Switch>
    </>
  ) : (
    <Spin size="large" tip="Loading..." />
  );
}
