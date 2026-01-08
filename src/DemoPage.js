import React from 'react';
import './DemoPage.css';

function DemoPage() {
  return (
    <div className="demo-page">
      <h1>Test Demo Page</h1>
      <p>This is a simple demo page for testing.</p>
      <button onClick={() => alert('Button clicked!')}>
        Click Me
      </button>
    </div>
  );
}

export default DemoPage;

