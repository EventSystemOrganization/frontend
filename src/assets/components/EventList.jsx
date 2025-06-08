import { useState } from 'react';
import { useEvent } from '../contexts/EventContext.jsx';
import './EventList.css';
import { Link } from 'react-router-dom';

export default function EventList() {
  const { events } = useEvent();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filteredEvents = events.filter(event => {
    const matchTitle = event.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category ? event.category === category : true;
    return matchTitle && matchCategory;
  });

  const uniqueCategories = [...new Set(events.map(e => e.category))];

  return (
    <section className="event-list-page">
      <h2 className="section-title">All Events</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map(event => (
          <Link to={`/events/${event.id}`} className="event-item" key={event.id}>
            <div className="event-image-placeholder"></div>

            <div className="event-info">
              <div className="event-category">{event.category}</div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">
                📍 {event.location || 'Plats ej angiven'} – {new Date(event.date).toLocaleDateString()}
              </p>

              <div className="event-stats">
                <span className="event-tickets">{event.ticketsLeft || 120} Tickets Left</span>
                <span className="event-price">{event.price} kr</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}