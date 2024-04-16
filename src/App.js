import React, { useState, useCallback } from "react";

import "./App.css";

import defaultEvents from "./events";

import {
  isFuture,
  isBefore,
  // addYears,
  isEqual,
  startOfMonth,
  isAfter
} from "date-fns";
import format from "date-fns/format";

import EventCalendar from "./components/Calendar";

const siteTitle = `Lawlor family calendar`;
const subTitle = "Niamh wanted to get rid of facebook.";

const EventsLists = ({ events, onClick }) => {
  return (
    <section className="events--list--container">
      <h4>Upcoming events</h4>

      {events.map(event => {
        return (
          <div
            key={event.title}
            className="single--event"
            onClick={() => {
              return onClick(event.start);
            }}
          >
            <h6>{event.title}</h6>

            {!isEqual(event.end, event.start) ? (
              <p>
                {format(event.start, "dd MMM yyyy")} -{" "}
                {format(event.end, "dd MMM yyyy")}{" "}
              </p>
            ) : (
              <p>{format(event.start, "dd MMM yyyy")} </p>
            )}
          </div>
        );
      })}
    </section>
  );
};

function App() {
  const [date, setDate] = useState(new Date());

  const onNavigate = useCallback(newDate => setDate(newDate), [setDate]);

  const orderEvents = eventsList => {
    const filtered = eventsList
      .filter(event => {
        return isAfter(event.end, startOfMonth(new Date())) || event.recurring;
      })
      .sort((a, b) => {
        return isBefore(b.start, a.start) ? 1 : -1;
      });
    return filtered;
  };

  const [events] = useState(() => {
    return orderEvents(defaultEvents);
  });

  const [upComingEvents] = useState(() => {
    const filtered = defaultEvents
      .filter(event => {
        return isFuture(event.end);
      })
      .sort((a, b) => {
        return isBefore(b.start, a.start) ? 1 : -1;
      });
    return filtered.slice(0, 5);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1> {siteTitle} </h1>
        <h3> {subTitle} </h3>
      </header>
      <section className="main--container">
        {events && events.length > 0 && (
          <>
            <EventsLists
              onClick={date => onNavigate(date)}
              events={upComingEvents}
            />
            <EventCalendar
              date={date}
              events={events}
              onNavigate={onNavigate}
            />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
