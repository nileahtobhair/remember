import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
import "./App.css";

import defaultEvents from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { isFuture, isBefore, addYears, isEqual } from "date-fns";
import format from "date-fns/format";

import EventCalendar from "./components/Calendar";

const siteTitle = `Lawlor family calendar`;

const displayEventsFilter = eventsList => {
  return eventsList.slice(0, 5);
};

const EventsLists = ({ events }) => {
  return (
    <section className="events--list--container">
      <h4>Upcoming events</h4>

      {displayEventsFilter(events).map(event => {
        return (
          <div key={event.title} className="single--event">
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
  const orderEvents = eventsList => {
    // TODO do this better & neater
    // will only work for one year after manually entered date
    for (let i = 0; i < eventsList.length; i++) {
      const active = eventsList[i];
      if (!isFuture(active.end) && active.recurring) {
        eventsList[i].start = addYears(active.start, 1);
        eventsList[i].end = addYears(active.end, 1);
      }
    }

    const filtered = eventsList
      .filter(event => {
        return isFuture(event.end) || event.recurring;
      })
      .sort((a, b) => {
        return isBefore(b.start, a.start) ? 1 : -1;
      });
    return filtered;
  };

  const [events] = useState(() => {
    return orderEvents(defaultEvents);
  });

  const [setActiveDate] = useState(null);

  // useEffect(() => {
  //   if (events && events.length > 0) {
  //     const ordered = orderEvents(events);
  //   }
  // }, [events]);

  const handleSlotSelect = props => {
    setActiveDate(props.start);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> {siteTitle} </h1>
      </header>
      <section className="main--container">
        {events && events.length > 0 && (
          <>
            <EventsLists events={events} />
            <EventCalendar
              events={events}
              handleDateSelection={handleSlotSelect}
            />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
