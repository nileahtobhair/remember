import React from "react";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { isFuture, isBefore } from "date-fns";

import Button from "../Button";

import styles from "./eventslist.module.scss";

const EventsList = ({ onClick, events = [], calendarId }) => {
  const navigate = useNavigate();

  const filtered = events
    .filter(event => {
      return isFuture(event.end);
    })
    .sort((a, b) => {
      return isBefore(b.start, a.start) ? 1 : -1;
    })
    .slice(0, 25);

  return (
    <section className={styles.container}>
      <h4>Upcoming events</h4>

      {filtered.map(event => {
        return (
          <div key={event.title} className={styles.event}>
            <div
              onClick={() => {
                navigate(`/calendar/${calendarId}/event/${event.id}`);
              }}
              className={styles.eventClickable}
            >
              <h6>{event.title}</h6>
              <p>{format(event.start, "dd MMM yyyy")}</p>
            </div>

            <Button
              onClick={() => onClick(event.start)}
              type="link"
              text="show on cal..."
            />
          </div>
        );
      })}

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <h6>{"There are no events to show"}</h6>
          <p>{"click below to create a new event for this calendar"}</p>
          <Button
            onClick={() => navigate(`/calendar/${calendarId}/event/new`)}
            type="primary"
            text="Create event"
          />
        </div>
      )}
    </section>
  );
};

export default EventsList;
