import { Link } from "react-router-dom";
import { type ReactNode } from "react";

interface ButtonProps {
  type: "button";
  textOnly: boolean;
  onMethod?: () => void;
  children: ReactNode;
}

interface LinkProps {
  type: "link";
  to: string;
  textOnly: boolean;
  onMethod?: () => void;
  children: ReactNode;
}

type ComponentProps = ButtonProps | LinkProps;

function Button({ children, ...props }: ComponentProps) {
  const { type, textOnly } = props;
  const btnStyle = textOnly
    ? "button button--text-only text-lg sm:text-2xl"
    : "button text-lg sm:text-2xl";

  if (type === "button") {
    const { onMethod } = props;
    return (
      <button className={btnStyle} onClick={onMethod}>
        {children}
      </button>
    );
  }

  const { to, onMethod } = props;

  return (
    <Link to={to} className={btnStyle} onClick={onMethod}>
      {children}
    </Link>
  );
}

export default Button;
