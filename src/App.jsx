import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";
import Signup from "./components/Auth/Signup";
import CreateTask from "./pages/CreateTask";
import AllTasks from "./components/TaskList/AllTasks";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials!!");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? <Admin /> : <Employee />}
      {/* <Routes>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Employee />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/create-task" element={<CreateTask />} />
        <Route path="/admin/tasks" element={<AllTasks />} />
      </Routes> */}
    </>
  );
};

export default App;
