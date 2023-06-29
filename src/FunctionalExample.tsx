import React, { useState } from 'react';

const FunctionalExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default FunctionalExample;
