import {Link} from "react-router-dom";


export const NavBar = () => {
    return(
        <div>
            <Link to={'/about-me'}>About me</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/experience'}>Experience</Link>
        </div>
    )
}