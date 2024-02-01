import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  useEffect(() => {
    const checkUser = () => {
      if (token && token === "NO") {
        navigate("/login");
      }
    };
    checkUser();
  }, [token]);
  return <>{children}</>;
}
