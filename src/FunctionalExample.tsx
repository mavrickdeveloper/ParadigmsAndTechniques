import React, { useState } from "react";

// This component is an example of Functional Programming
const FunctionalCounter: React.FC = () => {
    // Using React state hooks for immutability
    const [count, setCount] = useState<number>(0);

    // A pure function that doesn't change anything outside of its scope
    // and only returns the new state based on the input
    const incrementCount = (): void => {
        // Using a functional update to ensure we have the latest state
        setCount(prevCount => prevCount + 1);
    };

    // Rendering the UI based on the current state
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default FunctionalCounter;
