import React, { useState } from "react";

// This component is an example of Imperative Programming
const ImperativeCounter: React.FC = () => {
    // keep track of count state
    const [count, setCount] = useState<number>(0);

    // This is the function that will be called when the button is clicked
    const handleIncrement = (): void => {
        // how to update the state
        setCount(count + 1);
    };

    // Rendering the count and a button to increment it
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default ImperativeCounter;
