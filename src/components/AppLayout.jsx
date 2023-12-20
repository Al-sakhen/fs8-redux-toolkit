import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="p-6">
            <Navbar />
            <div className="container pt-12">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
