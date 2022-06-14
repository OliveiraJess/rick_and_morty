import "../css/homePage.css"
import CharacterCard from "../components/CharacterCard"
import NextButton from "../components/NextButton"
import PreviousButton from "../components/PreviousButton"
import Header from "../components/Header"
import { useState } from 'react'

function CharacterPage() {
    const [idCharacter, setIdCharacter] = useState(1)

    return (
        <div>
            <div >
                <Header />
            </div>
            <div className="container">
                <h1 className="title">Rick and Morty</h1>
                <div className="container__card">
                    <CharacterCard idCharacter={idCharacter} />
                </div>
                <div className="container__button">
                    <PreviousButton idCharacter={idCharacter} setIdCharacter={setIdCharacter} />
                    <NextButton idCharacter={idCharacter} setIdCharacter={setIdCharacter} />
                </div>
            </div>
        </div>
    )
}
export default CharacterPage