import Header from "../components/Header"
import CharacterAll from "../components/CharacterAll"
import { useState } from "react"
import Test from "../components/Test"

function CharacterAllPage() {
    const [characters, setListCharacter] = useState([])

    return (

        <div className="container">
            <div>
                <Header />
            </div>
            <div>
                <h1 className="title">Rick and Morty: Personagens</h1>
            </div>
            <di>
                <Test/>
                {/* <CharacterAll characters={characters} setListCharacter={setListCharacter}/> */}
            </di>
        </div>
    )
}

export default CharacterAllPage