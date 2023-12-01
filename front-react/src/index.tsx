import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "@material-tailwind/react";

import './index.css';
import './styles/font.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TerroirWIP from './components/Kobe/Actuel/TerroirWIP';
import Histoire from './components/Histoire';
import Contact from './components/Contact';
import Terroir from './components/Kobe/Actuel/Terroir';
import Waiting from './components/Waiting';
import Contact2 from './components/Contact2';
import Mono from './components/Mono';
import Forms from './components/Kobe/Forms';
import CheeseWindow from './components/CheeseWindow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Waiting />,
  },
  // {
  //   path: "contact",
  //   element: <Contact  />,
  // },
  {
    path: "mono",
    element: <Mono />,
  },
  // {
  //   path: "cheese",
  //   element: <CheeseWindow />,
  // },
  {
    path: "histoire",
    element: <Histoire />,
  },
  {
    path: "terroir",
    element: <Terroir />,
  },
  {
    path: "all",
    element: <App />,
  },
  {
    path: "*",
    element: <Waiting />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ToastContainer
      position="top-center"
      autoClose={2000}
      limit={3}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
    /> */}
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
