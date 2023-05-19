import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';



const AllToys = () => {

    const toys = useLoaderData()
    return (
        <div className="py-8 w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mx-8">
                {
                    toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                }
            </div>
        </div>

    );
};

export default AllToys;