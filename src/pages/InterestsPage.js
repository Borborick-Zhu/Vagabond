import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const InterestsPage = () => {
    const [interests, setInterests] = useState([
        {
            type: 'Beach',
            img: 'beach',
            selected: false
        },
        {
            type: 'City Tour',
            img: 'city',
            selected: false
        },
        {
            type: 'Cultural Experience',
            img: 'culture',
            selected: false
        },
        {
            type: 'Eco-tourism',
            img: 'eco',
            selected: false
        },
        {
            type: 'Food Tour',
            img: 'food',
            selected: false
        },
        {
            type: 'Hiking',
            img: 'hiking',
            selected: false
        },
        {
            type: 'Historical Sites',
            img: 'historical',
            selected: false
        },
        {
            type: 'Luxury Travel',
            img: 'luxury',
            selected: false
        },
        {
            type: 'Nature and Wildlife',
            img: 'nature',
            selected: false
        },
        {
            type: 'Outdoor Adventure',
            img: 'adventure',
            selected: false
        },
        {
            type: 'Relaxation',
            img: 'relaxation',
            selected: false
        },
        {
            type: 'Road Trip',
            img: 'roadtrip',
            selected: false
        },
        {
            type: 'Skiing and Snowboarding',
            img: 'skiing',
            selected: false
        },
        {
            type: 'Theme Parks',
            img: 'theme',
            selected: false
        },
        {
            type: 'Wine and Vineyards',
            img: 'wine',
            selected: false
        },
        {
            type: 'Yoga and Wellness',
            img: 'yoga',
            selected: false
        }
    ]);

    useEffect(() => {
        const parsed = JSON.parse(localStorage.getItem('interests') || '[]');
        // if (parsed.length > 0)
        //     setInterests(parsed);
    }, []);

    const handleItemClick = (type) => {
        const temp = [...interests];
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].type == type) {
                temp[i].selected = !temp[i].selected;
                setInterests(temp);
                localStorage.setItem('interests', JSON.stringify(temp));
                break;
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className='page-wrapper'>
                <div className='page-contents margin-top'>
                    <h1>Your Interests</h1>
                    <p>Help us give you better suggestions by first selecting a few categories that interest you.</p>
                    <div className='interests-grid'>
                    {interests.map((item, index) => {
                        return (
                            <button className={`interest-wrapper ${item.selected ? 'selected' : ''}`} 
                                key={index}
                                onClick={() => handleItemClick(item.type)} >
                                {/* <div className='interest-img-wrapper'>
                                    <img className='interest-img'
                                        src={item.img} />
                                    <div className='mask' />
                                </div> */}
                                <div className='interest-text'>
                                    <p>{ item.type }</p>
                                </div>
                            </button>
                        );
                    })}
                    </div>
                    <Link to='/globe'>
                        <button className='primary-button'>
                            Save
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InterestsPage;