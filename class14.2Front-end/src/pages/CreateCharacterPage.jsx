import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCharacter() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [power, setPower] = useState("");
    const [image_url, setImage] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const requestBody = { name, description, power, image_url }

        axios
            .post('http://localhost:5005/characters', requestBody)
            .then((response) => {
                (response.data);
                navigate('/')
            })
            .catch((error) => error)
    }

    const handleName = (event) => setName(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);
    const handlePower = (event) => setPower(event.target.value);
    const handleImage = (event) => setImage(event.target.value);


    return (

        <form className='formEdit' onSubmit={handleSubmit}>
            <label> Name </label>
            <input onChange={handleName} type="text" value={name} />
            <label> Description </label>
            <input onChange={handleDescription} type="text" value={description} />
            <label> Power </label>
            <input onChange={handlePower} type="text" value={power} />
            <label> Image </label>
            <input onChange={handleImage} type="url" value={image_url} />
            <button className='btn2' type='submit'> Create </button>
        </form>
    )
}
export default CreateCharacter 