import { Link } from "react-router-dom";
import Header from "../other/Header";

const Admin = () => {
  const stats = [
    { id: 1, label: "Total users", value: 128, change: "+4%" },
    { id: 2, label: "Active tasks", value: 42, change: "-1%" },
    { id: 3, label: "Completed", value: 324, change: "+12%" },
  ];

  const recentTasks = [
    {
      id: 1,
      title: "Onboard new hires",
      assignee: "Maya",
      due: "Jan 8",
      status: "Completed",
    },
    {
      id: 2,
      title: "Sync payroll data",
      assignee: "Alex",
      due: "Jan 10",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Submit reports",
      assignee: "Jordan",
      due: "Jan 12",
      status: "Pending",
    },
    {
      id: 4,
      title: "Resolve ticket #455",
      assignee: "Priya",
      due: "Jan 9",
      status: "Overdue",
    },
  ];

  const statusColor = (s) => {
    switch (s) {
      case "Completed":
        return "bg-emerald-600 text-white";
      case "In Progress":
        return "bg-amber-500 text-slate-900";
      case "Pending":
        return "bg-slate-600 text-slate-100";
      case "Overdue":
        return "bg-red-600 text-white";
      default:
        return "bg-slate-600 text-slate-100";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 hidden md:block">
            <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4 space-y-6">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-bold">
                  SS
                </div>
                <div className="mt-3">
                  <div className="text-sm text-slate-300">StaffSync</div>
                  <div className="text-xs text-slate-400">Admin panel</div>
                </div>
              </div>

              <nav className="space-y-2">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400"
                  href="#"
                >
                  Dashboard
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700"
                  href="#"
                >
                  Users
                </a>

                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700"
                  to={"/admin/tasks"}
                >
                  Tasks
                </Link>

                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700"
                  href="#"
                >
                  Reports
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700"
                  href="#"
                >
                  Settings
                </a>
              </nav>

              <div className="pt-4 border-t border-slate-700 text-sm text-slate-400">
                Version 1.0.0
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1">
            <Header />

            <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.id}
                  className="rounded-xl bg-slate-800/60 border border-slate-700 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400">{s.label}</div>
                      <div className="mt-2 text-2xl font-semibold">
                        {s.value}
                      </div>
                    </div>
                    <div className="text-sm text-slate-300">{s.change}</div>
                  </div>
                </div>
              ))}
            </section>

            <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Recent tasks</h3>
                  <button className="text-sm text-emerald-400 hover:underline">
                    View all
                  </button>
                </div>

                <div className="mt-4 overflow-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-sm text-slate-400">
                        <th className="text-left pb-2">Task</th>
                        <th className="text-left pb-2">Assignee</th>
                        <th className="text-left pb-2">Due</th>
                        <th className="text-left pb-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="mt-2">
                      {recentTasks.map((t) => (
                        <tr key={t.id} className="border-t border-slate-700">
                          <td className="py-3 text-sm">{t.title}</td>
                          <td className="py-3 text-sm text-slate-300">
                            {t.assignee}
                          </td>
                          <td className="py-3 text-sm text-slate-300">
                            {t.due}
                          </td>
                          <td className="py-3 text-sm">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${statusColor(
                                t.status
                              )}`}
                            >
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Team activity</h3>
                    <div className="text-sm text-slate-400">Weekly</div>
                  </div>

                  <div className="mt-4 h-36 flex items-end gap-3">
                    <div
                      className="w-6 bg-emerald-500 rounded-t-md"
                      style={{ height: "70%" }}
                    />
                    <div
                      className="w-6 bg-emerald-400 rounded-t-md"
                      style={{ height: "50%" }}
                    />
                    <div
                      className="w-6 bg-emerald-300 rounded-t-md"
                      style={{ height: "30%" }}
                    />
                    <div
                      className="w-6 bg-emerald-500 rounded-t-md"
                      style={{ height: "80%" }}
                    />
                    <div
                      className="w-6 bg-emerald-400 rounded-t-md"
                      style={{ height: "40%" }}
                    />
                  </div>

                  <div className="mt-4 text-sm text-slate-400">
                    Activity is stable compared to last week.
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-6">
                  <h3 className="text-lg font-medium mb-3">Quick actions</h3>
                  <div className="flex flex-col gap-3">
                    <Link to={"/admin/create-task"}>
                      <button className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium">
                        Create task
                      </button>
                    </Link>

                    <button className="w-full py-2 rounded-lg border border-slate-700 hover:bg-slate-700">
                      Invite user
                    </button>
                    <button className="w-full py-2 rounded-lg border border-slate-700 hover:bg-slate-700">
                      Export CSV
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <footer className="mt-8 text-sm text-slate-500">
              © {new Date().getFullYear()} StaffSync — All rights reserved.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
