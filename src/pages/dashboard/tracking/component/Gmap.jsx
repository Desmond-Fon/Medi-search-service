/* eslint-disable react/prop-types */
import GoogleMapReact from 'google-map-react';
import boldMap from '../../../../assets/boldMap.svg'
import locationn from '../../../../assets/locationn.svg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { DataContext } from '../../../../contexts/Data';

const api_key = import.meta.env.VITE_API_KEY;


// eslint-disable-next-line react/prop-types
const AnyReactComponent = () => <div><img src={locationn} alt='' className='h-7' /><div className='my-2 text-bold text-[#232323] text-[13px] bg-white w-[150px] px-2 py-2 rounded-md font-bold flex justify-around items-center'><img src={locationn} alt='' className='h-5' /><p> My Location </p></div></div>;
// eslint-disable-next-line react/prop-types


export default function SimpleMap() {
    const { userLocation } = useContext(DataContext);

    const [hospitals, setHospitals] = useState(null)


    let location = JSON.parse(localStorage.getItem('userLocation'));

    const defaultProps = {
        center: {
            lat: location.latitude,
            lng: location.longitude,
        },
        zoom: 12,
    };

    const mapOptions = {
        gestureHandling: "none",
        zoomControl: false,
    };

    const fetchNearbyHospitals = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://overpass-api.de/api/interpreter?data=[out:json];node(around:15000,${latitude},${longitude})[amenity=hospital];out;`
            );
            console.log(response.data.elements);
            setHospitals(response.data.elements)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const userLatitude = location.latitude
        const userLongitude = location.longitude;
        fetchNearbyHospitals(userLatitude, userLongitude);
    }, [location.latitude, location.longitude]);


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: api_key }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={mapOptions}
            >
                <AnyReactComponent
                    lat={userLocation?.latitude}
                    lng={userLocation?.longitude}
                />
                {hospitals && hospitals.map((hospital) => (
                    <HospitalComponent
                        key={hospital.id}
                        lat={hospital.lat}
                        lng={hospital.lon}
                        text={hospital.tags.name}
                        location={hospital.tags['addr:city']}
                        hospital={hospital}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
}

const HospitalComponent = ({ text, hospital, location }) => {
    const [isHovering, setIsHovering] = useState(false);
    const { setShow, setData } = useContext(DataContext);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleShow = () => {
        setData(hospital)
        setShow(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (<div>
        <div onClick={handleShow
        }>
            <img src={boldMap} alt='' className='h-5 cursor-pointer' onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} />
        </div> {isHovering ? (<div className='my-2 text-bold text-[#232323] text-[13px] bg-white w-[150px] px-2 py-2 rounded-md font-bold flex justify-around items-center'>
            <img src={boldMap} alt='' className='h-5 cursor-pointer' />
            <div>
                <p className='break-normal'>{text}</p>
                <p className='font-normal text-[#B0B0B0] text-[12px]'>{location}</p>
            </div>
            </div>) : ''}
    </div>)
}