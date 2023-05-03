import { NavLink } from "react-router-dom";
export default function Navegaitor() {
return (
    <div>
    <ul>
    <li>
        <NavLink to = "/">Login</NavLink>
        </li>
        <li>
        <NavLink to = "/Register">Register</NavLink>
        </li>
        <li>
        <NavLink to = "/Weiter">Weiter</NavLink>
        </li>
        <li>
        <NavLink to = "/ChefBoss">ChefBoss</NavLink>   
        </li>
        <li>
        <NavLink to = "/Administrador">Administrador</NavLink>
        </li>
    </ul>
    </div>
);
}
