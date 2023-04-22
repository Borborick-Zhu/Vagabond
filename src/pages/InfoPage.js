import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const InterestsPage = () => {

    return (
        <div>
            <Navbar />
            <div className='page-wrapper'>
                <div className='page-contents margin-top'>
                    <h1>Test</h1>
                    <p>Help us give you better suggestions by first selecting a few categories that interest you.</p>
                </div>
            </div>
        </div>
    )
}

export default InterestsPage;