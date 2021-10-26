import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider } from 'antd';

export default function MovieDetailsNavigate({ currentUrl, from }) {
  return (
    <>
      <Divider />
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${currentUrl}/cast`,
              state: {
                from,
              },
            }}
            activeStyle={{ color: 'red' }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${currentUrl}/reviews`,
              state: {
                from,
              },
            }}
            activeStyle={{ color: 'red' }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Divider />
    </>
  );
}
