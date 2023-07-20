import SignIn from "./signIn";
import SignInWithGoogle from "./signInWithGoogle.jsx";
import SignUp from "./signUp";
import { useState } from "react";


const Authenticate = () => {
    const [toggle, setToggle] = useState(false)
    return (<>
        <div
        className="overflow-x-hidden bg-center bg-no-repeat pl-[100px] pr-[130px] pt-[80px] bg-[#1E1E2C]"                                          
        >
            <div
            className="w-[50%] mx-[25%] p-[3%] rounded-[10%]"
            >
                {/* <SignUp /> */}

                <button
                    border={'none'}
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? <p>Already Have an Account  SignIn</p> : <p>Don&apos;t Have an Account SignUp</p>}

                </button>
                {toggle ? <SignUp /> : <SignIn />}
                {/* <SignIn /> */}
                <SignInWithGoogle />
            </div>

        </div>

    </>);
}

export default Authenticate;