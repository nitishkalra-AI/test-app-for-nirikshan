import React, { useState, useEffect } from 'react';
import './App.css';

function SamplePage() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isToggled, setIsToggled] = useState(false);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${inputValue}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sample Test Page</h1>
      <p>Current Time: <strong>{currentTime}</strong></p>
      
      {/* Counter Section */}
      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Counter Test</h2>
        <p>Count: <span data-testid="counter-value">{count}</span></p>
        <button 
          data-testid="increment-btn"
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          Increment
        </button>
        <button 
          data-testid="decrement-btn"
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          Decrement
        </button>
        <button 
          data-testid="reset-btn"
          onClick={() => setCount(0)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          Reset
        </button>
      </section>

      {/* Form Section */}
      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Form Test</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="text-input">Text Input: </label>
            <input
              id="text-input"
              data-testid="text-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter some text"
              style={{ padding: '8px', marginLeft: '10px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="select-option">Select Option: </label>
            <select
              id="select-option"
              data-testid="select-option"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              style={{ padding: '8px', marginLeft: '10px' }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              <input
                type="checkbox"
                data-testid="toggle-checkbox"
                checked={isToggled}
                onChange={(e) => setIsToggled(e.target.checked)}
                style={{ marginRight: '10px' }}
              />
              Toggle Option
            </label>
          </div>

          <button 
            type="submit" 
            data-testid="submit-btn"
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Submit Form
          </button>
        </form>

        <div style={{ marginTop: '15px' }}>
          <p>Form State:</p>
          <ul>
            <li>Input Value: {inputValue || 'Empty'}</li>
            <li>Selected Option: {selectedOption}</li>
            <li>Toggle Status: {isToggled ? 'ON' : 'OFF'}</li>
          </ul>
        </div>
      </section>

      {/* Dynamic List Section */}
      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Dynamic List Test</h2>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            data-testid="new-item-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button 
            onClick={handleAddItem}
            data-testid="add-item-btn"
            style={{ padding: '8px 15px' }}
          >
            Add Item
          </button>
        </div>
        
        <ul data-testid="items-list">
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>{item}</span>
              <button 
                onClick={() => handleRemoveItem(index)}
                data-testid={`remove-item-${index}`}
                style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Status Section */}
      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Status Indicators</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div data-testid="status-success" style={{ padding: '10px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '4px' }}>
            ✅ Success Status
          </div>
          <div data-testid="status-warning" style={{ padding: '10px', backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '4px' }}>
            ⚠️ Warning Status
          </div>
          <div data-testid="status-error" style={{ padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '4px' }}>
            ❌ Error Status
          </div>
          <div data-testid="status-info" style={{ padding: '10px', backgroundColor: '#d1ecf1', border: '1px solid #bee5eb', borderRadius: '4px' }}>
            ℹ️ Info Status
          </div>
        </div>
      </section>

      {/* Loading Simulation */}
      <section style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Loading Simulation</h2>
        <button 
          onClick={() => {
            const btn = document.getElementById('loading-btn');
            btn.textContent = 'Loading...';
            btn.disabled = true;
            setTimeout(() => {
              btn.textContent = 'Simulate Loading';
              btn.disabled = false;
            }, 3000);
          }}
          id="loading-btn"
          data-testid="loading-btn"
          style={{ padding: '10px 20px' }}
        >
          Simulate Loading
        </button>
      </section>
    </div>
  );
}

export default SamplePage;
