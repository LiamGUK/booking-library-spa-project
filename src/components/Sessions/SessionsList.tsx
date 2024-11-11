import { memo } from "react";
import SessionsItem from "./SessionsItem";
import { type SessionData } from "../../store/sessions-context";

type SessionListProps = {
  data: SessionData[];
};

const SessionsList = memo<SessionListProps>(function SessionsList({ data }) {
  return (
    <>
      {data ? (
        <ul id="sessions-list">
          {data.map((el) => (
            <SessionsItem
              key={el.id}
              title={el.title}
              image={el.image}
              summary={el.summary}
              id={el.id}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
});

export default SessionsList;
