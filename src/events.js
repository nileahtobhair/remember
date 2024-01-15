import parse from "date-fns/parse";

const events = [
  {
    title: "Lou & Gav Wedding Anniversary 💍",
    allDay: true,
    start: parse("2024-01-01", "yyyy-M-dd", new Date()),
    end: parse("2024-01-01", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Dad Spain trip 🌞",
    allDay: true,
    start: parse("2024-01-013", "yyyy-M-dd", new Date()),
    end: parse("2024-01-15", "yyyy-M-dd", new Date()),
    recurring: false
  },
  {
    title: "Lou’s Birthday 🎉",
    allDay: true,
    start: parse("2024-07-23", "yyyy-M-dd", new Date()),
    end: parse("2024-07-23", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Niamh’s Birthday 🎂",
    allDay: true,
    start: parse("2024-02-18", "yyyy-M-dd", new Date()),
    end: parse("2024-02-18", "yyyy-M-dd", new Date()),
    recurring: true
  },

  {
    title: "Sinead’s Birthday 🎂",
    allDay: true,
    start: parse("2024-03-02", "yyyy-M-dd", new Date()),
    end: parse("2024-03-02", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Gary’s Birthday 🎂",
    allDay: true,
    start: parse("2024-09-19", "yyyy-M-dd", new Date()),
    end: parse("2024-09-19", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Dad’s Birthday 🎉",
    allDay: true,
    start: parse("2024-04-14", "yyyy-M-dd", new Date()),
    end: parse("2024-04-14", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Mams’s Birthday 🎂",
    allDay: true,
    start: parse("2024-05-31", "yyyy-M-dd", new Date()),
    end: parse("2024-04-31", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Siofra's Birthday",
    allDay: true,
    start: parse("2024-12-06", "yyyy-M-dd", new Date()),
    end: parse("2024-12-06", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Adrienne's Birthday 🎂",
    allDay: true,
    start: parse("2024-07-22", "yyyy-M-dd", new Date()),
    end: parse("2024-07-22", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Fintan (young) Birthday 🎂",
    allDay: true,
    start: parse("2024-06-09", "yyyy-M-dd", new Date()),
    end: parse("2024-06-09", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Fintan (middle) Birthday 🎂",
    allDay: true,
    start: parse("2024-01-31", "yyyy-M-dd", new Date()),
    end: parse("2024-01-31", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Marie's Birthday 🎂",
    allDay: true,
    start: parse("2024-11-14", "yyyy-M-dd", new Date()),
    end: parse("2024-11-14", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Mam and Dad Anniversary 💍",
    allDay: true,
    start: parse("2024-08-19", "yyyy-M-dd", new Date()),
    end: parse("2024-08-19", "yyyy-M-dd", new Date()),
    recurring: true
  }
];
export default events;
