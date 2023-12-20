import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useRemoveItemsFromCartMutation } from "../services/TariqApi";
import { toast } from "react-toastify";

const Navbar = () => {
    const [removeItems , {isError ,isSuccess}] = useRemoveItemsFromCartMutation();

    const handleRemoveItems = () => {
        removeItems();
    }
    if(isSuccess){
        toast.success("Removed Successfully");
    }
    if(isError){
        toast.error("Error while removing items");
    }
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
            <button onClick={handleRemoveItems} className="p-1 text-black bg-orange-300">
                remove items
            </button>
            <h1 className="text-2xl font-bold">Redux toolkit 😎</h1>
        </header>
    );
};

export default Navbar;
