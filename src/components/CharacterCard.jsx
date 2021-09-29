import axios from 'axios'
import { useState, useEffect } from 'react'

function CharacterCard({ idCharacter }) {
    const [character, setCharacter] = useState({})

    const baseUrl = "https://rickandmortyapi.com/api/character/"    

    useEffect(() => {
        async function fetchCharacter() {            
            const { data } = await axios.get(baseUrl + idCharacter)
            setCharacter(data)
        } fetchCharacter()
    }, [idCharacter])

    const infoToShow = {
        "Nome": "name", "Status": "status", "Genero": "gender"
    }

    return (
        <div>
            {Object.entries(infoToShow).map(([key, value]) => { return (<p>{key}: {character[value]}</p>) })}

            <img src={character.image} alt="character-img" />

        </div>
    )
}
export default CharacterCard