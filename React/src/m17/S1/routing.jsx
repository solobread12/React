import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "./createuser";
import Navbar from "./navbar";
import ReadUser from "./readuser";
import Help from "./help";

const router = createBrowserRouter([

  {
    path: "/",
    element: <CreateUser />,
  },
  {
    path: "/User",
    element: (
      <Help>
        <Navbar />
      </Help>
    ),
  },
  {
    path: "/User/:id",
    element: (
      <Help>
        <ReadUser />
      </Help>
    ),
  },
]);

function NewAxios() {
  return <RouterProvider router={router} />;
}

export default NewAxios;