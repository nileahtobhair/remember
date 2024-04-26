import React from "react";
import { useParams } from "react-router-dom";

import styles from "./event.module.css";

import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import EventsList from "../../components/EventsList";

import { useEvents, useEventsDispatch } from "../../providers/events";

const EventListView = () => {
  const events = useEvents();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useEventsDispatch();

  return (
    <div className={`${styles.container}`}>
      <div className={styles.list}>
        <Button
          type="link"
          text={"Home"}
          className={styles.button}
          onClick={() => {
            navigate(`/`);
          }}
        />
        {events.map(event => {
          return (
            <div
              key={event.id}
              className={styles.event}
              onClick={() => navigate(`/event/${event.id}`)}
            >
              <h5>{event.title}</h5>
              <p>{event.start.toString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventListView;
