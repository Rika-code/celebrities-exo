import { useState } from "react";

function LikesPage () {
    const [likescount, setLikescount] = useState(0);
    const [messageDisplay, setMessageDisplay] = useState(true)

    const clickHandle = () => {
        if (likescount < 5) {
            setLikescount(likescount + 1)
        } else {
            setMessageDisplay(true)
            setLikescount(0)
        }
        
    }

    const handleCloseMessage = () => {
         setMessageDisplay(false)
         
    }
    return (   

         <main>
        {messageDisplay && (
           <div>
                <p>Vous ne pouvez pas liker plus de 5 fois</p>
                <button onClick={handleCloseMessage}>Fermer le message</button> 
                </div>
           )};
        <button onClick={clickHandle}>Like</button>
            <p> Vous avez liké {likescount} fois</p>
        </main>
    )
}
export default LikesPage;