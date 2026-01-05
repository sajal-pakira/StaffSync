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
  const authData = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
  }, []);

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.adminData.find((e) => e.email == email && e.password == password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employeeData.find(
        (e) => e.email == email && e.password == password
      )
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Invalid Credentials!!");
    }
  };

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
