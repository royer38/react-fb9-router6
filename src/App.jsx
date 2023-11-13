//ayuda de configuracion de rutas
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";

const App= () => {

  return (
    <>
    <Navbar/>
    <h1>App</h1>
    <Routes>
      {/*aca va nuestra ruta protegida que sera protegida*/}
      <Route path="/" element={<RequireAuth>
          <Home/>
     </RequireAuth>}> </Route>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </>
  );
};
export default App;

//link no refresca la pagina
//navlink nos da una clase de activo, nos sirve para detectar donde se encuentra el usuario