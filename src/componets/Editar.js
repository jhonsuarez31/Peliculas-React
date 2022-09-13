import React from "react";

export const Editar = ({ pelicula , conseguirPeliculas, setEdidtarState, setListadoState }) => {
  const titulo_componente = "Editar comoponente";
  const guardarEdicion = (e, id)  => {
  
    e.preventDefault();
    let target  = e.target;
    
    const pelicula_almacenada = conseguirPeliculas();
    
    const index = pelicula_almacenada.findIndex(pelicula => pelicula.id === id)
    
    //Crear objeto
    let pelicula_actualizada = {
        index,
        title: target.titulo.value,
        description: target.descripcion.value,
    }
    //Actualizar elemento con ese indice
    pelicula_almacenada[index]=pelicula_actualizada;
    //Guardar en el localStorage 
    localStorage.setItem('pelicula', JSON.stringify(pelicula_almacenada) )   

    setListadoState(pelicula_almacenada)
    setEdidtarState(0)

  }

  return (
    <div className="edit_form">
      Editar
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion (e, pelicula.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={pelicula.title}
        ></input>

        <textarea
          name="descripcion"
          defaultValue={pelicula.description}
          className="descripcion_editada"
        ></textarea>
        <input type="submit" className="editar" value="Actualizar"></input>
      </form>
    </div>
  );
};
