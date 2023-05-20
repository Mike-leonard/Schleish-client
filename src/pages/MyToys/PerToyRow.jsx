import React from 'react';

const imgUrl = "https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
const PerToyRow = ({ toy, handleDelete, openModal }) => {
    //console.log(toy)
    const { _id, toyName, photo, price, quantity, seller, sellerEmail, category, pdDetails } = toy
    return (
        <tr>
            <th>
                <button className='btn rounded-full btn-outline btn-secondary text-xl' onClick={()=> handleDelete(_id)}>
                    X
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar cursor-pointer">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{quantity}</td>
            <th>
                <label htmlFor="my-modal-6" className="btn btn-outline btn-primary" onClick={() => openModal(_id)}>Edit</label>
            </th>
        </tr>
    );
};

export default PerToyRow;