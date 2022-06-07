import "../css/header.css"
import "../css/button.css"

function Header() {
    return (
        <header className="header">
            <div className="search">
                <label for="search">Pesquisar Personagens</label>
                <input type="search" id="search" name="search" />
                <button className="button">Pesquisar</button>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list__items">Home</li>
                    <li className="menu__list__items">Detalhes</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header