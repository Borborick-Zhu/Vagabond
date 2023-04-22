import { FaGlobeAsia } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-contents'>
                <Link className='logo-wrapper'
                    to='/'>
                    <FaGlobeAsia className='logo-icon'/>
                    <p className='logo-text'>React Globe App</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;