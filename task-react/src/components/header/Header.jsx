import logoImg from '../../assets/logo.jpg';
import './header.css';

function Header() {
    return(
        <header>
            <img src={logoImg} alt=""  />
            <h1>Login Form</h1>
        </header>
    )

}

export default Header;