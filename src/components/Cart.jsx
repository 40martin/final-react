import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);    

    if (cartTotal() ===0) {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el Carrito</div>
                    </div>
                </div>
            </div>
        )
    }


        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <table className="table">
                        {
                            cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                    <td>{item.titulo}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.cantidad * item.precio}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={4} className="align-middle text-end">Total a Pagar</td>
                            <td className="align-middle text-center">${sumTotal()}</td>
                            <td className="align-middle text-end"><Link to={"/checkout"} className="btn
                            btn-light">Finalizar Compra</Link></td>
                        </tr>
                        
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    
export default Cart;