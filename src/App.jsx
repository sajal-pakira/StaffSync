import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";
import Signup from "./components/Auth/Signup";
import CreateTask from "./pages/CreateTask";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Employee />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </>
  );
};

export default App;
