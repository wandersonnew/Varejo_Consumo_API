import { createBrowserRouter } from "react-router-dom";
import Customer from "./components/Customer";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Customer />,
    },
]);

export default router;