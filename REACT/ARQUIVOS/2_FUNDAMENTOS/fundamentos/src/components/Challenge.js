const Challenge = () => {

    const valores = {
        valor1: 10,
        valor2: 10,
    }

    return (
        <div>
            <h1>Componente Challenge</h1>
            <p>Valor 1: {valores.valor1}</p>
            <p>Valor 2: {valores.valor2}</p>

            <div>
                <button onClick={() => {
                    if(true) {
                        console.log(valores.valor1 + valores.valor2);
                    }
                }}>Clique aqui</button>
            </div>

        </div>
    );
};

export default Challenge;

/* Exemplo do Professor 

const Challenge = () => {

    const a = 10;
    const b = 15;

    return (
        <div>
            <p> A: {a} </p>
            <p> B: {b} </p>
            <button onClick=() => {console.log(a+b)}>
             Clique para ver a soma! 
            </button>
        </div>
    );
};

export default Challenge;

*/