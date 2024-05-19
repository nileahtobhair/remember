import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./event.module.scss";

import Button from "../../components/Button";
import CalendarInfo from "../../components/CalendarInfo";
// import EventsList from "../../components/EventsList";

import { useEvents, useEventsDispatch } from "../../providers/events";
import { useCalendars } from "../../providers/calendars";

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

  const link = `/calender/${calendar.id}/event/${event.id}`;
  return (
    <section className={`${styles.container}`}>
      <Button type="link" text={"Back"} onClick={e => navigate(link)} />
      <CalendarInfo calendar={calendar} edit={false} />
      <div className={`${styles.formContainer}`}>
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
