import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import EventView from "./pages/EventView";
import EventEdit from "./pages/EventEdit";
import EventList from "./pages/EventList";
import CalendarList from "./pages/CalendarList";
import CalendarPage from "./pages/CalendarView";
import EventCreate from "./pages/EventCreation";

import { EventsProvider } from "./providers/events";
import { CalendarsProvider } from "./providers/calendars";

function App() {
  return (
    <CalendarsProvider>
      <EventsProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<IndexPage />}></Route>
            <Route
              exact
              path="/calendar/:calendarId"
              element={<SingleCalendarPage />}
            ></Route>
            <Route
              exact
              path="/calendar/:calendarId/event/new"
              element={<EventCreationPage />}
            ></Route>
            <Route exact path="/event/:eventId" element={<EventPage />}></Route>
            <Route
              exact
              path="/event/:eventId/edit"
              element={<EventEditPage />}
            />
            <Route exact path="/events" element={<EventsPage />} />
          </Routes>
        </Router>
      </EventsProvider>
    </CalendarsProvider>
  );
}

const IndexPage = () => {
  return (
    <div className="App">
      <Header />
      <CalendarList />
      <Footer />
    </div>
  );
};

const SingleCalendarPage = () => {
  return (
    <div className="App">
      <Header />
      <CalendarPage />
      <Footer />
    </div>
  );
};

const EventsPage = () => {
  return (
    <div className="App">
      <Header />
      <EventList />
      <Footer />
    </div>
  );
};

const EventCreationPage = () => {
  return (
    <div className="App">
      <Header />
      <EventCreate />
      <Footer />
    </div>
  );
};

const EventEditPage = () => {
  return (
    <div className="App">
      <Header />
      <EventEdit />
      <Footer />
    </div>
  );
};

const EventPage = () => {
  return (
    <div className="App">
      <Header />
      <EventView />
      <Footer />
    </div>
  );
};

export default App;
