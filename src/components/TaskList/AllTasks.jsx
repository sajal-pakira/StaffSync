const AllTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Prepare monthly report",
      assignee: "Maya",
      due: "Jan 12",
      priority: "Normal",
      status: "Open",
    },
    {
      id: 2,
      title: "Sync payroll data",
      assignee: "Alex",
      due: "Jan 10",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Resolve ticket #455",
      assignee: "Priya",
      due: "Jan 9",
      priority: "High",
      status: "Overdue",
    },
    {
      id: 4,
      title: "Onboard contractor",
      assignee: "Jordan",
      due: "Jan 18",
      priority: "Low",
      status: "Completed",
    },
  ];

  const statusClass = (s) => {
    if (s === "Completed") return "bg-emerald-600 text-white";
    if (s === "In Progress") return "bg-amber-500 text-slate-900";
    if (s === "Overdue") return "bg-red-600 text-white";
    return "bg-slate-600 text-slate-100";
  };

  return (
    <div className="min-h-screen bg-[#070707]">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-slate-100">All tasks</h2>
            <p className="text-sm text-slate-400 mt-1">
              Overview of all tasks across teams
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              placeholder="Search tasks or assignees"
              className="px-3 py-2 rounded-lg bg-slate-700 text-slate-100 border border-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium">
              New task
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
            <div className="text-sm text-slate-400">Total tasks</div>
            <div className="mt-2 text-2xl font-semibold text-slate-100">
              {tasks.length}
            </div>
          </div>

          <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
            <div className="text-sm text-slate-400">Open</div>
            <div className="mt-2 text-2xl font-semibold text-slate-100">
              {tasks.filter((t) => t.status === "Open").length}
            </div>
          </div>

          <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
            <div className="text-sm text-slate-400">Overdue</div>
            <div className="mt-2 text-2xl font-semibold text-slate-100">
              {tasks.filter((t) => t.status === "Overdue").length}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
          <div className="overflow-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-sm text-slate-400 text-left">
                  <th className="pb-3">Task</th>
                  <th className="pb-3">Assignee</th>
                  <th className="pb-3">Due</th>
                  <th className="pb-3">Priority</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">&nbsp;</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((t) => (
                  <tr key={t.id} className="border-t border-slate-700">
                    <td className="py-3">
                      <div className="text-slate-100 font-medium">
                        {t.title}
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-slate-100">
                          {t.assignee}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-slate-300">{t.due}</td>
                    <td className="py-3 text-sm">
                      <span className="px-2 py-1 rounded-full bg-slate-700 text-slate-100 text-xs">
                        {t.priority}
                      </span>
                    </td>
                    <td className="py-3">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${statusClass(
                          t.status
                        )}`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button className="text-sm text-emerald-400 hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
