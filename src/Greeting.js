import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetingSlice';

function Greeting() {
  const { greeting } = useSelector((state) => state.greeting.greeting);
  console.log(greeting);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchGreeting());
  }
  return (
    <div>
      <h1>Im greeting: {greeting}</h1>
      <button type="button" onClick={handleClick}>
        Select a greeting
      </button>
    </div>
  );
}

export default Greeting;
