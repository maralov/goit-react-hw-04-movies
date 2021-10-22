import React from 'react';
import { NavLink } from 'react-router-dom';

import PATH from '../../constants/path';

import css from './Header.module.css';
import Container from '../Container';

function Header() {
  return (
    <header className={css.root}>
      <Container>
        <nav>
          <NavLink
            exact
            to={PATH.HOME}
            className={css.link}
            activeClassName={css.activeLink}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={PATH.MOVIES}
            className={css.link}
            activeClassName={css.activeLink}
          >
            Movies
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
