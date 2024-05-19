import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./event.module.css";

import Button from "../../components/Button";
import CalendarInfo from "../../components/CalendarInfo";
import CalendarPreview from "../../components/CalendarPreview";
import EventsList from "../../components/EventsList";

import { useEvents, useEventsDispatch } from "../../providers/events";
import { useCalendars, useCalendarsDispatch } from "../../providers/calendars";

const EventView = () => {
  const { calendarId } = useParams();
  const calendars = useCalendars();
  const events = useEvents();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useEventsDispatch();

  const event = events.find(event => {
    return event.id === parseInt(eventId);
  });

  const calendar = calendars.find(cal => cal.id === parseInt(calendarId));

  return (
    <section className={`${styles.container}`}>
      <CalendarInfo calendar={calendar} edit={false} />
      <div className={`${styles.eventContainer}`}>
        {event && (
          <>
            <div className={`${styles.buttons}`}>
              <Button
                type="link"
                text={"Back"}
                onClick={() => {
                  navigate(-1);
                }}
              />
              <div className={`${styles.editButtons}`}>
                <Button
                  type="primary"
                  text={"Edit"}
                  onClick={() => {
                    navigate(`/calendar/${calendar.id}/event/${event.id}/edit`);
                  }}
                />
                <Button
                  type="delete"
                  text={"Delete"}
                  onClick={() => {
                    dispatch({
                      type: "deleted",
                      id: event.id
                    });
                    navigate(`/`);
                  }}
                />
              </div>
            </div>
            <div className={`${styles.eventContent}`}>
              <div className={`${styles.calendar}`}>
                <CalendarPreview event={event} />
              </div>
              <div className={`${styles.text}`}>
                <h4>{event.title}</h4>
                <p>{event.start.toString()}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default EventView;
