import "../css/charactersAll.css"
import React, { useState, useEffect } from 'react';


function Home() {

    const [allCharacter, setAllCharacter] = useState([])
    const [nextPage, setNextPage] = useState(1)

    const baseUrl = `https://rickandmortyapi.com/api/character/?page=`

    const addNextPage = () => setNextPage(parseInt(nextPage + 1))

    const addPreviousPage = () => setNextPage(parseInt(nextPage - 1))

    useEffect(() => {
        data();
    }, [nextPage])


    const data = async () => {

        const response = await fetch(baseUrl + nextPage);
        const { results } = await response.json()
        setAllCharacter(results)
    }

    const features = [
        'name',
    ]

    return (
        <div className="container__container-card">
            <div className="container-card">
                {allCharacter.map(character => (
                    <div className="container-card__card">
                        {
                            features.map(
                                feature => (
                                    <li className="container-card__list">{character[feature]}</li>
                                )
                            )
                        }
                        <img className="container-card__image" src={character.image} alt={character.name} />
                        <div className="container-card__button">
                            <button className="button button-details">Detalhes</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-card__button">
                <button className="button" onClick={addPreviousPage}>Voltar Página</button>
                <button className="button" onClick={addNextPage}>Avançar Página</button>
            </div>
        </div>
    )
}

export default Home;
