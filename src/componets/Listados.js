import React, { useEffect, useState} from "react";
import { Editar } from "./Editar";

export const Listados = ({listadoState, setListadoState}) => {
  
  //const [listadoState, setListadoState] = useState([]);
  const [editarState,setEdidtarState] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, [] );

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelicula"));

    setListadoState(peliculas);
    
    return peliculas;
  };
  const borrar_Peli = (id) => {
     //Conseguir todas las peliculas 
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar las nuevas peliculas
    let nuevo_array = pelis_almacenadas.filter(pelicula => pelicula.id !== parseInt(id))

    console.log(pelis_almacenadas, nuevo_array);
    //Actualizar el listado 
    setListadoState(nuevo_array);

    //borrar del localStorage
    localStorage.setItem('pelicula',JSON.stringify(nuevo_array) )
    
  }

  return (
    <>
      {listadoState != null  && listadoState.map((pelicula) => {
        return (
          <article key={pelicula.id} className="peli-item">
            <h3 className="title">{pelicula.title}</h3>
            <p className="description">{pelicula.description}</p>

            <button className="edit" onClick={() => { setEdidtarState(pelicula.id)}}>Editar</button>
             
            <button className="delete" onClick={() => borrar_Peli(pelicula.id)}>Borrar</button>

            {editarState === pelicula.id && (
              <Editar pelicula = {pelicula} conseguirPeliculas = {conseguirPeliculas} setEdidtarState = {setEdidtarState}
                setListadoState={setListadoState}
              />
            )}
          </article>
        );
      })}
    </>
  );
};
