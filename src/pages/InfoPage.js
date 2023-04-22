import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar';

import { handleGetGPTResponse } from '../script/fbAPI';

const InfoPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let city = '';
    if (location.state) {
        city = location.state.city;
        if (!city)
                navigate('/');
    } else {
        navigate('/');
    }

    useEffect(() => {
        const parsed = JSON.parse(localStorage.getItem('interests') || '[]');
        let interests = '';
        if (parsed.length > 0) {
            for (var i = 0; i < parsed.length; i++) {
                if (parsed[i].selected)
                    interests += parsed[i].type + ', ';
            }
        }

        const prompt = `I am a tourist. These are my interests: ${interests}. Please give me the best things to do in ${city} that are related to my interests. You are an online tour guide. Please present your information in a very organised and presentable manner that is organised with dot points and titles. At the end of each section, please give an estimated cost of each attraction if possible.`

        const testFunc = async () => {
            const response = await handleGetGPTResponse(prompt);
            console.log(response.choices[0].text);
        }
        // testFunc();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='page-wrapper'>
                <div className='page-contents margin-top'>
                    <h1>Information</h1>
                    <p>Help us give you better suggestions by first selecting a few categories that interest you.</p>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;