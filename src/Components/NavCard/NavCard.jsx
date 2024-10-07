import {  NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const NavCard = ({children, title, path}) => {
    return (
        <NavLink to={path} className={({isActive}) => isActive ? `w-full text-blue-400 bg-white text-xl rounded-md p-2 flex flex-row gap-2 items-center justify-start` : "w-full bg-blue-400 text-white text-xl rounded-md p-2 flex flex-row gap-2 items-center justify-start"}>
            {children}
            <span className="capitalize">{title}</span>
        </NavLink>
    );
};

export default NavCard;