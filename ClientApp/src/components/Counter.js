import React, { useState } from 'react';

export const Counter = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const incrementCounter = () => {
        setCurrentCount(currentCount + 1);
        if (currentCount == 69) {
            alert('ALERT');
        }
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
            <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
        </div>
    );
};

export function SamplePlaceholder() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload. THIS IS A PLACEHOLDER COMPONENT TO TEST THE ROUTING FEATURE IN REACT.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

