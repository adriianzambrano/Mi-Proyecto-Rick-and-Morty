import { useState } from 'react';
import estiloSearch from './estilos/SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('');

   function handleChange (event){
      setCharacter(event.target.value)
   }

   return (
      <div className={estiloSearch.nav}>

         <input type='text' placeholder='Buscar id' className={estiloSearch.input}  onChange={handleChange} value={character}/>
         
         <button onClick={()=>onSearch(character)} className={estiloSearch.buscar} > Agregar </button>

      </div>
   );
}
