import React from "react";
import GetUpdate from "../svg/GetUpdate";
import Instagraam from "../svg/Instagraam";
import Dribble from "../svg/Dribble";
import Youtube from "../svg/Youtube";
import Twitter from "../svg/Twitter";


// TODO: footer text need to to replace
//TODO: svg will be replaced with react icons
// TODO: try to implement this design later https://tailwinduikit.com/components/E-commerce/Components/footers/footer_IX
const Footer = () => {
    return (
        <div className="py-16 xl:px-20 lg:px-18 sm:px-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                <div className="flex flex-col flex-shrink-0">
                    <div>
                        <h3 className="text-xl font-extrabold">Schleish</h3>
                    </div>
                    <p className="text-sm leading-none text-gray-800 mt-4">Copyright © 2023 Schleish.</p>
                    <p className="text-sm leading-none text-gray-800 mt-4">All rights reserved.</p>
                    <div className="flex items-center gap-x-4 mt-12">
                        <Instagraam />
                        <Dribble />
                        <Youtube />
                        <Twitter />

                    </div>
                </div>
                <div className="">
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blog</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Pricing</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Testimonials</p>
                </div>
                <div className="mt-10 lg:block hidden">
                    <label className="text-xl font-medium leading-5 text-gray-800">Get updates</label>
                    <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
                        <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                        <GetUpdate />
                    </div>
                </div>
                {/* TODO: make it one at the end get update */}
            </div>
            <div className="mt-10 lg:hidden">
                <label className="text-xl font-medium leading-5 text-gray-800">Get updates</label>
                <div className="flex items-center justify-between border border-gray-800 mt-4">
                    <input type="text" className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                    <div className=" mr-4 cursor-pointer relative z-40">
                        <GetUpdate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
