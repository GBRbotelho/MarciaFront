import React, { createContext, useContext, useEffect, useState } from "react";
import { useGet, usePost } from "../../../hooks/useRequest";

const SystemContext = createContext();

export const useSystem = () => {
  return useContext(SystemContext);
};

export const SystemProvider = ({ children }) => {
  const [system, setSystem] = useState({});

  useEffect(() => {
    const getDataSystem = async () => {
      const pathSegments = location.pathname.split("/");
      const response = await useGet(`api/companies/${pathSegments[2]}`);
      setSystem(response.data);
    };
    getDataSystem();
  }, []);

  useEffect(() => {
    console.log(system);
  }, [system]);

  return <SystemContext.Provider value={{}}>{children}</SystemContext.Provider>;
};
