import { useState } from "react";

function Cocktails () {
    const [cocktails, setCocktails] = useState(null); // je déclare mon state pour récuperer mon API

    if (!cocktails) {                                                  // la boucle if permet que le rechargement des cocktails ne soit pas infini. 
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") // Je déclare fetch qui va prendre en compte le lien de l'API
    .then((cocktailsResponse) => {  // Ici, then récupère les données en attendant.
        return cocktailsResponse.json(); // et là, il la convertie en json
    })

    .then((cocktailsInJs) => {  
        console.log(cocktailsInJs); // J'affiche la conversion de mes données en Json a l'aide de mon console.log
        setCocktails(cocktailsInJs) 
    })}
// Dans mon return ci-dessous, je vais vérifier si mes données sont chargées en les affichants.
    return (
   <main> 
    {cocktails ? <article> cocktails prêts avec la paille</article> : 
    <p>chargement des cocktails...</p>}
   </main>
    ) 
}
export default Cocktails