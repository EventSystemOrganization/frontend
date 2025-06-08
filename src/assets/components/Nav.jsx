import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="sidebar">
      <div className="logo">
        <span className="logo-text">Ventrixe</span>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" end><i className="fa-solid fa-border-all"></i> Dashboard</NavLink></li>
        <li><NavLink to="/bookings"><i className="fa-solid fa-square-check"></i> Bookings</NavLink></li>
        <li><NavLink to="/events"><i className="fa-solid fa-ticket"></i> Events</NavLink></li>
      </ul>

      <div className="sign-out">
        <button>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
        </button>
      </div>
    </nav>
  );
}
