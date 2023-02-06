import React from "react";
import estilosAbout from './estilos/About.module.css'
import fotoAbout from './Image/foto Perfil Twicth - copia.jpg'
import { Link } from "react-router-dom";

export default function About (){

    return(
        <div className={estilosAbout.about}>
            <div>
                <Link to="/home">
                    <button className={estilosAbout.atras}> Atras </button>
                </Link>
            </div>
            <ul>
                <img className={estilosAbout.foto} src={fotoAbout} alt="Creador"/>
                <p className={estilosAbout.txt}>👽 by Adrian Zambrano</p>
            </ul>
        </div>
    )
}