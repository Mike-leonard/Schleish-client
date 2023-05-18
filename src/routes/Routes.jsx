import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-a-toy',
                element: <AddToy></AddToy>
            },
            {
                path: '/my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    },
])

export default router;