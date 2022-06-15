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
        "Nome": "name",
        "Status": "status",
        "Especie": "species",
        "Genero": "gender",
    }

    return (
        <div>
            <div className='character__card'>
                <img src={character.image} alt={character.image} />
                {Object.entries(infoToShow).map(([key, value]) => { return (<li>{key}: {character[value]}</li>) })}

                {/* <li className="container-card__list">{character.origin}</li>
                <li className="container-card__list">{character.location}</li> */}
            </div>
        </div>
    )
}
export default CharacterCard