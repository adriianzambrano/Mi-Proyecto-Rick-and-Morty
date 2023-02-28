import React from "react";
import estilosAbout from './estilos/About.module.css'
import fotoAbout from './Image/rickandMorty-About.png'
import { Link } from "react-router-dom";

export default function About (){

    return(
        <div className={estilosAbout.about}>
                <div className={estilosAbout.divAtras}>

                    <Link to="/home">
                        <button className={estilosAbout.atras}> Atras </button>
                    </Link>
                </div>
            
            <ul>
                <h2 className= {estilosAbout.txt}>👨‍💻 Developer 👽 Adrian Zambrano</h2>
                <img className= {estilosAbout.foto} src={fotoAbout} alt="Creador"/>
            </ul>
        </div>
    )
}
