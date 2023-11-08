import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { LOGIN_SUCCESS } from "../../Constant.js";
import { decryptObject, encryptObject } from "../../utils/authEncrypt";
import { redirect } from "react-router-dom";

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const authUser = localStorage.getItem("_authuser");
  const decryptAuth = authUser ? decryptObject(authUser) : {};
  const [AuthUser, setAuthUser] = useState(decryptAuth)

  const updateAuthUser = (user) => {
    toast.success(LOGIN_SUCCESS);
    setAuthUser(user);
    const encryptAuth = encryptObject(user);
    localStorage.setItem("_authuser", encryptAuth);
  };
  const userSignOut = () => {
    setAuthUser({});
    localStorage.removeItem("_authuser");
  };

  const isLoggedInUser = () => {
    console.log("user logged in ")
    if(!Object.keys(AuthUser).length > 0){
      return redirect('/admin');
    }
    return null;
  };

  const value = { userSignOut, AuthUser, updateAuthUser, isLoggedInUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
