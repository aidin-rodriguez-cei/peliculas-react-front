import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { ModoOscuroContext, ModoOscuroProvider } from './context/ModoOscuroContext';
import './css/peliculas.css';

// Componente Navbar
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
    </nav>
  );
};

// Componente Layout
const Layout = () => {
  const { tema, toggleTema } = useContext(ModoOscuroContext);

  return (
    <div className={tema}>
      <header>
        <div className="header-content">
          <Navbar />
          <button className="theme-toggle" onClick={toggleTema}>
            Cambiar Tema: {tema}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const AppLayout = () => (
  <ModoOscuroProvider>
      <Layout />
  </ModoOscuroProvider>
);

export default AppLayout;
