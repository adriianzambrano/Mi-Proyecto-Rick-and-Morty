import SearchBar from "./SearchBar";
import estiloNav from './estilos/Nav.module.css'


export default function Nav({onSearch}){

    return (
       <div className={estiloNav.navbar}>

            <div className={estiloNav.divBotonHome}>
                <button className={estiloNav.btnHOME}> Home </button>
            </div>
            <div className={estiloNav.divBotonFiltrar}>
                <button className={ estiloNav.btnFiltrar}> Filtrar </button>
            </div>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>

       </div>
    )
}