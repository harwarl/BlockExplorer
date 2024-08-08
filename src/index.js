import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import BlockPage from "./Pages/BlockPage";
import TransactionPage from "./Pages/TransactionPage";
import AddressPage from "./Pages/AddressPage";

//setting up react router dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blocks/:blockNumber",
    element: <BlockPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "transaction/:txnHash",
    element: <TransactionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "address/:address",
    element: <AddressPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
