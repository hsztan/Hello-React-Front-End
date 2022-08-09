import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetingSlice';

function Greeting() {
  const { greeting } = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchGreeting());
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>
        Greeting:
        {greeting}
      </h1>
      <button type="button" onClick={handleClick}>
        Select a greeting
      </button>
    </div>
  );
}

export default Greeting;
