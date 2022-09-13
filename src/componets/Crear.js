import React, { useState } from "react";
import { guardarEnStorage } from "../Helpers/guardarEnStorage";

export const Crear = ({setListadoState}) => {
  const titulo = "Añadir Pelicula";

  const [peliculaState , setPeliculaState] = useState({
    title: "",
    description: ""
  });

  const {title , description} = peliculaState;

  const conseguirDatosForm = e => {

    e.preventDefault();
     
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;
    
    //Crear objeto
    let pelicula = {
      id: new Date().getTime(),
      title,
      description
    };

    //Guardar en estado 
    setPeliculaState (pelicula);


    //Guardar en el local storage
    guardarEnStorage("pelicula" , pelicula);


    //Actualizar el estado 
    setListadoState(elementos =>{
      return [...elementos,pelicula]
    })
    
   
 
  } 

  
  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>
      <strong>
      {(title && description) && "Has credo la pelicula :" +title}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text"
               id="title" 
               name="title"
               placeholder="Titulo" />

        <textarea id="description"
                  name="description"
                  placeholder="Descripción"></textarea>


        <input type="submit"
               id="save" 
               value="Guardar" />
      </form>
    </div>
  );
};
