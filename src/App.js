import { useState } from "react";
import { Buscador } from "./componets/Buscador";
import { Crear } from "./componets/Crear";
import { Listados } from "./componets/Listados";

function App() {
    const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
    
        <header className="header">
            <div className="logo">  
                <div className="play"></div>
            </div>            
            <h1>MisPelis</h1>
        </header>

        
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        
        <section id="content" className="content">
        {/* Listado de peliculas */}
        <Listados listadoState = {listadoState} setListadoState = {setListadoState}/>    

        </section>

       
        <aside className="lateral">
        <Buscador listadoState = {listadoState} setListadoState = {setListadoState}/>

        <Crear setListadoState = {setListadoState}/>
        </aside>

    
    </div>
  );
}

export default App;
