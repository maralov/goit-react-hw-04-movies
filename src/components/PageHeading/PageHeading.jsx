import React from 'react';

import css from './PageHeading.module.css';

export default function PageHeading({ title }) {
  return <h1 className={css.title}>{title}</h1>;
}
