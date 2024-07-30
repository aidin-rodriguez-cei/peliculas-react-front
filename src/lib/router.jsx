import { createBrowserRouter } from "react-router-dom";

// Importar páginas
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo'; 

// Importar páginas especiales
import Layout from "../Layout";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'catalogo/:userId',
        element: <Catalogo />
      },
      {
        path: 'catalogo',
        element: <Catalogo />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default router;

