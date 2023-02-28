import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import estilosDetail from "./estilos/Detail.module.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Detail() {

   const {detailId} = useParams()
   const [character, setCharacter ] = useState({})

   useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={estilosDetail.detail}> 
      <div>
          <Link to="/home">
              <button className={estilosDetail.atras}> Atras </button>
          </Link>
      </div>
        <div className={estilosDetail.txt}>
            <h1> Nombre:  {character.name}</h1>
            <h2> Estatus:  {character.status}</h2>
            <h4> Especie:  {character.species}</h4>
            <h4> Genero:  {character.gender}</h4>
            <h4> Origen:  {character.origin?.name}</h4>
        </div>
        <img src={character.image} alt={character.name} className={estilosDetail.imagen}></img>

    </div>
  )
}
