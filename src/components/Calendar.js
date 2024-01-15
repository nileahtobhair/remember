import React from "react";
import "../App.css";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

const locales = {
  "en-US": require("date-fns/locale/en-US")
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

function EventCalendar({ handleDateSelection, events }) {
  return (
    <div className="calendar--container">
      <Basic
        localizer={localizer}
        events={events}
        handleSelectSlot={handleDateSelection}
      />
    </div>
  );
}

export default EventCalendar;
