import Button from "./evento/Button";

function Evento() {

    const meuEvento = () => {
        console.log(`Opa! Fui ativado!`);
    }

    const segundEvento = () => {
        console.log('Ativando o segundo evento!');
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundEvento} text="Segundo evento" />
        </div>
    );
}

export default Evento;
