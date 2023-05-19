import React from 'react';
import WhiteList from '../../components/svg/WhiteList';



const AllToys = () => {
    return (
        <div className="py-8 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mx-8">
                <div className="lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt className="w-36 h-36 rounded-full cursor-pointer" />
                        <div className='w-full'>
                            <div className="flex justify-between">
                                <div className="flex flex-col flex-1 pl-3">
                                    <p className="text-xl font-medium leading-5 text-gray-800">toyName</p>
                                    <p className="text-sm leading-normal pt-2 text-gray-500">subCategory</p>
                                </div>
                                <WhiteList />
                            </div>
                            <div className='flex flex-col md:flex-row gap-2 md:gap-5 pl-4 mt-2 md:mt-5'>
                                <p>Price: $<span className="text-indigo-800 font-extrabold">12</span></p>
                                <p>Quantity: <span className="text-indigo-800 font-extrabold">20</span></p>
                            </div>
                        </div>                        
                    </div>
                    
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">productDescription</p>
                        <div className="flex">
                            <div className="flex flex-1 items-center">
                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                            </div>
                            <button className="btn btn-outline btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllToys;