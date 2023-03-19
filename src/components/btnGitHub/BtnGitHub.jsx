import './btn.css'
import githubIcon from './../../img/svg/gitHub-black.svg'


const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" className="btn-outline">
            <img src={githubIcon} alt="" />
            GitHub repo
        </a>

    )
}

export default BtnGitHub;