import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import User from "./Pages/User.jsx";
import Sip from "./Pages/Sip.jsx";
import Comunication from "./Pages/Comunication.jsx";
import Transaction from "./Pages/Transaction.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Term from "./Pages/Term.jsx";
import Catalog1 from "./Pages/Catalog1.jsx";
import Catalog2 from "./Pages/Catalog2.jsx";
import Add_new_user from "./Pages/Add_new_user.jsx";
import View_user_detail from "./Components/View_user_detail.jsx";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "User/", element: <User /> },
      { path: "Sip/", element: <Sip /> },
      { path: "Comunication/", element: <Comunication /> },
      { path: "Transaction/", element: <Transaction /> },
      { path: "Privacy/", element: <Privacy /> },
      { path: "Term/", element: <Term /> },
      { path: "Catalog1/", element: <Catalog1 /> },
      { path: "Catalog2/", element: <Catalog2 /> },
      { path: "User/Add_new_user/", element: <Add_new_user /> },
      { path: "User/View_user_detail/:id", element: <View_user_detail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
