import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import PrivateRoute from '../../routes/PrivateRoute';
import ProductDetails from '../modals/ProductDetails';
import { toast } from 'react-toastify';

const CategorizedCard = ({ card, openModal, closeModal, selectedProductId }) => {

    const { user } = useContext(AuthContext)
    const { _id, toyName, photo, price, seller, rating } = card
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="h-52 relative">
                <div className="absolute inset-0 bg-slate-600 bg-opacity-25"></div>
                <img src={photo} alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <div className="flex flex-col sm:flex-row">

                    <p>Price: <span className="font-extrabold">${price}</span> </p>
                    <p>Rating: <span className="font-extrabold">{rating}</span> </p>
                </div>
                <p>Seller: <span className="font-extrabold">{seller}</span> </p>
                <div className="card-actions justify-end">
                    <label htmlFor="my-modal-5" className="btn btn-primary" onClick={() => openModal(_id)}>Details</label>
                </div>

                {selectedProductId &&
                    <PrivateRoute>
                        {
                            !user && toast.error('You have to login first to view this page')
                        }
                        <div className="h-96">

                            <ProductDetails
                                selectedProductId={selectedProductId}
                                closeModal={closeModal}
                            />
                        </div>
                    </PrivateRoute>
                }
            </div>
        </div>
    );
};

export default CategorizedCard;