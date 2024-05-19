import { createContext, useContext, useReducer } from "react";
import parse from "date-fns/parse";

import defaultCalendars from "../calendars";
export const CalendarsContext = createContext(null);
export const CalendarsDispatchContext = createContext(null);

export function CalendarsProvider({ children }) {
  const [calendars, dispatch] = useReducer(calendarsReducer, defaultCalendars);

  return (
    <CalendarsContext.Provider value={calendars}>
      <CalendarsDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarsDispatchContext.Provider>
    </CalendarsContext.Provider>
  );
}

function calendarsReducer(calendars, action) {
  switch (action.type) {
    case "added": {
      return [
        {
          id: action.id,
          title: action.title,
          description: action.description,
          createdAt: new Date(),
          eventIds: action.eventIds
        },
        ...calendars
      ];
    }
    case "changed": {
      return calendars.map(t => {
        if (t.id === action.id) {
          return action;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return calendars.filter(t => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useCalendars() {
  return useContext(CalendarsContext);
}

export function useCalendarsDispatch() {
  return useContext(CalendarsDispatchContext);
}

const reducerFuncs = { calendarsReducer };
export default reducerFuncs;
