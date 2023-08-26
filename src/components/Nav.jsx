import logo from '../assets/logo.png'
import '../App.css'
import { Link } from 'react-router-dom';
// import { signOut } from "firebase/auth";
// import { Auth } from '../firebase';
// import { useContext, useEffect } from 'react';
// import { DataContext } from '../contexts/Data';


const Nav = () => {
    // const { setUser, user } = useContext(DataContext)

    // useEffect(() => {
    //     const data = window.localStorage.getItem('user')
    //     if (data !== null) setUser(JSON.parse(data))
    // }, [setUser])

    // useEffect(() => {
    //     window.localStorage.setItem('user', JSON.stringify(user))
    // }, [user]);

    // const userSignOut = () => {
    //     signOut(Auth).then(() => {
    //         setUser(false)
    //             localStorage.setItem('user', 'false')
    //             // console.log('sign out successfully');
    //     })
    // }



    return (<div className='bg-white custom-shadow flex justify-between px-[120px] h-[75px] items-center'>
        <div>
            <Link to='/'><h1 className='text-4xl font-bold  text-[#4762FF] tracking-widest'>PSHMLS</h1> </Link>
        </div>
        {/* <div>
            <ul className='flex justify-center items-center gap-[40px] text-[16px] font-[600] text-[#333]'>
                <li><Link>How it Works</Link></li>
                <li><Link>Contact</Link></li>
        </ul>
        </div> */}
        <div>
            {/* {user ? <div className='flex items-ccenter gap-3'>
                <Link to='/dashboard/tracking'><button className='px-[22px] py-[7px] rounded-[5px] bg-[#4762FF] text-white'>Dashboard</button></Link> <button
                    className='px-[22px] py-[7px] rounded-[5px] bg-[#4762FF] text-white whitespace-nowrap'
                    onClick={userSignOut}>Sign Out
                </button></div> :  */}
                <Link to='/dashboard/tracking'><button className='px-[22px] py-[7px] rounded-[5px] bg-[#4762FF] text-white'>Try Out</button></Link>
                {/* } */}
        </div>
    </div>);
}

export default Nav;