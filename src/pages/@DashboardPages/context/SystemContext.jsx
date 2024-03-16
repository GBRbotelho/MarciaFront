import React, { createContext, useContext, useEffect, useState } from "react";
import { useGet, usePost } from "../../../hooks/useRequest";

const SystemContext = createContext();

export const useSystem = () => {
  return useContext(SystemContext);
};

export const SystemProvider = ({ children }) => {
  const pathSegments = location.pathname.split("/");

  //Data
  const [system, setSystem] = useState({});
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getDataSystem = async () => {
      const response = await useGet(`api/companies/${pathSegments[2]}`);
      setSystem(response.data);
    };
    getDataSystem();
  }, []);

  useEffect(() => {
    console.log(clients);
  }, [clients]);

  const reload = async (setState, subroute, db = "@system") => {
    const data = await useGet(subroute, db);
    setState(data.data);
  };

  return (
    <SystemContext.Provider
      value={{
        system,
        setSystem,
        clients,
        setClients,
        reload,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
