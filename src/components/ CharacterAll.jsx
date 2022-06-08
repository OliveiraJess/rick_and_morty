import "../css/charactersAll.css"

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CharacterAll() {

    const baseUrl = "https://rickandmortyapi.com/api/character/"


    const page = 3
    // same as setting up state
    // const [count, setCount] = useState(0)
    const [characters, setcharacters] = useState([])

    // same as componentDidMount
    useEffect(() => {
        if (characters.length === 0) {
            getcharactersData();
        }
    });

    // onclick method
    // const addToCount = () => setCount(count + 1)



    const renderCharacters = () => {
        return characters.map((character, index) => {
            return (
                <div className="container-card__card">
                    <img className="container-card__image" src={character.image} alt={character.name} />
                    <li className="container-card__list" key={index}>{character.id} - {character.name}</li>
                    <li className="container-card__list" key={index}>{character.status}</li>
                    <li className="container-card__list" key={index}>{character.species}</li>
                    <li className="container-card__list" key={index}>{character.gender}</li>
                    <li className="container-card__list" key={index}>{character.origin.name}</li>
                    <li className="container-card__list" key={index}>{character.location.name}</li>
                </div>
            )
        })
    }

    const addEachcharacters = (response) => {
        return response.data.results.map(async (character) => {
            const response = await axios.get(character.url)
            const { image } = response.data
            const pages = response.info
            character.image = image
            return character
        })
    }

    const getcharactersData = async () => {
        const response = await axios.get(baseUrl)
        const charactersPromises = await addEachcharacters(response);
        const newcharacters = await Promise.all(charactersPromises)
        setcharacters(newcharacters)
    }

    if (!characters) {
        return null

    } else {
        return (
            <div className="container__container-card">
                <div className="container-card">
                    {renderCharacters()}
                </div>
                <div className="container-card__button">
                    <button className="button">Próxima Página</button>
                </div>
            </div>
        )
    }
}

export default CharacterAll;