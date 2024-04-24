import format from "date-fns/format";
import React, { useState, useCallback } from "react";
import { isFuture, isBefore, isEqual } from "date-fns";
import { useNavigate } from "react-router-dom";

import EventCalendar from "../Calendar";

import Button from "../Button";

import { useEvents, useEventsDispatch } from "../../providers/events";

import "./events.css";

const EventsView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section className="main--container">
      {/* {events && events.length > 0 && (
        <>
          <EventsLists onClick={date => onNavigate(date)} />
          <EventCalendar date={date} events={events} onNavigate={onNavigate} />
        </>
      )} */}
    </section>
  );
};

export default EventsView;
