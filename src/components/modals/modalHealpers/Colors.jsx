
const Colors = () => {
    return (
        <div class="flex items-center mb-8">
            <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                Colors:</h2>
            <div class="flex flex-wrap -mx-2 -mb-2">
                <button
                    class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                    <div class="w-6 h-6 bg-cyan-300"></div>
                </button>
                <button
                    class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div class="w-6 h-6 bg-green-300 "></div>
                </button>
                <button
                    class="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div class="w-6 h-6 bg-red-200 "></div>
                </button>
            </div>
        </div>
    );
};

export default Colors;