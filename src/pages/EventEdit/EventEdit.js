import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./event.module.scss";

import Button from "../../components/Button";
import CalendarInfo from "../../components/CalendarInfo";

import { useCalendars } from "../../providers/calendars";
import { useEvents, useEventsDispatch } from "../../providers/events";

const EventEditView = () => {
  const events = useEvents();
  const calendars = useCalendars();
  const { eventId, calendarId } = useParams();
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

  const calendar = calendars.find(cal => cal.id === parseInt(calendarId));

  const link = `/calendar/${calendar.id}/event/${event.id}`;
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.buttons}`}>
        <Button type="link" text={"Back"} onClick={e => navigate(link)} />
      </div>
      <CalendarInfo calendar={calendar} edit={false} />
      <div className={`${styles.formContainer}`}>
        <div className={styles.info}>
          <h1>Edit your event</h1>
          <p>Update your event details</p>
        </div>
        <form
          className={`${styles.form}`}
          onSubmit={e => {
            e.preventDefault();
            dispatch({
              type: "changed",
              ...event
            });
            navigate(link);
          }}
        >
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
          <div className={styles.checkbox}>
            <label>Recurring event? </label>
            <input
              type="checkbox"
              id="start"
              name="event-recurring"
              value={event.recurring}
              onChange={e =>
                setEvent({ ...event, recurring: !!e.target.value })
              }
            />
          </div>
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
