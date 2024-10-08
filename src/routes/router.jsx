import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Dogs from "../Pages/Dogs/Dogs";
import Book from "../Pages/Book/Book";
import Chat from "../Pages/Chat/CHat";
import Service from "../Pages/Service/Service";
import Calender from "../Pages/Calender/Calender";
import Report from "../Pages/Report/Report";
import Setting from "../Pages/Setting/Setting";
import RescuedDogs from "../Pages/RescuedDogs/RescuedDogs";
import ClientReports from "../Pages/ClientReports/ClientReports";
import Community from "../Pages/Community/Community";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <DashboardLayout/>,
        children:[
            {
                path:"/",
                element: <Dashboard/>
            },
            {
                path:"/dogs",
                element:<Dogs/>
            },
            {
                path:"/books",
                element:<Book/>
            },
            {
                path:"/chat",
                element:<Chat/>
            },
            {
                path:"/service",
                element:<Service/>
            },
            {
                path:"/calender",
                element:<Calender/>
            },
            {
                path:"/report",
                element:<Report/>
            },
            {
                path:"/rescuedDogs",
                element:<RescuedDogs/>
            },
            {
                path:"/clientReports",
                element:<ClientReports/>
            },
            {
                path:"/community",
                element:<Community/>
            },
            {
                path:"/settings",
                element:<Setting/>
            }
        ]
    }
])