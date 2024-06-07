import React from 'react';

// Define MyButton component with destructuring of props to get text
const MyButton = ({ text }) => {
  console.log(text);
  return (
    <button>{text}</button>
  );
};

// Define ItemFruit component with destructuring of props to get fruit
const ItemFruit = ({ fruit }) => {
  return (
    <li>{fruit}</li>
  );
};

// Main App component
const App = () => {
  const title = 'My App Hola Soy React arriba';
  const classTitle = 'text-center';
  const pathImg = 'https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif';

  // Array of fruits emojis
  const fruits = ['💋', '✌', '✔', '👍', '👌', '👏', '👀', '👅', '👄', '👂', '👃', '👆', '👇', '👈', '👉', '👊', '👋', '👎'];

  return (
    <>
      <h1 className={classTitle}>{title}</h1>
      <img src={pathImg} alt={`imagen-${title}`} />

      <MyButton text='Boton 1' />
      <MyButton text='Boton 2' />
      <MyButton text='Boton 3' />

      <ul>
        {fruits.map((fruit, index) => (
          <ItemFruit key={index} fruit={fruit} />
        ))}
      </ul>
    </>
  );
};

export default App; // Export App component as default export
