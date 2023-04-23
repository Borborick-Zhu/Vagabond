import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar';
import SyncModal from '../components/SyncModal';

import { MdArrowBackIos } from 'react-icons/md';

import { handleGetGPTResponse } from '../script/fbAPI';

const InfoPage = () => {
    const [city, setCity] = useState('');
    const [responses, setResponses] = useState([]);
    const [headings, setHeadings] = useState([]);
    const [loading, setLoading] = useState(true);

    const gpt = true;

    const navigate = useNavigate();
    const location = useLocation();

    let navData = '';
    if (location.state) {
        navData = location.state.city;
        if (!navData)
                navigate('/');
    } else {
        navigate('/');
    }

    useEffect(() => {
        if (gpt) {
            setCity(navData);

            const parsed = JSON.parse(localStorage.getItem('interests') || '[]');
            let interests = [];
            if (parsed.length > 0) {
                for (var i = 0; i < parsed.length; i++) {
                    if (parsed[i].selected)
                        interests.push(parsed[i].type);
                }
            }
            setHeadings(interests);

            const promises = [];
            for (var i = 0; i < interests.length; i++) {
                // const prompt = `I am a tourist. Please give me the best things to do in ${navData} that are strictly related to ${interests[i]} - your response should follow the format of a lighthearted travel guide. Please present your information as a rich-text response, using HTML elements wherever possible. Use emojis occasionally to brighten your response. Use HTML blockquotes to highlight interesting things people have said about the places you describe. At the end, please give an estimated cost of the activities you've listed. Please don't use any h2 or h3 titles. All prices should be in USD. Your response MUST contain 1 blockquote that cannot be empty, and between prompt/completiton, MUST fit well within 100 tokens - this is a necessity.`;
                const prompt = `I am a tourist. Please give me the best things to do in ${navData} that are strictly related to ${interests[i]} - your response should follow the format of a lighthearted travel guide. Use emojis occasionally to brighten your response. Between prompt/completiton, your response MUST fit well within 100 tokens - this is a necessity. Please strictly adhere to the following rich-text format for your response: <p> containing description of activity or activities, <blockquote> containing related quote, <p> containing very brief cost summary of activies (in USD!). You can use HTML list elements, but don't use them inside of blockquote tags.`;
                const promise = handleGetGPTResponse(prompt);
                promises.push(promise);
            }

            Promise.all(promises)
            .then(results => {
                const responses = [];
                for (var i = 0; i < results.length; i++) {
                    responses.push(results[i].choices[0].text)
                }
                setResponses(responses);
                setLoading(false);
            })
        }
    }, []);

    return (
        <div>
            <Navbar />
            <SyncModal syncing={ loading }/>
            <div className='page-wrapper'>
                <div className='page-contents margin-top'>
                    <Link to='/globe'>
                        <MdArrowBackIos className='back-icon'/>
                    </Link>
                    <h1>Travelling to {city}</h1>
                    { loading && <p>Your recommendations are loading, this could take a few seconds.</p> }
                    <div className='response-body'>
                    {responses.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{headings[index]}</h2>
                                <div dangerouslySetInnerHTML={{ __html: responses[index] }} />
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;