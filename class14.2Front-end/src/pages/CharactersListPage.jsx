import { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

function CharactersListPage() {

    const [characters, setCharacters] = useState(null)

    const getAllCharacters = () => {


        axios
            .get('http://localhost:5005/characters')
            .then((response) => setCharacters(response.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllCharacters()
    }, [])


    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5005/characters/${id}`)
            .then((response) => {
                (response.data);
                getAllCharacters();

            })
            .catch((error) => error)
    }

    return (

        <div>
            <h1> Characters List</h1>
            {characters ?
                <ul className= 'editing2'>
                    {
                        characters.map((character) => {
                            return (
                                <>
                                <li className= 'editing' key={character.id}>
                                    <img src={character.image_url} alt={character.name} />
                                    <h3>{character.name}</h3>
                                    <p>{character.description}</p>
                                    <p>{character.power}</p>
                                </li>
                                    <button className= 'deleteButton' onClick={() => {handleDelete(character.id)}}> x </button>
                                   </>
                            )
                        })
                    }
               <Link className='btn' to='/newCharacter'> Create new character </Link>
                </ul>
                : <p>Loading page..</p>}
        </div>
    )
}

export default CharactersListPage