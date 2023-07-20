import { useState } from "react";
import { Auth} from "../../../firebase";
import { createUserWithEmailAndPassword,  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const signUp = (e) => {
        e.preventDefault()
        console.log(email, password);
        createUserWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.metadata.createdAt, userCredential.user.metadata.lastSignInTime);
                if(userCredential.user.metadata.createdAt === userCredential.user.metadata.lastLoginAt)
                {
                    navigate('/login');
                }else(
                    navigate('/dashboard/tracking')
                )
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (<>
        <div>Sign Up</div>

        <form  onSubmit={signUp}>
            <form htmlFor="email">Email</form>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

            <form htmlFor="password">Password</form>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button 
             type="submit" 
             onClick={signUp}
                className="bg-[#38346A] my-[2%] px-[10%] py-[3%]">
                Sign Up
            </button>
        </form>
    </>);
}

export default SignUp;