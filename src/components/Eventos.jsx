const Eventos = () => {
    const hacerClick = () => {

    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-6"></div>
                <h1 className="text-center">Para hacer tu pedido por favor Click Aqui</h1>
                <button className="btn btn-dark" onClick={hacerClick}>Hacer Click</button>
                <button className="btn btn-primary" onClick={hacerClick}>Quitar Productos</button>
            </div>
        </div>
    )
}

export default Eventos;