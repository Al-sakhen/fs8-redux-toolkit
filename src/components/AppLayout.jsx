import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const AppLayout = () => {
    return (
        <div className="p-6">
        <ToastContainer />
            <Navbar />
            <div className="container pt-12">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
