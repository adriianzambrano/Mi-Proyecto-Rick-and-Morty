import estiloCard from './estilos/Card.module.css'

export default function Card(props) {
   return (
      <div className={estiloCard.divCard}>
         <button onClick={props.onClose} className={estiloCard.botonX} > X </button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={estiloCard.img} src={props.image} alt="" />
      </div>
   );
}

