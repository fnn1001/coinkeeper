import logo from '../images/logo-naked.png'
import '../styles/Navbar.css'



const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="logo-section"> 
                <img src={logo} className="main-logo"/>
                <h1> CoinKeeper </h1>
            </div>
            <div className='menu-section'>
                <p> Menu </p>
                <p> Menu2 </p>
                <p> Menu3 </p>

            </div>
        </div>
    )

}

export default Navbar;