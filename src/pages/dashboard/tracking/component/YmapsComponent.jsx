import { useEffect, useRef } from "react";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

const YMapsComponent = () => {
    const mapRef = useRef(null);
    const ymapsRef = useRef(null);

    useEffect(() => {
        const map = mapRef.current;
        const ymaps = ymapsRef.current;

        const addSearchControlEvents = () => {
            const searchControl = new ymaps.control.SearchControl({
                options: {
                    float: "left",
                    floatIndex: 300,
                    provider: "yandex#search",
                    geoObjectStandardPreset: "islands#blueDotIcon",
                    placeholderContent: "Поиск мест и адресов",
                    maxWidth: 320,
                    size: "large"
                }
            });
            map.controls.add(searchControl);

            searchControl.events.add("resultselect", function (e) {
                const searchCoords =
                    searchControl.getResponseMetaData().SearchResponse.Point.coordinates;
                const display =
                    searchControl.getResponseMetaData().SearchResponse.display;

                if (display && display === "multiple") {
                    map.setCenter([searchCoords[1], searchCoords[0]], 11);
                }
            });
        };

        if (ymaps && map) {
            ymaps.load().then((ymapsInstance) => {
                ymapsRef.current = ymapsInstance;
                addSearchControlEvents();
            });
        }
    }, []);

    return (
        <YMaps query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}>
            <Map
                state={{ center: [9.94108, 8.86918], zoom: 10 }}
                instanceRef={mapRef}
                width="100%"
                height="400px"
                // modules={["control.SearchControl"]}
            >
                {/* <ZoomControl options={{ float: "none", position: { top: 100, right: 10 } }} /> */}
            </Map>
        </YMaps>
    );
};

export default YMapsComponent;
