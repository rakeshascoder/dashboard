import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard.jsx";
import User from "./Components/Pages/User.jsx";
import Sip from "./Components/Pages/Sip.jsx";
import Comunication from "./Components/Pages/Comunication.jsx";
import Transaction from "./Components/Pages/Transaction.jsx";
import Privacy from "./Components/Pages/Privacy.jsx";
import Term from "./Components/Pages/Term.jsx";
import Catalog1 from "./Components/Pages/Catalog1.jsx";
import Catalog2 from "./Components/Pages/Catalog2.jsx";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "User/", element: <User /> },
      { path: "Sip/", element: <Sip /> },
      { path: "Comunication/", element: <Comunication /> },
      { path: "Transaction/", element: <Transaction/>},
      { path: "Privacy/", element: <Privacy/>},
      { path: "Term/", element: <Term/>},
      { path: "Catalog1/", element: <Catalog1/>},
      { path: "Catalog2/", element: <Catalog2/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
