import { Auth, provider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignInWithGoogle = () => {
    let navigate = useNavigate();

    const signWithGoogle = () => {
        // console.log('helloo')
        signInWithPopup(Auth, provider)
            .then((result) => {
                console.log(result);
                if (result.user.metadata.createdAt === result.user.metadata.lastLoginAt) {
                    navigate('/login');
                } else (
                    navigate('/dashboard/tracking')
                )
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (<>

        <button
        onClick={signWithGoogle} 
            className="mx-[0] w-[32px] text-[#38346A] bg-[#fff] px-[10%] py-[3%]"
        
        >Sign in with google</button>


    </>);
}

export default SignInWithGoogle;