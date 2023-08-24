import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils" 
import Logo from "../../assets/crown.svg"
import "./style/header.css"

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="./" className="logo-container"> <img src={Logo} alt="Logo" /> </Link>

            <div className="options">
                <Link className="option" to="./shop"> Shop </Link>
                <Link className="option" to="./contact"> Contact </Link>
                <Link className="option" to="./about"> About </Link>
                <Link className="option" to="./"> Home </Link>
                {
                    currentUser ?  
                    <div className="option" onClick={() => auth.signOut()}> Sing Out </div> 
                    :
                    <Link className="option" to="./signin"> Sign In </Link>
                }
            </div>
        </div>
    )
}

export default Header