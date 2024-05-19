import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useEvents } from "../../providers/events";
import { useCalendars } from "../../providers/calendars";

import Button from "../../components/Button";
import EventsList from "../../components/EventsList";
import EventCalendar from "../../components/Calendar";
import CalendarInfo from "../../components/CalendarInfo";

import styles from "./calendar.module.scss";

/**
 * View a single calendar and its upcoming events.
 * @returns JSX
 */
const CalenderView = () => {
  const { calendarId } = useParams();
  const events = useEvents();
  const calendars = useCalendars();
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const onNavigate = useCallback(newDate => setDate(newDate), [setDate]);

  const calendar = calendars.find(cal => cal.id === parseInt(calendarId));

  const applicableEvents = events.filter(event => {
    return calendar.eventIds.includes(event.id);
  });

  return (
    <section className={styles.container}>
      <div className={styles.link}>
        <Button onClick={() => navigate("/")} type="link" text="Back" />
      </div>
      <CalendarInfo calendar={calendar} />
      {events && events.length > 0 && (
        <>
          <EventCalendar
            title={`${calendar.title} Calendar`}
            date={date}
            events={applicableEvents}
            onNavigate={onNavigate}
            calendar={calendar}
          />
          <EventsList
            events={applicableEvents}
            calendarId={calendar.id}
            onClick={date => onNavigate(date)}
          />
        </>
      )}
    </section>
  );
};

export default CalenderView;
