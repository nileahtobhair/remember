import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./event.module.css";

import Button from "../../components/Button";
import CalendarPreview from "../../components/CalendarPreview";
import EventsList from "../../components/EventsList";

import { useEvents, useEventsDispatch } from "../../providers/events";

const EventCreationView = () => {
  const events = useEvents();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useEventsDispatch();

  const event = events.find(event => {
    return event.id === parseInt(eventId);
  });

  return (
    <section className={`${styles.container}`}>
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
                    navigate(`/event/${event.id}/edit`);
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

export default EventCreationView;
