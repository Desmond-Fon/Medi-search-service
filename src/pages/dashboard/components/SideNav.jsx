import avatar from '../../../assets/avatar.png'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';



const SideNav = () => {
    const [active, setActive] = useState(false)

    const navLinkStyle = ({ isActive }) => {
        isActive ? setActive(true) : setActive(false)
        return {
            backgroundColor: isActive ? '#4762FF' : '',
            color: isActive ? 'white' : '',
        };
    };
    return (<>
        <div className='bg-white h-screen pt-[120px] pb-[100px] px-[10px] flex flex-col justify-between gap-[35px] items-center text-black text-[16px] shadoww '>
            <div className='flex flex-col items-center gap-9'>

                <NavLink style={navLinkStyle} to='/dashboard/overview' className='p-3 rounded-[8px]'><div><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="element-2 1">
                        <path id="Vector" d="M9.79769 26.9502H5.01184C2.63077 26.9502 1.48169 25.8485 1.48169 23.574V4.85711C1.48169 2.58265 2.64261 1.48096 5.01184 1.48096H9.79769C12.1788 1.48096 13.3278 2.58265 13.3278 4.85711V23.574C13.3278 25.8485 12.1669 26.9502 9.79769 26.9502ZM5.01184 3.25788C3.50738 3.25788 3.25861 3.66065 3.25861 4.85711V23.574C3.25861 24.7705 3.50738 25.1733 5.01184 25.1733H9.79769C11.3022 25.1733 11.5509 24.7705 11.5509 23.574V4.85711C11.5509 3.66065 11.3022 3.25788 9.79769 3.25788H5.01184Z" fill={active ? '#292D32' : 'white'} />
                        <path id="Vector_2" d="M23.4201 16.2886H18.6343C16.2532 16.2886 15.1041 15.187 15.1041 12.9125V4.85711C15.1041 2.58265 16.265 1.48096 18.6343 1.48096H23.4201C25.8012 1.48096 26.9503 2.58265 26.9503 4.85711V12.9125C26.9503 15.187 25.7894 16.2886 23.4201 16.2886ZM18.6343 3.25788C17.1298 3.25788 16.881 3.66065 16.881 4.85711V12.9125C16.881 14.109 17.1298 14.5117 18.6343 14.5117H23.4201C24.9246 14.5117 25.1734 14.109 25.1734 12.9125V4.85711C25.1734 3.66065 24.9246 3.25788 23.4201 3.25788H18.6343Z" fill={active ? '#292D32' : 'white'} />
                        <path id="Vector_3" d="M23.4201 26.9496H18.6343C16.2532 26.9496 15.1041 25.8479 15.1041 23.5734V21.4411C15.1041 19.1666 16.265 18.0649 18.6343 18.0649H23.4201C25.8012 18.0649 26.9503 19.1666 26.9503 21.4411V23.5734C26.9503 25.8479 25.7894 26.9496 23.4201 26.9496ZM18.6343 19.8419C17.1298 19.8419 16.881 20.2446 16.881 21.4411V23.5734C16.881 24.7699 17.1298 25.1726 18.6343 25.1726H23.4201C24.9246 25.1726 25.1734 24.7699 25.1734 23.5734V21.4411C25.1734 20.2446 24.9246 19.8419 23.4201 19.8419H18.6343Z" fill={active ? '#292D32' : 'white'} />
                    </g>
                </svg></div></NavLink>

                <NavLink style={navLinkStyle} to='/dashboard/tracking' className='p-3 rounded-[8px]'><div><svg width="25" height="25" viewBox="0 0 25 25" fill='none' xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/linear/routing-2">
                        <g id="vuesax/linear/routing-2_2">
                            <g id="routing-2">
                                <path id="Vector" d="M5.68579 9.43066C7.61879 9.43066 9.18579 7.86366 9.18579 5.93066C9.18579 3.99767 7.61879 2.43066 5.68579 2.43066C3.75279 2.43066 2.18579 3.99767 2.18579 5.93066C2.18579 7.86366 3.75279 9.43066 5.68579 9.43066Z" stroke={active ? 'white' : '#292D32'} strokeWidth="1.5" />
                                <path id="Vector_2" d="M17.1858 15.4307H20.1858C21.2858 15.4307 22.1858 16.3307 22.1858 17.4307V20.4307C22.1858 21.5307 21.2858 22.4307 20.1858 22.4307H17.1858C16.0858 22.4307 15.1858 21.5307 15.1858 20.4307V17.4307C15.1858 16.3307 16.0858 15.4307 17.1858 15.4307Z" stroke={active ? 'white' : '#292D32'} strokeWidth="1.5" />
                                <path id="Vector_3" d="M12.2158 5.43066H14.8958C16.7458 5.43066 17.6058 7.72066 16.2158 8.94066L8.22583 15.9307C6.83583 17.1407 7.69583 19.4307 9.53583 19.4307H12.2158" stroke={active ? 'white' : '#292D32'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_4" d="M5.70204 5.93066H5.71359" stroke={active ? 'white' : '#292D32'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_5" d="M18.702 18.9307H18.7136" stroke={active ? 'white' : '#292D32'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </g>
                    </g>
                </svg></div></NavLink>

            </div>
            <div>
                <Link><img src={avatar} alt="" className='' /></Link>
            </div>

        </div>
    </>);
}

export default SideNav;