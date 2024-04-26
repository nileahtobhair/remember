import format from "date-fns/format";
import React from "react";
import { isFuture, isBefore, isEqual } from "date-fns";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

import { useEvents } from "../../providers/events";

import "./eventslist.css";

const EventsList = ({ onClick }) => {
  const events = useEvents();
  const navigate = useNavigate();

  const filtered = events
    .filter(event => {
      return isFuture(event.end);
    })
    .sort((a, b) => {
      return isBefore(b.start, a.start) ? 1 : -1;
    })
    .slice(0, 5);

  return (
    <section className="events--list--container">
      <h4>Upcoming events</h4>

      {filtered.map(event => {
        return (
          <div key={event.title} className="single--event">
            <div
              onClick={() => {
                return onClick(event.start);
              }}
              className="single--event--clickable"
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
                navigate(`/event/${event.id}`);
              }}
              type="link"
              text="More info..."
            />
          </div>
        );
      })}
      <div className="button-container">
        <Button
          onClick={() => {
            navigate("/events");
          }}
          type="link"
          text="View all events..."
        />
        <Button
          onClick={() => {
            navigate("/event/new");
          }}
          type="primary"
          text="Create new event"
        />
      </div>
    </section>
  );
};

export default EventsList;
