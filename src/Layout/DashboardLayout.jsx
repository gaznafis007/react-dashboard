import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideNav from "../Shared/SideNav/SideNav";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex flex-row">
        <SideNav />
        <div className="flex flex-col w-3/4">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
