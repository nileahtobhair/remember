import parse from "date-fns/parse";
import { getYear } from "date-fns";

const currentYear = getYear(new Date());

const events = [
  {
    title: "Lou & Gav Wedding Anniversary 💍",
    allDay: true,
    start: parse(`2025-01-01`, "yyyy-M-dd", new Date()),
    end: parse(`2025-01-01`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 1
  },
  {
    title: "Niamh’s Birthday 🎂",
    allDay: true,
    start: parse(`2025-02-18`, "yyyy-M-dd", new Date()),
    end: parse(`2025-02-18`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 4
  },
  {
    title: "Lou’s Birthday 🎉",
    allDay: true,
    start: parse(`${currentYear}-07-23`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-07-23`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 3
  },
  {
    title: "Sinead’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-03-02`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-03-02`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 5
  },
  {
    title: "Gary’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-09-19`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-09-19`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 6
  },
  {
    title: "Dad’s Birthday 🎉",
    allDay: true,
    start: parse(`${currentYear}-04-14`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-04-14`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 7
  },
  {
    title: "Mams’s Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-05-31`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-05-31`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 8
  },
  {
    title: "Siofra's Birthday",
    allDay: true,
    start: parse(`${currentYear}-12-06`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-12-06`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 9
  },
  {
    title: "Adrienne's Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-07-22`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-07-22`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 10
  },
  {
    title: "Fintan (young) Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-06-09`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-06-09`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 11
  },
  {
    title: "Fintan (middle) Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-01-31`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-01-31`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 12
  },
  {
    title: "Marie's Birthday 🎂",
    allDay: true,
    start: parse(`${currentYear}-11-14`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-11-14`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 13
  },
  {
    title: "Mam & Dad Anniversary 💍",
    allDay: true,
    start: parse(`${currentYear}-08-19`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-08-19`, "yyyy-M-dd", new Date()),
    recurring: true,
    id: 14
  },
  {
    title: "Reception drinks",
    allDay: false,
    start: parse(`${currentYear}-08-16`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-08-16`, "yyyy-M-dd", new Date()),
    recurring: false,
    id: 15
  },
  {
    title: "Chapel Ceremony",
    allDay: false,
    start: parse(`${currentYear}-08-17`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-08-17`, "yyyy-M-dd", new Date()),
    id: 16
  },
  {
    title: "Afters",
    allDay: false,
    start: parse(`${currentYear}-08-17`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-08-17`, "yyyy-M-dd", new Date()),
    id: 17
  },
  {
    title: "Goodbye brunch",
    allDay: false,
    start: parse(`${currentYear}-08-18`, "yyyy-M-dd", new Date()),
    end: parse(`${currentYear}-08-18`, "yyyy-M-dd", new Date()),
    id: 18
  }
];

export default events;
