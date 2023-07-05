import mcdonalds from "./images/mcdonalds-logo.png";
import logonuevo from "./images/logo-nuevo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-primary-subtle p-3">
                <div className="col-md-6">
                    <img src={mcdonalds} alt={"mcdonalds"} width={60} />
                </div>

                <div className="col-md-6 text-end">
                    <Link to="/" className="text-dark text-decoration-none">Trabaja con Nosotros</Link> | <Link to="/"
                        className="text-dark text-decoration-none">Contacto</Link>
                </div>
            </div>

            <div className="row bg-body-secondary p-2">
                <div className="row p-3">
                    <div className="col-md-4">
                        <img src={logonuevo} alt={"mcdonalds"} width={90} />
                    </div>

                    <div className="col-md-4 text-center">
                        navbar
                    </div>

                    <div className="col-md-4 text-end">
                        cartwidget
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;