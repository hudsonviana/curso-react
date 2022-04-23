import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha primeira lista</h1>
            <ul>
                <Item marca="Chevrolet" lancamento={2014} />
                <Item marca="Ford" lancamento={1998} />
                <Item marca="Volkswagen" lancamento={2012} />
                <Item marca="Fiat" lancamento={1995} />
                <Item lancamento={2004} />
                <Item marca="Hyundai" />
            </ul>
        </>
    );
}

export default List;
