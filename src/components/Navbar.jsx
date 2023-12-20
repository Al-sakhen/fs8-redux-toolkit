import React from "react";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {value , maxNum , minNum} = useSelector(({counter}) => counter);

    return (
        <header>
            <span className="text-lg">
                Counter :
                <span className="pl-2 font-semibold text-red-500">
                    {value}
                </span>
            </span>
            <h1 className="text-2xl font-bold">Redux toolkit 😎</h1>
        </header>
    );
};

export default Navbar;
