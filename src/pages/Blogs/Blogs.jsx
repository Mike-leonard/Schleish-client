import React from "react";

//TODO: theme need to apply on body
const Blogs = () => {
    return (
        <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
            <div className="mx-auto container">
                <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Gather knowledge about programming</h1>
                <div className="mt-12 lg:mt-24">
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div>
                            <div>
                                <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-xl text-gray-900 font-semibold tracking-wider">What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                    </h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create eventsS. The aim of Eventistan is to promote healthy and entertaining event.</p>

                                    <div className="h-5 w-2" />
                                </div>
                            </div>

                            <div className="mt-12">
                                <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-xl text-gray-900 font-semibold tracking-wider">What is MongoDB aggregate and how does it work?
                                    </h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create eventsS. The aim of Eventistan is to promote healthy and entertaining event.</p>

                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg py-1 text-gray-900 font-semibold tracking-wider">Compare SQL and NoSQL databases?</h3>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div>
                                    <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider">SQL
                                        </h1>
                                        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider">NoSQL</h1>
                                        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg py-1 my-5 text-gray-900 font-semibold tracking-wider">What is express js? What is Nest JS ?</h3>
                            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div>
                                    <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Express Js</h1>
                                        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Next Js</h1>
                                        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Blogs;
