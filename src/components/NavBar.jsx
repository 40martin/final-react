import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="text-danger" aria-current="page" to={"/productos"}>Productos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="text-danger" to={"/category/enfamilia"}>En Familia</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeClassName="text-danger" to={"/category/nosotros"}>Nosotros</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;