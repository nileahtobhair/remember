import React from "react";
import "./calendar.css";

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

function CalendarPreview({ event, date }) {
  return (
    <>
      <div className="cal-container">
        <div className="cal">
          <Calendar
            events={[event]}
            views={["month"]}
            showMultiDayTimes
            date={event.start}
            localizer={localizer}
            selectable={false}
          />
        </div>
      </div>
    </>
  );
}

export default CalendarPreview;
