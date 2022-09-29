const TemplateExpressions = () => {

    const name = "Inayá"
    const data = {
        age: 20,
        job: "Programmer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log("JSX Reacr")}</p>
        </div>
    );
};

export  default TemplateExpressions;