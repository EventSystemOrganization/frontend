import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const BookingContext = createContext();
export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7259/api/bookings')  
      .then(res => setBookings(res.data))
      .catch(err => console.error('Kunde inte hämta bokningar:', err));
  }, []);

  const value = {
    bookings,
    setBookings
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
