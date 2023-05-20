import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'

const Slider = () => {
    return (
        <Carousel showArrows={true} autoPlay infiniteLoop showStatus={false} showThumbs={false} dynamicHeight={true} >
            <div >
                <img src={img1} className='h-[65vh]' />
            </div>
            <div >
                <img src={img2} className='h-[65vh]' />
            </div>
            <div>
                <img src={img3} className='h-[65vh]' />
            </div>
            <div>
                <img src={img4} className='h-[65vh]' />
            </div>
        </Carousel>
    );
};

export default Slider;