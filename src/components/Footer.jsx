import appstore from "./images/app-store.png";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-danger py-5">
            <div className="row">
                <div className="col-md-2">
                    <h3>Buscar Tienda</h3>
                </div>

                <div className="col-md-2">
                    <h3>Ayuda</h3>
                </div>

                <div className="col-md-2">
                    <h3>Acerca de MacDonalds</h3>
                </div>

                <div className="col-md-2">
                    <img src={appstore} alt={"appstore"} width={90} />
                </div>

                <div className="col-md-4 text-end">
                    <Link to="https://www.facebook.com/McDonaldsArgentina/"><img src={facebook} alt={"facebook"} width={30} /></Link>
                    <Link to="https://www.instagram.com/mcdonalds_ar/"><img src={instagram} alt={"instagram"} width={30} /></Link>
                    <Link to="https://www.youtube.com/user/McDonaldsSur"><img src={youtube} alt={"youtube"} width={30} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;