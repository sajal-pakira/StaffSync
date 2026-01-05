import PropTypes from 'prop-types';

const AuthContext = ({ children }) => {
  return <div>{children}</div>;
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
