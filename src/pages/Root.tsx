import { Outlet } from "react-router-dom";
import { SessionsContextProvider } from "../store/sessions-context";
import Header from "../components/Navigation/Header";

export default function Root() {
  return (
    <>
      <SessionsContextProvider>
        <Header />
        <Outlet />
      </SessionsContextProvider>
    </>
  );
}
