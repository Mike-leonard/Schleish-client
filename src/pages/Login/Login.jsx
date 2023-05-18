import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import GoogleButton from "../../components/svg/GoogleButton";
import { btnGoogleStaticClassName, btnLoginOrRegisterStaticClassName, inputStaticClassName } from "../../utils/duplicateClassName/deplicateClassName";
import PasswordEye from "../../components/svg/PasswordEye";


const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                // toast.error(error.message)
                //TODO: toast need to implement
            })
    }

    // TODO: need to add this
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                //toast.error(error.message)
                // TODO: toast needed
            })

    }


    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Login to your account
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Dont have account?{" "}
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            <Link to="/register">Sign up here</Link>
                        </span>
                    </p>
                    <button aria-label="Continue with google" role="button" className={btnGoogleStaticClassName}>
                        <GoogleButton />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>

                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>

                    <form onSubmit={handleLogin}>
                        <div>
                            <label className="text-sm font-medium leading-none text-gray-800">Email</label>
                            <input aria-label="enter email adress" role="input" type="email" className={inputStaticClassName} required name="email"/>
                        </div>
                        <div className="mt-6  w-full">
                            <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                            <div className="relative flex items-center justify-center">
                                <input aria-label="enter Password" role="input" type="password" className={inputStaticClassName} required name="password"/>
                                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <PasswordEye />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button role="button" aria-label="create my account" className={btnLoginOrRegisterStaticClassName}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
