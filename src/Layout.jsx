import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ModoOscuroProvider, useModoOscuro } from './context/ModoOscuroContext';
import './css/peliculas.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/Catalogo">Películas</Link>
    </nav>
  );
};

const Layout = () => {
  const { tema, toggleTema } = useModoOscuro();

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

