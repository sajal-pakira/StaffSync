import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";
import Signup from "./components/Auth/Signup";
import CreateTask from "./pages/CreateTask";
import AllTasks from "./components/TaskList/AllTasks";
import { useEffect } from "react";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Employee />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/create-task" element={<CreateTask />} />
        <Route path="/admin/tasks" element={<AllTasks />} />
      </Routes>
    </>
  );
};

export default App;
