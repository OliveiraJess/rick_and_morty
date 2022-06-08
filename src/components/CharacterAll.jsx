import axios from 'axios'
import { useEffect, useCallback, useState } from "react"
import CharacterCard from "./CharacterCard"


function CharacterAll({ characters, setListCharacter }) {
    const baseUrl = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        async function fetchCharacter() {
            const { data } = await axios.get(baseUrl)
            setListCharacter(data)
        } fetchCharacter()
    }, [])

    const infoToShow = {
        "Id": "id", "Nome": "name", "Status": "status", "Genero": "gender"
    }

    return (
        <div>
            {characters.data.forEach(function (character) {
                <div className='character__card'>
                    < img src={character.image} alt="character-img" />
                    {Object.entries(infoToShow).map(([key, value]) => { return (<p >{key}: {character[value]}</p>) })}

                </div>
            })}
        </div>

    )
}


export default CharacterAll
