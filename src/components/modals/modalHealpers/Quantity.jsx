import React from 'react';

const Quantity = () => {
    return (
        <div class="w-32 mb-8 ">
            <label for=""
                class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
            <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                <button
                    class="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                    <span class="m-auto text-2xl font-thin">-</span>
                </button>
                <input type="number"
                    class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder="1" />
                <button
                    class="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                    <span class="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    );
};

export default Quantity;