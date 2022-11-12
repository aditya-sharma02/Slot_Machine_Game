import React from "react";
const Slot = (props) => {
    if (props.x==props.y && props.y==props.z){
        return(
            <>
            <div><h1>{props.x} {props.y} {props.z}</h1></div>
            <h3> Wooo!!!! You Won</h3>
            </>
        )
    }
    else {
        return(
            <>
            <div><h1>{props.x} {props.y} {props.z}</h1></div>
            <h3> Nooo!!!! You Lost</h3>
            </>
        )
    }
}

export default Slot;