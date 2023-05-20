import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategorizedCard from '../../components/card/CategorizedCard';


const selectedTabClassName = 'text-primary ';
const selectedTabPanelClassName = 'custom-selected-tab-panel';

const CategorizedShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [categoryToy, setCategoryToy] = useState([]);

    useEffect(() => {
        let categoryText = ''
        if (tabIndex === 0)
            categoryText = 'horse'
        else if (tabIndex === 1)
            categoryText = 'dinosaur'
        else
            categoryText = 'cat'

        const url = `http://localhost:3000/toys?category=${categoryText}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategoryToy(data)
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
                        {
                            categoryToy.map(card => <CategorizedCard key={card._id} card={card}></CategorizedCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        {
                            categoryToy.map(card => <CategorizedCard key={card._id} card={card}></CategorizedCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid sm:grid-cols-3 gap-3 w-full mt-1">
                        {
                            categoryToy.map(card => <CategorizedCard key={card._id} card={card}></CategorizedCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategorizedShop;