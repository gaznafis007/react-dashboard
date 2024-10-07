import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideNav from "../Shared/SideNav/SideNav";


const DashboardLayout = () => {
    return (
        <div>
            <SideNav/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;