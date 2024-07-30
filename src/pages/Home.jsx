import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/peliculas.css';

const Home = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
    getUsuarios('/backend/API/datos.json');
  }, []);

  const getUsuarios = async (url) => {
    try {
      const respuesta = await fetch(url);
      const objeto = await respuesta.json();
      setProducts(objeto.usuarios);
    } catch (e) {
      console.log("Error:", e);
    }
  }

  const handleLogin = () => {
    const usuario = usuarios.find(u => u.nombre === user && u.clave === pass);
    if (usuario) {
      navigate(`/catalogo/${usuario.id}`);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1 className="titulo-inicial">Tus peliculas Favoritas</h1>
      <div className="ingreso-container">
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
};

export default Home;