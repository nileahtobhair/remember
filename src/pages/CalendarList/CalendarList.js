import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./calendar.module.scss";

import {
  useCalendars
  // useCalendarsDispatch
} from "../../providers/calendars";

const CalendarListView = () => {
  const calendars = useCalendars();

  const navigate = useNavigate();
  // const dispatch = useCalendarsDispatch();

  return (
    <div className={`${styles.container}`}>
      <h1>Your calendars</h1>
      <div>
        {calendars.map(cal => {
          return (
            <div
              key={cal.id}
              className={styles.calendar}
              onClick={() => navigate(`/calendar/${cal.id}`)}
            >
              <h5>{cal.title}</h5>
              <p>{cal.description}</p>
              {/* <p>{cal.createdAt}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarListView;
