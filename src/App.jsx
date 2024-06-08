import React from 'react';
import PropTypes from 'prop-types';

// Componente MyButton para renderizar un botón con el texto proporcionado
const MyButton = ({ text }) => {
  // Registrando el texto del botón en la consola para depuración

  //console.log(text);
  //return <button onClick={()=> {console.log("me diste  click")}}>{text}</button>;
 const handleClickbutton = (title) => {
    console.log("HandleClickButton" + title);
 }

 
  return(
    <button onClick={ ()=> handleClickbutton(" "+ text)}>
        
        {text}
    
    </button>
  );
  
};

// Prop types para el componente MyButton para la comprobación de tipos
MyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

// Componente ItemFruit para renderizar un elemento de lista con el emoji de fruta o texto proporcionado
const ItemFruit = ({ fruit }) => {
  return <li>{fruit}</li>;
};

// Prop types para el componente ItemFruit para la comprobación de tipos
ItemFruit.propTypes = {
  fruit: PropTypes.string.isRequired,
};

// Componente principal App
const App = () => {
  const title = 'Mi Aplicación Hola Soy React arriba'; // Título para la aplicación
  const classTitle = 'text-center'; // Nombre de clase para el estilo del título
  const pathImg = 'https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif'; // Ruta a una imagen

  // Array de emojis de frutas para ser mostrados como elementos de lista
  const fruits = ['💋', '✌', '✔', '👍', '👌', '👏', '👀', '👅', '👄', '👂', '👃', '👆', '👇', '👈', '👉', '👊', '👋', '👎'];

  return (
    <>
      <h1 className={classTitle}>{title}</h1> {/* Mostrando el título con alineación de texto al centro */}
      <img src={pathImg} alt={`imagen-${title}`} /> {/* Mostrando una imagen con texto alternativo */}

      {/* Renderizando tres componentes MyButton con textos diferentes */}
      <MyButton text='Botón 1' />
      <MyButton text='Botón 2' />
      <MyButton text='Botón 3' />

      {/* Renderizando una lista de frutas usando el componente ItemFruit */}
      <ul>
        {fruits.map((fruit, index) => (
          // Usar el índice como clave para los elementos de la lista, lo cual generalmente se desaconseja en casos donde la lista puede cambiar
          <ItemFruit key={index} fruit={fruit} />
        ))}
      </ul>
    </>
  );
};

export default App; // Exportando el componente App para su uso en otras partes de la aplicación