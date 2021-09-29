import axios from 'axios'

function CharacterDetails() {

    const [CharacterDetails, setCharacterDetails] = useState({})

    const baseUrl = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        async function fetchCharacterDetails() {
            const { data } = await axios.get(baseUrl + idCharacter)
            setCharacterDetails(data)
        } fetchCharacterDetails()
    }, [idCharacterDetails])

    const infoToShow = {
        "nome": "name",
        "status": "status",
        "especie": "species",
        "tipo": "type",
        "genero": "gender",
        "origem": "origin",
        "localizacao": "location"
    }

    return
}

export default CharacterDetails