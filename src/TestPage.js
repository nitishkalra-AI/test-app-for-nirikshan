import React, { useState } from 'react';

function TestPage() {
  const [message, setMessage] = useState('Hello World!');
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Test Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Message Display</h2>
        <p>{message}</p>
        <button onClick={() => setMessage('Button clicked!')}>
          Change Message
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Counter</h2>
        <p>Count: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>
          +1
        </button>
        <button onClick={() => setCounter(0)} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </div>

      <div>
        <h2>Static Content</h2>
        <p>This is just a simple test page for basic functionality testing.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default TestPage;
