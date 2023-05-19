import React, { useState } from 'react';
import { addToyDisableInputClassName, addToyInputStaticClassName, addToyLabelClassName, addToyTextArea, bottomImageProductDetailsImgClass, modalAddToCartOrWishlist } from '../../utils/duplicateClassName/deplicateClassName';
import Star from '../svg/Star';
import Quantity from './modalHealpers/Quantity';
import Select from 'react-select';

const imgUrl = "https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"

const options = [
    { value: '3', label: '3' },
    { value: '3.5', label: '3.5' },
    { value: '4', label: '4' },
    { value: '4.5', label: '4.5' },
    { value: '5', label: '5' },
];
const subCategory = [
    { value: '3', label: '3' },
    { value: '3.5', label: '3.5' },
    { value: '4', label: '4' },
    { value: '4.5', label: '4.5' },
    { value: '5', label: '5' },
];
const ProductEdit = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <section className="overflow-hidden bg-white font-poppins dark:bg-gray-800">
                        <div className="max-w-6xl px-4 py-4 mx-auto md:px-6">
                            <div className="flex flex-wrap -mx-4">
                                <h3 className="py-5 text-center text-2xl font-semibold ">Update Your  Toy </h3>

                                <div className="flex items-center justify-center" >
                                    <div className="flex md:flex-row flex-col items-center pb-8 px-4">
                                        <div className="flex flex-col md:mr-16">
                                            <label htmlFor="toy-name" className={addToyLabelClassName}>
                                                Toy Name
                                            </label>
                                            <input id="toy-name" className={addToyInputStaticClassName} placeholder="Enter Toy Name" />
                                        </div>

                                        <div className="flex flex-col md:mr-16 md:py-0 py-4">
                                            <label htmlFor="seller-name" className={addToyLabelClassName}>
                                                Price
                                            </label>
                                            <input id="seller-name" className={addToyInputStaticClassName} placeholder="Enter Toy Price" />
                                        </div>

                                        <div className="flex flex-col md:py-0 py-4">
                                            <label htmlFor="photo-url" className={addToyLabelClassName}>
                                                Quantity
                                            </label>
                                            <input id="photo-url" className={addToyInputStaticClassName} placeholder="Enter Toy Quantity" />
                                        </div>

                                    </div>
                                </div>
                
                                <div className="flex items-center justify-center" >
                                    <div className="flex md:flex-row flex-col items-center pb-8 px-4 gap-5">
                                        <div className="flex flex-col w-52 md:w-[70vw] max-w-[90vh]">
                                            <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                Add Product Details
                                            </label>
                                            <textarea id="about" name="about" required className={addToyTextArea} placeholder="Add Product Description Here...." rows={5} defaultValue={""} />
                                        </div>

                                        <button className='btn btn-primary md:py-14 md:mt-7'>Update Toy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;