import { useSession } from "../../store/sessions-context";
import Button from "../UI/Button";

interface SessionItemProps {
  id: string;
}

function UpcomingSessionItem({ id }: SessionItemProps) {
  const { data, cancelBooking } = useSession();

  const sessionId = id;
  const loadedSession = data.find((session) => session.id === sessionId);

  function handleCancelBooking(id: string) {
    cancelBooking(id);
  }

  return (
    <div className="upcoming-session">
      <div>
        <h3>{loadedSession?.title}</h3>
        <p>{loadedSession?.summary}</p>
        <time dateTime={new Date(loadedSession!.date).toISOString()}>
          {new Date(loadedSession!.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <div>
        <Button
          type="button"
          textOnly={true}
          onMethod={() => handleCancelBooking(sessionId)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default UpcomingSessionItem;
