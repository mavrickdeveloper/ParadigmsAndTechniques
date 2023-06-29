import React, { useState } from 'react';

const CircleCalculator: React.FC = () => {
    // State to keep track of the radius input by the user
    const [radius, setRadius] = useState<number>(0);

    // Procedure to calculate the area of a circle
    const calculateArea = (radius: number): number => {
        return Math.PI * Math.pow(radius, 2);
    };

    // Procedure to calculate the circumference of a circle
    const calculateCircumference = (radius: number): number => {
        return 2 * Math.PI * radius;
    };

    return (
        <div>
            <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                placeholder="Enter radius"
            />
            <p>Area: {calculateArea(radius)}</p>
            <p>Circumference: {calculateCircumference(radius)}</p>
        </div>
    );
};

export default CircleCalculator;
