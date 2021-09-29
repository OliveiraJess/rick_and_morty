

function PreviousButton({ idCharacter, setIdCharacter }) {
    const previousCharacter = () => setIdCharacter(idCharacter - 1)

    return (
        <div>
            <button type='button' onClick={previousCharacter}>Voltar</button>
        </div>
    )

}

export default PreviousButton