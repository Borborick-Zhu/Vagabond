import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import StartPageGlobe from '../components/StartPageGlobe';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='page-wrapper v-center'>
                <div className='page-contents'>
                    <div className='hero'>
                        <div className='hero-text'>
                            <h1 className='hero-title'>Vagabond</h1>
                            <p>Welcome to Vagabond – the ultimate <span className='orange'>AI-powered</span> travel companion! With Vagabond, you can easily explore the world and discover amazing destinations based on your interests. Whether you're into adventure, culture, food, or relaxation, Vagabond has got you covered. Simply select your favorite categories, spin the interactive globe, and get ready to embark on an unforgettable journey!</p>

                            <Link className='button-wrapper' to='/interests'>
                                <button className='primary-button'>
                                    Explore
                                </button>
                            </Link>
                        </div>
                        <div className='globe-placeholder'>
                            <StartPageGlobe />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage