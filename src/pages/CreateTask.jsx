import { useState } from "react";
import { Link } from "react-router-dom";

const CreateTask = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Form submitted successfuly");
  };

  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="min-h-screen bg-black">
      <div className="text-black max-w-7xl mx-auto p-5">
        {/* Page header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="w-2/3">
            <nav className="text-sm text-slate-400 mb-2">
              <Link to="/admin" className="hover:underline text-slate-400">
                Dashboard
              </Link>
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-slate-100">Create task</span>
            </nav>
            <div className="flex justify-center items-center w-full">
              <h1 className="text-3xl font-semibold text-slate-100">
                Create Task
              </h1>
            </div>
          </div>

          <div className="flex gap-3">
            {/* <button className="py-2 px-4 rounded-lg border border-slate-700 hover:bg-slate-700 text-slate-100">
              Cancel
            </button> */}
            <button className="py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium">
              Save draft
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main form */}
          <main className="lg:col-span-2 rounded-xl bg-slate-800/60 border border-slate-700 p-6">
            <h2 className="text-xl font-medium text-slate-100">Task details</h2>

            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="mt-5 grid grid-cols-1 gap-4"
            >
              <div>
                <label className="text-md text-slate-300 mb-1 block">
                  Title
                </label>
                <input
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="e.g. Prepare monthly report"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-md text-slate-300 mb-1 block">
                    Assign To
                  </label>
                  {/* <select className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    <option>-- Select --</option>
                    <option>Maya</option>
                    <option>Alex</option>
                    <option>Jordan</option>
                    <option>Priya</option>
                  </select> */}
                  <input
                    name="assignee"
                    onChange={(e) => {
                      setAssignee(e.target.value);
                    }}
                    value={assignee}
                    placeholder="Enter Assignee"
                    className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label className="text-md text-slate-300 mb-1 block">
                    Due date
                  </label>
                  <input
                    name="due"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    value={date}
                    type="date"
                    placeholder=""
                    className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label className="text-md text-slate-300 mb-1 block">
                    Priority
                  </label>
                  <select
                    name="priority"
                    className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <option>Normal</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>

                {/* <div>
                  <label className="text-sm text-slate-300 mb-1 block">
                    Status
                  </label>
                  <select className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div> */}
              </div>

              <div>
                <label className="text-md text-slate-300 mb-1 block">
                  Details
                </label>
                <textarea
                  name="details"
                  rows={2}
                  placeholder="Notes, steps, links, and acceptance criteria"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium"
              >
                Create task
              </button>
            </form>
          </main>

          {/* Side panel */}
          <aside className="rounded-xl bg-slate-800/60 border border-slate-700 p-6 text-md text-slate-400">
            <h4 className="text-slate-100 font-medium">Preview</h4>
            <div className="mt-4 p-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Title</div>
                  <div className="mt-1 font-semibold">{title}</div>
                </div>
                <div className="text-xs text-slate-400">{date}</div>
              </div>

              <div className="mt-3 text-sm text-slate-300">
                Assignee:{" "}
                <span className="text-slate-100 font-medium">{assignee}</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="px-2 py-1 rounded-full bg-emerald-500 text-slate-900 text-xs">
                  Normal
                </span>
                {/* <span className="px-2 py-1 rounded-full bg-slate-600 text-slate-100 text-xs">
                  Open
                </span> */}
              </div>

              <div className="mt-4 text-sm text-slate-400">Tips</div>
              <ul className="list-disc ml-5 mt-2 text-sm text-slate-400">
                <li>Keep titles short and actionable</li>
                <li>Assign an owner to ensure follow-up</li>
                <li>Use the details section for steps and links</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
