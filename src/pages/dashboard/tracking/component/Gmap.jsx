// import React from "react";
import GoogleMapReact from 'google-map-react';
import boldMap from '../../../../assets/boldMap.svg'
import message from '../../../../assets/Messages.png'
import { useEffect, useState } from 'react'
import axios from 'axios';



// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div><img src={boldMap} alt='' className='h-7' /><p className='text-bold text-red-400 text-[14px] bg-white w-fit px-2 py-1 rounded-md'>{text}</p></div>;
// eslint-disable-next-line react/prop-types
const HospitalComponent = ({ text }) => <div><img src={message} alt='' className='h-4' /> <p className='text-bold text-green-400 text-[12px] bg-white w-fit px-2 py-1 rounded-md'>{text}</p></div>;

export default function SimpleMap() {
    const [userLocation, setUserLocation] = useState(null)
    const [hospitals, setHospitals] = useState(null)

    const defaultProps = {
        center: {
            lat:  9.94108,
            lng: 8.86918,
        },
        zoom: 15,
    };

    const mapOptions = {
        gestureHandling: "none",
        zoomControl: false,
    };

    const fetchNearbyHospitals = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${latitude},${longitude})[amenity=hospital];out;`
            );
            console.log(response.data.elements);
            setHospitals(response.data.elements)
        } catch (error) {
            console.error(error);
        }
    };

    console.log(hospitals)

    useEffect(() => {
        // Get the user's location using the Geolocation API or any other method
        const userLatitude = 9.94108 // Example latitude
        const userLongitude = 8.86918; // Example longitude
        fetchNearbyHospitals(userLatitude, userLongitude);
    }, []);

    // const fetchDataWithLocation = async () => {
    //     try {
    //         const position = await new Promise((resolve, reject) => {
    //             navigator.geolocation.getCurrentPosition(resolve, reject);
    //         });

    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;
    //         console.log(latitude, longitude)

    //         // Call your function with the obtained location parameters
    //         fetchNearbyHospitals(latitude, longitude);
    //     } catch (error) {
    //         console.error(error);
    //         // Handle any error that occurred during obtaining the user's location
    //     }
    // };

    // useEffect(() => {
    //     fetchDataWithLocation();
    // }, []);




    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude is :", position.coords.latitude);
                    console.log("Longitude is :", position.coords.longitude);
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    // Get the user's location using the Geolocation API or any other method
                    // const userLatitude = userLocation?.latitude; // Example latitude
                    // const userLongitude = userLocation?.longitude; // Example longitude
                    // fetchNearbyHospitals(userLatitude, userLongitude);
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser');
        }
    }, []);

    return (
        // Important! Always set the container height explicitly
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
                        text={hospital.tags.name} />
                ))}
            </GoogleMapReact>
        </div>
    );
}