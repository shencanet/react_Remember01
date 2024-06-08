import React from "react";
import PropTypes from "prop-types";

const WelcomeText = ({ user, ClassColors }) => {
  if (user) {
    // Si el usuario está autenticado, muestra mensaje de bienvenida con estilo info
    return <h1 className={`${ClassColors.info}`}>Hola Usuario</h1>
  } else {
    // Si el usuario no está autenticado, muestra mensaje de advertencia con estilo danger
    return <h1 className={`${ClassColors.danger}`}>No hay usuario else</h1>
  }
};

WelcomeText.propTypes = {
  user: PropTypes.bool.isRequired,
  ClassColors: PropTypes.object.isRequired
};

export default WelcomeText; // Exporta el componente WelcomeText para su uso en otros archivos
