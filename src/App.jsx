import { Route, Routes } from 'react-router-dom'
import './App.css'
import PortalLayout from './assets/layouts/PortalLayout'
import EventList from './assets/components/EventList';
import Dashboard from './assets/pages/Dashboard';
import Bookings from './assets/pages/Bookings';
import EventDetails from './assets/pages/EventDetails';
import BookingPage from './assets/pages/BookingPage';




function App() {
  return (
    <Routes>
      <Route path="/" element={<PortalLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="/book/:id" element={<BookingPage />} />

      </Route>
    </Routes>
  )
}

export default App