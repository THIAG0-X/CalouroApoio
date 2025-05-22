import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/home/index'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
