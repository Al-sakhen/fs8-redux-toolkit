import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";


function App() {
    
    return (
        <div className="container p-4">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
