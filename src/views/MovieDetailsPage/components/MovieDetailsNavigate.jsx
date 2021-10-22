import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider } from 'antd';

export default function MovieDetailsNavigate({ currentUrl }) {
  return (
    <>
      <Divider />
      <ul>
        <li>
          <NavLink to={`${currentUrl}/cast`} activeStyle={{ color: 'red' }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`${currentUrl}/reviews`} activeStyle={{ color: 'red' }}>
            Reviews
          </NavLink>
        </li>
      </ul>

      <Divider />
    </>
  );
}
