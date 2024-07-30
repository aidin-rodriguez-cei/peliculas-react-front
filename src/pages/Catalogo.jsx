import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
      const peliculasUsuario = objeto.peliculas.filter(pelicula => pelicula.idUsuario === userId);
      setPeliculas(peliculasUsuario);
    } catch (e) {
      console.log("Error:", e);
    }
  }

  const toggleChecked = (id) => {
    setPeliculas(peliculas.map(pelicula => 
      pelicula.id === id ? { ...pelicula, checked: !pelicula.checked } : pelicula
    ));
  }

  return (
    <div className="catalog-container">
      {peliculas.map((pelicula) => (
        <article key={pelicula.id} className="peliculas">
          <img src={pelicula.imagen} alt={pelicula.titulo} />
          <h2>{pelicula.titulo}</h2>
          <p>Director: {pelicula.director}</p>
          <p>Año: {pelicula.anio}</p>
          <input 
            type="checkbox" 
            checked={pelicula.checked} 
            onChange={() => toggleChecked(pelicula.id)} 
          />
        </article>
      ))}
    </div>
  );
};

export default Catalogo;
