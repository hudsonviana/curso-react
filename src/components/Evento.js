function Evento({numero}) {

    const meuEvento = () => {
        console.log(`Número ${numero} - Opa! Fui ativado!`);
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

export default Evento;
