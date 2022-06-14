import "../css/homePage.css"
import Header from "../components/Header"
import Home from "../components/Home"


function HomePage() {
    return (
        <div>
            <div >
                <Header />
            </div>
            <div className="container">
                <h1 className="title">Rick and Morty</h1>
                <Home />
            </div>
        </div>
    )
}
export default HomePage