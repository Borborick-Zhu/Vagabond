import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const StartPageGlobe = () => {

    const globeRef = useRef();

    useEffect(() => {
        globeRef.current.controls().autoRotate = true; // enable autorotation
        globeRef.current.controls().autoRotateSpeed = 0.5; // set the speed of autorotation
    }, []);

    
    return (
        <div>
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
        </div>
    )
};

export default StartPageGlobe;