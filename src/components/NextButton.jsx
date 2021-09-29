

function NextButton({ idCharacter, setIdCharacter }) {
    const nextCharacter = () => setIdCharacter(idCharacter + 1)

    return (
        <div>
            <button type='button' onClick={nextCharacter}>Avançar</button>
        </div>
    )

}

export default NextButton