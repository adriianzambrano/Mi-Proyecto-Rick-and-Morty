import React from 'react';
import Card from './Card.jsx';
import estiloCards from './estilos/Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
      <div className={estiloCards.listaCards}>
         {
            characters.map(({id , name, species, gender, image})=>{
               return ( 
               <Card
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={()=> onClose(id)}
            />
            )

            })
         }
      </div>
   )
   
   
}
