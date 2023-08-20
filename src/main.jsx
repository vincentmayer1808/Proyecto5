import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user/UserProvider.jsx";
import { ServicesProvider } from "./context/services/ServicesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ServicesProvider>
          <App />
        </ServicesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
