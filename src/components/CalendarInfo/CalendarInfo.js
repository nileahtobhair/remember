import React from "react";
import styles from "./info.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button";

import format from "date-fns/format";

function CalendarInfo({ calendar, edit = true }) {
  const navigate = useNavigate();
  return (
    <div className={styles.calendarInfo}>
      <h3>{`${calendar.title} Calendar`}</h3>
      <p className={styles.description}>{calendar.description}</p>
      <p>{`Created on ${format(calendar.createdAt, "dd MMM yyyy")}`}</p>
      <p>{`Number of events:  ${calendar.eventIds.length}`}</p>
      {edit && (
        <Button
          onClick={() => {
            navigate(`/calendar/${calendar.id}/event/new`);
          }}
          type="primary"
          text="Add new event"
        />
      )}
    </div>
  );
}

export default CalendarInfo;
