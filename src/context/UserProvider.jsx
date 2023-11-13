import { createContext, useState } from "react";

//esto lo podemos llamar fuera de un componente
export const UserContext = createContext ()

const UserProvider = ({children}) => { 

    const [user, setUser] = useState(false);

return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
);
};
 export default UserProvider;