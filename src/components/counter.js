import React, { useState } from "react";
import counter from "./counter.css"






export default function Counter(){

    let [counter, setCounter]= useState(0)
    //handle increament

const handleIncreament = (event)=>{
    event.preventDefault();
   setCounter(prev => prev + 1)
}

//handle decreament

const handleDecreament = (event)=>{
    event.preventDefault();
    setCounter(prev => prev - 1)
}
   
    return(<div className="main-div">
        <div className="counter-label" >{counter}</div>
        <button className="counter-input" onClick={handleIncreament}>Increment</button>
        <button className="counter-input" onClick={handleDecreament }>Decrement</button>
    </div>)
}