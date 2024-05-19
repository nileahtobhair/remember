import React from "react";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { isFuture, isBefore, isEqual } from "date-fns";

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
              onClick={() => onClick(event.start)}
              className={styles.eventClickable}
            >
              <h6>{event.title}</h6>

              {!isEqual(event.end, event.start) ? (
                <p>
                  {format(event.start, "dd MMM yyyy")} -{" "}
                  {format(event.end, "dd MMM yyyy")}{" "}
                </p>
              ) : (
                <p>{format(event.start, "dd MMM yyyy")} </p>
              )}
            </div>

            <Button
              onClick={() => {
                navigate(`/calendar/${calendarId}/event/${event.id}`);
              }}
              type="link"
              text="More info..."
            />
          </div>
        );
      })}
    </section>
  );
};

export default EventsList;
