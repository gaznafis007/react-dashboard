import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <h2 className="text-4xl">this is home</h2>
            <Link to="/dogs" className="text-blue-400">Dogs</Link>
        </div>
    );
};

export default Dashboard;