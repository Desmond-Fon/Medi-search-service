import avatar from '../../../assets/avatar.png'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';


const SideNav = () => {

    return (<>
        <div className='bg-white h-[80px] px-[10px] flex justify-between gap-[35px] items-center text-black text-[16px] shadoww w-full'>
            <div className='flex justify-between w-full items-center'>
                <Link to='/' className='pl-[50px]'><img src={logo} alt="" className='' /></Link>
                <Link className='pr-[80px]'><img src={avatar} alt="" className='' /></Link>
            </div>
        </div>
    </>);
}

export default SideNav;