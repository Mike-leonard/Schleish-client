import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/all-toys">All Toys</Link> </li>

        {user?.email ?
            <>
                <li>  <Link to="/my-toys">My Toys</Link> </li>
                <li>  <Link to="/add-a-toy">Add A Toy</Link> </li>
            </> :
            <>
            </>
        }
        <li> <Link to="/blogs">Blogs</Link> </li>


    </>

    return (
        <div className="navbar  bg-gradient-to-tl from-green-400 to-indigo-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Schleish</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <>
                        <div className="avatar mr-4 tooltip tooltip-bottom cursor-pointer" data-tip={user.displayName}>
                            <div className="w-12 rounded-full">
                                <img src={user ? user?.photoURL : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} />
                            </div>
                        </div>
                        <button className="btn" onClick={handleLogout}>Log out</button>
                    </> :
                    <Link to="/login"><button className="btn">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Header;