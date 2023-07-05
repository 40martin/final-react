import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <>
            <div className="card border border-0">
                <Link to={"/item/" + item.idx}>
                    <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                    <div className="card-body">
                        <h3>{item.titulo}</h3>
                        <p className="card-text">{item.descripcion}<br /><b>${item.precio}</b></p>
                        <Link to="/" className="btn btn-dark"><b>COMPRAR</b></Link>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Item;