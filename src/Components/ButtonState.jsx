import React, { useState } from 'react';
const ButtonState = () => {
  const [buttonText, setButtonText] = useState('Click me, please');
  const handleClick2 = () => setButtonText('Thanks, been clicked!');

  return <button onClick={handleClick2}>{buttonText}</button>;
}
export default ButtonState;