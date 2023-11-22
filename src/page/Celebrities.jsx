import CelebritiesCard from "../components/CelebritiesCard";
import { shittyStars } from "../utils/products.utils";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Celebrities () {
  return (
    <>
    <Header currentPage= "Celebrities"/>
    <h2> Les célébrités les plus pétés de tout les temps.</h2>
    {shittyStars.map(star => {
    return <CelebritiesCard starToDisplay={star}/>

    })}
    <Footer/>
    </>
 )
 }
     

export default Celebrities;