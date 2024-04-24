import { createContext, useContext, useReducer } from "react";
import parse from "date-fns/parse";
// import { isBefore, startOfMonth, isAfter } from "date-fns";

import defaultEvents from "../events";
export const EventsContext = createContext(null);
export const EventsDispatchContext = createContext(null);

export function EventsProvider({ children }) {
  const [events, dispatch] = useReducer(eventsReducer, defaultEvents);

  return (
    <EventsContext.Provider value={events}>
      <EventsDispatchContext.Provider value={dispatch}>
        {children}
      </EventsDispatchContext.Provider>
    </EventsContext.Provider>
  );
}

// const orderEvents = eventsList => {
//   const filtered = eventsList
//     .filter(event => {
//       return isAfter(event.end, startOfMonth(new Date())) || event.recurring;
//     })
//     .sort((a, b) => {
//       return isBefore(b.start, a.start) ? 1 : -1;
//     });
//   return filtered;
// };

function eventsReducer(events, action) {
  switch (action.type) {
    case "added": {
      return [
        {
          id: action.id,
          title: action.title,
          start: parse(action.date, "yyyy-M-dd", new Date()),
          end: parse(action.date, "yyyy-M-dd", new Date()),
          recurring: action.recurring
        },
        ...events
      ];
    }
    case "changed": {
      return events.map(t => {
        if (t.id === action.id) {
          return action;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return events.filter(t => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useEvents() {
  return useContext(EventsContext);
}

export function useEventsDispatch() {
  return useContext(EventsDispatchContext);
}

const reducerFuncs = { eventsReducer };
export default reducerFuncs;
