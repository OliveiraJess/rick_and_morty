import CharacterCard from "../components/CharacterCard"
import NextButton from "../components/NextButton"
import PreviousButton from "../components/PreviousButton"
import { useState } from 'react'

function HomePage() {
    const [idCharacter, setIdCharacter] = useState(1)

    return (
        <div>
            <h1>Rick and Morty</h1>
            <CharacterCard idCharacter={idCharacter} />
            <div>
                <NextButton idCharacter={idCharacter} setIdCharacter={setIdCharacter} />
                <PreviousButton idCharacter={idCharacter} setIdCharacter={setIdCharacter}/>
            </div>
        </div>
    )
}
export default HomePage