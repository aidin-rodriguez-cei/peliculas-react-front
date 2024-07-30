import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import '../css/peliculas.css';

const Catalogo = () => {
  const { userId } = useParams();
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    getPeliculas('/backend/API/datos.json');
  }, []);

  const getPeliculas = async (url) => {
    try {
      const respuesta = await fetch(url);
      const objeto = await respuesta.json();
      console.log("Películas cargadas:", objeto.peliculas);
      const peliculasUsuario = objeto.peliculas.filter(pelicula => pelicula.idUsuario === userId);
      console.log("Películas del usuario:", peliculasUsuario);
      setPeliculas(peliculasUsuario);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const toggleChecked = (id) => {
    setPeliculas(peliculas.map(pelicula =>
      pelicula.id === id ? { ...pelicula, checked: !pelicula.checked } : pelicula
    ));
  };

  return (
    <div>
      <div className="catalog-container">
        {peliculas.length > 0 ? peliculas.map((pelicula) => (
          <article key={pelicula.id} className="peliculas">
            <img src={pelicula.imagen} alt={pelicula.titulo} />
            <h2>{pelicula.titulo}</h2>
            <p>Director: {pelicula.director}</p>
            <p>Año: {pelicula.anio}</p>
            <div className="checkbox-container">
              <p>¿Ya viste esta película?</p>
              <input
                type="checkbox"
                checked={pelicula.checked}
                onChange={() => toggleChecked(pelicula.id)}
              />
            </div>
          </article>
        )) : <p>Ingresa tu usuario y contraseña para que disfrutes de tus peliculas favoritas</p>}
      </div>
    </div>
  );
};

export default Catalogo;





