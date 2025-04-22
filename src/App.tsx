import "./styles.css";
import { useState, useEffect } from "react";
import { createHashRouter as createRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  const router = createRouter(routes);
  const [term, setTerm] = useState<string>("choo choo");

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
