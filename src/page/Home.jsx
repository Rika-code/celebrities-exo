import Header from '../components/Header'
import Footer from '../components/Footer'
import { shittyStars } from '../utils/products.utils'
import CelebritiesCard from '../components/CelebritiesCard'
function Home () {
                const starsSortedByDate = shittyStars.sort((star1, star2) =>{
                  return new Date(star1.publishedAt) - new Date(star2.publishedAt)
                })
          
                const lastShittyStars = starsSortedByDate.slice(-5)
          
                const starsPickedByTeam = shittyStars.filter((star) => {
                  return star.isPickedByTeam === true
                })
          
              return(
                  <main>
                      <Header currentPage={"HomePage"}/>
                      <div>
                          <h2>Les 5 célébrités les récentes</h2>
                          {lastShittyStars.map((star) => {
                              return(
                             
                                  <CelebritiesCard starToDisplay={star}/>
                              )
                          })}
                      </div>
                      <div>
                      <h2>Les 3 célébrités choisies par la rédac</h2>
                          {starsPickedByTeam.map((star) => {
                              return(
                             
                                  <CelebritiesCard starToDisplay={star}/>
                              )
                          })}
                      </div>
                      <Footer />
                  </main>
              )
          }
        

    export default Home;