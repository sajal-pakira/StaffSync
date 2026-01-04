import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Employee />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
};

export default App;
