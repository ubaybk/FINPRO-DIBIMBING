import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FollowingContextProvider } from "./context/FollowingContextProvider.jsx";
import { FollowersContextProvider } from "./context/FollowersContextProvider.jsx";
import { FollowingByUserIdContextProvider } from "./context/FollowingByUserIdContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FollowingContextProvider>
        <FollowersContextProvider>
          <FollowingByUserIdContextProvider>
            <App />
          </FollowingByUserIdContextProvider>
        </FollowersContextProvider>
      </FollowingContextProvider>
    </BrowserRouter>
  </StrictMode>
);
