import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {

    const baseUrl = "https://rickandmortyapi.com/api/character/"

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
                <div>
                    <li><img src={character.image} alt={character.name} /></li>
                    <li key={index}>{character.id} {character.name}</li>
                    <li key={index}>{character.status}</li>
                    <li key={index}>{character.species}</li>
                    <li key={index}>{character.gender}</li>
                    <li key={index}>{character.origin.name}</li>
                    <li key={index}>{character.location.name}</li>
                </div>
            )
        })
    }

    const addEachcharacters = (response) => {
        return response.data.results.map(async (character) => {
            const response = await axios.get(character.url)
            const {image} = response.data
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
            <>
                <h1 >Todos os personagens</h1>
                {renderCharacters()}
                <button >proxima pagina</button>
            </>
        )
    }
}

export default Test;