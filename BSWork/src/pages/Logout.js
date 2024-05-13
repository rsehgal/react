import { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import Message from '../components/Message';


function Logout(){
  const {isAuthenticated,login,logout,username,SetUName} = useAuth();

  logout();

  return (
    <div>
          
    </div>
  );
}
  

export default Logout;
