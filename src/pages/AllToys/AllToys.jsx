import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';
import SearchMethod from './SearchMethod';
import { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';


/* TODO: need to fix when someone clicks all toys show all toys */

const AllToys = () => {
    useTitle('All Toys')
    const toys = useLoaderData()
    const [allToys, setAllToys] = useState(toys)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        console.log('inside')
        if (searchText === '') {
            fetchAllToys()
        } else {
            fetchToysBySearch()
        }
    }, [searchText])


    const fetchAllToys = () => {
       setAllToys(toys)
    }
    const fetchToysBySearch = () => {
        const url = `http://localhost:3000/toys?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }

    const handleSearch = (event) => {
        event.preventDefault()
        const form = event.target
        const inputSearchText = form.inputSearchText.value
        setSearchText(inputSearchText)
        form.reset()
    }

   
console.log(allToys, searchText)

    return (
        <div className="py-8 w-full">
            <SearchMethod handleSearch={handleSearch}></SearchMethod>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mx-8">
                {
                    allToys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                }
            </div>
        </div>

    );
};

export default AllToys;