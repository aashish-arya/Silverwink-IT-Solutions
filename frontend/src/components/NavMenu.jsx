import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = ({ items = [] }) => {
    return (
        <nav className="text-white bg-orange-600 p-2 rounded-md w-full">
            <ul className=" flex justify-around ">
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded transition ${isActive ? "bg-orange-800 font-semibold" : "hover:bg-orange-700"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;
