import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./event.module.scss";

import Button from "../../components/Button";
import CalendarInfo from "../../components/CalendarInfo";

import { useEvents, useEventsDispatch } from "../../providers/events";
import { useCalendars, useCalendarsDispatch } from "../../providers/calendars";

const EventCreationView = () => {
  const { calendarId } = useParams();
  const events = useEvents();
  const calendars = useCalendars();
  const navigate = useNavigate();
  const dispatch = useEventsDispatch();
  const calDispatch = useCalendarsDispatch();
  const today = new Date().toISOString().split("T")[0];
  const [event, setEvent] = useState({
    title: "",
    date: today,
    recurring: false,
    id: events.length + 1
  });

  const calendar = calendars.find(cal => cal.id === parseInt(calendarId));

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "added",
      ...event
    });
    calDispatch({
      type: "changed",
      ...calendar,
      eventIds: [...calendar.eventIds, event.id]
    });
    navigate(`/calendar/${calendar.id}`);
  };

  return (
    <section className={`${styles.container}`}>
      <CalendarInfo calendar={calendar} edit={false} />

      <div className={`${styles.formContainer}`}>
        <div className={styles.info}>
          <h1>Create your new event</h1>
          <p>{`Event will be added to the ${calendar.title} calendar`} </p>
        </div>
        <form className={`${styles.form}`} onSubmit={onFormSubmit}>
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

export default EventCreationView;
