import "../css/header.css"
import "../css/button.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <img className="logo" src="../img/rick-and-morty.jpg" alt="Rick And Morty" />
            <div className="search">
                <label for="search">Pesquisar Personagens</label>
                <input type="search" id="search" name="search" />
                <button className="button">Pesquisar</button>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list__items"><Link to="/">Home</Link></li>
                    <li className="menu__list__items"><Link to="personagens">Personagens</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header