import call from '../../../assets/Calls.png'
import message from '../../../assets/Messages.png'
// import location from '../../../assets/location.svg'
import hospital from '../../../assets/hospital.png'
import locationn from '../../../assets/locationn.svg'
import boldMap from '../../../assets/boldMap.svg'
// import search from '../../../assets/search.svg'

// import settings from '../../../assets/settings.svg'
// import { useEffect, useRef, useState } from 'react'
// import GoogleMapReact from 'google-map-react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'
// import MapComponent from './component/Map'
import SimpleMap from './component/Gmap'
// import YMapsComponent from './component/YmapsComponent'

// eslint-disable-next-line react/prop-types
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
import { useContext } from 'react'
import { DataContext } from '../../../contexts/Data';


const Tracking = () => {
    const { data, show, setShow } = useContext(DataContext)

    // console.log(data, show)
    const handleClose = () => {
        setShow(false)
    }

    const randomNumber = Math.floor(Math.random() * 21) + 10;

    const userLatitude = JSON.parse(localStorage.getItem('userLocation')).latitude;
    // const userLongitude = JSON.parse(localStorage.getItem('userLocation')).latitude;
    const latDifference = data?.lat - userLatitude;
    // const lngDifference = data?.lng - userLongitude;
    const displayNumber = latDifference < 0.01 && latDifference > - 0.01 ? randomNumber : Math.floor(Math.random() * 21) + 40;
    // console.log(latDifference)



    return (<>
        <div className="flex w-full  relative overflow-x-hidden">
            {<div className={`absolute bg-white h-[100vh] flex justify-start items-center flex-col pt-[30px] px-[30px] bg-opacity-30 -translate-x-0 ${!show && "-translate-x-[150%]"} z-40 transition duration-300 ease-in-out`}>

                <div className='flex justify-end w-full' onClick={handleClose}>
                    <div className='bg-white h-5 w-5 rounded-full text-center flex justify-center items-center mb-[20px] pb-[2px] cursor-pointer transition-all duration-1000'>x</div>
                </div>
                {/* <div className='w-full relative'>
                    <img src={search} alt="" className='absolute top-2 left-3 h-4' />
                    <input type="text" name="" id="" className='w-[100%] h-[35px] search pl-10 text-sm outline-none' placeholder='Search...' />
                    <img src={settings} alt="" className='absolute top-2 right-3 h-4' />
                </div> */}

                <div className='flex w-full mt-[20px] mb-[16px]'>
                    <p className='text-left font-[700] text-[16px]'>Selected Location</p>
                </div>

                <div className='details w-full p-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[#B0B0B0] font-[600] text-[12px]'>Healthcare facility</p>
                            <p className='font-[700] text-[16px] w-[200px]'>{data?.tags.name}</p>
                        </div>
                        <div><img src={hospital} alt="" /></div>
                    </div>
                    <div className='bg-[#ECECEC] h-[1px] w-full mt-[15px] mb-[20px]'></div>
                    <div className='flex flex-col'>
                        <div className='flex justify-start gap-3 items-center'>
                            <img src={locationn} alt="" />
                            <div>
                                <p className='font-[700] text-[14px]'>My location</p>
                                <p className='font-[400] text-[10px] text-[#B0B0B0]'>{data?.tags['addr:city']} </p>
                            </div>
                        </div>
                        <div className=' w-[1px] h-full ml-[17px] border-dashed border-[#E3E3E3] border-[1px] text-white'>.</div>
                        <div className='flex justify-start gap-3 items-center'>
                            <img src={boldMap} alt="" />
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
                        <div className='flex items-center gap-4'>
                            <div><img src={call} alt="" /></div>
                            <div><img src={message} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>}


            <div className="w-[100%] z-10">

                {/* <div style={{ height: '100vh', width: '100%' }}> */}
                {/* <MapContainer
                        center={{ lat: userLocation ? userLocation[0] : 3.3792057, lng: userLocation ? userLocation[1] : 3.3792057 }}
            zoom={ZOOM_LEVEL} 
           ref={mapRef}
            > 
            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer> */}
                {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> */}
                {/* <MapComponent /> */}
                <SimpleMap />
                {/* <YMapsComponent /> */}
                {/* </div> */}
            </div>
        </div>
    </>);
}

export default Tracking;