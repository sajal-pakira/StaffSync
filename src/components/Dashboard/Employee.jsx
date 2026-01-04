import Header from "../other/Header";
import AllTasks from "../TaskList/AllTasks";
import TaskList from "../TaskList/TaskList";

const Employee = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <AllTasks />
      <TaskList />
    </div>
  );
};

export default Employee;
