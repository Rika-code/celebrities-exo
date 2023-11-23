
function Cocktails () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") // Je déclare fetch qui va prendre en compte le lien de l'API
    .then((response) => {  // Avec Response, je donne un temps d'attente pour que le fetch collecte les données de l'API
        return response.json();
    })
    .then((json) => {
        console.log(json); // Et enfin, je l'affiche a l'aide de mon console.log
    })
    return (
    <p>Je suis pas débutante, je suis professionnelle !!!!!</p>
    ) 
}
export default Cocktails