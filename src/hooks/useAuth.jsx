import { useContext } from "react";
import  { AuthContext } from "../store/provider/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
