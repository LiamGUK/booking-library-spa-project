import { useSession } from "../../store/sessions-context";
import SessionAction from "../Sessions/SessionAction";
import Button from "../UI/Button";

function Header() {
  const { isViewSessOpen, openViewSessionsModal } = useSession();

  function handleOpenModal() {
    openViewSessionsModal();
  }

  return (
    <>
      {isViewSessOpen && <SessionAction type="view" />}
      <header id="main-header">
        <Button type="link" to="/" textOnly={true}>
          <h1>ReactMentoring</h1>
        </Button>
        <nav>
          <ul className="nav-list">
            <li>
              <Button type="link" to="/" textOnly={true}>
                Our Mission
              </Button>
            </li>
            <li>
              <Button type="link" to="/sessions" textOnly={true}>
                Browse Sessions
              </Button>
            </li>
            <li>
              <Button type="button" textOnly={false} onMethod={handleOpenModal}>
                Upcoming Sessions
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
