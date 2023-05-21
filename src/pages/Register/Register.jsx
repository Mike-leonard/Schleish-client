import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import PasswordEye from '../../components/svg/PasswordEye';
import { btnLoginOrRegisterStaticClassName, inputStaticClassName } from '../../utils/duplicateClassName/deplicateClassName';
import { toast } from 'react-toastify';
import SocialLogin from '../Login/SocialLogin';
import useTitle from '../../hooks/useTitle';


const Register = () => {
    useTitle('Register')
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        

        if (password.length < 6) {
            toast.error('Password should be 6 or more characters long')
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                if (createdUser !== null) {
                    userProfileUpdate(createdUser, name, photo)
                        .then(() => {
                            form.reset()
                            navigate('/', { replace: true })
                        })
                        .catch(err => toast.log(err))
                }
            })
            .catch(error => {
                toast.error(error);
            })
    }

    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">

                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Join Schleish Free
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Already have account?{" "}
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                    <SocialLogin></SocialLogin>

                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>

                    <form onSubmit={handleRegister}>
                        <div>
                            <label className="text-sm font-medium leading-none text-gray-800">Name</label>
                            <input aria-label="enter your name" role="input" type="text" className={inputStaticClassName} name="name" required/>
                        </div>
                        <div>
                            <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                            <input aria-label="enter email adress" role="input" type="email" className={inputStaticClassName} name="email" required/>
                        </div>
                        <div className="mt-6  w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                            <div className="relative flex items-center justify-center">
                                <input aria-label="enter Password" role="input" type="password" className={inputStaticClassName} name="password" required/>
                                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <PasswordEye />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium leading-none text-gray-800">Photo URL</label>
                            <input aria-label="enter photo url" role="input" type="text" className={inputStaticClassName} name="photo" required/>
                        </div>
                        <div className="mt-8">
                            <button role="button" aria-label="create my account" className={btnLoginOrRegisterStaticClassName}>
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;