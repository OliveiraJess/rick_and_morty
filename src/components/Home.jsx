import "../css/charactersAll.css"
import "../css/button.css"
import React, { useState, useEffect } from 'react';
import Details from "./Details";


function Home() {

    const [allCharacter, setAllCharacter] = useState([])
    const [nextPage, setNextPage] = useState(1)

    const [info, setInfo] = useState({})

    const baseUrl = `https://rickandmortyapi.com/api/character/?page=`
    const urlApi = `https://rickandmortyapi.com/api/character`

    const addNextPage = () => setNextPage(parseInt(nextPage + 1))
    const addPreviousPage = () => setNextPage(parseInt(nextPage - 1))

    // ?page=43

    useEffect(() => {
        data();
    }, [nextPage])


    // function addNextPage() {

    //     if (1 == nextPage || nextPage <= 41) {
    //        setNextPage(parseInt(nextPage + 1))
           
    //     }

    //     return setNextPage(42)
    // }

    // function addPreviousPage() {
    //     if (2 == nextPage || nextPage <= 42) {
    //         setNextPage(parseInt(nextPage - 1))
    //     }
    //     return setNextPage(1)
    // }

    const data = async () => {

        const response = await fetch(baseUrl + nextPage);
        const { results } = await response.json()
        setAllCharacter(results)

        const responseInfo = await fetch(urlApi);
        const { info } = await responseInfo.json()
        setInfo(info)
    }


    const features = [
        'name',
    ]

    return (
        <div className="container__container-card">
            {/* <p>{info.pages}</p>
            <p>{info.count}</p>
            <p>{allCharacter.id}</p> */}
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
                            {/* <button className="button button-details" onClick={Details}>Detalhes</button> */}
                            <Details/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-card__button">
                <button className="button button-pages" onClick={addPreviousPage}>Voltar Página</button>
                <button className="button button-pages" onClick={addNextPage}>Avançar Página</button>
            </div>
        </div>
    )
}

export default Home;
