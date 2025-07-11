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
      <button onClick={onMethod} className={btnStyle}>
        {children}
      </button>
    );
  }

  const { to } = props;

  return (
    <Link to={to} className={btnStyle}>
      {children}
    </Link>
  );
}

export default Button;
