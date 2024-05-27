import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import EventView from "./pages/EventView";
import EventEdit from "./pages/EventEdit";
import CalendarList from "./pages/CalendarList";
import CalendarPage from "./pages/CalendarView";
import EventCreate from "./pages/EventCreation";

import { EventsProvider } from "./providers/events";
import { CalendarsProvider } from "./providers/calendars";

const Scroll = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);
  return children;
};

function errorRender() {
  return (
    <div className="App error">
      <h1>Something has gone wrong</h1>
      <p>
        Please refresh to continue. If the problem persists, please contact us.
      </p>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary fallbackRender={errorRender}>
      <Router>
        <CalendarsProvider>
          <EventsProvider>
            <Scroll>
              <Routes>
                <Route exact path="/" element={<IndexPage />} />
                <Route
                  exact
                  path="/calendar/:calendarId"
                  element={<SingleCalendarPage />}
                />
                <Route
                  exact
                  path="/calendar/:calendarId/event/:eventId"
                  element={<EventPage />}
                />
                <Route
                  exact
                  path="/calendar/:calendarId/event/:eventId/edit"
                  element={<EventEditPage />}
                />
                <Route
                  exact
                  path="/calendar/:calendarId/event/new"
                  element={<EventCreationPage />}
                />
                <Route path="*" element={<IndexPage />} />
              </Routes>
            </Scroll>
          </EventsProvider>
        </CalendarsProvider>
      </Router>
    </ErrorBoundary>
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
