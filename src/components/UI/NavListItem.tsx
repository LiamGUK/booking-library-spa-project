import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  id: string;
}

function NavListItem({ children, id }: NavItemProps) {
  return <li data-item={id}>{children}</li>;
}

export default NavListItem;
