import React, { useContext, useState } from 'react';
import { addToyDisableInputClassName, addToyInputStaticClassName, addToyLabelClassName, addToyTextArea } from '../../utils/duplicateClassName/deplicateClassName';
import Select from 'react-select';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';


const ratings = [
    { value: '3', label: '3' },
    { value: '3.5', label: '3.5' },
    { value: '4', label: '4' },
    { value: '4.5', label: '4.5' },
    { value: '5', label: '5' },
];
const subCategory = [
    { value: 'teddyBear', label: 'Teddy Bear' },
    { value: 'horse', label: 'Horse' },
    { value: 'dinosaur', label: 'Dinosaur' },
    { value: 'dogs', label: 'Dogs' },
    { value: 'cat', label: 'Cat' },
];
const AddToy = () => {

    const { user } = useContext(AuthContext)

    const [selectedOption, setSelectedOption] = useState(null)
    const [categoryOption, setCategoryOption] = useState(null)

    const handleAddToy = (event) => {

        event.preventDefault()
        const form = event.target
        const toyName = form.toyName.value
        const seller = user?.displayName
        const sellerEmail = user?.email
        const photo = form.photo.value
        const price = form.price.value
        const quantity = form.quantity.value
        const rating = selectedOption.value
        const category = categoryOption.value
        const pdDetails = form.pdDetails.value

        const newToy = {
            toyName,
            seller,
            sellerEmail,
            photo,
            price,
            quantity,
            rating,
            category,
            pdDetails
        }
        console.log(newToy)

        fetch('https://schleish-server.vercel.app/addToy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    form.reset()
                    alert('added')
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Toy Added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <h3 className="py-5 text-center text-2xl font-semibold">Add a Toy to Schleish </h3>
            <form onSubmit={handleAddToy}>
                <div className="flex items-center justify-center" >
                    <div className="flex md:flex-row flex-col items-center py-8 px-4">
                        <div className="flex flex-col md:mr-16">
                            <label htmlFor="toy-name" className={addToyLabelClassName}>
                                Toy Name
                            </label>
                            <input id="toy-name" name="toyName" className={addToyInputStaticClassName} placeholder="Enter Toy Name" required />
                        </div>

                        <div className="flex flex-col md:mr-16 md:py-0 py-4">
                            <label htmlFor="seller-name" className={addToyLabelClassName}>
                                Seller Name
                            </label>
                            <input disabled defaultValue={user?.displayName} id="seller-name" className={addToyDisableInputClassName} placeholder='Seller Name' />
                        </div>

                        <div className="flex flex-col md:py-0 py-4">
                            <label htmlFor="seller-name" className={addToyLabelClassName}>
                                Seller Email
                            </label>
                            <input disabled defaultValue={user?.email} id="seller-name" className={addToyDisableInputClassName} placeholder='Seller Email' />
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-center" >
                    <div className="flex md:flex-row flex-col items-center pb-8 px-4">
                        <div className="flex flex-col md:mr-16">
                            <label htmlFor="toy-name" className={addToyLabelClassName}>
                                Toy Photo URL
                            </label>
                            <input id="toy-name" name="photo" className={addToyInputStaticClassName} placeholder="Enter Toy Photo URL" required />
                        </div>

                        <div className="flex flex-col md:mr-16 md:py-0 py-4">
                            <label htmlFor="seller-name" className={addToyLabelClassName}>
                                Price
                            </label>
                            <input type='number' id="seller-name" name="price" className={addToyInputStaticClassName} placeholder="Enter Toy Price" required />
                        </div>

                        <div className="flex flex-col md:py-0 py-4">
                            <label htmlFor="photo-url" className={addToyLabelClassName}>
                                Quantity
                            </label>
                            <input type='number' id="photo-url" name="quantity" className={addToyInputStaticClassName} placeholder="Enter Toy Quantity" required />
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
                                options={ratings}
                            />
                        </div>

                        <div className="flex flex-col md:mr-16 md:py-0 py-4">
                            <label htmlFor="toy-name" className={addToyLabelClassName}>
                                Add Sub Category
                            </label>
                            <Select
                                className='w-52 lg:w-64'
                                onChange={setCategoryOption}
                                options={subCategory}
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
                            <label htmlFor="pdDetails" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Add Product Details
                            </label>
                            <textarea id="pdDetails" name="pdDetails" required className={addToyTextArea} placeholder="Add Product Description Here...." rows={5} defaultValue={""} />
                        </div>

                        <button className='btn btn-primary md:py-14 md:mt-7'>Add Toy</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;