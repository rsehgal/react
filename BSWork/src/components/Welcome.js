import React from "react";
import { useAuth } from "./AuthContext";
import Label from "./Label";
import Message from "./Message";

const Welcome = (props) => {
    const {isAuthenticated,login,logout,username,SetUName,initialState} = useAuth();
    //alert(isAuthenticated);
  return (
    <div>
        {
        initialState ? (<Label></Label>) :
        (
        //isAuthenticated ? (<Label>Welcome {username}: You have logged in successfully.</Label>)
        isAuthenticated ? (<Message className="alert alert-info text-center">Welcome {username}: You have logged in successfully.</Message>)
                        : (<Message className="alert alert-info text-center">You have logged out successfully </Message>)
        
        )
    }
    </div>
  );
};

export default Welcome;
