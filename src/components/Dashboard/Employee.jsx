import Header from "../other/Header";
import TaskList from "../TaskList/TaskList";
import TaskTypes from "../TaskList/TaskTypes";

const Employee = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskTypes />
      <TaskList />
    </div>
  );
};

export default Employee;
