/* eslint-disable react/prop-types */
// import React from "react";
import GoogleMapReact from 'google-map-react';
import boldMap from '../../../../assets/boldMap.svg'
// import message from '../../../../assets/Messages.png'
import locationn from '../../../../assets/locationn.svg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { DataContext } from '../../../../contexts/Data';


// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div><img src={locationn} alt='' className='h-7' /><p className='text-bold text-green-400 text-[14px] bg-white w-fit px-2 py-1 rounded-md'>{text}</p></div>;
// eslint-disable-next-line react/prop-types


export default function SimpleMap() {
    const { userLocation } = useContext(DataContext);

    const [hospitals, setHospitals] = useState(null)



    // console.log(isHovering)

    let location = JSON.parse(localStorage.getItem('userLocation'));
    // console.log(location);
    // console.log(localStorage.getItem('userLocation'));

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

    // console.log(hospitals)

    useEffect(() => {
        const userLatitude = location.latitude
        const userLongitude = location.longitude;
        fetchNearbyHospitals(userLatitude, userLongitude);
    }, [location.latitude, location.longitude]);


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={mapOptions}
            >
                <AnyReactComponent
                    lat={userLocation?.latitude}
                    lng={userLocation?.longitude}
                    text={'My Location'}
                />
                {hospitals && hospitals.map((hospital) => (
                    <HospitalComponent
                        key={hospital.id}
                        lat={hospital.lat}
                        lng={hospital.lon}
                        text={hospital.tags.name}
                        hospital={hospital}
                        />
                ))}
            </GoogleMapReact>
        </div>
    );
}

const HospitalComponent = ({ text, hospital }) => {
    const [isHovering, setIsHovering] = useState(false);
    const { setShow, setData} = useContext(DataContext);

    const handleMouseOver = () => {
        // console.log('mouse over');
        setIsHovering(true);
    };

    const handleShow = () => {
        // console.log('click')
        // console.log(hospital)
        setData(hospital)
        setShow(true)
    }

    // console.log(show)
    // console.log(data)

    const handleMouseOut = () => {
        // console.log('mouse out');
        setIsHovering(false);
    };
    return (<div>
        <div onClick={handleShow
        }>
            <img src={boldMap} alt='' className='h-5 cursor-pointer' onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} />
        </div> {isHovering ? (<p className='text-bold text-blue-500 text-[12px] bg-white w-fit px-2 py-1 rounded-md'>{text}</p>) : ''}
    </div>)
}