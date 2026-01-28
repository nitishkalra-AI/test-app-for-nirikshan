import React from 'react';
import Address from './Address';
import ProblematicComponent from './ProblematicComponent';
import './App.css';

function App() {
  // Test data for the problematic component
  const testData = [
    { name: 'Item 1', description: 'First test item' },
    { name: 'Item 2', description: 'Second test item' },
    { name: 'Item 3', description: 'Third test item' },
    { name: 'Test Item', description: 'Another test item' },
    { name: 'Sample', description: 'Sample description' },
  ];

  return (
    <div className="App">
      <Address />
      <hr />
      <ProblematicComponent data={testData} />
    </div>
  );
}

export default App;
