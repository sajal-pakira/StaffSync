import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  return <div>{children}</div>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
