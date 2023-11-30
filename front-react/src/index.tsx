import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Waiting/>,
  },
  {
    path: "contact",
    element: <Contact2 />,
  },
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
    element: <App/>,
  },
  {
    path: "*",
    element: <Waiting/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
