import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "@material-tailwind/react";

import './index.css';
import './styles/font.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Commandez from './components/Command';
import FirstPart from './components/Kobe/FirstPart/FirstPart';
import SecondPart from './components/Kobe/SecondPart/SecondPart';
import Histoire from './components/Histoire';
import Terroir from './components/Kobe/Actuel/Terroir';
import Mono from './components/Mono';
import NavDemo from './components/Kobe/Demo/NavDemo';
import Waiting from './components/Waiting';
// import TerroirWIP from './components/Kobe/Actuel/TerroirWIP';
// import Histoire from './components/Histoire';
// import Contact from './components/Contact';
// import Terroir from './components/Kobe/Actuel/Terroir';
// import Waiting from './components/Waiting';
// import Mono from './components/Mono';
// import Coming from './components/Coming';

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <FirstPart /> <SecondPart /> </> 
  },
  {
    path: "/second",
    element: <> <Histoire /> <Terroir /> </>
  },
  {
    path: "mono",
    element: <Mono />,
  },
  {
    path: "waiting",
    element: <Waiting />,
  },
  // {
  //   path: "terroir",
  //   element: <Terroir />,
  // },
  // {
  //   path: "all",
  //   element: <App />,
  // },
  // {
  //   path: "*",
  //   element: <App />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <NavDemo />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
