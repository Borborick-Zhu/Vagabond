import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { useNavigate } from 'react-router-dom';
import cities from '../datasets/ne_110m_populated_places_simple.json'

import Navbar from '../components/Navbar';

const GlobePage = () => {

    const [places, setPlaces] = useState([]);
    const [focus, setFocus] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const globeRef = useRef();
    const navigate = useNavigate();


    useEffect(() => {
    // load data
        setPlaces(cities.features);
    }, []);

    const handleLabelClick = (e) => {
        const name = e.properties.name;
        const coordinates = e.geometry.coordinates;
        setSelectedCity(name);

        if (globeRef.current) {
            globeRef.current.pointOfView(
                {
                    lat: coordinates[1],
                    lng: coordinates[0],
                    altitude: 2.5,
                },
                3000
            );
        }

        //returns the name of the city so that it can be parsed. 
        return name;
    }

    const redirectToNewPage = () => {
        navigate.push('/new-page');
    };

    const labelHtml = (text) => {
        const decodedText = convertSpecialChars(text);
        return `<span style="font-family: 'Comfortaa', sans-serif;">${text}</span>`;
    };

    const removeDiacritics = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };

    const convertSpecialChars = (text) => {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
    };

    return (
        <div>
            <Navbar />
            <div className='page-wrapper'>
                <div className="globe-container">
                    <Globe
                        ref={globeRef}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        labelsData={places}
                        labelLat={d => d.geometry.coordinates[1]}
                        labelLng={d => d.geometry.coordinates[0]}
                        labelText={d => removeDiacritics(d.properties.name)}
                        labelSize={d => 0.4}
                        labelDotRadius={d => 0.2}
                        labelColor={() => 'rgba(255, 255, 255, .9)'}
                        labelResolution={10}
                        onLabelClick={handleLabelClick}
                    />
                    {selectedCity && <div className="overlay-text">
                        Selected City: {selectedCity}
                        <button onClick={redirectToNewPage}>&rarr;</button>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default GlobePage;