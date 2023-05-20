import React, { useContext } from 'react';
import GoogleButton from '../../components/svg/GoogleButton';
import { btnGoogleStaticClassName } from '../../utils/duplicateClassName/deplicateClassName';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                //navigate(from, { replace: true })
            })
            .catch(error => toast.error(error.message))
    }
    return (
        <button onClick={handleGoogleLogin} aria-label="Continue with google" role="button" className={btnGoogleStaticClassName}>
            <GoogleButton></GoogleButton>
            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
        </button>
    );
};

export default SocialLogin;