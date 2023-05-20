import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const selectedTabClassName = 'text-primary ';
const selectedTabPanelClassName = 'custom-selected-tab-panel';

const CategorizedShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [categoryToy, setCategoryToy] = useState([]);
    console.log(tabIndex)

    useEffect(() => {
        let categoryText = ''
        if(tabIndex === 0)
            categoryText = 'horse'
        else if(tabIndex === 1)
            categoryText = 'dinosaur'
        else
            categoryText = 'cat'

        const url = `http://localhost:3000/toys?category=${categoryText}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [tabIndex])

    return (
        <div className="m-5">
            <Tabs onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center bg-slate-200 p-0 text-xl" >
                    <Tab>Horse</Tab>
                    <Tab>Dinosaur</Tab>
                    <Tab>Cat</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategorizedShop;