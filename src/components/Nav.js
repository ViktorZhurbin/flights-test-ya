import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/departures">
          Вылеты
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/arrivals">
          Прилеты
        </NavLink>
      </li>
    </ul>
  );
}