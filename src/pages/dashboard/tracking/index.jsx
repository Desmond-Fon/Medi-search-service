import call from '../../../assets/Calls.png'
import message from '../../../assets/Messages.png'
// import location from '../../../assets/location.svg'
import hospital from '../../../assets/hospital.png'
import locationn from '../../../assets/locationn.svg'
import boldMap from '../../../assets/boldMap.svg'
import search from '../../../assets/search.svg'
import settings from '../../../assets/settings.svg'
import { useEffect, useState } from 'react'


const Tracking = () => {
    const [userLocation, setUserLocation] = useState(null);


    useEffect (() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }, [])

//     const getlocation = () => {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             console.log("Latitude is :", position.coords.latitude);
//             console.log("Longitude is :", position.coords.longitude);
//     })
// }

useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);                   
             const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser');
        }
    }, []);

    console.log(userLocation);
    return (<div className="flex w-full bg-blue-300 relative ">
        <div className="absolute bg-white h-[100vh] flex justify-start items-center flex-col pt-[40px] px-[30px] bg-opacity-50 w-[35%]">
            <div className='w-full relative'>
                <img src={search} alt="" className='absolute top-2 left-3 h-4' />
                <input type="text" name="" id="" className='w-[100%] h-[35px] search pl-10 text-sm outline-none' placeholder='Search...' />
                <img src={settings} alt="" className='absolute top-2 right-3 h-4' />
            </div>

            <div className='flex w-full mt-[20px] mb-[16px]'>
                <p className='text-left font-[700] text-[16px]'>Selected Location</p>
            </div>

            <div className='details w-full p-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[#B0B0B0] font-[600] text-[12px]'>Healthcare facility</p>
                        <p className='font-[700] text-[16px]'>Hospital Name</p>
                    </div>
                    <div><img src={hospital} alt="" /></div>
                </div>
                <div className='bg-[#ECECEC] h-[1px] w-full mt-[15px] mb-[20px]'></div>
               <div className='flex flex-col'>
                    <div className='flex justify-start gap-3 items-center'>
                        <img src={locationn} alt="" />
                        <div>
                            <p className='font-[700] text-[14px]'>2972 Westheimer </p>
                            <p className='font-[400] text-[10px] text-[#B0B0B0]'>Rd. Santa Ana, Illinois 85486 </p>
                        </div>
                    </div>
                    <div className=' w-[1px] h-full ml-[17px] border-dashed border-[#E3E3E3] border-[1px] text-white'>`</div>
                    <div className='flex justify-start gap-3 items-center'>
                        <img src={boldMap} alt="" />
                        <div>
                            <p className='font-[700] text-[14px]'>2972 Westheimer </p>
                            <p className='font-[400] text-[10px] text-[#B0B0B0]'>Rd. Santa Ana, Illinois 85486 </p>
                        </div>
                    </div>
               </div>

                <div className='bg-[#ECECEC] h-[1px] w-full mt-[15px] mb-[20px]'></div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[#B0B0B0] font-[600] text-[12px]'>This is where the distance in km will be</p>
                        <p className='font-[700] text-[14px]'>Hospital Name</p>
                        <p className='text-[#484A58] font-[600] text-[12px]'>Mariene, LTD</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div><img src={call} alt="" /></div>
                        <div><img src={message} alt="" /></div> 
                    </div>
                </div>
            </div>
        </div>


        <div className="w-[100%] h-[100vh] bg-yellow-600"><p></p></div>
    </div>);
}

export default Tracking;