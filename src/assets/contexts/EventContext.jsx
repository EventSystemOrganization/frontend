import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const EventContext = createContext();
export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7013/api/events') 
      .then(res => setEvents(res.data))
      .catch(err => console.error('Kunde inte hämta events:', err));
  }, []);

  const value = {
    events,
    setEvents
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};