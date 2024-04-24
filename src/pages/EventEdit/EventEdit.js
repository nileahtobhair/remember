import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./event.module.css";

import Button from "../../components/Button";
import EventsList from "../../components/EventsList";

import { useEvents, useEventsDispatch } from "../../providers/events";

const EventEditView = () => {
  const events = useEvents();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useEventsDispatch();

  const existingEvent = events.find(event => {
    return event.id === parseInt(eventId);
  });

  const [event, setEvent] = useState({
    ...existingEvent,
    start: existingEvent?.start.toISOString().split("T")[0]
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className={`${styles.container}`}>
      <EventsList onClick={() => null} />
      <div className={`${styles.formContainer}`}>
        <Button
          type="link"
          text={"Back"}
          onClick={e => {
            navigate(`/event/${event.id}`);
          }}
        />
        <form
          className={`${styles.form}`}
          onSubmit={e => {
            e.preventDefault();
            dispatch({
              type: "changed",
              ...event
            });
            navigate(`/event/${event.id}`);
          }}
        >
          <h4>Edit your event</h4>
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

export default EventEditView;
