// Definición del componente funcional Shen
const Shen = () => {
    // Definición de títulos y mensajes de usuario
    const title1 = "titulo 1";
    const title2 = "titulo 2";
    const userTrue = "Hola Usuario"; // No se utiliza
    const user = false; // Estado del usuario, falso indica no autenticado

    // Objeto para manejar las clases de colores de Bootstrap
    const ClassColors = {
        primary: "text-primary",
        info: "text-info",
        danger: "text-danger",
        warning: "text-warning",
        dark: "text-dark",
    };

    // Componente WelcomeText para mostrar mensaje de bienvenida o advertencia basado en el estado del usuario
    const WelcomeText = ({user}) => {
        if(user){
            // Si el usuario está autenticado, muestra mensaje de bienvenida con estilo info
            return <h1 className={`${ClassColors.info}`}>Hola Usuario</h1>
        }else{
            // Si el usuario no está autenticado, muestra mensaje de advertencia con estilo danger
            return <h1 className={`${ClassColors.danger}`}>No hay usuario else</h1>
        }
    }

    // URL de la imagen a mostrar
    const pathImg = "https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif";
    const color = ClassColors.dark; // No se utiliza

    // Renderiza el componente Shen con sus elementos internos
    return (
        <>
            <h1 className={`${ClassColors.primary}`}>{title1}</h1> {/* Título principal con estilo primary */}

            <img src={pathImg} alt={`imagen-${title2}`} /> {/* Imagen con alt dinámico basado en title2 */}
            <WelcomeText user={user} /> {/* Componente WelcomeText que muestra mensaje basado en el estado del usuario */}
            {
                // Ternario que muestra mensaje de bienvenida o advertencia directamente en el renderizado de Shen
                user ? <h1 className={`${ClassColors.info}`}>Hola Usuario</h1> : <h1 className={`${ClassColors.danger}`}>No hay usuario</h1>
            }
        </>
    );
}

export default Shen; // Exporta el componente Shen para su uso en otros archivos

// Nota: Hay variables declaradas que no se utilizan (userTrue, color) y el comentario final parece indicar una convención de nomenclatura.