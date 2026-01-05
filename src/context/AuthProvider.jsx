import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <div>
      <AuthContext.Provider value={"sajal"}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
