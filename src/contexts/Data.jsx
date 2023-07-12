import { createContext, useState } from "react";

export const DataContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const [userLocation, setUserLocation] = useState(null);
    const [hospitals, setHospitals] = useState([]);
    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)


    return <DataContext.Provider value={{ userLocation, setUserLocation, hospitals, setHospitals, show, setShow, data, setData }}
    >{children}</DataContext.Provider>;
}