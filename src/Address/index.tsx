import React, { useReducer } from 'react';

// ============================================
// STEP 1: Define the State Type
// ============================================
interface CounterState {
  count: number;
  history: number[]; // Track all count values for demonstration
}

// ============================================
// STEP 2: Define Action Types
// ============================================
type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_VALUE'; payload: number };

// ============================================
// STEP 3: Define the Reducer Function
// This is a pure function that takes current state and an action,
// and returns the new state. It's the "brain" of useReducer.
// ============================================
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  console.log('🔄 Reducer called with:', { 
    currentState: state, 
    action: action 
  });

  switch (action.type) {
    case 'INCREMENT':
      const newCount = state.count + 1;
      console.log(`  ➕ Incrementing: ${state.count} → ${newCount}`);
      return {
        count: newCount,
        history: [...state.history, newCount] // Add to history
      };

    case 'DECREMENT':
      const decrementedCount = state.count - 1;
      console.log(`  ➖ Decrementing: ${state.count} → ${decrementedCount}`);
      return {
        count: decrementedCount,
        history: [...state.history, decrementedCount]
      };

    case 'RESET':
      console.log(`  🔄 Resetting to 0`);
      return {
        count: 0,
        history: [...state.history, 0]
      };

    case 'SET_VALUE':
      console.log(`  ✏️ Setting value to: ${action.payload}`);
      return {
        count: action.payload,
        history: [...state.history, action.payload]
      };

    default:
      // TypeScript ensures we handle all cases, but this is a safety net
      console.warn('⚠️ Unknown action type');
      return state;
  }
};

// ============================================
// STEP 4: Initial State
// ============================================
const initialState: CounterState = {
  count: 0,
  history: [0]
};

// ============================================
// STEP 5: Component using useReducer
// ============================================
function Address() {
  // useReducer returns: [currentState, dispatchFunction]
  // dispatch is used to send actions to the reducer


  console.log('📊 Current State:', state);

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1>useReducer Example</h1>
      
      <div style={{
        padding: '20px',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        backgroundColor: '#f0f8f0',
        marginBottom: '20px'
      }}>
        <h2 style={{ marginTop: 0 }}>Current Count: <span style={{ fontSize: '2em', color: '#2E7D32' }}>{state.count}</span></h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Actions:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => dispatch({ type: 'INCREMENT' })}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ➕ Increment
          </button>
          
          <button 
            onClick={() => dispatch({ type: 'DECREMENT' })}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ➖ Decrement
          </button>
          
          <button 
            onClick={() => dispatch({ type: 'RESET' })}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🔄 Reset
          </button>
          
          <button 
            onClick={() => {
              const value = prompt('Enter a number:');
              if (value !== null) {
                const num = parseInt(value, 10);
                if (!isNaN(num)) {
                  dispatch({ type: 'SET_VALUE', payload: num });
                }
              }
            }}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ✏️ Set Custom Value
          </button>
        </div>
      </div>

      <div style={{
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        border: '1px solid #ddd'
      }}>
        <h3>History (all state changes):</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Open your browser console to see detailed reducer logs!
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          marginTop: '10px'
        }}>
          {state.history.map((value, index) => (
            <span
              key={index}
              style={{
                padding: '5px 10px',
                backgroundColor: value === state.count ? '#4CAF50' : '#e0e0e0',
                color: value === state.count ? 'white' : '#333',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: value === state.count ? 'bold' : 'normal'
              }}
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e3f2fd',
        borderRadius: '4px',
        border: '1px solid #90caf9'
      }}>
        <h3>📚 How useReducer Works:</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li><strong>Reducer Function:</strong> A pure function that takes (state, action) and returns new state</li>
          <li><strong>Initial State:</strong> The starting state when component mounts</li>
          <li><strong>Dispatch:</strong> Function to send actions to the reducer</li>
          <li><strong>Actions:</strong> Plain objects describing what happened (e.g., {'{ type: "INCREMENT" }'})</li>
          <li><strong>State Updates:</strong> Reducer returns new state, component re-renders</li>
        </ol>
        <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#1565C0' }}>
          💡 <strong>Tip:</strong> useReducer is great for complex state logic with multiple sub-values or when the next state depends on the previous one!
        </p>
      </div>
    </div>
  );
}

export default Address;