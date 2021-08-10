import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectors } from '../../features/token'

export const Navbar: React.FC = () => {
  const token = useSelector(selectors.getToken)
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-1 px1">
        <NavLink to="/" className="brand-logo">
          Plants vs Undead Tools ${Number(token.price).toFixed(2)}
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li cy-data="home-nav-link">
            <NavLink to="/groups">Groups</NavLink>
          </li>
          <li cy-data="home-nav-link">
            <NavLink to="/lands">Lands</NavLink>
          </li>
          <li>
            <NavLink to="/plants-reset">Plants Reset Time</NavLink>
          </li>
          <li>
            <NavLink to="/plant-roi">Plants ROI</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
