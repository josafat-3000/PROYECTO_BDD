import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

export const ProtectedRoute = () => {
  const { authState } = useContext(AuthContext);
  if (!authState.status) {
    console.log("entra if")
    return <Navigate to="/login" replace />;
  }
  else {
    console.log("else");
    return <Outlet />;
}
};

export const ProtectedRoutesProfesor = () => {
  const { authState } = useContext(AuthContext);
  if (authState.rol==2||authState.rol==1) {
    return <Outlet />;
  }else{
  
  return <Navigate to="/home" replace />;
}
  
};

export const ProtectedRoutesAdmin = () => {
  const { authState } = useContext(AuthContext);
  if (authState.rol===1) {
    return <Outlet />;
    
  }else{
    return <Navigate to="/home" replace />;
}
  
};