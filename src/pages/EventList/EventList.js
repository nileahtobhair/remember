import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./event.module.scss";

import Button from "../../components/Button";

import { useEvents } from "../../providers/events";

const EventListView = () => {
  const events = useEvents();
  const navigate = useNavigate();

  return (
    <div className={`${styles.container}`}>
      <div className={styles.list}>
        <Button
          type="link"
          text={"Home"}
          className={styles.button}
          onClick={() => navigate(`/`)}
        />
        {events &&
          events.map(event => {
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
