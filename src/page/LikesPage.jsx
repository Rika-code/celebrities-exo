import { useState } from "react";

function LikesPage () {
    const [likescount, setLikescount] = useState(0);

    const clickHandle = () => {
        return setLikescount(Likescount + 1);
    }

    return (
        <main>
            <button onClick={clickHandle}>Like</button>
            <p> Vous avez liké {likescount} fois</p>
        </main>
    )
}
export default LikesPage;