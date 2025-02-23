import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RouterProvider from "./providers/RouterProvider.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </RouterProvider>
  </StrictMode>
);
