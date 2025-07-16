import { useEffect, type PropsWithChildren } from "react";
import NavListItem from "./NavListItem";
import Button from "./Button";

export interface LinkOptions {
  id: string;
  to: string;
  text: string;
  onMethod?: () => void;
}

interface NavConfig {
  type: "desk" | "mobile";
  linkContent: LinkOptions[];
  burgerOpen?: boolean;
  handleBurger?: () => void;
}

function NavMenu({ children }: PropsWithChildren) {
  return <>{children}</>;
}

function NavItem({ to, text, id, onMethod }: LinkOptions) {
  return (
    <NavListItem id={id}>
      <Button type="link" to={to} textOnly={true} onMethod={onMethod}>
        {text}
      </Button>
    </NavListItem>
  );
}

// Use session context to extract burger menu state values and methods
function NavList({ type, linkContent, burgerOpen, handleBurger }: NavConfig) {
  useEffect(
    function () {
      if (burgerOpen) {
        document.querySelector("html")!.style.overflowY = "hidden";
      } else {
        document.querySelector("html")!.removeAttribute("style");
      }
    },
    [burgerOpen],
  );

  if (type === "mobile") {
    return (
      <nav
        className="absolute top-0 left-0 z-10 h-full w-full transition-transform duration-400 xs:w-[60vw] md:hidden"
        style={
          burgerOpen
            ? {
                backgroundImage: "var(--bg-col--primary)",
                transform: "translateX(0%)",
              }
            : {
                backgroundImage: "var(--bg-col--primary)",
                transform: "translate(-100%)",
              }
        }
      >
        <ul className="nav-list h-[70vh] flex-col justify-center">
          <li
            onClick={handleBurger}
            className="absolute top-5 right-5 h-[3.2rem] w-[3.2rem] cursor-pointer"
          >
            <span className="absolute top-[50%] left-[20%] block h-[2px] w-[2.3rem] translate-x-[-5%] translate-y-[-100%] rotate-45 bg-white"></span>
            <span className="absolute top-[45%] left-[24%] block h-[2px] w-[2.3rem] translate-x-[-10%] translate-y-[-24%] -rotate-45 bg-white"></span>
          </li>
          {linkContent.map((linkItem) => (
            <NavItem
              key={linkItem.id}
              to={linkItem.to}
              text={linkItem.text}
              id={linkItem.id}
              onMethod={handleBurger}
            />
          ))}
        </ul>
      </nav>
    );
  }

  if (type === "desk") {
    return (
      <nav className="max-md:hidden">
        <ul className="nav-list">
          {linkContent.map((linkItem) => (
            <NavItem
              key={linkItem.id}
              to={linkItem.to}
              text={linkItem.text}
              id={linkItem.id}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

NavMenu.NavList = NavList;

export default NavMenu;
