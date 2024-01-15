import React, { useEffect, useState } from "react";
import "./App.css";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import defaultEvents from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { isFuture, isBefore, addYears, isEqual } from "date-fns";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "4px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

const ModalC = ({ open, handleClose, activeDate, addEvent }) => {
  const [eventName, setEventName] = useState("");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h3>Add event</h3>
        <p>Add an event here to trigger a reminder</p>
        <p>Date</p>
        {activeDate && <p>{activeDate.toString()}</p>}
        <p>Event name</p>
        <input
          type="text"
          value={eventName}
          onChange={e => setEventName(e.target.value)}
        />
        {/* <p>Is recurring?</p>
        <p>Remind me</p> */}
        <button
          onClick={() => {
            addEvent({
              event: {
                title: eventName,
                allDay: false,
                start: activeDate,
                end: activeDate
              }
            });
            setEventName("");
          }}
        >
          {"Submit"}
        </button>
      </Box>
    </Modal>
  );
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

let Basic = ({ localizer, events, handleSelectSlot }) => (
  <Calendar
    events={events}
    views={["month", "week"]}
    showMultiDayTimes
    defaultDate={new Date()}
    localizer={localizer}
    selectable={false}
    onSelectSlot={handleSelectSlot}
  />
);

const displayEventsFilter = eventsList => {
  return eventsList.slice(0, 5);
};

const EventsLists = ({ events, onClick, handleOpen }) => {
  return (
    <section className="events--list--container">
      <h4>Upcoming events</h4>

      {displayEventsFilter(events).map(event => {
        return (
          <div key={event.title} className="single--event">
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
        );
      })}
      {/* <div className="event-button-container">
        <button onClick={onClick}>Clear Events</button>
        <button onClick={handleOpen}>Open modal</button>
      </div> */}
    </section>
  );
};

function App() {
  const orderEvents = eventsList => {
    // TODO do this better & neater
    // will only work for one year after manually entered date
    for (let i = 0; i < eventsList.length; i++) {
      const active = eventsList[i];
      if (!isFuture(active.end) && active.recurring) {
        eventsList[i].start = addYears(active.start, 1);
        eventsList[i].end = addYears(active.end, 1);
      }
    }

    const filtered = eventsList
      .filter(event => {
        return isFuture(event.end) || event.recurring;
      })
      .sort((a, b) => {
        return isBefore(b.start, a.start) ? 1 : -1;
      });
    return filtered;
  };

  const [events, setEvents] = useState(() => {
    // const saved = localStorage.getItem("rememberevents");
    // const initialValue = JSON.parse(saved);
    return orderEvents(defaultEvents);
  });

  const [open, setOpen] = useState(false);
  const [activeDate, setActiveDate] = useState(null);
  const handleOpen = props => {
    console.log("handle open props", props);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (events && events.length > 0) {
      const ordered = orderEvents(events);
      console.log("events", events);
      console.log("ordered", ordered);
      // localStorage.setItem("rememberevents", JSON.stringify(ordered));
    }
  }, [events]);

  const addEvent = ({ event }) => {
    setEvents([...events, event]);
    setOpen(false);
    setActiveDate(null);
  };

  const handleSlotSelect = props => {
    console.log("start", props.start);
    setActiveDate(props.start);
    setOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Lawlor familys calendar </h1>
      </header>
      <ModalC
        addEvent={addEvent}
        events={events}
        activeDate={activeDate}
        open={open}
        handleClose={handleClose}
      />
      <section className="main--container">
        {events && events.length > 0 && (
          <>
            <EventsLists
              handleOpen={handleOpen}
              events={events}
              // onClick={e => clearEvents()}
            />
            <div className="calendar--container">
              <Basic
                localizer={localizer}
                events={events}
                handleSelectSlot={handleSlotSelect}
              />
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
