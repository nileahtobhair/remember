import React from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import parse from "date-fns/parse";
import getDay from "date-fns/getDay";
import format from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";

import styles from "./calendar.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

function CalendarPreview({ event }) {
  return (
    <div className={styles.container}>
      <Calendar
        events={[event]}
        views={["month"]}
        showMultiDayTimes
        date={event.start}
        localizer={localizer}
        selectable={false}
      />
    </div>
  );
}

export default CalendarPreview;
