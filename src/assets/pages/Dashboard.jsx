import './Dashboard.css';
import { useEvent } from '../contexts/EventContext';

export default function Dashboard() {
  const { events } = useEvent();

  return (
    <div className="dashboard">
      {/* Sektion: Upcoming Events */}
      <h2 className="section-title">Upcoming Events</h2>
      <div className="event-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-category">{event.category}</div>
            <h3>{event.title}</h3>
            <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
            <p className="event-price">{event.price} kr</p>
          </div>
        ))}
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <div className="stat-info">
            <p className="stat-label">Upcoming Events</p>
            <p className="stat-value">{events.length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-square-check"></i>
          </div>
          <div className="stat-info">
            <p className="stat-label">Total Bookings</p>
            <p className="stat-value">1798</p>
          </div>
        </div>
      </div>
    </div>
  );
}
