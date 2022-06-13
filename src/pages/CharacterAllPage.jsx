import React, { useState} from 'react';
import Header from "../components/Header"
import  CharacterAll from "../components/ CharacterAll"

function CharacterAllPage() {
    const [nextPage, setNextPage] = useState(1)

    return (

        <div className="container">
            <div>
                <Header />
            </div>
            <div>
                <h1 className="title">Rick and Morty: Personagens</h1>
            </div>
            <di>
                <CharacterAll nextPage={nextPage}/>
            </di>
        </div>
    )
}

export default CharacterAllPage