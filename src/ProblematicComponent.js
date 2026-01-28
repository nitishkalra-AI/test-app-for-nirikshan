import React, { useState, useEffect } from 'react';

// Component with multiple performance and general issues
const ProblematicComponent = ({ data }) => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0);
  const [expensiveValue, setExpensiveValue] = useState(0);

  // ISSUE 1: Missing dependency in useEffect
  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, []); // Missing 'data' dependency

  // ISSUE 2: Expensive computation on every render (no memoization)
  const expensiveCalculation = () => {
    console.log('Expensive calculation running...'); // ISSUE 3: Console.log in production code
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random() * i;
    }
    return result;
  };

  const calculatedValue = expensiveCalculation(); // Runs on every render

  // ISSUE 4: Inline object creation (causes unnecessary re-renders)
  const inlineStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    margin: '5px'
  };

  // ISSUE 5: Inline function creation (causes unnecessary re-renders)
  const handleClick = () => {
    setCount(count + 1); // ISSUE 6: Not using functional update
  };

  // ISSUE 7: Filtering on every render without memoization
  const filteredItems = items.filter(item => 
    item.name && item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // ISSUE 8: Nested component definition inside render
  const NestedComponent = ({ item }) => {
    // ISSUE 9: Another expensive operation in nested component
    const processItem = () => {
      let processed = '';
      for (let i = 0; i < 10000; i++) {
        processed += item.name + i;
      }
      return processed.length;
    };

    return (
      <div style={inlineStyle}> {/* ISSUE 10: Inline style object */}
        <span>{item.name}</span>
        <span>Processed length: {processItem()}</span> {/* Expensive on every render */}
      </div>
    );
  };

  // ISSUE 11: useEffect with missing cleanup and running on every render
  useEffect(() => {
    const interval = setInterval(() => {
      setExpensiveValue(Math.random() * 1000);
    }, 100); // Very frequent updates
    
    // Missing cleanup - memory leak
  });

  // ISSUE 12: Synchronous expensive operation in useEffect
  useEffect(() => {
    // Blocking operation
    const start = Date.now();
    while (Date.now() - start < 100) {
      // Blocking for 100ms
    }
    console.log('Blocking operation completed');
  }, [count]);

  // ISSUE 13: Mutating props directly
  if (data) {
    data.processed = true; // Mutating props
  }

  // ISSUE 14: Creating new arrays/objects in render without keys
  const dynamicItems = Array.from({ length: 100 }, (_, i) => ({
    id: Math.random(), // ISSUE 15: Random keys (causes unnecessary re-renders)
    value: i * calculatedValue
  }));

  return (
    <div style={inlineStyle}>
      <h2>Problematic Component</h2>
      
      {/* ISSUE 16: Missing error boundaries */}
      <div>
        <input 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter items..."
        />
        
        <button onClick={handleClick}>
          Count: {count}
        </button>
        
        <div>Expensive Value: {expensiveValue}</div>
        <div>Calculated Value: {calculatedValue}</div>
      </div>

      {/* ISSUE 17: No virtualization for large lists */}
      <div style={{ height: '300px', overflow: 'auto' }}>
        {filteredItems.map((item, index) => (
          <NestedComponent 
            key={index} // ISSUE 18: Using index as key
            item={item}
          />
        ))}
      </div>

      {/* ISSUE 19: Rendering large list without pagination */}
      <div>
        <h3>Dynamic Items (Performance Heavy)</h3>
        {dynamicItems.map(item => (
          <div key={item.id} style={inlineStyle}>
            {/* ISSUE 20: Complex calculations in JSX */}
            Value: {item.value * Math.pow(2, 10)} 
            {/* ISSUE 21: Nested ternary operators (readability) */}
            Status: {item.value > 1000 ? 'high' : item.value > 500 ? 'medium' : item.value > 100 ? 'low' : 'very low'}
          </div>
        ))}
      </div>

      {/* ISSUE 22: Conditional rendering without proper checks */}
      {items.length && (
        <div>
          <h3>Items Summary</h3>
          {/* ISSUE 23: Accessing potentially undefined properties */}
          <p>First item: {items[0].name.toUpperCase()}</p>
          <p>Last item: {items[items.length - 1].description.toLowerCase()}</p>
        </div>
      )}
    </div>
  );
};

// ISSUE 24: No PropTypes or TypeScript for type checking
// ISSUE 25: No default props
export default ProblematicComponent;