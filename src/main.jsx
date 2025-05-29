import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/home/Home'
import VidaAcademica from './pages/VidaAcademica/VidaAcademica'
import OportunidadesBeneficios from './pages/OportunidadesBeneficios/OportunidadesBenficios'
import ApoioPsicologico from './pages/ApoioPsicologico/ApoioPsicologico'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/VidaAcademica",
        element: <VidaAcademica />,
      },
      {
        path: "/OportunidadesBeneficios",
        element: <OportunidadesBeneficios />,
      },
      {
        path: "/ApoioPsicologico",
        element: <ApoioPsicologico />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
