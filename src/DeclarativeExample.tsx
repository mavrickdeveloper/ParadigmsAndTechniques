import React from "react";

// Defining TypeScript interface for component props
type DisplayListProps = {
    items: string[];
};

// This component is an example of Declarative Programming
const DisplayList: React.FC<DisplayListProps> = ({ items }) => {
    // We are describing what should be rendered in terms of the input items,
    // without detailing the exact steps to render the list
    return (
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default DisplayList;
