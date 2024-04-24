import format from "date-fns/format";
import React, { useState, useCallback } from "react";
import { isFuture, isBefore, isEqual } from "date-fns";

import EventCalendar from "../Calendar";

import { useEvents, useEventsDispatch } from "../../providers/events";

import "./events.css";

const EventsLists = ({ onClick }) => {
  const events = useEvents();
  const dispatch = useEventsDispatch();

  const filtered = events
    .filter(event => {
      return isFuture(event.end);
    })
    .sort((a, b) => {
      return isBefore(b.start, a.start) ? 1 : -1;
    })
    .slice(0, 5);

  return (
    <section className="events--list--container">
      <h4>Upcoming events</h4>

      {filtered.map(event => {
        console.log("event", event);
        return (
          <div key={event.title} className="single--event">
            <div
              onClick={() => {
                return onClick(event.start);
              }}
              className="single--event--clickable"
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

            <button
              onClick={() => {
                dispatch({
                  type: "deleted",
                  id: event.id
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

const EventsView = () => {
  const [date, setDate] = useState(new Date());

  const onNavigate = useCallback(newDate => setDate(newDate), [setDate]);

  const events = useEvents();

  return (
    <section className="main--container">
      {events && events.length > 0 && (
        <>
          <EventsLists onClick={date => onNavigate(date)} />
          <EventCalendar date={date} events={events} onNavigate={onNavigate} />
        </>
      )}
    </section>
  );
};

export default EventsView;
