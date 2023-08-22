import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import { store } from "./store.ts";
import CreateEmployee from "./routes/CreateEmployee.tsx";
import TableEmployee from "./routes/TableEmployee.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <CreateEmployee />,
      },
      {
        path: "/table",
        element: <TableEmployee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
