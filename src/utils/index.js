export const prepareMovieTitle = ({ title = '', release_date = '' }) => {
  if (!title || !release_date) return;

  const filmYear = release_date.split('-')[0];
  return `${title} (${filmYear})`;
};
