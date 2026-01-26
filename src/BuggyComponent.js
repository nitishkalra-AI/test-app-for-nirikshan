import React, { useState, useEffect } from 'react';
import NonExistentModule from './DoesNotExist';
import { undefinedImport } from './AnotherMissingFile';

// Missing semicolon and wrong syntax
const BuggyComponent = () => {
  // Unused variables
  const unusedVar = 'never used';
  let anotherUnused = 42;
  
  // Wrong hook usage
  const [count, setCount] = useState()
  const [data, setData] = useState(null);
  
  // Missing dependency in useEffect
  useEffect(() => {
    console.log(count);
    fetchData();
  }, []); // Missing count dependency
  
  // Function that doesn't exist
  const fetchData = async () => {
    // Using undefined variable
    console.log(undefinedVariable);
    
    // Wrong async/await usage
    const response = fetch('/api/data');
    const result = response.json(); // Missing await
    setData(result);
  };
  
  // Wrong event handler
  const handleClick = (event) => {
    // Accessing undefined property
    console.log(event.target.nonExistentProp.value);
    
    // Wrong state update
    setCount(count + 1); // Should use functional update
    
    // Calling undefined function
    nonExistentFunction();
  };
  
  // Missing return statement in some conditions
  const renderContent = () => {
    if (data) {
      return <div>{data.name}</div>;
    }
    // Missing return for else case
  };
  
  // Wrong JSX syntax and missing keys
  return (
    <div className="buggy-component">
      <h1>Buggy Component</h1>
      
      {/* Missing key prop */}
      {[1, 2, 3].map(item => (
        <div>{item}</div>
      ))}
      
      {/* Wrong event handler binding */}
      <button onClick={handleClick()}>Click me</button>
      
      {/* Using undefined variable in JSX */}
      <p>{undefinedJSXVariable}</p>
      
      {/* Wrong conditional rendering */}
      {data && data.items && data.items.length > 0 && 
        data.items.map(item => (
          <span>{item.id}</span> // Missing key again
        ))
      }
      
      {/* Calling function that might return undefined */}
      {renderContent()}
      
      {/* Wrong prop types */}
      <input 
        type="text" 
        value={count} // Number in text input
        onChange={handleClick} // Wrong handler type
        required={true}
        disabled="false" // String instead of boolean
      />
      
      {/* Missing closing tag */}
      <div>
        <p>Unclosed paragraph
      </div>
      
      {/* Using component that doesn't exist */}
      <NonExistentComponent prop1={undefinedProp} />
      
    </div>
  );
};

// Missing export statement
export default BuggyComponent;
