import React, { useState } from "react";

import styles from "./event.module.css";

import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import EventsList from "../../components/EventsList";

import { useEvents, useEventsDispatch } from "../../providers/events";

const EventCreationView = () => {
  const events = useEvents();
  const navigate = useNavigate();
  const dispatch = useEventsDispatch();
  const today = new Date().toISOString().split("T")[0];
  const [event, setEvent] = useState({
    title: "",
    date: today,
    recurring: false,
    id: events.length + 1
  });
  return (
    <section className={`${styles.container}`}>
      <EventsList onClick={() => null} />
      <div className={`${styles.formContainer}`}>
        <form
          className={`${styles.form}`}
          onSubmit={e => {
            e.preventDefault();
            dispatch({
              type: "added",
              ...event
            });
            navigate("/");
          }}
        >
          <h4>Create your new event</h4>
          <label>Event title </label>
          <input
            type="text"
            value={event.title}
            onChange={e => setEvent({ ...event, title: e.target.value })}
          />
          <label>Event Date </label>
          <input
            type="date"
            id="start"
            name="event-date"
            value={event.start}
            min={today}
            onChange={e => setEvent({ ...event, date: e.target.value })}
          />
          <label>Recurring event? </label>
          <input
            type="checkbox"
            id="start"
            name="event-recurring"
            value={event.recurring}
            onChange={e => setEvent({ ...event, recurring: !!e.target.value })}
          />
          <Button
            className={`${styles.button}`}
            type="primary"
            text="Submit"
            onSubmit={() => null}
          />
        </form>
      </div>
    </section>
  );
};

export default EventCreationView;
