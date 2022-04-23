import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha primeira lista</h1>
            <ul>
                <Item marca="Chevrolet" />
                <Item marca="Ford" />
                <Item marca="Volkswagen" />
                <Item marca="Fiat" />
            </ul>
        </>
    );
}

export default List;
