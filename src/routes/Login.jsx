import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";


const Login = () => { 

const {user, setUser} = useContext(UserContext)
const navegate = useNavigate();

const handleClickLogin = () => {
    setUser(true);
    navegate("/");
};

    return(
        <>
        <h1>Login</h1>
        <h2>{
            user ? "en linea" : "offline"
        }</h2>
        <button onClick={handleClickLogin}>acceder</button>
        </>
    );
 };
 export default Login;
 //mayuscula la primera para diferenciar entre un componente y una etiqueta de html