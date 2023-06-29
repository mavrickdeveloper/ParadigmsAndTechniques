import React, { useRef } from 'react';

const ImperativeExample: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default ImperativeExample;
