import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategorizedCard from '../../components/card/CategorizedCard';


const selectedTabClassName = 'text-primary ';
const selectedTabPanelClassName = 'custom-selected-tab-panel';

const CategorizedShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [categoryToy, setCategoryToy] = useState([]);

    // for modal
    const [selectedProductId, setSelectedProductId] = useState(null)
    const openModal = (productId) => {
        setSelectedProductId(productId)
        //setIsModalOpen(true)
        //console.log(selectedProductId, productId)
    };

    const closeModal = () => {
        setSelectedProductId(null);
        //setIsModalOpen(false);
    };

    useEffect(() => {
        let categoryText = ''
        if (tabIndex === 0)
            categoryText = 'horse'
        else if (tabIndex === 1)
            categoryText = 'dinosaur'
        else
            categoryText = 'cat'

        const url = `https://schleish-server.vercel.app/toys?category=${categoryText}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategoryToy(data)
            })
    }, [tabIndex])

    return (
        <div className="p-5 bg-[#c4f7f7]">
            <h3 className="text-center text-4xl my-3">Shop By Category</h3>
            <Tabs onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center bg-slate-200 p-0 text-xl" >
                    <Tab>Horse</Tab>
                    <Tab>Dinosaur</Tab>
                    <Tab>Cat</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        {
                            categoryToy.map(card => <CategorizedCard
                                key={card._id}
                                card={card}
                                openModal={openModal}
                                selectedProductId={selectedProductId}
                                closeModal={closeModal}
                            ></CategorizedCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        {
                            categoryToy.map(card => <CategorizedCard
                                key={card._id}
                                card={card}
                                openModal={openModal}
                                selectedProductId={selectedProductId}
                                closeModal={closeModal}
                            ></CategorizedCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        {
                            categoryToy.map(card => <CategorizedCard
                                key={card._id}
                                card={card}
                                openModal={openModal}
                                selectedProductId={selectedProductId}
                                closeModal={closeModal}
                            ></CategorizedCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategorizedShop;