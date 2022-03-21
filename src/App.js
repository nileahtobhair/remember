import React, { useEffect, useState } from "react";
import "./App.css";

import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import defaultEvents from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { parseISO } from "date-fns";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

// let allViews = Object.keys(Views).map((k) => Views[k]);

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

let Basic = ({ localizer, events }) => (
  <Calendar
    events={events}
    views={["month", "week"]}
    // step={60}
    showMultiDayTimes
    // max={dates.add(dates.endOf(new Date(2015, 17, 1), "day"), -1, "hours")}
    defaultDate={new Date()}
    // components={{
    //   timeSlotWrapper: ColoredDateCellWrapper,
    // }}
    localizer={localizer}
  />
);

const EventsLists = ({ events, onClick }) => {
  return (
    <section className="events--list--container">
      {events.map((event) => {
        return (
          <div className="single--event">
            <h4>{event.title}</h4>
            {event.start && <p>{format(parseISO(event.start), "dd MMM yy")}</p>}
          </div>
        );
      })}
      <button onClick={onClick}>Clear Events</button>
    </section>
  );
};

function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("rememberevents");
    const initialValue = JSON.parse(saved);
    return initialValue || defaultEvents;
  });

  useEffect(() => {
    if (events && events.length > 0) {
      localStorage.setItem("rememberevents", JSON.stringify(events));
    }
  }, [events]);

  const clearEvents = () => {
    setEvents([]);
    localStorage.setItem("rememberevents", JSON.stringify([]));
    localStorage.removeItem("rememberevents");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Remember </h1>
      </header>
      <section className="main--container">
        {events && events.length > 0 && (
          <>
            <>
              <EventsLists events={events} onClick={(e) => clearEvents()} />
            </>
            <div className="calendar--container">
              <Basic localizer={localizer} events={events} />
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
