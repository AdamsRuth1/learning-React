import React from "react";

const handleClick = (event) => {
    alert("hello")
}
function ListClick(){
   
    return (<div>
       <button onClick={handleClick}>Click me</button> 
    </div>)
}
export default ListClick;