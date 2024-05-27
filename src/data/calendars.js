import events from "./events";
import parse from "date-fns/parse";

const calendars = [
  {
    title: "Birthdays",
    description:
      "Spurred by a deep desire to delete FB, this calendar aims to collate a comprehensive list of the important dates of my nearest and dearest.",
    id: 1,
    eventIds: [events[2].id, events[4].id],
    createdAt: parse(`2024-01-21`, "yyyy-M-dd", new Date())
  },
  {
    title: "Lucy & Matthew's Wedding",
    description: "Celebrate this great day with Lucy & Matt.",
    id: 2,
    eventIds: [events[13].id, events[14].id, events[15].id, events[16].id],
    createdAt: parse(`2024-05-10`, "yyyy-M-dd", new Date())
  }
];

export default calendars;
