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
                                <img className="w-full rounded-t-3xl " src="https://media.geeksforgeeks.org/wp-content/uploads/20220401174334/Screenshot20220401174003.png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Hasan</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">21st May, 2023</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-xl text-gray-900 font-semibold tracking-wider">What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                    </h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                                        <code className="text-pink-700">Access Token:</code> Access Token is used to access server though a successful authentication of a user. its a short lived token is used to authenticate and authorize requests to protected resources or APIs.
                                    </p>
                                    <p>
                                        Access tokens are typically stored in local storage or on a memory on the client side.
                                    </p>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                                        <code className="text-pink-700">Refresh Token:</code> Refresh Token is long lived token that is also issued by the authentication server. Its purpose is to provide new access tokens when current access token is expired.
                                    </p>
                                    <p>
                                        Refresh tokens are more sensitive and long-lived. It is recommended to store refresh tokens in an HTTP-only cookie or local storage.
                                    </p>

                                    <div className="h-5 w-2" />
                                </div>
                            </div>

                            <div className="mt-12">
                                <img className="w-full rounded-t-3xl " src="https://studio3t.com/wp-content/uploads/2018/10/Mongodb.png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Hasan</p>
                                    <p className="text-sm text-white font-semibold tracking-wide">21st May, 2023</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-xl text-gray-900 font-semibold tracking-wider">What is MongoDB aggregate and how does it work?
                                    </h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                                        In MongoDB, the aggregate method is used to perform advanced data processing and transformation operations on collections of documents. It allows you to execute complex queries, apply various stages of data manipulation, and obtain aggregated results.
                                    </p>

                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg py-1 text-gray-900 font-semibold tracking-wider">Compare SQL and NoSQL databases?</h3>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div>
                                    <img className="w-full rounded-t-3xl" src="https://cdn.educba.com/academy/wp-content/uploads/2020/06/SQL-Users.jpg" alt="games" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Hasan</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">21st May, 2023</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider text-center">SQL
                                        </h1>
                                        <ul className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                                            <li>Follows a structured data model based on tables with predefined schemas.</li> <br />
                                            <li> Organizes data into rows and columns and establishes relationships using foreign keys.</li> <br />
                                            <li>      Provides strong ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and reliability.</li> <br />
                                            <li>Uses SQL as the query language for data retrieval and manipulation.</li> <br />
                                            <li>Well-suited for applications with structured and relational data, complex querying and reporting, and scenarios requiring strong transactional support.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-full rounded-t-3xl" src="https://vitalflux.com/wp-content/uploads/2022/11/nosql-databases-list-examples.png" alt="notes" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Hasan</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">21st May, 2023</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider text-center">NoSQL</h1>
                                        <ul className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                                            <li>Utilizes various data models like key-value, document, columnar, and graph.</li> <br />
                                            <li>Offers more flexibility in terms of schema, allowing for dynamic and unstructured data.</li> <br />
                                            <li>Prioritizes scalability and horizontal scaling across multiple servers.</li> <br />
                                            <li>Provides eventual consistency or relaxed consistency models, instead of strict ACID guarantees.</li> <br />
                                            <li>Uses different query languages depending on the data model.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg py-1 my-5 text-gray-900 font-semibold tracking-wider">What is express js? What is Nest JS ?</h3>
                            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div>
                                    <img className="w-full  rounded-t-3xl" src="https://devopedia.org/images/article/157/3299.1551338445.png" alt="laptop" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Hasan</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">21st May, 2023</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider text-center">Express Js</h1>
                                        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                                            Express.js is a popular and widely used web application framework for Node.js. It provides a minimalist and flexible approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and rendering responses. It offers a robust set of features while keeping the core framework lightweight, allowing developers to add additional functionality through various middleware and plugins. With Express.js, developers have the freedom to structure their applications according to their needs and can easily integrate with databases, template engines, and other libraries.
                                            </p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-full rounded-t-3xl" src="https://tsh.io/wp-content/uploads/2021/03/what-is-next-js-used-for_.png" alt="worker" />
                                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                        <p className="text-sm text-white font-semibold tracking-wide">Hasan</p>
                                        <p className="text-sm text-white font-semibold tracking-wide">21st May, 2023</p>
                                    </div>
                                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                        <h1 className="text-lg text-gray-900 font-semibold tracking-wider text-center">Next Js</h1>
                                        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                                            Nest.js is a progressive, extensible, and TypeScript-based framework for building scalable and maintainable server-side applications. It is built on top of Express.js and leverages TypeScript's features to provide a strongly typed and object-oriented programming experience. Nest.js follows the architectural principles of modules, controllers, and services, providing a clear separation of concerns and enabling modular development. It offers built-in support for dependency injection, decorators, middleware, and various other features that simplify the development of complex backend applications. Nest.js also provides out-of-the-box support for GraphQL and WebSockets, making it suitable for real-time applications.
                                        </p>
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
