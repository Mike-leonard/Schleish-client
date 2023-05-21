import React, { useContext, useEffect, useState } from 'react';
import ProductEdit from '../../components/modals/ProductEdit';
import PerToyRow from './PerToyRow';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    const [selectedProductId, setSelectedProductId] = useState(null)

    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])

    const openModal = (productId) => {
        setSelectedProductId(productId)
        //setIsModalOpen(true)
        //console.log(selectedProductId, productId)
    };

    const closeModal = () => {
        setSelectedProductId(null)
        //setIsModalOpen(false)
    };



    const url = `https://schleish-server.vercel.app/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToy(data)
            })
    }, [url])

    // Delete action for deleting a toy from list
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://schleish-server.vercel.app/toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToy.filter(toy => toy._id !== id)
                            setMyToy(remaining)
                        }
                    })
            }
        })
    }

    // after updating toy name or price table need to show updated data
    const tableUpdate = (_id, updateToy) => {
        fetch(`https://schleish-server.vercel.app/toy/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateToy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Toy updated successfully!',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                            setMyToy(data)
                        })
                }
            })
    }

    const handleAscending = () => {
        const ascUrl = `https://schleish-server.vercel.app/toys?email=${user?.email}&sort=asc`
        fetch(ascUrl)
            .then(res => res.json())
            .then(data => {
                setMyToy(data)
            })
    }

    const handleDescending = () => {
        const ascUrl = `https://schleish-server.vercel.app/toys?email=${user?.email}&sort=dsc`
        fetch(ascUrl)
            .then(res => res.json())
            .then(data => {
                setMyToy(data)
            })
    }

    return (
        <div className="overflow-x-auto w-full px-5">
            <div className="flex justify-center gap-5 mb-2">
                <button onClick={handleAscending} className="btn">Ascending</button>
                <button onClick={handleDescending} className="btn">Descending</button>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            Delete
                        </th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToy.map(toy => <PerToyRow key={toy._id} toy={toy} handleDelete={handleDelete} openModal={openModal}></PerToyRow>)
                    }
                </tbody>
            </table>

            {selectedProductId && <ProductEdit
                selectedProductId={selectedProductId}
                closeModal={closeModal}
                tableUpdate={tableUpdate}
            />}
        </div>
    );
};

export default MyToys;