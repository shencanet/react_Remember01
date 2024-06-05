 
 
 export const App = () => { 
    const title = 'My App Hola Soy React arriba ';
    const classTitle = 'text-center';
    const pathImg = 'https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif';
 
  return (
    
    <>//Fragment de react que se encarga de renderizar varios elementos hijos sin necesidad de un div padre

      <h1 className={classTitle}>My App Hola Soy React</h1>
      <h2>{title}</h2>
      <img src={pathImg} alt={`imagen-${title}`} />
    
    </>
  );
};
//export default App;//exportacion por defecto de la funcion App que es un componente de react que se encarga de renderizar el contenido en el navegador web 