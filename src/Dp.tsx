import React, { useState } from 'react';

const FibonacciCalculator: React.FC = () => {
    // State to keep track of the position input by the user
    const [position, setPosition] = useState<number>(0);

    // Function to calculate the nth Fibonacci number using Dynamic Programming
    const fibonacci = (n: number): number => {
        const fib: number[] = Array(n + 1).fill(0);
        fib[1] = 1;

        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        return fib[n];
    };

    return (
        <div>
            <input
                type="number"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                placeholder="Enter position"
            />
            <p>Fibonacci number at position {position}: {fibonacci(position)}</p>
        </div>
    );
};

export default FibonacciCalculator;
