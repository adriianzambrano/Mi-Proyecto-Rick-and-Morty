import SearchBar from "./SearchBar";
import estiloNav from './estilos/Nav.module.css'
import { Link } from "react-router-dom";


export default function Nav({onSearch}){
 
    return (
       <div className={estiloNav.navbar}>

            <div className={estiloNav.divBotonAbout}>
                <Link to="/about">
                    <button className={ estiloNav.botonAbout}> About </button>
                </Link>
            </div>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
            <div className={estiloNav.divBotonSeccion}>
                <Link exact to="/">
                    <button className={estiloNav.btnCerrarSeccion}> Cerrar Seccion </button>
                </Link>
            </div>

       </div>
    )
}