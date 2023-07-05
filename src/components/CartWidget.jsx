import { Link } from "react-router-dom"
import { CartContext } from "./CartContext";
import { useContext } from "react";
import cart from "./images/cart.svg";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    
    return (
        (cartTotal() > 0) ? <Link className="btn btn-light position-relative" to={"/cart"}>
            <img src={cart} alt={"carrito"} width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartTotal()}</span>
        </Link> : ""
    )
}

export default CartWidget;