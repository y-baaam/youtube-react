import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";

import NotFound from "./components/page/notFound";
import reportWebVitals from "./reportWebVitals";
import DarkModeProvider from "./context/DarkModeContext";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Videos from "./components/page/Videos";
import VideoDetail from "./components/page/VideoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);
root.render(
  <>
    <React.StrictMode>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
