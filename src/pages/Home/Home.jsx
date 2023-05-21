import React from 'react';
import Slider from './Slider';
import Gallery from './Gallery';
import CategorizedShop from './CategorizedShop';
import Featured from './Featured';
import Banner from './Banner';
import HighLights from './HighLights';
import useTitle from '../../hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Home = () => {
    AOS.init();
    useTitle('Home')
    return (
        <div>
            <div data-aos="slide-right"
                data-aos-duration="2000"
            >
                <Slider />
            </div>
            <div
                data-aos="fade-down-right"
                data-aos-duration="2000"
            >
                <Gallery />
            </div>
            <div
                data-aos="flip-right"
                data-aos-duration="2000">
                <CategorizedShop />
            </div>
            <div
                data-aos="slide-up"
                data-aos-duration="2000">
                <Featured />
            </div>
            <HighLights />
        </div>
    );
};

export default Home;