import React from "react";

const Thing = props => {
    return (
        <div>
            <p>{props.banana.name}</p>
            <p>{props.banana.age}</p>
            <p>{props.banana.height}</p>
        </div>
    )
}

export default Thing;