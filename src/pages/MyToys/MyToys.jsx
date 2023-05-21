import React, { useContext, useEffect, useState } from 'react';
import ProductEdit from '../../components/modals/ProductEdit';
import PerToyRow from './PerToyRow';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
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



    const url = `http://localhost:3000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToy(data)
            })
    }, [url])

    /* TODO: sw alert dlt confirmation */
    /* TODO: For all the CRUD operations, show relevant toast/ notification/ anything with a meaningful message */
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
                fetch(`http://localhost:3000/toy/${id}`, {
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

    const tableUpdate = (_id, updateToy) => {
        fetch(`http://localhost:3000/toy/${_id}`, {
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

    return (
        <div className="overflow-x-auto w-full px-5">
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