import React from "react";
import estilosAbout from './estilos/About.module.css'
import fotoAbout from './Image/rickandMorty-About.png'
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
                <p className={estilosAbout.txt}>👽 by Adrian Zambrano</p>
                <img className={estilosAbout.foto} src={fotoAbout} alt="Creador"/>
            </ul>
        </div>
    )
}