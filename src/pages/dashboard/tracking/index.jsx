import call from '../../../assets/Calls.png'
import message from '../../../assets/Messages.png'
import hospital from '../../../assets/hospital.png'
import locationn from '../../../assets/locationn.svg'
import boldMap from '../../../assets/boldMap.svg'
import 'leaflet/dist/leaflet.css'
import SimpleMap from './component/Gmap'
// eslint-disable-next-line react/prop-types
import { useContext } from 'react'
import { DataContext } from '../../../contexts/Data';


const Tracking = () => {
    const { data, show, setShow } = useContext(DataContext)

    const handleClose = () => {
        setShow(false)
    }

    const randomNumber = Math.floor(Math.random() * 21) + 10;

    const userLatitude = JSON.parse(localStorage.getItem('userLocation')).latitude;
    const latDifference = data?.lat - userLatitude;
    const displayNumber = latDifference < 0.01 && latDifference > - 0.01 ? randomNumber : Math.floor(Math.random() * 21) + 40;


    return (<>
        <div className="flex w-full  relative overflow-x-hidden">
            {<div className={`absolute h-[100vh] flex justify-start items-center flex-col pt-[30px] px-[10px] -translate-x-0 ${!show && "-translate-x-[150%]"} z-40 transition duration-300 ease-in-out max-w-[400px]`}>

                <div className='flex justify-end w-full' onClick={handleClose}>
                    <div className='bg-white h-5 w-5 rounded-full text-center flex justify-center items-center mb-[20px] pb-[2px] cursor-pointer transition-all duration-1000'>x</div>
                </div>


                <div className='details w-[90%] p-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[#B0B0B0] font-[600] text-[12px]'>Healthcare facility</p>
                            <p className='font-[700] text-[16px] w-[200px]'>{data?.tags.name}</p>
                        </div>
                        <div><img src={hospital} alt="" className='' /></div>
                    </div>
                    <div className='bg-[#ECECEC] h-[1px] w-full mt-[15px] mb-[20px]'></div>
                    <div className='flex flex-col'>
                        <div className='flex justify-start gap-3 items-center'>
                            <img src={locationn} alt="" className='h-[30px]' />
                            <div>
                                <p className='font-[700] text-[14px]'>My location</p>
                                <p className='font-[400] text-[10px] text-[#B0B0B0]'>{data?.tags['addr:city']} </p>
                            </div>
                        </div>
                        <div className=' w-[1px] h-full ml-[13px] border-dashed border-[#E3E3E3] border-[1px] text-white'>.</div>
                        <div className='flex justify-start gap-3 items-center'>
                            <img src={boldMap} alt="" className='h-[30px]' />
                            <div>
                                <p className='font-[700] text-[14px]'>{data?.tags.name} </p>
                                <p className='font-[400] text-[10px] text-[#B0B0B0]'>{data?.tags['addr:street']} </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#ECECEC] h-[1px] w-full mt-[15px] mb-[20px]'></div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[#B0B0B0] font-[600] text-[12px]'>Distance :  {displayNumber} mins</p>
                            <p className='font-[700] text-[14px]'>{data?.tags.name}</p>
                            <p className='text-[#484A58] font-[600] text-[12px]'>{data?.tags['addr:street']}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div><img src={call} alt="" className='w-[70%]' /></div>
                            <div><img src={message} alt="" className='w-[70%]' /></div>
                        </div>
                    </div>
                </div>
            </div>}

            <div className="w-[100%] z-10">
                <SimpleMap />
            </div>
        </div>
    </>);
}

export default Tracking;