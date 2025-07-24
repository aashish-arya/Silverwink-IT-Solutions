import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = ({ items = [] }) => {
    return (
        <nav className="bg-slate-800 text-white p-3 rounded-md w-full ">
            <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-around gap-3">
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-m border-[1px] border-white text-sm sm:text-base text-center transition-all duration-300 ease-in-out ${
                                    isActive
                                        ? 'bg-slate-700 font-semibold'
                                        : 'hover:bg-slate-600'
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
