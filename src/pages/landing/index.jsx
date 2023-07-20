import Nav from "../../components/Nav";
// import map from '../../assets/mapp.png'
import { DataContext } from "../../contexts/Data";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const { setUserLocation, userLocation } = useContext(DataContext);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude is :", position.coords.latitude);
                    console.log("Longitude is :", position.coords.longitude);
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


    console.log(userLocation);

    return (<>
        <div className=' bg-hero h-screen bg-opacity-5'>
            <Nav />
            <div className="flex justify-between px-[120px] mt-[50px]">
                <div className="flex flex-col items-start mt-[30px]  p-10 bg-opacity-5 bg-white">
                    <h1 className="text-[60px] font-[700] leading-[76px] text-[#333] mb-[15px]">Healthcare search <br /> made easy </h1>
                    <p className="text-[18px] w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    <Link to='/login'><button className='px-[35px] py-[10px] rounded-[5px] bg-[#4762FF] text-[18px] font-[600] text-white mt-[32px]'>Try it out</button></Link>

                </div>
                <div>
                    {/* <img src={map} alt="" /> */}
                </div>
            </div>
        </div>
    </>);
}

export default Home;