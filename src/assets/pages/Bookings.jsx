import { useBooking } from '../contexts/BookingContext.jsx';
import { useEvent } from '../contexts/EventContext.jsx';

export default function Bookings() {
  const { bookings } = useBooking();
  const { events } = useEvent();

  const getEventTitle = (eventId) => {
    const event = events.find(e => e.id === eventId);
    return event ? event.title : `Okänt event (ID: ${eventId})`;
  };

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Mina bokningar</h2>
      {bookings.length === 0 ? (
        <p>Inga bokningar ännu.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
              <strong>Event:</strong> {getEventTitle(booking.eventId)}<br />
              <strong>Namn:</strong> {booking.name}<br />
              <strong>Biljetter:</strong> {booking.tickets}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}