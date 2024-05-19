import events from "./events";
import parse from "date-fns/parse";

const calendars = [
  {
    title: "Birthdays",
    description:
      "Spurred by a deep desire to delete FB, this calendar aims to collate a comprehensive list of the important dates of my nearest and dearest.",
    id: 1,
    eventIds: [events[0].id, events[1].id],
    createdAt: parse(`2024-01-21`, "yyyy-M-dd", new Date())
  }
];

export default calendars;
