const Shen = () => {
    const title1 = "titulo 1";
    const title2 = "titulo 2";

    const ClassColors = {
        primary: "text-primary",
        info: "text-info",
        danger: "text-danger",
        warning: "text-warning",
        dark: "text-dark",

    };
    const classTitle = 
    {
        primary: "text-primary",
        info: "text-info",
        danger: "text-danger",
        warning: "text-warning",
        dark: "text-dark",
    }
    const pathImg = "https://media.giphy.com/media/3o7TKz9bX9v6hZ8NSA/giphy.gif";
    const color = ClassColors.dark;
    return (
        <>
            <h1 className={`${ClassColors.primary}`}>{title1}</h1>
            <h1 className={`${classTitle} ${warning}`}>{title2}</h1>
            <img src={pathImg} alt={`imagen-${title2}`} />
        </>
    );
    }

    export default Shen;

    //componente en mayuscula   