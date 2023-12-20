import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
} from "../features/counter/counterSlice";
import { toggleTheme } from "../features/theme/themeSlice";

const Home = () => {
    const dispatch = useDispatch();
    // ============== State ==============
    const { value, maxNum, minNum } = useSelector(({ counter }) => counter);
    const { isDark } = useSelector(({ theme }) => theme);
    // ============== End of State ==============
    // ----------------------------------------------

    // ============== Handlers ==============
    const incrementHandler = () => {
        dispatch(increment());
    };
    const decrementHandler = () => {
        if (value === 0) {
            alert("Counter can't be less than 0");
            return;
        }
        dispatch(decrement());
    };
    const incrementWithPayloadHandler = () => {
        dispatch(incrementByAmount(10));
    };
    const resetHandler = () => {
        dispatch(reset());
    };

    const toggleThemeHandler = () => dispatch(toggleTheme())
    // ============== End of Handlers ==============
    // ----------------------------------------------

    return (
        <div className="pt-20">
            <div className="buttonsContainer">
                <button onClick={incrementHandler} disabled>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={incrementWithPayloadHandler}>
                    Incremet with payload
                </button>
                <button onClick={resetHandler}>Reset</button>
            </div>
            <div className="flex justify-center py-6">
                <h1 className="text-xl">Counter : {value}</h1>
            </div>
            <hr />

            <div className="pt-20 buttonsContainer">
                <button onClick={toggleThemeHandler}>Toggle theme</button>
            </div>
            <div className="flex justify-center py-6">
                <h1 className="text-xl">Theme :{isDark ? "Dark" : "Light"}</h1>
            </div>
        </div>
    );
};

export default Home;
