import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Orders from "./component/Orders";
import Register from "./component/Register";
import "./index.css";
import Main from "./layout/main";
import AuthProvder from "./providers/AuthProvder";
import PrivetRoute from "./route/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvder>
      <RouterProvider router={router} />
    </AuthProvder>
  </React.StrictMode>
);
