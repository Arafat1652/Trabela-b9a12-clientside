import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashBoard/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="md:flex min-h-screen relative">
            <div>
                <Sidebar/>
            </div>
            <div className="flex-1  md:ml-64">
                <div className="p-5">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;