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
            <div className="grid grid-cols-12">
                <div className="col-span- min-h-screen">
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