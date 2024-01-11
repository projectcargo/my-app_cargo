import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Layout from './Compo/Layout';
// import Newsdel from './Compo/Newsdel';
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//       element: <Home/>
//     },
//       {
//         path:"newsdel",
//     element: <Newsdel/>
//   } 

//     ]
//   }
// ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)

reportWebVitals() 
