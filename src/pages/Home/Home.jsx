import React from 'react';
import Slider from './Slider';
import Gallery from './Gallery';
import CategorizedShop from './CategorizedShop';
import Featured from './Featured';
import Banner from './Banner';
import HighLights from './HighLights';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Gallery/>
            <CategorizedShop/>
            <Banner/>
            <Featured/>
            <HighLights/>
        </div>
    );
};

export default Home;