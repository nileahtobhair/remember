import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Events from "./components/Events";
import Footer from "./components/Footer";

import EventView from "./pages/EventView";
import EventEdit from "./pages/EventEdit";
import EventCreate from "./pages/EventCreation";

import { EventsProvider } from "./providers/events";

function App() {
  return (
    <EventsProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<IndexPage />}></Route>
          <Route
            exact
            path="/event/new"
            element={<EventCreationPage />}
          ></Route>
          <Route exact path="/event/:eventId" element={<EventPage />}></Route>
          <Route
            exact
            path="/event/:eventId/edit"
            element={<EventEditPage />}
          />
        </Routes>
      </Router>
    </EventsProvider>
  );
}

const IndexPage = () => {
  return (
    <div className="App">
      <Header />
      <Events />
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
