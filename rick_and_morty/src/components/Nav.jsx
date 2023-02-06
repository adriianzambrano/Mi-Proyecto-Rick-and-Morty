import SearchBar from "./SearchBar";
import estiloNav from './estilos/Nav.module.css'
import { Link } from "react-router-dom";


export default function Nav({onSearch}){
 
    return (
       <div className={estiloNav.navbar}>

            <div className={estiloNav.divBotonHome}>
                <Link exact to="/">
                    <button className={estiloNav.btnHOME}> Salir </button>
                </Link>
            </div>
            <div className={estiloNav.divBotonFiltrar}>
                <Link to="/about">
                    <button className={ estiloNav.btnFiltrar}> About </button>
                </Link>
            </div>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>

       </div>
    )
}