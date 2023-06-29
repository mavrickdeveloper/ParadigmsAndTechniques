// A class representing a generic user
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// OOP in React Component
import React from 'react';

const OopExample: React.FC = () => {
    // Creating an object of the User class
    const user = new User("Alice", 30);

    return (
        <div>
            {user.greet()}
        </div>
    );
};

export default OopExample;
