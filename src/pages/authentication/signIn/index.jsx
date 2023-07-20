import { useState } from "react";
import { Auth } from "../../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                if (userCredential.user.metadata.createdAt === userCredential.user.metadata.lastLoginAt) {
                    navigate('/login');
                } else (
                    navigate('/dashboard/tracking')
                )
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const userSignOut = () => {
        signOut(Auth).then(() => {
            console.log('sign out successfully');
        })
    }

    return (<div className="">
        <div>Sign In</div>

        <form onSubmit={signIn}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button
                className='my-[2%] bg-[#38346A] px-[10%] py-[3%] mr-[5px]'
                type="submit" onClick={signIn}>Sign In</button>

        <button
                className="mt-[5px] text-[#38346A] bg-[#ffff] my-[2%] px-[10%] py-[3%] ml-[2px]"
            onClick={userSignOut}>Sign Out
            </button>

            </form>

    </div>);
}

export default SignIn;