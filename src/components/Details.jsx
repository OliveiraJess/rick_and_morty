import "../css/charactersAll.css"
import "../css/modal.scss"
import React, { useState } from 'react';
import CharacterCard from "./CharacterCard"
import Modal from "./Modal"


function Details({ character }) {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [idCharacter, setIdCharacter] = useState(1)

    

    return (
        <div>
            <button className="button button-details" onClick={() => setModalIsVisible(true)}>Detalhes</button>
            {modalIsVisible ?
                <Modal onClose={() => setModalIsVisible(false)}>
                    <h2 className="title__modal">Detalhes do Personagem</h2>
                    <CharacterCard idCharacter={idCharacter} />
                </Modal>
                : null}
        </div>
    )

}

export default Details