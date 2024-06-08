import PropTypes from 'prop-types';

// Definición del componente funcional MyButton
const MyButton = (props) => {
  // Destructuración de props para obtener las propiedades directamente
  const { text, edad } = props;

  // Registro en consola de las props para depuración
  console.log(props);

  // Retorno del botón con las propiedades aplicadas correctamente
  // Se corrige el uso de 'text' y 'edad' para que sean parte del contenido del botón, no propiedades del elemento <button>
  return (
    <button>
      {text}, Edad: {edad}
    </button>
  );
}

// Definición de propTypes para validar las props recibidas por el componente
MyButton.propTypes = {
  text: PropTypes.string.isRequired, // 'text' debe ser un string y es requerido
  edad: PropTypes.number.isRequired, // 'edad' debe ser un número y es requerido
};

export default MyButton; // Exportación del componente para su uso en otros archivos

