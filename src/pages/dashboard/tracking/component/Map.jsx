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
    const [lat, setLat] = useState(9.94108);
    const [lng, setLng] = useState(8.86918);
    const [userLocation, setUserLocation] = useState(null);
    const [hospitals, setHospitals] = useState([]);
    const [hospitalMarkers, setHospitalMarkers] = useState([]);

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
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=hospital&key=AIzaSyCQcF7gWX6ljz1MSEiLBbrx11s1iv7FvVg`;

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
    }, [])

    useEffect(() => {
        if (map && userLocation) {
            // Fetch nearby hospitals
            const fetchHospitals = async () => {
                try {
                    const response = await axios.get(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=${userLocation[0]},${userLocation[1]}&access_token=${mapboxgl.accessToken}`
                    );
                    // console.log(response.data);
                    const hospitalsData = response.data.features;

                    // Create map markers for hospitals
                    const hospitalMarkers = hospitalsData.map(hospital => {
                        const { center, place_name } = hospital;
                        const [longitude, latitude] = center;

                        const popup = new mapboxgl.Popup({ offset: 25 }).setText(place_name);

                        const marker = new mapboxgl.Marker()
                            .setLngLat([longitude, latitude])
                            .setPopup(popup)
                            .addTo(map);

                        return marker;
                    });

                    // Set the hospitals and their markers in the state
                    setHospitals(hospitalsData);
                    setHospitalMarkers(hospitalMarkers);
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
