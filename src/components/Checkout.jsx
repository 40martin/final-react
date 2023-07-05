import { useState } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";



const Checkout = () => {
    const [nombre, setNombre] = useState = ("");
    const [email, setEmail] = useState = ("");
    const [telefono, setTelefono] = useState = ("");
    const [orderId, setOrderId] = useState = ("");
    const fecha = new Date();
    const {cart, sumTotal} = useContext(CartContext);



    const generarOrden = () => {
        const buyer = {name:nombre, phone:telefono, email:email};
        const items = cart.map(Item => ({id:items.id, title:items.titulo, price:items.precio}));
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;     
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};
    }

    
     return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout;