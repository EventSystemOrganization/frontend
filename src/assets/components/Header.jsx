import './Header.css';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/events':
        return 'Events';
      case '/bookings':
        return 'Bookings';
      default:
        return '';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">{getPageTitle()}</h1>
        <p className="page-subtitle">Hello Orlando, welcome back!</p>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Search anything"
          className="search-input"
        />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>

      <div className="header-right">
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-bell"></i>
        <div className="profile">
          <span className="profile-name">Orlando Laurentius</span>
          <div className="profile-icon">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </header>
  );
}