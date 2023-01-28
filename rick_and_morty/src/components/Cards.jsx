import Card from './Card.jsx';
import estiloCards from './estilos/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={estiloCards.listaCards}>
         {
            characters.map(({name, species, gender, image}, index)=>{
               return <Card
               key={index}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               
            />

            })
         }
      </div>
   )
   
   
}
