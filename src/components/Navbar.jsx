import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { value, maxNum, minNum } = useSelector(({ counter }) => counter);

    return (
        <header>
            <span className="text-lg">
                <nav>
                    <ul className="flex justify-center gap-x-3">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                    </ul>
                </nav>
            </span>
            <h1 className="text-2xl font-bold">Redux toolkit 😎</h1>
        </header>
    );
};

export default Navbar;
