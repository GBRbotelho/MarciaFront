import React, { createContext, useContext, useState, useEffect } from "react";
import { useGet, usePost } from "../hooks/useRequest";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("null");
  const [user, setUser] = useState("null");

  useEffect(() => {
    const checkToken = async () => {
      const localToken = localStorage.getItem("token");

      const tokenRenewed = await usePost("api/users/refresh", {
        token: localToken,
      });

      if (tokenRenewed.success === false) {
        localStorage.removeItem("token");
        setToken("NO");
        setUser("NO");
      }

      if (tokenRenewed.success) {
        setToken("YES");
        localStorage.setItem("token");
        const userData = await getDataUser();
        setUser(userData);
      }
    };

    checkToken();
  }, [token]);

  const getDataUser = async () => {
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
        setToken("YES");
      }
      return response;
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setToken("NO");
      return { success: false, message: "Erro ao realizar login" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("NO");
    setUser("NO");
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
