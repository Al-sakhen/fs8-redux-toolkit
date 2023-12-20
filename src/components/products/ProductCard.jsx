import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    let { _id, name, finalPrice, mainImage } = product;

    return (
        <NavLink
            to={`/products/${_id}`}
            className="p-3 transition duration-300 ease-in-out border-2 rounded-lg border-emerald-400 bg-slate-900/50 hover:bg-emerald-900/80 hover:-translate-y-2"
        >
            <div className="flex justify-center h-40">
                <img className="object-cover" src={mainImage.secure_url} />
            </div>
            <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-center underline">
                    {name}
                </h3>
                <p className="py-2 text-lg font-semibold">${finalPrice}</p>
            </div>
        </NavLink>
    );
};

export default ProductCard;
