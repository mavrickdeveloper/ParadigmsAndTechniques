import React from 'react';

const DeclarativeExample: React.FC = () => {
    return (
        <ul>
            {['Apple', 'Banana', 'Cherry'].map(fruit => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    );
};

export default DeclarativeExample;
