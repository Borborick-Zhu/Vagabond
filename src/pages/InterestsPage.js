import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

// Images
import food from '../assets/food.jpeg';

const InterestsPage = () => {
    const [interests, setInterests] = useState([
        {
            type: 'Local food',
            desc: 'Blah blah',
            img: food,
            selected: false
        },
        {
            type: 'Sightseeing',
            desc: 'Blah blah',
            img: food,
            selected: false
        },
        {
            type: 'Test 1',
            desc: 'Blah blah',
            img: food,
            selected: false
        },
        {
            type: 'Test 2',
            desc: 'Blah blah',
            img: food,
            selected: false
        },
        {
            type: 'Test 3',
            desc: 'Blah blah',
            img: food,
            selected: false
        },
    ]);

    useEffect(() => {
        const parsed = JSON.parse(localStorage.getItem('interests') || '[]');
        setInterests(parsed);
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
            <div className='page-wrapper v-center'>
                <div className='page-contents'>
                    <h1>Your Interests</h1>
                    <p>Help us give you better suggestions by first selecting a few categories that interest you.</p>
                    <div className='interests-grid'>
                    {interests.map((item, index) => {
                        return (
                            <button className={`interest-wrapper ${item.selected ? 'selected' : ''}`} 
                                key={index}
                                onClick={() => handleItemClick(item.type)} >
                                <div className='interest-img-wrapper'>
                                    <img className='interest-img'
                                        src={item.img} />
                                    <div className='mask' />
                                </div>
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