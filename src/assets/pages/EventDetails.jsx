import { useParams } from 'react-router-dom';
import { useEvent } from '../contexts/EventContext';

export default function EventDetails() {
  const { id } = useParams();
  const { events } = useEvent();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <p>Event not found.</p>;
  }

    return (
        <section style={{ padding: '1rem' }}>
            <h2>{event.title}</h2>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Price:</strong> {event.price} kr</p>
            <p><strong>Location:</strong> {event.location || 'Ej angiven'}</p>
            <p><strong>Tickets Left:</strong> {event.ticketsLeft || 'N/A'}</p>
            <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

            <button style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', backgroundColor: 'var(--primary-100)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}} onClick={() => window.location.href = `/book/${event.id}`}>Boka biljetter</button>
        </section>
    );
}