import React, { useState } from "react";


const Home = () => {
    // ============== State ==============
    const [counter, setCounter] = useState(0);

    // ============== End of State ==============
    // ----------------------------------------------

    // ============== Handlers ==============
    const incrementHandler = () => {
        setCounter(counter + 1);
    };
    const decrementHandler = () => {
        if (counter === 0) {
            alert("Counter can't be less than 0");
            return;
        }
        setCounter(counter - 1);
    };
    const incrementWithPayloadHandler = () => {
        setCounter(counter + 5);
    };
    const resetHandler = () => {
        setCounter(0);
    };
    // ============== End of Handlers ==============
    // ----------------------------------------------

    return (
        <div className="pt-20">
            <div className="buttonsContainer">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={incrementWithPayloadHandler}>
                    Incremet with payload
                </button>
                <button onClick={resetHandler}>Reset</button>
            </div>
            <div className="flex justify-center py-6">
                <h1 className="text-xl">Counter : {counter}</h1>
            </div>
        </div>
    );
};

export default Home;
