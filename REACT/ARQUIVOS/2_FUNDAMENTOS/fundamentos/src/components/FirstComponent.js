// arquivo de estilo 

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="texto">Meu Texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;