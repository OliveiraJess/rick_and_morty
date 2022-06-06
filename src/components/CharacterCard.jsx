import "../css/characterCard.css"
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
        <div className='character__card'>
            {Object.entries(infoToShow).map(([key, value]) => { return (<p >{key}: {character[value]}</p>) })}
            <img src={character.image} alt="character-img" />
        </div>
        </div>
    )
}
export default CharacterCard