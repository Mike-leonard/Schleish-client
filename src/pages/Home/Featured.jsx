import React from 'react';

const Featured = () => {
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 bg-[#c5f8e2]">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Our Best Toys</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Find Out Our top sale products and buy these products. Why people like this products most.</p>
                    <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        View Catalogue
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-full bg-red-200 border-4 rounded-md">
                        <img src="https://d3fa68hw0m2vcc.cloudfront.net/ba4/210740130.jpeg" alt="apartment design" className="w-full sm:block hidden" />
                        <img src="https://d3fa68hw0m2vcc.cloudfront.net/ba4/210740130.jpeg" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://www.everythingdinosaur.com/wp-content/uploads/2019/12/Schleich-Baryonyx.jpg" className="w-full border-4 rounded-md" alt="kitchen" />
                        <img src="https://www.dollshouseboutique.com.au/assets/full/SC70718.jpg" className="w-full border-4 rounded-md" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Featured;