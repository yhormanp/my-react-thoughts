import React, { useState } from "react";
import SecurityContext from "./SecurityContext";

function SecurityProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SecurityContext.Provider
      value={{
        login: async (username, password) => {
            //validating if the credentials are ok
        //   const response = axios.post("/login", { username, password });
        //   if(response){
        //       setLoggedIn(true)
        //   }

        if( username === 'username' && password === 'password'){
            setLoggedIn(true);
        }
        },
        logout: async () => {

            // doing the logout process
            // await axios.post('./logout');
            setLoggedIn(false);
        },
        loggedIn
        
      }}
    >
      {props.children}
    </SecurityContext.Provider>
  );
}

export default SecurityProvider;
