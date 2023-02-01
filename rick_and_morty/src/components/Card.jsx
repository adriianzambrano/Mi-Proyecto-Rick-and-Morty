import React from 'react';
import estiloCard from './estilos/Card.module.css'

export default function Card({name, species, onClose, gender, image}) {
   return (
      <div className={estiloCard.divCard}>
         <div>
            <button onClick={onClose} className={estiloCard.botonX}> X </button>
         </div>

         <div className={estiloCard.texto}>
            <h2 >{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img className={estiloCard.img} src={image} alt={image} />

         </div>
      </div>
   );
}

