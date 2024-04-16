import parse from "date-fns/parse";
import { getYear } from "date-fns";

const currentYear = getYear(new Date());

const events = [
  {
    title: "Lou & Gav Wedding Anniversary 💍",
    allDay: true,
    start: parse(`${currentYear}-01-01`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-01-01`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Dad Spain trip 🌞",
    allDay: true,
    start: parse("2024-01-13", "yyyy-M-dd", new Date()),
    end: parse("2024-01-16", "yyyy-M-dd", new Date()),
    recurring: false
  },
  {
    title: "Lou’s Birthday 🎉",
    allDay: true,
    start: parse(`${currentYear}-07-23`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-07-23`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Niamh’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-02-18`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-02-18`, "yyyy-M-dd", new Date()),
    recurring: true
  },

  {
    title: "Sinead’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-03-02`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-03-02`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Gary’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-09-19`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-09-19`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Dad’s Birthday 🎉",
    allDay: true,
    start: parse(`${currentYear}-04-14`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-04-14`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Mams’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-05-31`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-05-31`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Siofra's Birthday",
    allDay: true,
    start: parse(`${currentYear}-12-06`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-12-06`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Adrienne's Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-07-22`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-07-22`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Fintan (young) Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-06-09`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-06-09`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Fintan (middle) Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-01-31`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-01-31`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Marie's Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-11-14`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-11-14`, "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Mam and Dad Anniversary 💍",
    allDay: true,
    start: parse(`${currentYear}-08-19`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-08-19`, "yyyy-M-dd", new Date()),
    recurring: true
  }
];

export default events;
