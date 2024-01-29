import React, { createContext, useContext, useState, useEffect } from "react";

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

  const login = async (userData) => {
    try {
      const response = await usePost("api/users/login", userData);
      if (response.success === true) {
        localStorage.setItem("token", response.data);
      }
      return response;
    } catch (error) {
      console.error("Erro ao realizar login:", error);
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
        token,
        user,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
