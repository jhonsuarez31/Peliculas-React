import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busquedaState, setbusquedaState] = useState("");
  const [noEncontrado, setnoEncontrado] = useState(false);
  const buscarPelicula = (e) => {
    //Crear el listado y actualizarlo
    setbusquedaState(e.target.value);
    console.log(busquedaState);

    //Filtrar coicidencias
    let peliculas_econtradas = listadoState.filter((pelicula) => {
      return pelicula.title.toLowerCase().includes(busquedaState.toLowerCase());
    });
    //Comprobar si hay un resultado
    if (busquedaState <= 2 || peliculas_econtradas <= 0) {
      peliculas_econtradas = JSON.parse(localStorage.getItem("pelicula"));
      setnoEncontrado(true);
    }else{
      setnoEncontrado(false)
    }
   

    setListadoState(peliculas_econtradas);

    //Actualizar con los elementos filtrados
  };
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {noEncontrado === true && (
        <span className="no-encontrado">No se ha encontrado ninguna coicidencia</span>
      )}
     
      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          value={busquedaState}
          onChange={buscarPelicula}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
