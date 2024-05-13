import React, {createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated]=useState("false");
    const [username, setUserName]=useState("");
    const [initialState, setInitialState]=useState(true);

    const login = () =>{
        setIsAuthenticated(true);
        setInitialState(false);
    }

    const logout = () =>{
        //alert("logout called");
        setIsAuthenticated(false);
    }

    const SetUName = (value) =>{
        setUserName(value);
    }

  return (
    <div>
        <AuthContext.Provider value={{isAuthenticated,login,logout,username,SetUName,initialState}}>
            {props.children}
        </AuthContext.Provider>
      
    </div>
  );
};

export const useAuth = () =>useContext(AuthContext);
