import "../css/homePage.css"
import CharacterCard from "../components/CharacterCard"
import NextButton from "../components/NextButton"
import PreviousButton from "../components/PreviousButton"
import { useState } from 'react'

function HomePage() {
    const [idCharacter, setIdCharacter] = useState(1)

    return (
        <div className="container">
            <h1 className="title">Rick and Morty</h1>
            <div className="container__card">
                <CharacterCard idCharacter={idCharacter} />
            </div>
            <div className="container__button">
                <NextButton idCharacter={idCharacter} setIdCharacter={setIdCharacter} />
                <PreviousButton idCharacter={idCharacter} setIdCharacter={setIdCharacter} />
            </div>
        </div>
    )
}
export default HomePage