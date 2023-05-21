import React from 'react';

const CategorizedCard = ({ card }) => {
    const { toyName, photo, price, seller, rating } = card
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
                    <button className="btn btn-primary">Details</button>
                    {/* TODO: wants to relate this page with pdDetails modal */}
                </div>
            </div>
        </div>
    );
};

export default CategorizedCard;