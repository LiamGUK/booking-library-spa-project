import { useState } from "react";
import { useSession } from "../../store/sessions-context";
import SessionAction from "../Sessions/SessionAction";
import Button from "../UI/Button";
import NavMenu, { type LinkOptions } from "../UI/NavMenu";

import styles from "./Header.module.css";

const navLinks: LinkOptions[] = [
  { id: "01", to: "/", text: "Our Mission" },
  { id: "02", to: "/sessions", text: "Browse Sessions" },
];

function Header() {
  // Add Mobile Menu state updates to session context - destruct values from below useSession hook
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { isViewSessOpen, openViewSessionsModal } = useSession();

  function handleOpenModal() {
    openViewSessionsModal();
  }

  function handleBurger() {
    setBurgerOpen((currState) => !currState);
  }

  return (
    <>
      {isViewSessOpen && <SessionAction type="view" />}
      <header id={styles["main-header"]}>
        <div
          onClick={handleBurger}
          className="cursor-pointer px-[5px] max-sm:block md:hidden"
        >
          {Array.from({ length: 3 }, (_, i) => (
            <span
              key={"span-" + i}
              className="mb-[0.5rem] block h-0.5 w-[2.5rem] bg-white"
            ></span>
          ))}
        </div>
        <Button type="link" to="/" textOnly={true}>
          <h1>ReactMentoring</h1>
        </Button>

        <NavMenu>
          <NavMenu.NavList
            type="mobile"
            linkContent={navLinks}
            burgerOpen={burgerOpen}
            handleBurger={handleBurger}
          />
          <NavMenu.NavList type="desk" linkContent={navLinks} />
        </NavMenu>
        <div className="max-w-32 sm:max-w-full">
          <Button type="button" textOnly={false} onMethod={handleOpenModal}>
            Upcoming Sessions
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
