import React, { createContext, useContext, useState, useEffect } from "react";
import { useGet, usePost } from "../hooks/useRequest";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("null");
  const [user, setUser] = useState("null");

  //   useEffect(() => {
  //     const checkToken = async () => {
  //       const tokenRenewed = await verifyToken();
  //       if (!tokenRenewed) {
  //         setToken("NO");
  //         localStorage.removeItem("token");
  //       }
  //       if (tokenRenewed.error) {
  //         setToken("NO");
  //         localStorage.removeItem("token");
  //       }

  //       if (!tokenRenewed.error) {
  //         setToken(tokenRenewed.token);
  //         const userData = await useGetUserData(tokenRenewed.token);
  //         setUser(userData);
  //       }
  //       setIsLoading(false);
  //     };

  //     checkToken();
  //   }, [token]);

  const getDataUser = async (token) => {
    try {
      const response = await useGet("api/users/token");
      if (response.success === true) {
        setUser(response.data);
      }
      return response;
    } catch (error) {
      console.error("Erro ao buscar dados do usuario:", error);
      setUser(false);
      return { success: false, message: "Erro ao buscar dados do Usuario" };
    }
  };

  const login = async (userData) => {
    try {
      const response = await usePost("api/users/login", userData);
      if (response.success === true) {
        localStorage.setItem("token", response.data);
        setToken(true);
      }
      return response;
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setToken(false);
      return { success: false, message: "Erro ao realizar login" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        getDataUser,
        token,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
