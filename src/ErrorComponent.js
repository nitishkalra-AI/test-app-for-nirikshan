import React from 'react';
import nonExistentModule from './DoesNotExist';

// Missing semicolon and undefined variable
const ErrorComponent = () => {
  const undefinedVar = someUndefinedVariable
  
  // Unused variable
  const unusedVar = "I'm not used anywhere";
  
  // Missing dependency in useEffect
  React.useEffect(() => {
    console.log(undefinedVar);
  }, []);
  
  // Incorrect hook usage
  if (Math.random() > 0.5) {
    React.useState(0);
  }
  
  // Missing return statement
  const helperFunction = () => {
    const result = 42;
    // Missing return
  }
  
  // Unreachable code
  return (
    <div>
      <h1>Error Component</h1>
      <p>This component has many errors!</p>
      <button onClick={() => {
        // Accessing undefined property
        console.log(someObject.nonExistentProperty);
        // Calling undefined function
        nonExistentFunction();
      }}>
        Click me for errors
      </button>
      {/* Missing closing tag */}
      <div>
        <span>Unclosed span
      </div>
    </div>
  );
  
  // Unreachable code after return
  console.log("This will never execute");
}

// Missing export default
