import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { EventProvider } from './assets/contexts/EventContext.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BookingProvider } from './assets/contexts/BookingContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EventProvider>
       <BookingProvider>
           <App />
       </BookingProvider>
    </EventProvider>
</BrowserRouter>

  </StrictMode>,
);

