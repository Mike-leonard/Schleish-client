
const Size = () => {
    return (
        <div className="flex items-center mb-8">
            <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                Size:</h2>
            <div className="flex flex-wrap -mx-2 -mb-2">
                <button
                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                </button>
                <button
                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                </button>
                <button
                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                </button>
                <button
                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                </button>
            </div>
        </div>
    );
};

export default Size;