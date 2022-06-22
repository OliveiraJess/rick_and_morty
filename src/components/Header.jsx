import "../css/header.css"
import "../css/button.css"
import { Link } from "react-router-dom"
import { HOME, PERSONAGENS } from "../routes"

function Header() {
    return (
        <header className="header">
           <Link to={HOME}><img className="logo" src="../img/logo-rick-and-morty.png" alt="Rick And Morty" /></Link>
            <div className="search">
                <label className="search__label" for="search">Pesquisar Personagens</label>
                <input className="search__input" type="search" id="search" name="search" />
                <button className="button">Pesquisar</button>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list__items"><Link to={HOME}>Home</Link></li>
                    <li className="menu__list__items"><Link to={PERSONAGENS}>Personagens</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header