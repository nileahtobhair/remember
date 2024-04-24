import React, { useState, useCallback } from "react";

import EventCalendar from "../Calendar";

import { useEvents } from "../../providers/events";

import "./events.css";

import EventsList from "../EventsList";

const EventsView = () => {
  const [date, setDate] = useState(new Date());

  const onNavigate = useCallback(newDate => setDate(newDate), [setDate]);

  const events = useEvents();

  return (
    <section className="main--container">
      {events && events.length > 0 && (
        <>
          <EventsList onClick={date => onNavigate(date)} />
          <EventCalendar date={date} events={events} onNavigate={onNavigate} />
        </>
      )}
    </section>
  );
};

export default EventsView;
