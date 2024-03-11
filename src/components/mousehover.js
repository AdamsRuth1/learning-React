
import "./submit.css"
import React, { useState } from "react";


export default function MouseHover(){
    const [state, setState] = useState("This page is designed by Adams Ruth")
    return(
        <div onMouseOver={event =>{
            setState("Welcome to my page thank you for visiting")
            setTimeout(() => {
                setState("This page is designed by Adams Ruth")
            }, 1000);
        }} className="hello">
            {state}
        </div>
    )
}
// export default function MouseHover(){
//     const [state, setState] = useState("my name is Adams Ruth")
//         return (
//             <div onMouseOver={event =>{
//                setState("welcome to my page")
//             }} className="hello">
//             {state}
//             </div>
//         )
// }