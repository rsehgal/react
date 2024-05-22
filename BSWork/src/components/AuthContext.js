import React, {createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated]=useState("false");
    const [username, setUserName]=useState("");
    const [initialState, setInitialState]=useState(true);
    

    useEffect(() => {
        // Check if user is authenticated on component mount
        const token = Cookies.get('authToken');
        //const parsedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT token and parse JSON
        console.log(token);
       
        if (token) {
            const parsedToken = JSON.parse(token);
          setIsAuthenticated(true);
          setInitialState(false);
          setUserName(parsedToken.uname);
        }
      }, []);

    const login = () =>{
        setIsAuthenticated(true);
        setInitialState(false);
    }

    const logout = () =>{
        //alert("logout called");
        setIsAuthenticated(false);
        Cookies.remove('authToken');
        //setInitialState(true);
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
