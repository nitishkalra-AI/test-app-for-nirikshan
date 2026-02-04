import React, { useState, useEffect } from 'react';

/**
 * Component with intentional serious issues - for testing only.
 * Do not use in production.
 */
function BuggyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [items, setItems] = useState([1, 2, 3]);
  const unusedVariable = 'never used';
  const anotherUnused = 42;

  // Issue: setState during render - causes infinite re-renders
  if (count === 0) {
    setCount(1);
  }

  // Issue: conditional hook - violates Rules of Hooks
  if (count > 5) {
    useEffect(() => {}, []);
  }

  // Issue: missing dependency (count), will have stale closure
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    // Issue: no cleanup - memory leak
  }, []);

  // Issue: async without error handling, no cleanup
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
  }, []);

  // Issue: direct state mutation
  const addItem = () => {
    items.push(items.length + 1);
    setItems(items);
  };

  // Issue: possible null reference - data may be null
  const value = data.value;

  // Issue: missing key in list
  return (
    <div>
      <p>Count: {count}</p>
      <img src="/logo.png" />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div>{value}</div>
    </div>
  );
}

export default BuggyComponent;
