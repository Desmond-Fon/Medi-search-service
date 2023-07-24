import Nav from "../../components/Nav";
// import map from '../../assets/mapp.png'
import { DataContext } from "../../contexts/Data";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const { setUserLocation } = useContext(DataContext);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // console.log("Latitude is :", position.coords.latitude);
                    // console.log("Longitude is :", position.coords.longitude);
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    localStorage.setItem('userLocation', JSON.stringify({ latitude, longitude }))
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser');
        }
    }, [setUserLocation]);


    // console.log(userLocation);

    return (<>
        <div className=' bg-hero h-screen bg-opacity-5 '>
            <Nav />
            <div className="flex justify-between px-[100px] mt-[20px]">
                <div className="flex flex-col items-start mt-[30px]  p-10 bg-opacity-5 bg-white">
                    <h1 className="text-[60px] font-[700] leading-[76px] text-[#333] mb-[15px]">Healthcare Management <br /> Locator System </h1>
                    <p className="text-[18px] w-[550px]"> The system provides information on available medical specialties and services, helping users make informed decisions about their healthcare needs. <br /><br /> With its user-friendly interface and up-to-date data, the Healthcare Management Locator System makes accessing quality healthcare services easier and more convenient for everyone.
                    </p>
                    <Link to='/dashboard/tracking'><button className='px-[35px] py-[10px] rounded-[5px] bg-[#4762FF] text-[18px] font-[600] text-white mt-[32px]'>Try it out</button></Link>

                </div>
                <div>
                    {/* <img src={map} alt="" /> */}
                </div>
            </div>
        </div>
    </>);
}

export default Home;