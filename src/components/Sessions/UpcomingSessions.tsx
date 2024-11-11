import { useSession } from "../../store/sessions-context";
import Button from "../UI/Button";
import UpcomingSessionItem from "./UpcomingSessionItem";

function UpcomingSessions() {
  const { closeViewSessionsModal, bookingId } = useSession();

  function handleCloseModal() {
    closeViewSessionsModal();
  }

  return (
    <>
      {bookingId.length > 0 ? (
        bookingId.map((booking) => (
          <UpcomingSessionItem key={booking} id={booking} />
        ))
      ) : (
        <p>No Bookings made</p>
      )}

      <div className="actions">
        <Button type="button" textOnly={false} onMethod={handleCloseModal}>
          Close
        </Button>
      </div>
    </>
  );
}

export default UpcomingSessions;
