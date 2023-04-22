import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='page-wrapper v-center'>
                <div className='page-contents'>
                    <div className='hero'>
                        <div className='hero-text'>
                            <h1 className='hero-title'>React Globe App</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <Link to='/interests'>
                                <button className='primary-button'>
                                    Explore
                                </button>
                            </Link>
                        </div>
                        <div className='globe-placeholder' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage