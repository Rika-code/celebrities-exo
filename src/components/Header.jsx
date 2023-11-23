import { Link } from "react-router-dom";

function Header ({ currentPage }) {
    return(
        <>
        <p>Le Header</p>
        <ul>
            <li>
                {currentPage === "HomePage" ? (
                    <>
                    <strong>
                    <Link to="/">HomePage</Link>
                    </strong>
                    </>
                ) : (
                    <Link to="/">HomePage</Link>
                )
                
            }
                
            </li>
            <li>
                {currentPage === "AllCelebrities" ? (
                <>
                <strong>
                <Link to="/stars">Celebrities</Link>
                </strong>
                </>
            ) : (
                <Link to="/stars">Celebrities</Link>
            )
            }
            </li>
            <li>
                {currentPage === "Random" ? (
                <>
                <strong>
                <Link to="/random">Random ta célébrité</Link>
                </strong>
                </>
            ) : (
                <Link to="/random">Random ta célébrité</Link>
            )
            }
    
            </li>
            <li>
                <Link to ="/copyright">Copyright</Link>
            </li>
            <li>
                <Link to ="/message">Message</Link>
            </li>
            <li>
                <Link to = "/like">Like</Link>
            </li>
        </ul>
        </>
    )
}

export default Header;