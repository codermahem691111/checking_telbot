import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './UserSlice';
import { Link } from 'react-router-dom';

function Counter() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const counter = useSelector((state) =>
    currentUser ? state.user.counters[currentUser] : 0
  );

  return (
    <div>
      <h1>Counter Page</h1>
      {currentUser ? (
        <div>
          <p>Current User: {currentUser}</p>
          <p>Counter: {counter}</p>
          <button onClick={() => dispatch(incrementCounter())}>
            Increment
          </button>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
      <br />
      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default Counter;
