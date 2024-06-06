// Define MyButton component windows punto emogis
const MyButton = () => {
  return (
  <button>Click me!</button>
); 
};

const App = () => { 
    const title = 'My App Hola Soy React arriba ';
    const classTitle = 'text-center';
    const pathImg = 'https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif';

    const Fruits = [ '💋', '✌', '✔', '👍', '👌', '👏', '👀', '👅', '👄', '👂', '👃', '👆', '👇', '👈', '👉', '👊', '👋', '👎']

 
  return (
    
    <>

      <h1 className={classTitle}>My App Hola Soy React</h1>
      <h2>{title}</h2>
      <img src={pathImg} alt={`imagen-${title}`} />

      <MyButton />
      <ul>
        {Fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
        </ul>
    
    </>
  );
};
export default App;//exportacion por defecto de la funcion App que es un componente de react que se encarga de renderizar el contenido en el navegador web 