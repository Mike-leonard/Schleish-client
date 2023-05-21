import React, { useEffect, useState } from 'react';
import { addToyInputStaticClassName, addToyLabelClassName, addToyTextArea } from '../../utils/duplicateClassName/deplicateClassName';


const ProductEdit = ({ selectedProductId, closeModal, tableUpdate }) => {

    const [toy, setToy] = useState({})

    const url = `http://localhost:3000/toy/${selectedProductId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [url])
    const { _id, toyName, price, quantity, pdDetails } = toy

    const handleUpdateToy = (event) => {

        event.preventDefault()
        const form = event.target
        const toyName = form.toyName.value
        const price = form.price.value
        const quantity = form.quantity.value
        const pdDetails = form.pdDetails.value


        const updateToy = { toyName, price, quantity, pdDetails }
        tableUpdate(_id, updateToy)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <section className="overflow-hidden bg-white font-poppins dark:bg-gray-800">
                        <div className="max-w-6xl px-4 py-4 mx-auto md:px-6">
                            <form className="flex flex-wrap -mx-4" onSubmit={handleUpdateToy}>
                                <h3 className="py-5 text-center text-2xl font-semibold ">Update Your  Toy </h3>

                                <div className="flex items-center justify-center" >
                                    <div className="flex md:flex-row flex-col items-center pb-8 px-4">
                                        <div className="flex flex-col md:mr-16">
                                            <label htmlFor="toy-name" className={addToyLabelClassName}>
                                                Toy Name
                                            </label>
                                            <input id="toy-name" name="toyName" className={addToyInputStaticClassName} placeholder="Enter Toy Name" required defaultValue={toyName} />
                                        </div>

                                        <div className="flex flex-col md:mr-16 md:py-0 py-4">
                                            <label htmlFor="seller-name" className={addToyLabelClassName}>
                                                Price
                                            </label>
                                            <input type='number' id="seller-name" name="price" className={addToyInputStaticClassName} placeholder="Enter Toy Price" required defaultValue={price} />
                                        </div>

                                        <div className="flex flex-col md:py-0 py-4">
                                            <label htmlFor="photo-url" className={addToyLabelClassName}>
                                                Quantity
                                            </label>
                                            <input type='number' id="photo-url" name="quantity" className={addToyInputStaticClassName} placeholder="Enter Toy Quantity" required defaultValue={quantity} />
                                        </div>

                                    </div>
                                </div>

                                <div className="flex items-center justify-center" >
                                    <div className="flex md:flex-row flex-col items-center pb-8 px-4 gap-5">
                                        <div className="flex flex-col w-52 md:w-[70vw] max-w-[90vh]">
                                            <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Add Product Details
                                            </label>
                                            <textarea id="about" name="pdDetails" required className={addToyTextArea} placeholder="Add Product Description Here...." rows={5} defaultValue={pdDetails} />
                                        </div>

                                        <button className='btn btn-primary md:py-14 md:mt-7'>Update Toy</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn" onClick={closeModal}>Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;