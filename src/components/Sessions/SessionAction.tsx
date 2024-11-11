import { useEffect, useRef } from "react";
import Modal, { type OpenModal } from "../UI/Modal";
import UpcomingSessions from "./UpcomingSessions";
import UpcomingSession from "./UpcomingSession";

export interface BookSessionProps {
  id?: string;
}

type ActionTypes = {
  type: "book" | "view";
};

type ActionProps = BookSessionProps & ActionTypes;

function SessionAction({ id, type }: ActionProps) {
  const modal = useRef<OpenModal>(null);

  useEffect(() => {
    if (modal.current) {
      return modal.current.open();
    }
  }, []);

  return (
    <Modal ref={modal}>
      {type === "book" ? <UpcomingSession id={id} /> : <UpcomingSessions />}
    </Modal>
  );
}

export default SessionAction;
