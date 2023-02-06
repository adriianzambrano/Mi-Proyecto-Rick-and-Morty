import React from 'react';
import { Link } from 'react-router-dom';
import estiloCard from './estilos/Card.module.css'

export default function Card({name, species, onClose, gender, image, id}) {
   return (
      <div className={estiloCard.divCard}>
         <div>
            <button onClick={onClose} className={estiloCard.botonX}> X </button>
         </div>

         <div className={estiloCard.texto}>
               <h2 >{name}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <Link to={`/detail/${id}`}>
                  <img className={estiloCard.img} src={image} alt={image} />
               </Link>

         </div>
      </div>
   );
}

