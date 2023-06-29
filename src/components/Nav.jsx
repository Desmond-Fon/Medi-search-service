import logo from '../assets/logo.png'
import '../App.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (<div className='bg-white custom-shadow flex justify-between px-[120px] h-[75px] items-center'>
        <div>
            <Link to='/'><img src={logo} alt="" /> </Link>
        </div>
        <div>
            <ul className='flex justify-center items-center gap-[40px] text-[16px] font-[600] text-[#333]'>
                <li><Link>How it Works</Link></li>
                <li><Link>Contact</Link></li>
        </ul>
        </div>
        <div>
            <button className='px-[22px] py-[7px] rounded-[5px] bg-[#4762FF] text-white'><Link to='/login'>Login</Link></button>
        </div>
    </div>);
}

export default Nav;