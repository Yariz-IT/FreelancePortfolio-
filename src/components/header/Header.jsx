import './header.css'
import logo_react from './../../img/svg/react-logo.svg'


const Header = () => {
    return (

        <header className="header">

            <div className="header__wrapper">
            <img  src={logo_react} alt="logo react" />

                <h1 className="header__title">
                    <strong>Hi, my name is <em>Yariz</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">Download CV</a>
            </div>
        </header>

    )
}

export default Header;