import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
// import { AuthContext } from "../contexts/Auth";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    // const navigate = useNavigate();
    // const { admin } = useContext(AuthContext);

    // useEffect(() => {
    //     !admin && navigate('/adminLogin')
    // }, [admin, navigate])

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