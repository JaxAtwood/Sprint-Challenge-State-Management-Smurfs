import React, { useState } from "react";

const SmurfForm = (props) => {
    
    const [input, setInput] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        props.addTodo(input)
        // props.addAge(age)
        // props.addHeight(height)
        setInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Smurf Name:</label>
                <input
                    type="text"
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <label>Smurf Age:</label>
                <input
                    type="age"
                    // value={age}
                    // onChange={event => setAge(event.target.value)}
                />
                <label>Smurf Height:</label>
                <input
                    type="height"
                    // value={height}
                    // onChange={event => setHeight(event.target.value)}
                />
                <button>Add Smurf</button>
            </form>
        </div>
    )
};

export default SmurfForm;