import { Link } from 'react-router-dom';

function Nav()
{
    return(
        <nav>
            <img src='Images/logo.png' alt='SCP Logo' id='header_logo'/>
            <h1 id='header_text'>SCP Foundation</h1>
            <ul className="nav text-white">
                <Link to="/Home" className='nav-item'>
                    <li className='nav-link'>Home</li>
                </Link>
                <Link to="/SCPs" className='nav-item'>
                    <li className='nav-link'>All SCPs</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;