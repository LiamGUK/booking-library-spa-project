import { useRef } from "react";
import { useSession } from "../../store/sessions-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { type BookSessionProps } from "./SessionAction";

function UpcomingSession({ id }: BookSessionProps) {
  const { closeBookingModal, addBooking, bookingId } = useSession();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleCloseModal() {
    closeBookingModal();
  }

  function handleBooking() {
    const sessId = id === undefined ? "null" : id;
    if (bookingId.includes(sessId)) return;
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const bookId = sessId;
    addBooking(bookId, name, email);
    closeBookingModal();
  }

  return (
    <form className="control" method="dialog">
      <Input label="Your Name" id="name" type="text" ref={nameRef} required />
      <Input
        label="Your Email"
        id="email"
        type="email"
        ref={emailRef}
        required
      />
      <div className="actions mt-[3rem]">
        <Button type="button" textOnly={true} onMethod={handleCloseModal}>
          Cancel
        </Button>
        <Button type="button" textOnly={false} onMethod={handleBooking}>
          Book Session
        </Button>
      </div>
    </form>
  );
}

export default UpcomingSession;
