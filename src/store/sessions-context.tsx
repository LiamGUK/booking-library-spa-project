import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from "react";

import { SESSIONS } from "../dummy-sessions";

export interface SessionData {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
}

interface SessionState {
  isBookingOpen: boolean;
  isViewSessOpen: boolean;
  name: string;
  email: string;
  bookingId: string[];
  data: SessionData[];
}

interface SessionMethods {
  addBooking: (id: string, name: string, email: string) => void;
  cancelBooking: (id: string) => void;
  openBookingModal: () => void;
  openViewSessionsModal: () => void;
  closeBookingModal: () => void;
  closeViewSessionsModal: () => void;
}

interface AddBooking {
  type: "ADD_BOOKING";
  payload: {
    id: string;
    name: string;
    email: string;
  };
}

interface CancelBooking {
  type: "CANCEL_BOOKING";
  payload: string;
}

interface OpenBookingModal {
  type: "OPEN_BOOKING_MODAL";
}

interface OpenSessionModal {
  type: "OPEN_SESSIONS_MODAL";
}

interface CloseBookingModal {
  type: "CLOSE_BOOKING_MODAL";
}

interface CloseSessionModal {
  type: "CLOSE_SESSIONS_MODAL";
}

type SessionActions =
  | AddBooking
  | CancelBooking
  | OpenBookingModal
  | OpenSessionModal
  | CloseBookingModal
  | CloseSessionModal;

type SessionContext = SessionState & SessionMethods;

const initialState: SessionState = {
  isBookingOpen: false,
  isViewSessOpen: false,
  name: "",
  email: "",
  bookingId: [],
  data: SESSIONS,
};

const SessionContext = createContext<SessionContext | null>(null);

function sessionReducer(state: SessionState, action: SessionActions) {
  switch (action.type) {
    case "ADD_BOOKING":
      return {
        ...state,
        bookingId: [...state.bookingId, action.payload.id],
        name: action.payload.name,
        email: action.payload.email,
      };
    case "CANCEL_BOOKING":
      return {
        ...state,
        bookingId: state.bookingId.filter((id) => id !== action.payload),
      };
    case "CLOSE_BOOKING_MODAL":
      return {
        ...state,
        isBookingOpen: false,
      };
    case "OPEN_BOOKING_MODAL":
      return {
        ...state,
        isBookingOpen: true,
        // type: action.payload,
      };
    case "OPEN_SESSIONS_MODAL":
      return {
        ...state,
        isViewSessOpen: true,
      };
    case "CLOSE_SESSIONS_MODAL":
      return {
        ...state,
        isViewSessOpen: false,
      };
    default:
      throw new Error(
        "Invalid action type used - valid actions 'ADD_BOOKING, 'CANCEL_BOOKING, 'CLOSE_BOOKING_MODAL', 'OPEN_BOOKING_MODAL', 'OPEN_SESSIONS_MODAL' & 'CLOSE_SESSIONS_MODAL'"
      );
  }
}

function SessionsContextProvider({ children }: PropsWithChildren) {
  const [sessionState, dispatch] = useReducer(sessionReducer, initialState);
  const ctx: SessionContext = {
    isBookingOpen: sessionState.isBookingOpen,
    isViewSessOpen: sessionState.isViewSessOpen,
    name: sessionState.name,
    email: sessionState.email,
    bookingId: sessionState.bookingId,
    data: SESSIONS,
    addBooking(id, name, email) {
      const booking = { id, name, email };
      dispatch({ type: "ADD_BOOKING", payload: booking });
    },
    cancelBooking(id) {
      dispatch({ type: "CANCEL_BOOKING", payload: id });
    },
    openBookingModal() {
      dispatch({ type: "OPEN_BOOKING_MODAL" });
    },
    closeBookingModal() {
      dispatch({ type: "CLOSE_BOOKING_MODAL" });
    },
    openViewSessionsModal() {
      dispatch({ type: "OPEN_SESSIONS_MODAL" });
    },
    closeViewSessionsModal() {
      dispatch({ type: "CLOSE_SESSIONS_MODAL" });
    },
  };

  return (
    <SessionContext.Provider value={ctx}>{children}</SessionContext.Provider>
  );
}

function useSession() {
  const context = useContext(SessionContext);
  if (!context) throw new Error("Context used outside of Context Provider!");
  return context;
}

export { SessionsContextProvider, useSession };
