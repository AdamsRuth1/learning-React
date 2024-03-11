import React from "react";
export default function Car({brand, color, model}){
    return <div>
        {`${color} ${brand}  ${model}`}
    </div>
}