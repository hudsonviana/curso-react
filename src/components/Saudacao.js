function Saudacao({nome}) {

    function gerarSaudacao(algunNome) {
        return `Olá, ${algunNome}, tudo bem?`;
    }

    return (
        <>
            { nome && (<p>{ gerarSaudacao(nome) }</p>) }
            { nome && (<p>Saudação, { nome }!</p>) }
        </>
    );
}

export default Saudacao;
