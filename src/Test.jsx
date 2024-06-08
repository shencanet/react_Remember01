import React from "react"; // Importa la librería de React
import WelcomeText from "./Components/WelcolmeText"// Importa el componente funcional WelcomeText

const Shen = () => {
  // Definición de títulos y mensajes de usuario
  const title1 = "titulo 1";
  const title2 = "titulo 2";

  // Objeto para manejar las clases de colores de Bootstrap
  const ClassColors = {
    primary: "text-primary",
    info: "text-info",
    danger: "text-danger",
    warning: "text-warning",
    dark: "text-dark",
  };

  // URL de la imagen a mostrar
  const pathImg = "https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif";

  // Renderiza el componente Shen con sus elementos internos
  return (
    <>
      <h1 className={`${ClassColors.primary}`}>{title1}</h1> {/* Título principal con estilo primary */}
      <img src={pathImg} alt={`imagen-${title2}`} /> {/* Imagen con alt dinámico basado en title2 */}
      <WelcomeText user={false} ClassColors={ClassColors} />
    </>
  );
}

export default Shen; // Exporta el componente Shen para su uso en otros archivos
