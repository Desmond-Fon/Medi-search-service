import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    // const navigate = useNavigate();

    // const active = JSON.parse(localStorage.getItem('user'))
    //   useEffect(() => {
    //       !active && navigate('/')
    // }, [active, navigate])


    return (<>
   <div className='overflow-hidden h-[100vh]'>
            <div className="flex flex-col">
                <div className="">
                    <SideNav />
                </div>
                <div className="col-span-11 max-h-screen overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
}

export default Dashboard;