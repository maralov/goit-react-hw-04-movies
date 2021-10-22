import React from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';

export default function MovieDetails(props) {
  return (
    <>
      <PageHeading title="Search Movie" />
      <input type="text" />
      <button type="button">Search</button>
    </>
  );
}
