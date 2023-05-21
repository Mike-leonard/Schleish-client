import Search from '../../components/svg/Search';
import Refresh from '../../components/svg/Refresh';

const SearchMethod = ({ handleSearch, fetchAllToys }) => {

    return (
        <div className="pb-3 mx-5 flex">
            <div className="bg-white lg:max-w-[384px] md:max-w-[720px] w-full shadow rounded mx-auto">
                <form onSubmit={handleSearch} className=" flex justify-start items-center relative">
                    <input
                        className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                        type="text"
                        placeholder="Copy the toy name and search..."
                        name='inputSearchText'
                        required
                    />
                    <button type="submit"><Search></Search></button>
                </form>
            </div>
            <button onClick={fetchAllToys} className="btn btn-info btn-outline -m-px"><Refresh></Refresh></button>
        </div>
    );
};

export default SearchMethod;