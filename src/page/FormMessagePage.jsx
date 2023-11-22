import { useState } from "react"

function FormMessagePage () {
    const [message, setMessage] = useState("")

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    return (
        <form>
            <label>
                Non je ne serais pas déléguée au passage.
                <input onChange={handleMessageChange} type = "text" name = "message"/>
            </label>
            <p>Vous avez tapé : "{message}"</p>
        </form>
    )
}
export default FormMessagePage