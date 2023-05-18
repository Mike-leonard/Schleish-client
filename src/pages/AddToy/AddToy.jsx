import React, { useState } from 'react';
import { addToyDisableInputClassName, addToyInputStaticClassName, addToyLabelClassName, addToyTextArea } from '../../utils/duplicateClassName/deplicateClassName';
import Select from 'react-select';


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
const AddToy = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <h3 className="py-5 text-center text-2xl font-semibold">Add A Toy to Schleish </h3>
            <div className="flex items-center justify-center" >
                <div className="flex md:flex-row flex-col items-center py-8 px-4">
                    <div className="flex flex-col md:mr-16">
                        <label htmlFor="toy-name" className={addToyLabelClassName}>
                            Toy Name
                        </label>
                        <input id="toy-name" className={addToyInputStaticClassName} placeholder="Enter Toy Name" />
                    </div>

                    <div className="flex flex-col md:mr-16 md:py-0 py-4">
                        <label htmlFor="seller-name" className={addToyLabelClassName}>
                            Seller Name
                        </label>
                        <input disabled id="seller-name" className={addToyDisableInputClassName} placeholder='Seller Name' />
                    </div>

                    <div className="flex flex-col md:py-0 py-4">
                        <label htmlFor="seller-name" className={addToyLabelClassName}>
                            Seller Email
                        </label>
                        <input disabled id="seller-name" className={addToyDisableInputClassName} placeholder='Seller Email' />
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center" >
                <div className="flex md:flex-row flex-col items-center pb-8 px-4">
                    <div className="flex flex-col md:mr-16">
                        <label htmlFor="toy-name" className={addToyLabelClassName}>
                            Toy Photo URL
                        </label>
                        <input id="toy-name" className={addToyInputStaticClassName} placeholder="Enter Toy Photo URL" />
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
                <div className="flex md:flex-row flex-col items-center pb-8 px-4">
                    <div className="flex flex-col md:mr-16">
                        <label htmlFor="toy-name" className={addToyLabelClassName}>
                            Add Ratings
                        </label>
                        <Select
                            className='w-52 lg:w-64'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>

                    <div className="flex flex-col md:mr-16 md:py-0 py-4">
                        <label htmlFor="toy-name" className={addToyLabelClassName}>
                            Add Sub Category
                        </label>
                        <Select
                            className='w-52 lg:w-64'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>

                    <div className="flex flex-col md:py-0 py-4">
                        <label htmlFor="photo-url" className={addToyLabelClassName}>
                            Keywords
                        </label>
                        <input id="photo-url" className={addToyInputStaticClassName} placeholder="Enter Product Keywords" />
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

                    <button className='btn btn-primary md:py-14 md:mt-7'>Add Toy</button>
                </div>
            </div>
        </div>
    );
};

export default AddToy;