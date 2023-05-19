import React, { useState } from 'react';
import ProductEdit from '../../components/modals/ProductEdit';


const imgUrl = "https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
const MyToys = () => {
    const [selectedProductId, setSelectedProductId] = useState(null)

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
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
                    {/* row 1 */}
                    <tr>
                        <th>
                            <button className='btn rounded-full btn-outline btn-secondary text-xl'>
                                X
                            </button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar cursor-pointer">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <label htmlFor="my-modal-6" className="btn btn-outline btn-primary" /* onClick={() => openModal(4)} */>Edit</label>
                            
                        </th>
                    </tr>
                </tbody>
            </table>

            <ProductEdit></ProductEdit>
        </div>
    );
};

export default MyToys;