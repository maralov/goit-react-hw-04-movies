import React from 'react';
import css from './container.module.css'

function Container({children}) {
  return (
    <div className={css.root}>{children}</div>
  );
}

export default Container;
