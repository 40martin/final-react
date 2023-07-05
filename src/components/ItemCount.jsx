import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    
    const IncrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    
    }

    const DecrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (items < itemStock) {
            setItemStock(itemStock - items);
            setItemAdded(true);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={DecrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={IncrementarStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    {itemAdded ? <Link to={"/cart"}>Finalizar Compra</Link> : <button type="button" className="btn btn-dark" 
                    onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
} 

export default ItemCount;