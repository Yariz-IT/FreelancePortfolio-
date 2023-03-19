import './footer.css'
import vk from '../../img/svg/vk.svg'
import instagram from '../../img/svg/instagram.svg'
import twitter from '../../img/svg/twitter.svg'
import gitHub from '../../img/svg/gitHub.svg'
import linkedIn from '../../img/svg/linkedIn.svg'

const Footer = () => {
    return (  
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>

    )
}
 
export default Footer;