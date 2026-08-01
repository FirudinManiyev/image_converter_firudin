import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      richColors
      position="top-right"
      toastOptions={{
        style: {
          background: "#0d131e",
          border: "1px solid rgba(255,255,255,.1)",
          color: "#f8fafc",
        },
      }}
    />
  </StrictMode>
);
