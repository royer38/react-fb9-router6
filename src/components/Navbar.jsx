import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => { 
//se encargara de las vistas protegidas, asi como de mandar a las rutas en caso de que este logeado el usuario
const {user, setUser} = useContext(UserContext);
    return(
        <div>
            {   user ?(
                <>
                 <NavLink to="/">Inicio</NavLink>
                <button onClick={() => setUser(false)}>logout</button>
                </>
                ):(<NavLink to="/Login">Login</NavLink>)
            }
        </div>
    );
 };

 export default Navbar;