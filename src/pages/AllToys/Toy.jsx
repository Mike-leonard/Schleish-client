import React, { useContext, useState } from 'react';
import WhiteList from '../../components/svg/WhiteList';
import ProductDetails from '../../components/modals/ProductDetails';
import { AuthContext } from '../../context/AuthProvider';
import PrivateRoute from '../../routes/PrivateRoute';
import { toast } from 'react-toastify';

const Toy = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { _id, toyName, photo, price, quantity, category, pdDetails } = toy

    const [selectedProductId, setSelectedProductId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (productId) => {
        setSelectedProductId(productId)
        //setIsModalOpen(true)
        //console.log(selectedProductId, productId)
    };

    const closeModal = () => {
        setSelectedProductId(null);
        //setIsModalOpen(false);
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            //  closeModal();
        }
    };
    return (
        <div className="lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
            <div className="flex items-center border-b border-gray-200 pb-6">
                <img src={photo} alt='' className="w-36 h-36 rounded-md cursor-pointer" />
                <div className='w-full'>
                    <div className="flex justify-between">
                        <div className="flex flex-col flex-1 pl-3">
                            <p className="text-xl font-medium leading-5 text-gray-800">{toyName}</p>
                            <p className="text-sm leading-normal pt-2 text-gray-500">{category}</p>
                        </div>
                        <WhiteList />
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-5 pl-4 mt-2 md:mt-5'>
                        <p>Price: $<span className="text-indigo-800 font-extrabold">{price}</span></p>
                        <p>Quantity: <span className="text-indigo-800 font-extrabold">{quantity}</span></p>
                    </div>
                </div>
            </div>

            <div className="px-2">
                <p className="text-sm leading-5 py-4 text-gray-600">{pdDetails}</p>
                <div className="flex">
                    <div className="flex flex-1 items-center">
                        <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#pdTag1</div>
                        <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#pdTag2</div>
                    </div>
                    {/* <button className="btn btn-outline btn-primary">Details</button> */}
                    <label htmlFor="my-modal-5" className="btn btn-outline btn-primary" onClick={() => openModal(_id)}>Details</label>
                    {selectedProductId &&
                        <PrivateRoute>
                            {
                                !user && toast.error('You have to login first to view this page')
                            }
                            <ProductDetails
                                selectedProductId={selectedProductId}
                                closeModal={closeModal}
                            />
                        </PrivateRoute>
                    }

                </div>
            </div>
        </div>
    );
};

export default Toy;