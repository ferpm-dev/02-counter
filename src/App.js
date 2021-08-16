import React, { useState } from 'react';
import './styles.css';

function App({ value }) {
    const [counter, setCounter] = useState(value);

    const handlePlus = () => {
        setCounter(counter + 1);
    };
    const handleLess = () => {
        setCounter(counter - 1);
    };
    const handleReset = () => {
        setCounter(0);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                at illum praesentium? Nam, reprehenderit. Laborum, aperiam
                necessitatibus praesentium veritatis quibusdam voluptates
                aliquam facere mollitia vitae in, aut commodi eaque eius.
            </p>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleLess}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;
