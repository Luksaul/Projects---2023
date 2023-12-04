import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShoppingListHome from './components/ShoppingList/ShoppingListHome.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/shopping-list', element: <ShoppingListHome />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
