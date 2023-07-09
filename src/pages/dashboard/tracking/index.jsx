import call from '../../../assets/Calls.png'
import message from '../../../assets/Messages.png'
// import location from '../../../assets/location.svg'
import hospital from '../../../assets/hospital.png'
import locationn from '../../../assets/locationn.svg'
import boldMap from '../../../assets/boldMap.svg'
import search from '../../../assets/search.svg'
import settings from '../../../assets/settings.svg'
// import { useEffect, useRef, useState } from 'react'
// import GoogleMapReact from 'google-map-react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css'
import MapComponent from './component/Map'

// eslint-disable-next-line react/prop-types
// const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Tracking = () => {

    // const [userLocation, setUserLocation] = useState(null);
    // const defaultProps = {
    //     center: {
    //         lat: 9.896527,
    //         lng: 8.858331
    //     },
    //     zoom: 11
    // };
    // const ZOOM_LEVEL = 10; 
    // const mapRef = useRef()



    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //     });
    // }, [])

    //     const getlocation = () => {
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             console.log("Latitude is :", position.coords.latitude);
    //             console.log("Longitude is :", position.coords.longitude);
    //     })
    // }

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 console.log("Latitude is :", position.coords.latitude);
    //                 console.log("Longitude is :", position.coords.longitude);
    //                 const { latitude, longitude } = position.coords;
    //                 setUserLocation({ latitude, longitude });
    //             },
    //             (error) => {
    //                 console.error('Error getting user location:', error);
    //             }
    //         );
    //     } else {
    //         console.error('Geolocation is not supported by this browser');
    //     }
    // }, []);

    // const position = [3.3792057, 6.5243793]



    return (<>
        <div className="flex w-full  relative ">
        <div className="absolute bg-white h-[100vh] flex justify-start items-center flex-col pt-[40px] px-[30px] bg-opacity-70 w-[33%] z-40">
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
                    <div className=' w-[1px] h-full ml-[17px] border-dashed border-[#E3E3E3] border-[1px] text-white'>.</div>
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
                <MapComponent />
            {/* </div> */}
            </div> 
        </div>
    </>);
}

export default Tracking;