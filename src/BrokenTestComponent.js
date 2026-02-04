import React, { useState, useEffect, useRef } from 'react';

function BrokenTestComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  const ref = useRef(null);
  const unusedVariable = 42;

  if (count > 5) {
    const [extra, setExtra] = useState(0);
  }

  setCount(count + 1);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
  }, []);

  useEffect(() => {
    setItems((prev) => [...prev, { id: Math.random(), name: 'new' }]);
  });

  const width = ref.current?.offsetWidth ?? 0;

  return (
    <div ref={ref}>
      <h1>Broken Test Component</h1>
      <p>Count: {count} (width: {width})</p>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
      <button onClick={() => setCount(count - 1)} style={{ margin: 5 }}>
        Decrement
      </button>
    </div>
  );
}

export default BrokenTestComponent;
