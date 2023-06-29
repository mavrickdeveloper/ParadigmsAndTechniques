import React, { useState } from 'react';

const INITIAL_COUNT = 0;

const incrementCount = (currentCount: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
    setCount(currentCount + 1);
};

const decrementCount = (currentCount: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
    setCount(currentCount - 1);
};

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(INITIAL_COUNT);

    return (
        <div>
            <button onClick={() => decrementCount(count, setCount)}>-</button>
            <span>{count}</span>
            <button onClick={() => incrementCount(count, setCount)}>+</button>
        </div>
    );
};

export default CounterApp;
