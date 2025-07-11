import { RouterProvider } from "react-router-dom";
import Router from "./routes/appRoutes.tsx";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
