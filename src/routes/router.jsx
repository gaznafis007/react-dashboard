import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Dogs from "../Pages/Dogs/Dogs";

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
            }
        ]
    }
])