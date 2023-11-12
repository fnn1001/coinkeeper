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
                <p className='nav-item'> Dashboard </p>
                <p className='nav-item'> Investments  </p>
                <button className='nav-item'> Log in </button>
                <button className='nav-item'> Get started </button>
            </div>
        </div>
    )

}

export default Navbar;