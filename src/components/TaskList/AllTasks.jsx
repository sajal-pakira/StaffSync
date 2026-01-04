const AllTasks = () => {
  return (
    <div className="w-full flex justify-between mt-10 gap-5">
      <div className="py-6 px-9 w-[45%] bg-red-400 rounded-xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-blue-400 rounded-xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-green-400 rounded-xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="py-6 px-9 w-[45%] bg-yellow-300 rounded-xl ">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default AllTasks;
