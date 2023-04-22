import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import cities from '../datasets/ne_110m_populated_places_simple.json'

const GlobePage = () => {

    const [places, setPlaces] = useState([]);
    const [focus, setFocus] = useState([]);


    useEffect(() => {
    // load data
        setPlaces(cities.features);
    }, []);

    const handleLabelClick = (e) => {
        const name = e.properties.name;
        const coordinates = e.geometry.coordinates;
    }

    return (
        <div>
            <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                labelsData={places}
                labelLat={d => d.properties.latitude}
                labelLng={d => d.properties.longitude}
                labelText={d => d.properties.name}
                labelSize={d => .4}
                labelDotRadius={d => .2}
                labelColor={() => 'rgba(255, 255, 255, 1)'}
                labelResolution={2}

                onLabelClick={ handleLabelClick }
            />;
        </div>
    );
};

export default GlobePage;