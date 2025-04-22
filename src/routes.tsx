import React from "react";
import { RouteObject } from "react-router-dom";
import SelectGame from "./pages/SelectGame";
import ShowNames from "./pages/games/ShowNames";
import ShowNameAsk from "./pages/games/ShowNameAsk";
import ShowNameAnswer from "./pages/games/ShowNameAnswer";
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SelectGame />,
  },
  {
    path: "/ShowNames/:current",
    element: <ShowNames />,
    children: [
      {
        path: "/ShowNames/:current/start",
        element: <ShowNameAsk />,
      },
      {
        path: "/ShowNames/:current/show",
        element: <ShowNameAnswer />,
      },
    ],
  },
];
