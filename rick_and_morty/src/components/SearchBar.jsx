import estiloSearch from './estilos/SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={estiloSearch.nav}>
         <input type='search' className={estiloSearch.input} />
         <button onClick={()=>{props.onSearch(5)}} className={estiloSearch.buscar}> Buscar </button>
      </div>
   );
}
