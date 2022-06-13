import "../css/charactersAll.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CharacterAll() {

    const [allCharacter, setAllCharacter] = useState([])

    const baseUrl = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        data();
    })


    const data = async () => {

        const response = await fetch(baseUrl);
        const { results } = await response.json()
        setAllCharacter(results)
    }

    return (
        <div className="container__container-card">
            <div className="container-card">
                {allCharacter.map(character => (
                    <div className="container-card__card">
                        <img className="container-card__image" src={character.image} alt={character.name} />
                        <li className="container-card__list">{character.id} - {character.name}</li>
                        <li className="container-card__list">{character.status}</li>
                        <li className="container-card__list">{character.species}</li>
                        <li className="container-card__list">{character.gender}</li>
                        <li className="container-card__list">{character.origin.name}</li>
                        <li className="container-card__list">{character.location.name}</li>
                    </div>

                ))}
            </div>
            <div className="container-card__button">
                <button className="button" >Próxima Página</button>
            </div>
        </div>
    )
}

export default CharacterAll;
