export const guardarEnStorage = (key ,element) =>{
    //Conseguir los elementos en el local storage
    let elementos = JSON.parse(localStorage.getItem("pelicula"));
  
    //Comprobar si es un array 
    if(Array.isArray(elementos)){
      elementos.push(element);
    }else{
      elementos = [element];
    }

    //Guardar en local storage
    localStorage.setItem("pelicula",JSON.stringify(elementos))
   

    //Devolver pelicula guardada

    return element;
  }