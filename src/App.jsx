import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Products from "./pages/Products";
import ShowProduct from "./pages/ShowProduct";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ShowProduct />} />
            </Route>
        </Routes>
    );
}

export default App;
