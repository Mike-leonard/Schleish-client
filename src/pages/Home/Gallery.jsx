import React from 'react';
const img1 = "https://m.media-amazon.com/images/I/81JnCRbbW+L._AC_SL1500_.jpg"
const img7 = "https://m.media-amazon.com/images/I/81ePP5gElFL._AC_SX425_.jpg"
const img4 = "https://cdn.shopify.com/s/files/1/1885/4211/files/SchleichDinosaur10pcBundle2022.jpg"
const img3 = "https://www.toyfigurines.com.au/assets/alt_1/SC41461.jpg"
const img5 = "https://i.pinimg.com/originals/90/7e/b5/907eb561c5f16bbb0238413736ad7701.jpg"
const img6 = "https://i.ebayimg.com/images/g/p1QAAOSwVINifTZu/s-l1600.jpg"

const Gallery = () => {
    return (
        <div className="mx-auto px-5 py-2 lg:px-10 bg-[#dcfefe]">
            <h3 className="text-center text-4xl my-3">Gallery</h3>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center border-4 border-emerald-600 p-5"
                            src={img1} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center border-4  border-emerald-600 p-5"
                            src={img3} />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center border-4 border-blue-700 p-5"
                            src={img4} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center  border-4 border-blue-700 "
                            src={img6} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center  border-4 border-pink-800 p-5"
                            src={img5} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center border-4 border-pink-800"
                            src={img7} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;