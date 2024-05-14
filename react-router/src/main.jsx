import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Product from './Products.jsx'
import EditForm from './routes/EditForm.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <Product/>
      },
      {
        path: '/products/:id', //rota dinâmica
        element: <EditForm/>
      },
    ]
  },
  //{
   // path: '/products',
    //element: <Product/>
  //}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
