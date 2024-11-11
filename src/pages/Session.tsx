import { useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import { useSession } from "../store/sessions-context";
import SessionAction from "../components/Sessions/SessionAction";

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const { data, openBookingModal, isBookingOpen } = useSession();

  const sessionId = params.id;
  const loadedSession = data.find((session) => session.id === sessionId);

  function handleBookingModal() {
    openBookingModal();
  }

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main id="session-page">
      {isBookingOpen && <SessionAction id={sessionId} type="book" />}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button
                type="button"
                textOnly={false}
                onMethod={handleBookingModal}
              >
                Book Session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
