import React from "react"; // Importa la librería de React

const MyButton = ({ text }) => {
    const handleClickbutton = (title) => {
       console.log("me diste click"+ title);
    };
    return (
        <button onClick={() => handleClickbutton(" " + text)}>
            {text}
        </button>
    );
};

    export default MyButton; // Exporta el componente MyButton para su uso en otros archivos