const ButtonState = () => {
  const [buttonText, setButtonText] = useState('Click me, please');
  const handleClick = () => setButtonText('Thanks, been clicked!');

  return <button onClick={handleClick}>{buttonText}</button>;
}
export default ButtonState;