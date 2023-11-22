import { useState } from "react"

function CopyrightPage () {
const [displayText, setDisplayText] = useState('Coucou');
const handleClick = () => {

setDisplayText(!displayText);
}
return (

<main>
    {displayText && <p>Vasy fais moi disparaître tu m'aimes pas de toute façon!</p>}    
<button onClick= {handleClick}>Faire disparaître le texte</button>
    </main>
)

}

export default CopyrightPage