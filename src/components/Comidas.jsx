import comida from "./images/volvio.jpg";
import beneficios from "./images/beneficios.jpg";

const Comidas = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src={comida} alt="comida" width={600} />
                    <h2>ENCONTRÁ EL MAS CERCANO</h2>
                    <p><a href="/" className="btn btn-dark"><b>Comprar</b></a></p>
                </div>
                <div className="col">
                <img src={beneficios} alt="beneficios" width={600} />
                    <h2>Beneficios en tus combos favoritos</h2>
                    <p><a href="/" className="btn btn-dark"><b>Comprar</b></a></p>
                </div>
            </div>
        </div>
    )
}

export default Comidas;