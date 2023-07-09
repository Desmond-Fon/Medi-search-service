import { useEffect, useState, useRef } from 'react';
// import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxgl from 'mapbox-gl';
import axios from 'axios'; 
import 'mapbox-gl/dist/mapbox-gl.css'; // Import the stylesheet

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzMS1tYWlsYm94IiwiYSI6ImNsanZqMDFtNDBxNm4zaW1sd3VtOWtnZmQifQ.xXKmSfYpVrV4cJXrBXn-ig';


const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [hospitals, setHospitals] = useState([]);

    const mapContainerRef = useRef(null);


        useEffect(() => {
            // Get user's location
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([longitude, latitude]);
                },
                error => {
                    console.error(error);
                }
            );

            // Initialize map
            const initializeMap = ({ setMap, mapContainer }) => {
                const map = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: userLocation, // Update this line
                    zoom: 12
                });

                map.on('load', () => {
                    setMap(map);
                });
            };

            if (!map && userLocation) initializeMap({ setMap, mapContainer: mapContainerRef });
        }, [map, userLocation]);

    useEffect(() => {
        if (map && userLocation) {
            // Fetch nearby hospitals
            const fetchHospitals = async () => {
                try {
                    const response = await axios.get(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=${userLocation[0]},${userLocation[1]}&access_token=${mapboxgl.accessToken}`
                    );
                    console.log(response.data)
                    setHospitals(response.data.features);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchHospitals();
        }
    }, [map, userLocation]);

    return (
        <div
            ref={el => (mapContainerRef.current = el)}
            style={{ height: '100vh', width: '100%' }}
        />
    );
};

export default MapComponent;
