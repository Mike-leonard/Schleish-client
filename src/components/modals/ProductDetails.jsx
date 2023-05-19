import React, { useState } from 'react';
import Star from '../svg/Star';
import { bottomImageProductDetailsImgClass, modalAddToCartOrWishlist } from '../../utils/duplicateClassName/deplicateClassName';
import Quantity from './modalHealpers/Quantity';

const imgUrl = "https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
const ProductDetails = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <section class="overflow-hidden bg-white font-poppins dark:bg-gray-800">
                        <div class="max-w-6xl px-4 py-4 mx-auto md:px-6">
                            <div class="flex flex-wrap -mx-4">
                                <div class="w-full px-4 md:w-1/2 ">
                                    <div class="sticky top-0 z-50 overflow-hidden ">
                                        <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                            <img src={imgUrl} alt=""
                                                class="object-cover w-full lg:h-full "/>
                                        </div>
                                        <div class="flex-wrap hidden md:flex ">
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className={bottomImageProductDetailsImgClass}>
                                                    <img src={imgUrl} alt=""
                                                        class="object-cover w-full lg:h-20"/>
                                                </a>
                                            </div>
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className={bottomImageProductDetailsImgClass}>
                                                    <img src={imgUrl} alt=""
                                                        class="object-cover w-full lg:h-20"/>
                                                </a>
                                            </div>
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className={bottomImageProductDetailsImgClass}>
                                                    <img src={imgUrl} alt=""
                                                        class="object-cover w-full lg:h-20"/>
                                                </a>
                                            </div>
                                            <div class="w-1/2 p-2 sm:w-1/4">
                                                <a href="#"
                                                    className={bottomImageProductDetailsImgClass}>
                                                    <img src={imgUrl} alt=""
                                                        class="object-cover w-full lg:h-20"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full px-4 md:w-1/2 ">
                                    <div class="lg:pl-20">
                                        <div class="mb-8 ">
                                            <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                            <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                                Shoes</h2>

                                                {/* TODO: Dynamic Star */}
                                            <div class="flex items-center mb-6">
                                                <ul class="flex mr-2">
                                                    <li>
                                                        <a href="#">
                                                        <Star/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Star />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Star />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <Star />
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p class="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                                            </div>
                                            <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                            </p>
                                            <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                                <span>$1000.99</span>
                                                <span
                                                    class="text-base font-normal text-gray-500 line-through dark:text-gray-400">$1500.99</span>
                                            </p>
                                            <p class="text-green-600 dark:text-green-300 ">7 in stock</p>
                                        </div>

                                        <Quantity></Quantity>
                                        <div class="flex flex-wrap items-center -mx-4 ">
                                            <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                                <button
                                                    className={modalAddToCartOrWishlist}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                            <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                                <button
                                                    className={modalAddToCartOrWishlist}>
                                                    Add to wishlist
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;