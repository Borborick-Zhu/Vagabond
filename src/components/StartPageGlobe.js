import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const StartPageGlobe = () => {

    const globeRef = useRef();

    useEffect(() => {
        globeRef.current.controls().autoRotate = true; // enable autorotation
        globeRef.current.controls().autoRotateSpeed = 0.5; // set the speed of autorotation
    }, []);

    
    return (
        <div className='globe'>
            <Globe 
                ref={globeRef}
                width='500'
                height='500'
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
        </div>
    )
};

export default StartPageGlobe;